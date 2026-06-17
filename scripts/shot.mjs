// Dev screenshot helper — captures the local site at several viewports so the
// agent can visually QA the design. Output: .shots/ (git-ignored). Not for prod.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321/';
const out = '.shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();

async function shot(name, width, height, { scrollY = 0, fullPage = false } = {}) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  if (scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${out}/${name}.png`, fullPage });
  await page.close();
  console.log(`✓ ${name}`);
}

await shot('desktop-hero', 1440, 900);
await shot('desktop-scrolled', 1440, 900, { scrollY: 320 });
await shot('mobile-hero', 390, 844);
await shot('desktop-full', 1440, 900, { fullPage: true });

await browser.close();
console.log('done');
