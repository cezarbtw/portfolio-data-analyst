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
    /* ═════════════════════════════════════════════════════════════
       1. DESKTOP AUDIT (1280x900)
       ═════════════════════════════════════════════════════════════ */
    const contextDesktop = await browser.newContext({
      viewport: { width: 1280, height: 900 }
    });
    const pageDesktop = await contextDesktop.newPage();
    await pageDesktop.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageDesktop.waitForTimeout(1000);

    // Meta tags verification
    const metaCheck = await pageDesktop.evaluate(() => {
      const getMeta = (prop) => document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)?.getAttribute('content');
      return {
        title: document.title,
        ogTitle: getMeta('og:title'),
        ogDesc: getMeta('og:description'),
        twCard: getMeta('twitter:card'),
        favicon: document.querySelector('link[rel="icon"]')?.getAttribute('href')
      };
    });
    results.checks.push(`Document title: "${metaCheck.title}"`);
    results.checks.push(`OG Title: "${metaCheck.ogTitle}"`);
    results.checks.push(`Twitter Card: "${metaCheck.twCard}"`);
    results.checks.push(`Favicon link: "${metaCheck.favicon}"`);

    // 2px Reading progress bar verification
    const progressBar = await pageDesktop.evaluate(() => {
      const bar = document.querySelector('div[aria-hidden="true"].fixed.top-0.left-0');
      return {
        exists: !!bar,
        height: bar ? window.getComputedStyle(bar).height : null,
        bgColor: bar ? window.getComputedStyle(bar).backgroundColor : null
      };
    });
    results.checks.push(`2px Reading Progress bar: exists=${progressBar.exists}, height=${progressBar.height}, bg=${progressBar.bgColor}`);

    // Scroll-spy test
    const testScrollSpy = async (targetId) => {
      await pageDesktop.evaluate((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
      }, targetId);
      await pageDesktop.waitForTimeout(300);
      const activeLink = await pageDesktop.evaluate(() => {
        const active = document.querySelector('header nav a[aria-current="page"]');
        return active ? active.innerText.trim() : null;
      });
      return activeLink;
    };

    const spyProjetos = await testScrollSpy('projetos');
    results.checks.push(`Scroll-spy on #projetos: active link="${spyProjetos}"`);

    const spyExp = await testScrollSpy('experiencia');
    results.checks.push(`Scroll-spy on #experiencia: active link="${spyExp}"`);

    const spySkills = await testScrollSpy('competencias');
    results.checks.push(`Scroll-spy on #competencias: active link="${spySkills}"`);

    const spyContato = await testScrollSpy('contato');
    results.checks.push(`Scroll-spy on #contato: active link="${spyContato}"`);

    // Verify progress bar reached > 80% at bottom
    const finalProgressWidth = await pageDesktop.evaluate(() => {
      const bar = document.querySelector('div[aria-hidden="true"].fixed.top-0.left-0');
      return bar ? bar.style.width : null;
    });
    results.checks.push(`Progress bar width near bottom: ${finalProgressWidth}`);

    // Desktop horizontal scroll check
    const desktopOverflow = await pageDesktop.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    if (desktopOverflow.scrollWidth <= desktopOverflow.clientWidth) {
      results.checks.push(`Desktop 1280px overflow: OK (${desktopOverflow.scrollWidth}px <= ${desktopOverflow.clientWidth}px)`);
    } else {
      results.errors.push(`Desktop 1280px horizontal overflow!`);
    }

    // Capture desktop full screenshot
    const desktopFullPath = path.join(artifactsDir, 'fase6_desktop_full.png');
    await pageDesktop.screenshot({ path: desktopFullPath, fullPage: true });
    results.checks.push(`Desktop full screenshot saved: ${desktopFullPath}`);

    await contextDesktop.close();

    /* ═════════════════════════════════════════════════════════════
       2. TABLET AUDIT (768x1024)
       ═════════════════════════════════════════════════════════════ */
    const contextTablet = await browser.newContext({
      viewport: { width: 768, height: 1024 }
    });
    const pageTablet = await contextTablet.newPage();
    await pageTablet.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageTablet.waitForTimeout(800);

    const tabletOverflow = await pageTablet.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    if (tabletOverflow.scrollWidth <= tabletOverflow.clientWidth) {
      results.checks.push(`Tablet 768px overflow: OK (${tabletOverflow.scrollWidth}px <= 768px)`);
    } else {
      results.errors.push(`Tablet 768px horizontal overflow!`);
    }

    const tabletFullPath = path.join(artifactsDir, 'fase6_tablet_full.png');
    await pageTablet.screenshot({ path: tabletFullPath, fullPage: true });
    results.checks.push(`Tablet full screenshot saved: ${tabletFullPath}`);
    await contextTablet.close();

    /* ═════════════════════════════════════════════════════════════
       3. MOBILE AUDIT (360x780)
       ═════════════════════════════════════════════════════════════ */
    const contextMobile = await browser.newContext({
      viewport: { width: 360, height: 780 }
    });
    const pageMobile = await contextMobile.newPage();
    await pageMobile.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageMobile.waitForTimeout(800);

    const mobileOverflow = await pageMobile.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth
    }));
    if (mobileOverflow.scrollWidth <= 360 && mobileOverflow.bodyScrollWidth <= 360) {
      results.checks.push(`Mobile 360px overflow: OK (${mobileOverflow.scrollWidth}px / 360px)`);
    } else {
      results.errors.push(`Mobile horizontal overflow! scrollWidth=${mobileOverflow.scrollWidth}`);
    }

    // Open mobile menu
    const menuBtn = await pageMobile.$('button:has-text("Menu")');
    if (menuBtn) {
      await menuBtn.click();
      await pageMobile.waitForTimeout(300);
      const menuModal = await pageMobile.$('div[role="dialog"][aria-modal="true"]');
      results.checks.push(`Mobile menu opened: ${!!menuModal}`);

      const mobileMenuPath = path.join(artifactsDir, 'fase6_mobile_menu.png');
      await pageMobile.screenshot({ path: mobileMenuPath });
      results.checks.push(`Mobile menu screenshot saved: ${mobileMenuPath}`);

      // Close menu
      const closeBtn = await pageMobile.$('button:has-text("Fechar")');
      if (closeBtn) {
        await closeBtn.click();
        await pageMobile.waitForTimeout(300);
      }
    }

    const mobileFullPath = path.join(artifactsDir, 'fase6_mobile_full.png');
    await pageMobile.screenshot({ path: mobileFullPath, fullPage: true });
    results.checks.push(`Mobile full screenshot saved: ${mobileFullPath}`);
    await contextMobile.close();

    /* ═════════════════════════════════════════════════════════════
       4. DARK MODE AUDIT (prefers-color-scheme: dark)
       ═════════════════════════════════════════════════════════════ */
    const contextDark = await browser.newContext({
      viewport: { width: 1280, height: 900 },
      colorScheme: 'dark'
    });
    const pageDark = await contextDark.newPage();
    await pageDark.goto('http://localhost:4175/', { waitUntil: 'networkidle' });
    await pageDark.waitForTimeout(800);

    const darkTokens = await pageDark.evaluate(() => {
      const rootStyle = window.getComputedStyle(document.documentElement);
      const bodyStyle = window.getComputedStyle(document.body);
      const contactEl = document.querySelector('#contato');
      return {
        bgVar: rootStyle.getPropertyValue('--bg').trim(),
        inkVar: rootStyle.getPropertyValue('--ink').trim(),
        accentVar: rootStyle.getPropertyValue('--accent').trim(),
        bodyBg: bodyStyle.backgroundColor,
        bodyColor: bodyStyle.color,
        contactBg: contactEl ? window.getComputedStyle(contactEl).backgroundColor : null
      };
    });
    results.checks.push(`Dark mode tokens: bg=${darkTokens.bgVar}, ink=${darkTokens.inkVar}, accent=${darkTokens.accentVar}`);
    results.checks.push(`Dark mode computed: bodyBg=${darkTokens.bodyBg}, bodyColor=${darkTokens.bodyColor}, contactBg=${darkTokens.contactBg}`);

    const darkHeroPath = path.join(artifactsDir, 'fase6_dark_hero.png');
    await pageDark.screenshot({ path: darkHeroPath });
    results.checks.push(`Dark mode hero screenshot saved: ${darkHeroPath}`);

    const darkFullPath = path.join(artifactsDir, 'fase6_dark_full.png');
    await pageDark.screenshot({ path: darkFullPath, fullPage: true });
    results.checks.push(`Dark mode full screenshot saved: ${darkFullPath}`);

    await contextDark.close();

    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error('Phase 6 verification failed:', err);
  } finally {
    await browser.close();
  }
}

run();
