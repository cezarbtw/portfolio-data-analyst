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

    // Navigate to Case Study 01 (TCM-GO)
    await pageDesktop.goto('http://localhost:4175/projetos/tcmgo-portal-cidadao', { waitUntil: 'networkidle' });
    await pageDesktop.waitForTimeout(600);

    // Verify reduced header
    const backLink = await pageDesktop.$('header a[href="/#projetos"]');
    if (backLink) {
      const text = await backLink.innerText();
      results.checks.push(`Reduced header back link found: "${text.trim()}"`);
    } else {
      results.errors.push('Reduced header back link not found');
    }

    // Verify title and metadata
    const pageTitle = await pageDesktop.$eval('h1', el => el.innerText);
    results.checks.push(`Case study title: "${pageTitle}"`);

    // Verify 4 fixed sections exist
    const sections = await pageDesktop.$$eval('main section', els =>
      els.map(el => ({
        tag: el.querySelector('p')?.innerText.trim(),
        heading: el.querySelector('h2')?.innerText.trim()
      }))
    );
    results.checks.push(`Found ${sections.length} structured sections`);
    sections.forEach(s => {
      if (s.tag && s.heading) {
        results.checks.push(`Section: [${s.tag}] ${s.heading}`);
      }
    });

    // Verify external link
    const demoLink = await pageDesktop.$('a[href="https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/"]');
    if (demoLink) {
      results.checks.push('Portal do Cidadão external link verified');
    } else {
      results.errors.push('Portal do Cidadão external link missing');
    }

    // Switch screen tab (e.g. Esgoto)
    const esgotoButton = await pageDesktop.$('button:has-text("Esgoto")');
    if (esgotoButton) {
      await esgotoButton.click();
      await pageDesktop.waitForTimeout(300);
      const imgSrc = await pageDesktop.$eval('img[alt="Dimensão Esgoto"]', el => el.src);
      results.checks.push(`Switched tab to Esgoto, image source: ${imgSrc}`);
    }

    // Capture desktop case study screenshot
    const caseStudyDesktopPath = path.join(artifactsDir, 'fase4_case_study_desktop.png');
    await pageDesktop.screenshot({ path: caseStudyDesktopPath });
    results.checks.push(`Desktop case study screenshot saved: ${caseStudyDesktopPath}`);

    // Click image to trigger Lightbox
    const imageButton = await pageDesktop.$('button[title="Clique para ampliar a visualização"]');
    if (imageButton) {
      await imageButton.click();
      await pageDesktop.waitForTimeout(400);

      // Verify lightbox opened
      const lightbox = await pageDesktop.$('div[role="dialog"][aria-modal="true"]');
      if (lightbox) {
        results.checks.push('Lightbox dialog opened successfully');
        const lightboxImg = await lightbox.$('img');
        const isImgVisible = lightboxImg ? await lightboxImg.isVisible() : false;
        results.checks.push(`Lightbox image visible: ${isImgVisible}`);

        // Capture lightbox screenshot
        const lightboxPath = path.join(artifactsDir, 'fase4_lightbox_desktop.png');
        await pageDesktop.screenshot({ path: lightboxPath });
        results.checks.push(`Lightbox screenshot saved: ${lightboxPath}`);

        // Test ESC key closes lightbox
        await pageDesktop.keyboard.press('Escape');
        await pageDesktop.waitForTimeout(400);
        const lightboxAfterEsc = await pageDesktop.$('div[role="dialog"]');
        if (!lightboxAfterEsc) {
          results.checks.push('Lightbox closed cleanly with ESC key');
        } else {
          results.errors.push('Lightbox failed to close with ESC key');
        }
      } else {
        results.errors.push('Lightbox failed to open when image clicked');
      }
    }

    // Test Project 02 (without image, with [IMAGEM] technical placeholder)
    await pageDesktop.goto('http://localhost:4175/projetos/tcmgo-ner-validation', { waitUntil: 'networkidle' });
    await pageDesktop.waitForTimeout(500);

    const placeholderFound = await pageDesktop.evaluate(() => {
      const el = document.querySelector('span.text-\\[var\\(--accent\\)\\]');
      return el ? el.innerText.includes('[IMAGEM]') : false;
    });
    results.checks.push(`Project 02 [IMAGEM] placeholder present: ${placeholderFound}`);

    const placeholderPath = path.join(artifactsDir, 'fase4_placeholder_desktop.png');
    await pageDesktop.screenshot({ path: placeholderPath });
    results.checks.push(`Placeholder desktop screenshot saved: ${placeholderPath}`);

    // Test back button navigation
    const backBtn = await pageDesktop.$('header a[href="/#projetos"]');
    if (backBtn) {
      await backBtn.click();
      await pageDesktop.waitForTimeout(500);
      const currentUrl = pageDesktop.url();
      results.checks.push(`Navigated back to: ${currentUrl}`);
    }

    // Verify desktop horizontal scroll
    const desktopOverflow = await pageDesktop.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    if (desktopOverflow.scrollWidth <= desktopOverflow.clientWidth) {
      results.checks.push(`Desktop horizontal scroll: OK (${desktopOverflow.scrollWidth}px <= ${desktopOverflow.clientWidth}px)`);
    } else {
      results.errors.push(`Desktop horizontal overflow!`);
    }

    await contextDesktop.close();

    /* ─── 2. Mobile Test (360x780) ─── */
    const contextMobile = await browser.newContext({
      viewport: { width: 360, height: 780 }
    });
    const pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:4175/projetos/tcmgo-portal-cidadao', { waitUntil: 'networkidle' });
    await pageMobile.waitForTimeout(800);

    // Check mobile horizontal overflow
    const mobileOverflow = await pageMobile.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      bodyClientWidth: document.body.clientWidth
    }));

    if (mobileOverflow.scrollWidth <= 360 && mobileOverflow.bodyScrollWidth <= 360) {
      results.checks.push(`Mobile 360px overflow: OK (${mobileOverflow.scrollWidth}px / 360px)`);
    } else {
      results.errors.push(`Mobile horizontal overflow on Case Study! doc: ${mobileOverflow.scrollWidth}px, body: ${mobileOverflow.bodyScrollWidth}px`);
    }

    // Capture mobile full page screenshot
    const mobileFullPath = path.join(artifactsDir, 'fase4_case_study_mobile.png');
    await pageMobile.screenshot({ path: mobileFullPath, fullPage: true });
    results.checks.push(`Mobile full-page screenshot saved: ${mobileFullPath}`);

    await contextMobile.close();

    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error('Playwright verification failed:', err);
  } finally {
    await browser.close();
  }
}

run();
