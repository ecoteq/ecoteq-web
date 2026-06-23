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
   Primary green CTA (locked, from `src/lib/site-v2.ts` `CTA`):
   **"Leírom, mit kell megoldani"** → pre-qualification form (`/ajanlatkeres`).
   Respect `prefers-reduced-motion`; quiet 120–200ms transitions.

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

**Top nav (6):** Megoldások · Technológiák · Referenciák · Szerviz és alkatrész ·
Rólunk · Tudástár. (Kapcsolat is footer-only, not in the top nav.) Locked CTA system
(`src/lib/site-v2.ts` `CTA`): primary "Leírom, mit kell megoldani"; secondary
"Megnézem a technológiákat"; form "Elküldöm az alapadatokat"; problem-aware pages
use "Nem tudom, mi kell — segítsenek választani".

**8 technologies:** ipari darálás · brikettálás · pelletálás · biomassza-szárítás ·
vákuumszárítás · vákuumimpregnálás · elszívás/porleválasztás · anyagmozgatás.
**Manufacturer partners:** 11 reps total, communicated as "10+ gyártói képviselet".
6 named on-site (validated focus, single source `src/lib/site-v2.ts` `COMPANY`): ISVE,
CF Nielsen, Prodeco, Nova Pellet, RP Engineering, AL-KO. Remaining 4 (Lumago, Cormall,
Pettini, Italsime) are in the "10+" but their focus is still [VALIDÁLANDÓ].

**Homepage sections** (see `project docs/01_…főoldal.md` for full copy): Hero →
technology selector → problem-based entry → systems-thinking → technology gateways →
references → manufacturers → process ("hogyan indul egy projekt") → why ECOTEQ →
knowledge → pre-qualification form → closing CTA → footer.

Contact: ECOTEQ Kft., 1037 Budapest, Csillaghegyi út 19–21. · sales@ecoteq.hu ·
+36 1 430-1556.

ECOTEQ copy — működési utasítás (rétegsorrend)

Három dokumentum vezérli az oldalszövegeket, RÖGZÍTETT sorrendben (ezek a project könyvtárban vannak: \project docs\általános szabályok\):
1. ECOTEQ_Strategiai_Pozicionalas_es_Uzenetarchitektura_v1_0.md
   → MI A NYERŐ ÉRV. Ez determinál előbb.
2. ECOTEQ_Copy_QA_Mag_v1_0.md
   → HOGYAN SZÓLJON. A kész szöveget ezen futtatod át.
3. QA v2.1.md
   → REFERENCIA. Csak akkor nézd, ha egy QA-jelzés kétséges/határeset.

A sorrend nem fordítható meg: a QA nem teszi nyerővé a gyenge érvet,
csak szebbé. Előbb az érv, utána a csiszolás.

NEM ÍRHATOD FELÜL (locked — konfliktusnál a brand guideline és a hub
master spec / source of truth győz):
- CTA-rendszer a hub specből („Leírom, mit kell megoldani”,
  „Leírom a feladatot”, „Elküldöm az alapadatokat”,
  „Nem tudom, mi kell — segítsenek választani”,
  „Leírom az anyagot és a célt”) — ne találj ki újat.
- Színek: navy #1c3449, zöld #43ad4d (accent ≤10%).
  TILTOTT off-brand: #0B131F és #10B981 (generikus SaaS-hatás).
- Fustat font, 8px spacing-skála.
- HUB–SPOKE architektúra, a rögzített blokksorrend,
  „nincs ROI-kalkulátor az MVP HUB-on”.

A HÉT NEM-ALKUDHATÓ SZABÁLY (pozicionálás-réteg §8 — ezt nézd ELŐSZÖR):
1. Anyag előbb, gép utóbb.
2. A függetlenség (több gyártó egy kézből) látszódjon a kulcsoldalakon.
3. Egy oldal = egy tudatossági szint = egy elsődleges (locked) CTA.
4. Konkrét + feltétel + következő lépés — sosem túlígérő.
5. Kétsávos mondat: műszaki tény + gazdasági következmény összekötve.
6. Nyolc technológiai oldal = nyolc különböző nyitás.
7. Csak az indokolt scope — sosem „mindenkinek komplett rendszer”.

BIZONYÍTÉK: ahol nincs validált adat (szám, kapacitás, referencia),
NE találj ki — tedd „[VALIDÁLANDÓ]” jelölővel, és a végén listázd,
mit kell beszerezni.

MUNKAMÓD: egy oldal egyszerre. A tervet és a szöveget előbb add
válaszban, review-ra. Csak jóváhagyás után írd a tényleges Astro
komponensbe.
