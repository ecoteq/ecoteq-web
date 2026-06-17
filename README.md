# ECOTEQ Website

Astro rebuild of [ecoteq.hu](https://ecoteq.hu), built on the in-repo ECOTEQ design
system. See [`CLAUDE.md`](./CLAUDE.md) for project rules.

## Develop

```bash
npm install
npm run dev      # syncs the design system, then starts Astro at http://localhost:4321
```

Open `/styleguide` to verify the design system tokens render correctly.

## Design system

The `SOURCE OF TRUTH — ECOTEQ DESIGN SYSTEM - NE SZERKESZD/` folder is **read-only**.
`npm run sync:ds` copies its tokens, fonts and assets into the git-ignored `src/ds/`
and `public/ds/` directories. After updating the design system, re-run `npm run dev`
(or `npm run sync:ds`) to pick up changes.

## Build

```bash
npm run build    # output for Vercel
```

> The site ships `noindex` until launch (`ALLOW_INDEXING` in `src/config.ts`).
