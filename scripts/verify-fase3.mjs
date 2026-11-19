import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots';
if (!fs.existsSync(artifactsDir)) {
  fs.mkdirSync(artifactsDir, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = {
    checks: [],
    errors: []
  };

  try {
    /* ─── 1. Desktop Test (1280x900) ─── */
    const contextDesktop = await browser.newContext({
      viewport: { width: 1280, height: 900 }
    });
    const pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageDesktop.waitForTimeout(1000);

    // Check Projects section
    const projectsSection = await pageDesktop.$('#projetos');
    if (!projectsSection) {
      results.errors.push('Section #projetos not found');
    } else {
      results.checks.push('Section #projetos exists');
    }

    // Check project count
    const projectLinks = await pageDesktop.$$('#projetos a[href^="/projetos/"]');
    if (projectLinks.length === 6) {
      results.checks.push(`Found exactly 6 project links`);
    } else {
      results.errors.push(`Expected 6 project links, found ${projectLinks.length}`);
    }

    // Scroll to projects section
    await pageDesktop.evaluate(() => {
      document.querySelector('#projetos')?.scrollIntoView({ behavior: 'instant' });
    });
    await pageDesktop.waitForTimeout(500);

    // Hover over the first project (TCM-GO)
    const firstProject = projectLinks[0];
    const firstBox = await firstProject.boundingBox();
    if (firstBox) {
      await pageDesktop.mouse.move(firstBox.x + firstBox.width / 2, firstBox.y + firstBox.height / 2);
      await pageDesktop.waitForTimeout(400);

      // Verify hover styles
      const bgColor = await firstProject.evaluate((el) => window.getComputedStyle(el).backgroundColor);
      results.checks.push(`Project 01 hover backgroundColor: ${bgColor}`);

      // Verify cursor preview appears
      const preview = await pageDesktop.$('div[style*="position: fixed"], div.fixed.pointer-events-none');
      if (preview) {
        const isVisible = await preview.isVisible();
        results.checks.push(`Cursor image preview visible on hover: ${isVisible}`);
      } else {
        results.errors.push('Cursor image preview container not found in DOM');
      }

      // Capture desktop screenshot with hover
      const desktopHoverPath = path.join(artifactsDir, 'fase3_desktop_hover.png');
      await pageDesktop.screenshot({ path: desktopHoverPath });
      results.checks.push(`Desktop hover screenshot saved: ${desktopHoverPath}`);
    }

    // Hover over second project (NER, without image)
    const secondProject = projectLinks[1];
    const secondBox = await secondProject.boundingBox();
    if (secondBox) {
      await pageDesktop.mouse.move(secondBox.x + secondBox.width / 2, secondBox.y + secondBox.height / 2);
      await pageDesktop.waitForTimeout(400);

      const placeholderText = await pageDesktop.evaluate(() => {
        const p = document.querySelector('div.fixed.pointer-events-none');
        return p ? p.innerText : null;
      });
      results.checks.push(`Project 02 cursor preview text: "${placeholderText?.replace(/\s+/g, ' ').trim()}"`);
    }

    // Check desktop overflow
    const desktopOverflow = await pageDesktop.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    if (desktopOverflow.scrollWidth <= desktopOverflow.clientWidth) {
      results.checks.push(`Desktop horizontal scroll: OK (${desktopOverflow.scrollWidth}px <= ${desktopOverflow.clientWidth}px)`);
    } else {
      results.errors.push(`Desktop horizontal overflow! scrollWidth ${desktopOverflow.scrollWidth} > clientWidth ${desktopOverflow.clientWidth}`);
    }

    // Full page desktop screenshot
    const desktopFullPath = path.join(artifactsDir, 'fase3_desktop_full.png');
    await pageDesktop.screenshot({ path: desktopFullPath, fullPage: true });
    results.checks.push(`Desktop full-page screenshot saved: ${desktopFullPath}`);
    await contextDesktop.close();

    /* ─── 2. Mobile Test (360x780) ─── */
    const contextMobile = await browser.newContext({
      viewport: { width: 360, height: 780 }
    });
    const pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageMobile.waitForTimeout(1000);

    // Scroll to projects
    await pageMobile.evaluate(() => {
      document.querySelector('#projetos')?.scrollIntoView({ behavior: 'instant' });
    });
    await pageMobile.waitForTimeout(500);

    // Check mobile image / placeholder visibility inside rows
    const mobilePlaceholders = await pageMobile.evaluate(() => {
      const items = Array.from(document.querySelectorAll('#projetos a[href^="/projetos/"]'));
      return items.map((item) => {
        const img = item.querySelector('img');
        const placeholder = item.querySelector('.block.lg\\:hidden');
        return {
          hasImg: !!img,
          hasPlaceholderBlock: !!placeholder,
          textSnippet: item.querySelector('h3')?.innerText
        };
      });
    });
    results.checks.push(`Mobile project items inspected: ${mobilePlaceholders.length} items`);
    mobilePlaceholders.forEach((it, idx) => {
      results.checks.push(`Item ${idx + 1}: img=${it.hasImg}, placeholderBlock=${it.hasPlaceholderBlock}`);
    });

    // Check mobile overflow
    const mobileOverflow = await pageMobile.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      bodyClientWidth: document.body.clientWidth
    }));

    if (mobileOverflow.scrollWidth <= 360 && mobileOverflow.bodyScrollWidth <= 360) {
      results.checks.push(`Mobile 360px overflow: OK (${mobileOverflow.scrollWidth}px / 360px)`);
    } else {
      results.errors.push(`Mobile horizontal overflow! doc: ${mobileOverflow.scrollWidth}px, body: ${mobileOverflow.bodyScrollWidth}px (viewport 360px)`);
    }

    // Capture mobile full page screenshot
    const mobileFullPath = path.join(artifactsDir, 'fase3_mobile_full.png');
    await pageMobile.screenshot({ path: mobileFullPath, fullPage: true });
    results.checks.push(`Mobile full-page screenshot saved: ${mobileFullPath}`);

    // Capture mobile projects section screenshot
    const mobileSection = await pageMobile.$('#projetos');
    if (mobileSection) {
      const mobileProjectsPath = path.join(artifactsDir, 'fase3_mobile_projects.png');
      await mobileSection.screenshot({ path: mobileProjectsPath });
      results.checks.push(`Mobile projects section screenshot saved: ${mobileProjectsPath}`);
    }

    await contextMobile.close();

    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error('Playwright verification failed:', err);
  } finally {
    await browser.close();
  }
}

run();
