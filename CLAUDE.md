# ECOTEQ website — project guide

World-class Astro rebuild of **https://ecoteq.hu** for ECOTEQ Kft. (Hungarian B2B
industrial waste-recovery equipment). Built on the in-repo design system.

## Golden rules

1. **The design system is read-only.** The folder `SOURCE OF TRUTH — ECOTEQ DESIGN
   SYSTEM - NE SZERKESZD/` is canonical. **Never edit it.** The app consumes it via
   `npm run sync:ds`, which copies tokens + fonts + assets into `src/ds/` and
   `public/ds/` (both git-ignored, regenerated on every dev/build).
   - The folder name has an em-dash + spaces; the Read tool fails on it — read via Bash.
2. **No indexing until launch.** `ALLOW_INDEXING` in `src/config.ts` is `false`:
   every page emits `noindex` and `public/robots.txt` disallows all. Flip both only
   on the user's explicit go-ahead.
3. **Brand fidelity.** Fustat font, navy `#1c3449` + green `#43ad4d` on neutral gray;
   pill CTAs; short green accent rule; fixed left navy brand rail; **no stock photos,
   no emoji**; Hungarian-first with full diacritics (á é í ó ö ő ú ü ű); formal "Ön".
   Recurring green CTA: "AJÁNLATOT KÉREK" → `/ajanlatkeres`. Respect
   `prefers-reduced-motion`; quiet 120–200ms transitions.

## Stack
- **Astro** (TypeScript strict) · static by default, on-demand routes opt out via
  `export const prerender = false` (needed for the Resend contact endpoint).
- **Vercel** adapter (`@astrojs/vercel`) for hosting + serverless endpoints.
- **Resend** for transactional email (contact notification + confirmation). Secrets
  in `.env` (see `.env.example`); never commit them.
- Plain CSS + scoped Astro `<style>`, driven entirely by DS tokens. No Tailwind.

## Layout & tokens
- Design tokens: `src/ds/styles.css` (imported by `BaseLayout.astro`) → colors,
  typography, spacing, radii, shadows, motion. Sub-brands re-skin via `data-brand`
  on a wrapper (pass `brand` prop to `BaseLayout`).
- `/styleguide` is the token proof page — keep it working as a regression check.

## Commands
- `npm run dev` — sync DS + start dev server.
- `npm run build` — sync DS + production build.
- `npm run sync:ds` — re-pull the design system after it changes.

## Source structure of the live site (rebuild target)
Hero → 5 value props → 5 services (Tanácsadás/Tervezés/Finanszírozás/Telepítés/
Támogatás) → 6 product categories (brikettáló, pellet, biomassza szárító,
vákuumszárító, ipari daráló, elszívó) → testimonials → FAQ (8) → client logos.
Contact: +36 1 430-1556, info@ecoteq.hu.
