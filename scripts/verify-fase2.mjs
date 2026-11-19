import { chromium } from 'playwright';

async function verify() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const url = 'http://localhost:4175/';

  console.log('--- TEST 1: DESKTOP 1280px ---');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Desktop 1280px horizontal overflow:', desktopOverflow);

  // Check hero name and text
  const heroInfo = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const subtitle = document.querySelector('#top .font-mono');
    const facts = Array.from(document.querySelectorAll('#top .font-display.leading-none')).map(f => f.innerText.trim());
    const map = document.querySelector('svg[aria-label="Mapa de Goiás com 246 municípios"]');
    const pathsCount = map ? map.querySelectorAll('path').length : 0;

    return {
      name: h1?.innerText.replace(/\n/g, ' '),
      subtitle: subtitle?.innerText,
      facts,
      pathsCount,
    };
  });
  console.log('Hero info:', heroInfo);

  // Test Hover on map
  const firstPath = page.locator('.mapa-municipio').first();
  await firstPath.hover();
  await page.waitForTimeout(300);

  const tooltipVisible = await page.evaluate(() => {
    const tooltip = document.querySelector('#top .absolute.pointer-events-none');
    return tooltip ? { visible: true, text: tooltip.innerText } : { visible: false };
  });
  console.log('Map hover tooltip:', tooltipVisible);

  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase2_desktop.png', fullPage: true });

  console.log('--- TEST 2: MOBILE 360px ---');
  await page.setViewportSize({ width: 360, height: 740 });
  await page.waitForTimeout(500);

  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Mobile 360px horizontal overflow:', mobileOverflow);

  const mobileOrder = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const map = document.querySelector('svg[aria-label="Mapa de Goiás com 246 municípios"]');
    const h1Rect = h1?.getBoundingClientRect();
    const mapRect = map?.getBoundingClientRect();
    return {
      mapIsBelowH1: mapRect && h1Rect ? mapRect.top > h1Rect.bottom : false,
      h1Top: h1Rect?.top,
      mapTop: mapRect?.top,
    };
  });
  console.log('Mobile layout order:', mobileOrder);

  await page.screenshot({ path: 'C:/Users/ABRAAO_CI/.gemini/antigravity/brain/226963bf-1f7f-4133-a4cf-ef3c86e2617d/screenshots/fase2_mobile.png', fullPage: true });

  await browser.close();
}

verify().catch(console.error);
