import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function generateOGImage() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=JetBrains+Mono:wght@500;600&family=Schibsted+Grotesk:wght@400;600&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          width: 1200px;
          height: 630px;
          background-color: #131316;
          color: #EEEEF0;
          font-family: 'Schibsted Grotesk', sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 64px 80px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.05' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }
        .outer-border {
          position: absolute;
          inset: 24px;
          border: 1px solid #26262D;
          border-radius: 8px;
          pointer-events: none;
        }
        .top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background-color: #18181D;
          border: 1px solid #26262D;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9393A0;
        }
        .badge .prompt { color: #FF5C42; font-weight: 700; }
        .badge .active {
          color: #FF5C42;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .badge .dot {
          width: 6px;
          height: 6px;
          background-color: #FF5C42;
          border-radius: 50%;
        }
        .telemetry {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #9393A0;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .content {
          margin-top: 10px;
        }
        .title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 72px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #EEEEF0;
        }
        .subtitle {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 600;
          color: #FF5C42;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-top: 20px;
        }
        .phrase {
          font-size: 20px;
          line-height: 1.6;
          color: #9393A0;
          max-width: 62ch;
          margin-top: 16px;
        }
        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #26262D;
          padding-top: 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9393A0;
        }
        .tags {
          display: flex;
          gap: 12px;
        }
        .tag {
          padding: 4px 10px;
          border-radius: 6px;
          background-color: #18181D;
          border: 1px solid #26262D;
          font-size: 12px;
        }
        .coral { color: #FF5C42; }
      </style>
    </head>
    <body>
      <div class="outer-border"></div>
      
      <div class="top-row">
        <div class="badge">
          <span class="prompt">$</span>
          <span>pipeline.gov.br.tcmgo</span>
          <span>·</span>
          <span class="active"><span class="dot"></span>AUDIT_ACTIVE</span>
        </div>
        <div class="telemetry">
          UF: 52 · 15°55′S 50°08′W · 246 MUNICÍPIOS
        </div>
      </div>

      <div class="content">
        <h1 class="title">Abraão Leopoldino</h1>
        <p class="subtitle">Analista de Dados · Business Intelligence · Goiás</p>
        <p class="phrase">
          Construção de esteiras ETL em Python, modelagem dimensional e relatórios analíticos no Power BI para o Portal do Cidadão no TCM-GO.
        </p>
      </div>

      <div class="footer-row">
        <div class="tags">
          <span class="tag">Power BI</span>
          <span class="tag">Python</span>
          <span class="tag">SQL Analítico</span>
          <span class="tag">Pipelines ETL</span>
          <span class="tag">DAX / Star Schema</span>
        </div>
        <div>
          <span class="coral">tcmgo.tc.br</span> · Portal do Cidadão
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  const outPath = path.resolve('public/og-image.png');
  await page.screenshot({ path: outPath });
  console.log('OG Image generated at:', outPath);
  await browser.close();
}

generateOGImage();
