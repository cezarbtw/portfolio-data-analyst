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

    // 1. Verify Experiência
    const expSection = await pageDesktop.$('#experiencia');
    if (expSection) {
      results.checks.push('Section #experiencia exists');
      const expTitle = await pageDesktop.$eval('#experiencia h2', el => el.innerText);
      results.checks.push(`Experiência title: "${expTitle}"`);
      const expItemsCount = await pageDesktop.$$eval('#experiencia .lg\\:col-span-8 > div', els => els.length);
      results.checks.push(`Found ${expItemsCount} experience items`);

      // Scroll and capture Experiência
      await pageDesktop.evaluate(() => document.querySelector('#experiencia')?.scrollIntoView({ behavior: 'instant' }));
      await pageDesktop.waitForTimeout(400);
      const expShotPath = path.join(artifactsDir, 'fase5_experiencia_desktop.png');
      await expSection.screenshot({ path: expShotPath });
      results.checks.push(`Experiência screenshot saved: ${expShotPath}`);
    } else {
      results.errors.push('Section #experiencia not found');
    }

    // 2. Verify Competências
    const skillsSection = await pageDesktop.$('#competencias');
    if (skillsSection) {
      results.checks.push('Section #competencias exists');
      const skillsCategories = await pageDesktop.$$eval('#competencias h3', els => els.map(el => el.innerText.trim()));
      results.checks.push(`Competências categories: ${skillsCategories.join(', ')}`);

      // Scroll and capture Competências
      await pageDesktop.evaluate(() => document.querySelector('#competencias')?.scrollIntoView({ behavior: 'instant' }));
      await pageDesktop.waitForTimeout(400);
      const skillsShotPath = path.join(artifactsDir, 'fase5_competencias_desktop.png');
      await skillsSection.screenshot({ path: skillsShotPath });
      results.checks.push(`Competências screenshot saved: ${skillsShotPath}`);
    } else {
      results.errors.push('Section #competencias not found');
    }

    // 3. Verify Contato
    const contactSection = await pageDesktop.$('#contato');
    if (contactSection) {
      results.checks.push('Section #contato exists');
      const contactBg = await contactSection.evaluate(el => window.getComputedStyle(el).backgroundColor);
      results.checks.push(`Contato background: ${contactBg} (should match --accent rgb(217, 65, 30))`);

      const emailText = await pageDesktop.$eval('#contato a[href^="mailto:"]', el => el.innerText);
      results.checks.push(`Contato email: "${emailText}"`);

      const linksCount = await pageDesktop.$$eval('#contato a', els => els.length);
      results.checks.push(`Contato total links (email + external): ${linksCount}`);

      // Scroll and capture Contato + Footer
      await pageDesktop.evaluate(() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'instant' }));
      await pageDesktop.waitForTimeout(400);
      const contactShotPath = path.join(artifactsDir, 'fase5_contato_desktop.png');
      await contactSection.screenshot({ path: contactShotPath });
      results.checks.push(`Contato screenshot saved: ${contactShotPath}`);
    } else {
      results.errors.push('Section #contato not found');
    }

    // 4. Verify Footer
    const footer = await pageDesktop.$('footer');
    if (footer) {
      const footerText = await footer.innerText();
      results.checks.push(`Footer content: "${footerText.replace(/\n/g, ' ')}"`);
      if (footerText.includes('©') && footerText.toLowerCase().includes('goiás, brasil')) {
        results.checks.push('Footer contains required copyright and location');
      } else {
        results.errors.push('Footer missing required copyright or location');
      }
    }

    // Desktop horizontal scroll check
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
    await pageMobile.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageMobile.waitForTimeout(1000);

    // Mobile horizontal overflow check
    const mobileOverflow = await pageMobile.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      bodyClientWidth: document.body.clientWidth
    }));

    if (mobileOverflow.scrollWidth <= 360 && mobileOverflow.bodyScrollWidth <= 360) {
      results.checks.push(`Mobile 360px overflow: OK (${mobileOverflow.scrollWidth}px / 360px)`);
    } else {
      results.errors.push(`Mobile horizontal overflow! doc: ${mobileOverflow.scrollWidth}px, body: ${mobileOverflow.bodyScrollWidth}px`);
    }

    // Capture mobile full page screenshot
    const mobileFullPath = path.join(artifactsDir, 'fase5_mobile_full.png');
    await pageMobile.screenshot({ path: mobileFullPath, fullPage: true });
    results.checks.push(`Mobile full-page screenshot saved: ${mobileFullPath}`);

    // Capture mobile contact screenshot
    await pageMobile.evaluate(() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'instant' }));
    await pageMobile.waitForTimeout(300);
    const mobileContactPath = path.join(artifactsDir, 'fase5_mobile_contato.png');
    const mobileContactSection = await pageMobile.$('#contato');
    if (mobileContactSection) {
      await mobileContactSection.screenshot({ path: mobileContactPath });
      results.checks.push(`Mobile contato screenshot saved: ${mobileContactPath}`);
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
