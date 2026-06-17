// Sync the read-only ECOTEQ design system into the Astro app.
//
// The DS folder ("SOURCE OF TRUTH … NE SZERKESZD") is the canonical source and is
// NEVER edited. This script copies the parts the app consumes into derived dirs:
//   - CSS tokens + self-hosted fonts -> src/ds/   (bundled & fingerprinted by Vite)
//   - logos, themed logos, photos     -> public/ds/ (served as static assets)
// Both targets are git-ignored and regenerated on every dev/build run.

import { cpSync, readdirSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const dsDir = readdirSync(root, { withFileTypes: true })
  .find((e) => e.isDirectory() && e.name.startsWith('SOURCE OF TRUTH'))?.name;

if (!dsDir) {
  console.error('[sync:ds] Design system folder ("SOURCE OF TRUTH …") not found in repo root.');
  process.exit(1);
}

const DS = join(root, dsDir);
const SRC_DS = join(root, 'src', 'ds');
const PUB_DS = join(root, 'public', 'ds');

// Start clean so removed source files don't linger.
rmSync(SRC_DS, { recursive: true, force: true });
rmSync(PUB_DS, { recursive: true, force: true });
mkdirSync(SRC_DS, { recursive: true });
mkdirSync(PUB_DS, { recursive: true });

// 1) CSS entry + tokens + fonts -> src/ds (relative url() to ../assets/fonts is preserved).
cpSync(join(DS, 'styles.css'), join(SRC_DS, 'styles.css'));
cpSync(join(DS, 'tokens'), join(SRC_DS, 'tokens'), { recursive: true });
cpSync(join(DS, 'assets', 'fonts'), join(SRC_DS, 'assets', 'fonts'), { recursive: true });

// 2) Brand marks + sub-brand themed marks + real photography -> public/ds.
const assets = join(DS, 'assets');
for (const f of readdirSync(assets)) {
  if (f.toLowerCase().endsWith('.svg')) cpSync(join(assets, f), join(PUB_DS, f));
}
if (existsSync(join(assets, 'themes'))) {
  cpSync(join(assets, 'themes'), join(PUB_DS, 'themes'), { recursive: true });
}
if (existsSync(join(assets, 'photos'))) {
  cpSync(join(assets, 'photos'), join(PUB_DS, 'photos'), { recursive: true });
}

console.log(`[sync:ds] Synced from "${dsDir}" -> src/ds + public/ds`);
