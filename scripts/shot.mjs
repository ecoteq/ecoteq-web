// Dev screenshot helper — visual QA of the local site. Output: .shots/ (git-ignored).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321/';
const out = '.shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();

// Per-section desktop captures.
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await page.goto(base, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
const sections = await page.locator('main > *').all();
let i = 0;
for (const s of sections) {
  i += 1;
  await s.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  await s.screenshot({ path: `${out}/sec-${String(i).padStart(2, '0')}.png` });
  console.log(`✓ sec-${String(i).padStart(2, '0')}`);
}
await page.close();

// Mobile full page.
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await m.goto(base, { waitUntil: 'networkidle' });
await m.waitForTimeout(500);
await m.screenshot({ path: `${out}/mobile-full.png`, fullPage: true });
console.log('✓ mobile-full');
await m.close();

await browser.close();
console.log('done');
