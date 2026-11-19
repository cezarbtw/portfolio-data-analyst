import { chromium } from 'playwright';

async function testExpanded() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const url = 'http://localhost:4174/';
  await page.goto(url, { waitUntil: 'networkidle' });

  // Expand all Tier 2 projects and case studies
  const clickables = await page.locator('#projetos article .cursor-pointer').all();
  console.log('Clickables count:', clickables.length);
  for (const c of clickables) {
    await c.click();
    await page.waitForTimeout(200);
  }

  // Also expand TCM-GO case study
  const tcmBtn = page.locator('#projetos button:has-text("Estudo de caso completo")');
  if (await tcmBtn.count() > 0) {
    await tcmBtn.click();
    await page.waitForTimeout(200);
  }

  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/expanded_projects_desktop.png', fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/expanded_projects_mobile.png', fullPage: true });

  console.log('Saved expanded screenshots');
  await browser.close();
}

testExpanded().catch(console.error);
