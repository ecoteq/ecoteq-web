// Dev screenshot helper — visual QA of the local site. Output: .shots/ (git-ignored).
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321/';
const out = '.shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();

async function open(width, height) {
  const p = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await p.goto(base, { waitUntil: 'load' });
  // Trigger lazy images + settle layout by scrolling through the whole page.
  await p.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(400);
  return p;
}

const d = await open(1440, 900);
await d.evaluate(() => window.scrollTo(0, 0));
await d.waitForTimeout(200);
await d.screenshot({ path: `${out}/desktop-hero.png` });
console.log('✓ desktop-hero');
await d.screenshot({ path: `${out}/desktop-full.png`, fullPage: true });
console.log('✓ desktop-full');

async function captureAnchor(p, name, id) {
  await p.evaluate((i) => {
    const el = document.getElementById(i);
    if (el) el.scrollIntoView({ block: 'start' });
    window.scrollBy(0, -90); // clear the fixed header
  }, id);
  await p.waitForTimeout(350);
  await p.screenshot({ path: `${out}/${name}.png` });
  console.log(`✓ ${name}`);
}
await captureAnchor(d, 'desktop-form', 'ajanlatkeres');
await d.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await d.waitForTimeout(350);
await d.screenshot({ path: `${out}/desktop-bottom.png` });
console.log('✓ desktop-bottom');
await d.close();

const m = await open(390, 844);
await m.screenshot({ path: `${out}/mobile-full.png`, fullPage: true });
console.log('✓ mobile-full');
await m.close();

await browser.close();
console.log('done');
