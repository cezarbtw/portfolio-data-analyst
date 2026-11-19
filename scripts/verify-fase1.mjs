import { chromium } from 'playwright';
import fs from 'fs';

async function verify() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const url = 'http://localhost:4175/';

  console.log('--- TEST 1: DESKTOP 1280px ---');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Desktop 1280px horizontal overflow:', desktopOverflow);

  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase1_desktop.png', fullPage: true });

  console.log('--- TEST 2: TABLET 768px ---');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(500);
  const tabletOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Tablet 768px horizontal overflow:', tabletOverflow);
  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase1_tablet.png', fullPage: true });

  console.log('--- TEST 3: MOBILE 360px ---');
  await page.setViewportSize({ width: 360, height: 740 });
  await page.waitForTimeout(500);
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Mobile 360px horizontal overflow:', mobileOverflow);
  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase1_mobile.png', fullPage: true });

  console.log('--- TEST 4: MOBILE FULL-SCREEN MENU ---');
  await page.click('button[aria-label="Abrir menu"]');
  await page.waitForTimeout(300);
  const menuVisible = await page.isVisible('div[role="dialog"]');
  console.log('Mobile menu dialog opened:', menuVisible);
  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase1_mobile_menu.png' });

  // Close menu
  await page.click('button[aria-label="Fechar menu"]');
  await page.waitForTimeout(200);
  const menuClosed = !(await page.isVisible('div[role="dialog"]'));
  console.log('Mobile menu closed:', menuClosed);

  // Check CSS properties on typography
  const styles = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    const bodyP = document.querySelector('main p.font-body');
    const header = document.querySelector('header');
    const headerH = header ? window.getComputedStyle(header).height : null;

    return {
      headerHeight: headerH,
      h1Font: window.getComputedStyle(h1).fontFamily,
      h1Size: window.getComputedStyle(h1).fontSize,
      h1LineHeight: window.getComputedStyle(h1).lineHeight,
      h2Size: window.getComputedStyle(h2).fontSize,
      h3Size: window.getComputedStyle(h3).fontSize,
    };
  });
  console.log('Typography and Header styles:', styles);

  await browser.close();
}

verify().catch(console.error);
