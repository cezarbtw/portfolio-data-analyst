import { chromium } from 'playwright';

const viewports = [
  { name: 'mobile-small', width: 360, height: 740 },
  { name: 'mobile-standard', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop-standard', width: 1280, height: 900 },
  { name: 'desktop-wide', width: 1440, height: 900 },
];

async function runAudit() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();

  const url = 'http://localhost:4174/';
  console.log(`Auditing URL: ${url}`);

  for (const vp of viewports) {
    console.log(`\n=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait a bit for animations
    await page.waitForTimeout(1500);

    const metrics = await page.evaluate(() => {
      const docEl = document.documentElement;
      const scrollW = docEl.scrollWidth;
      const clientW = docEl.clientWidth;
      const hasHorizontalOverflow = scrollW > clientW;

      // Find overflowing elements
      const overflowing = [];
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > clientW + 1) {
          overflowing.push({
            tag: el.tagName,
            id: el.id,
            className: typeof el.className === 'string' ? el.className.slice(0, 50) : '',
            right: Math.round(r.right),
            width: Math.round(r.width),
            clientWidth: clientW,
          });
        }
      });

      // Check alignment of main containers
      const containers = [
        { name: 'Header container', el: document.querySelector('header > div') },
        { name: 'Hero container', el: document.querySelector('#top > div') },
        { name: 'Projects container', el: document.querySelector('#projetos > div:last-child') },
        { name: 'Experience container', el: document.querySelector('#experiencia > div') },
        { name: 'Skills container', el: document.querySelector('#competencias > div') },
        { name: 'Contact container', el: document.querySelector('#contato > div') },
        { name: 'Footer container', el: document.querySelector('footer > div') },
      ].map(c => {
        if (!c.el) return { name: c.name, rect: null };
        const r = c.el.getBoundingClientRect();
        return {
          name: c.name,
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        };
      });

      // Check Hero links layout
      const heroLinksEl = document.querySelector('#top .link-underline')?.parentElement;
      const heroLinksInfo = heroLinksEl ? {
        display: window.getComputedStyle(heroLinksEl).display,
        gap: window.getComputedStyle(heroLinksEl).gap,
        linksCount: heroLinksEl.querySelectorAll('a').length,
        rects: Array.from(heroLinksEl.querySelectorAll('a')).map(a => {
          const r = a.getBoundingClientRect();
          return { text: a.innerText.trim(), x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) };
        }),
      } : null;

      // Check Facts numbers
      const factsNumbers = Array.from(document.querySelectorAll('#top .text-display-lg')).map(el => el.innerText.trim());

      return {
        hasHorizontalOverflow,
        scrollW,
        clientW,
        overflowing: overflowing.slice(0, 5),
        containers,
        heroLinksInfo,
        factsNumbers,
      };
    });

    console.log(`Horizontal overflow: ${metrics.hasHorizontalOverflow} (scroll: ${metrics.scrollW}px, client: ${metrics.clientW}px)`);
    if (metrics.overflowing.length > 0) {
      console.log('Overflowing elements:', metrics.overflowing);
    }
    console.log('Container left alignments:', metrics.containers.map(c => `${c.name}: left=${c.left}px, width=${c.width}px`).join(' | '));
    console.log('Hero links computed display:', metrics.heroLinksInfo?.display, 'gap:', metrics.heroLinksInfo?.gap);
    console.log('Hero links rects:', metrics.heroLinksInfo?.rects);
    console.log('Facts values rendered:', metrics.factsNumbers);
  }

  await browser.close();
}

runAudit().catch(console.error);
