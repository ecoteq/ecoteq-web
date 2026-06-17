# ECOTEQ.hu — fejlesztési állapot & folytatás

Élő (Vercel): https://ecoteq-web.vercel.app · Repo: https://github.com/ecoteq/ecoteq-web
A site `noindex` amíg másképp nem rendelkezünk (`src/config.ts` → `ALLOW_INDEXING`).

## Kész
- **Főoldal (HUB)** — chrome (desktop bal navy brand rail + felső sticky nav + footer),
  hero (üveg trust-sáv ikonokkal), 12 szekció, progresszív előminősítő űrlap
  (`#ajanlatkeres`) → `/api/contact` (Resend), záró CTA.
- **Prémium mega-menü** — Megoldások + Technológiák (bal feature-oszlop + ikonos elemek);
  desktop hover/fókusz/Escape + mobil accordion. `src/components/site/SiteHeader.astro`,
  adat: `src/lib/site.ts` (NAV, SOLUTIONS, TECHNOLOGIES).
- **8 technológiai kapuoldal** — `/technologiak/[slug]/`, adatvezérelt
  (`src/lib/technologies.ts`), figuratív Lucide-ikonokkal (sehol pipa).
- **5 fő-nav oldal** — `/rolunk/`, `/szerviz-es-alkatresz/`, `/tudastar/`,
  `/referenciak/`, `/kapcsolat/` (SiteLayout `solidHeader`).
- **4 jogi oldal** — `/impresszum/`, `/felhasznalasi-feltetelek/`,
  `/cookie-tajekoztato/`, `/adatvedelmi-tajekoztato/` (LegalLayout) + footer „Jogi" oszlop.
- Stratégia + tartalom: `project docs/` (00 masterspec, 01 főoldal, 02_* kapuoldalak,
  03 navigáció/UX, `jogi/` jogi szövegek).
- Vizuális QA: `npm run shot` (Playwright → `.shots/`, git-ignored).

## Következő teendők
1. **Footer-szerkezet a 03 szerint** — „Kapcsolódó oldalak" (spoke-domének: iparidaralo.hu,
   brikettalo.hu, vakuumszarito.hu, raklapdaralo.hu) oszlop.
2. **Dedikált `/megoldasok/[slug]/` oldalak** (most a Megoldások menü a főoldali
   `#megoldasok` szekcióra visz).
3. **`/ajanlatkeres/` önálló funnel-oldal** + `/koszonjuk/` köszönő oldal.
4. **Resend bekötése** — `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` (igazolt domain) a Vercel
   env-be; az analitika (GA4/Vercel Analytics) tisztázása a cookie/adatvédelmi szöveghez.
5. **Prémium polish kör** — tipográfia/térköz/mozgás/hero finomítás a top 0,1% felé.
6. Valódi referenciák/logók (validált tartalom kell).

## Folytatás másik gépen
1. Telepítsd: Node 20+, Git, GitHub CLI (`gh`), Claude Code.
2. `gh auth login` majd `gh repo clone ecoteq/ecoteq-web`
3. `cd ecoteq-web` → `npm install` → `npm run dev` (a `dev`/`build` automatikusan
   szinkronizálja a design systemet a `SOURCE OF TRUTH …` mappából `src/ds`-be).
4. Indítsd a Claude Code-ot a mappában — a `CLAUDE.md` + `project docs/` + ez a `STATUS.md`
   adja a kontextust.

### Ami NEM jön át automatikusan
- **Titkok:** `.env` nincs commitolva (lásd `.env.example`) — `RESEND_API_KEY` stb. újra
  kell rögzíteni (vagy `vercel env pull`).
- **Claude memória:** a `~/.claude/projects/.../memory/` gépspecifikus; ezt a `STATUS.md`
  pótolja a repón belül.
- **Vercel plugin:** user-scope, az új gépen újra kell telepíteni, ha kell.
- **Playwright (screenshot QA):** `npm i -D playwright && npx playwright install chromium`.
