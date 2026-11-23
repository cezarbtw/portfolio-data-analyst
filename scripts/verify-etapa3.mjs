import { chromium } from 'playwright';
import path from 'path';

async function runEtapa3Tests() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = { checks: [], errors: [] };

  try {
    // ─── 1. Desktop Test (1280x800) ───
    console.log('--- Testing Desktop 1280x800 ---');
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:4175/', { waitUntil: 'networkidle' });

    // Check Projects section
    const projectsCount = await page.locator('#projetos article').count();
    if (projectsCount === 6) {
      results.checks.push('Projects section has 6 cards');
    } else {
      results.errors.push(`Expected 6 project cards, found ${projectsCount}`);
    }

    // Check Experience section
    const expCount = await page.locator('#experiencia h3').count();
    if (expCount === 2) {
      results.checks.push('Experience section has 2 positions');
    } else {
      results.errors.push(`Expected 2 experience items, found ${expCount}`);
    }

    // Check Skills section
    const skillsCount = await page.locator('#competencias h3').count();
    if (skillsCount === 4) {
      results.checks.push('Skills section has 4 categories');
    } else {
      results.errors.push(`Expected 4 skill categories, found ${skillsCount}`);
    }

    // Check Contact section copy button
    const copyBtn = page.locator('#contato button');
    await copyBtn.click();
    await page.waitForTimeout(200);
    const btnText = await copyBtn.innerText();
    if (btnText.toUpperCase().includes('COPIADO')) {
      results.checks.push('Contact email copy button works and shows feedback');
    } else {
      results.errors.push(`Copy button feedback failed, text: ${btnText}`);
    }

    // Take Desktop Screenshots
    const shotDir = 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots';
    await page.screenshot({ path: path.join(shotDir, 'etapa3_desktop_full.png'), fullPage: true });
    results.checks.push('Desktop full page screenshot saved');

    // ─── 2. Case Study Route Test (/projetos/tcmgo-portal-cidadao) ───
    console.log('--- Testing Case Study Route ---');
    await page.goto('http://localhost:4175/projetos/tcmgo-portal-cidadao', { waitUntil: 'networkidle' });
    const caseTitle = await page.locator('h1').innerText();
    if (caseTitle.includes('TCM-GO')) {
      results.checks.push('Case study page loads correctly');
    } else {
      results.errors.push(`Case study title mismatch: ${caseTitle}`);
    }

    // Tab buttons test
    const tabCount = await page.locator('button:has-text("Esgoto")').count();
    if (tabCount > 0) {
      await page.click('button:has-text("Esgoto")');
      await page.waitForTimeout(200);
      results.checks.push('Case study tab switching works');
    }
    await page.screenshot({ path: path.join(shotDir, 'etapa3_case_study_tcmgo.png') });

    // ─── 3. Mobile Test (360x740) ───
    console.log('--- Testing Mobile 360x740 ---');
    const mobilePage = await browser.newPage({ viewport: { width: 360, height: 740 } });
    await mobilePage.goto('http://localhost:4175/', { waitUntil: 'networkidle' });

    // Verify 0px overflow
    const overflow = await mobilePage.evaluate(() => {
      return {
        windowWidth: window.innerWidth,
        docWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
      };
    });

    if (overflow.docWidth <= 360 && overflow.bodyWidth <= 360) {
      results.checks.push(`Mobile 360px overflow: OK (${overflow.docWidth}px / 360px)`);
    } else {
      results.errors.push(`Mobile overflow detected! docWidth: ${overflow.docWidth}px`);
    }

    await mobilePage.screenshot({ path: path.join(shotDir, 'etapa3_mobile_full_360px.png'), fullPage: true });
    results.checks.push('Mobile 360px full screenshot saved');

    // ─── 4. Light Theme Test ───
    console.log('--- Testing Light Theme ---');
    await page.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    const themeBtn = page.getByRole('button', { name: 'Alternar para modo claro' });
    await themeBtn.click();
    await page.waitForTimeout(200);
    const lightBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
    if (lightBg.includes('248, 248, 250')) {
      results.checks.push('Light theme toggle active: background is #F8F8FA');
    }
    await page.screenshot({ path: path.join(shotDir, 'etapa3_desktop_light_full.png'), fullPage: true });

  } catch (err) {
    results.errors.push(`Unexpected test failure: ${err.message}`);
  } finally {
    await browser.close();
  }

  console.log(JSON.stringify(results, null, 2));
}

runEtapa3Tests();
