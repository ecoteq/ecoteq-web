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
   Primary green CTA: **"Technológiai irányt kérek"** → pre-qualification form
   (`/ajanlatkeres`). Respect `prefers-reduced-motion`; quiet 120–200ms transitions.

4. **Strategy is the source of truth for content.** `project docs/` holds the
   approved spec: `00_ecoteq.hu masterspec 1.0.md` (positioning, HUB-SPOKE, nav,
   tone, MVP) and `01_ecoteq.hu főoldal.md` (section-level homepage copy v1.0).
   Read these before writing any page copy. **Tone:** professional, human, calm,
   premium, NOT over-marketed / American / startup-y / catalog-y. **Banned words:**
   forradalmasítja, maximalizálja, "garantált megtérülés", unvalidated %/ROI claims,
   manufactured FOMO. Never invent reference numbers — only validated facts.

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

## Positioning — HUB, not catalog
ECOTEQ.hu is the **central industrial brand HUB**: it shows ECOTEQ's systems-thinking
expertise, the main technology directions, references and manufacturer backing, and
routes visitors to the right technology gateway / pre-qualification path. Deep content
(calculators, machine selectors, knowledge base) lives on **spoke** sites
(iparidaralo.hu, brikettalo.hu, vakuumszarito.hu, raklapdaralo.hu …). The primary conversion goal is not immediate purchase, but expert pre-qualification
("technológiai irány").

**Top nav (7):** Megoldások · Technológiák · Referenciák · Szerviz és alkatrész ·
Rólunk · Tudástár · Kapcsolat. Primary CTA "Technológiai irányt kérek"; secondary
"Megnézem a megoldásokat"; form CTA "Elküldöm a projekt adatait".

**8 technologies:** ipari darálás · brikettálás · pelletálás · biomassza-szárítás ·
vákuumszárítás · vákuumimpregnálás · elszívás/porleválasztás · anyagmozgatás.
**Manufacturer partners:** ISVE, Prodeco, CF Nielsen, AL-KO.

**Homepage sections** (see `project docs/01_…főoldal.md` for full copy): Hero →
technology selector → problem-based entry → systems-thinking → technology gateways →
references → manufacturers → process ("hogyan indul egy projekt") → why ECOTEQ →
knowledge → pre-qualification form → closing CTA → footer.

Contact: ECOTEQ Kft., 1037 Budapest, Csillaghegyi út 19–21. · info@ecoteq.hu ·
+36 1 430-1556.
