# ECOTEQ.hu — fejlesztési állapot & folytatás

_Frissítve: 2026-06-20._

Élő (Vercel): https://ecoteq-web.vercel.app · Repo: https://github.com/ecoteq/ecoteq-web
A site **`noindex`**, amíg másképp nem rendelkezünk (`src/config.ts` → `ALLOW_INDEXING = false`,
és `public/robots.txt` is tilt). Launchkor mindkettőt át kell állítani — kizárólag a user kifejezett jóváhagyására.

## Kész

### Oldalak
- **Főoldal (HUB)** — fotós hero (semleges/dark-kompatibilis maszk) → HeroStats sáv → 7+ szekció
  (döntési utak, technológiai kapuk, rendszerszemlélet, referencia-proof, folyamat, előminősítő
  űrlap), záró CTA, footer.
- **8 technológiai kapuoldal** — `/technologiak/[slug]/`, adatvezérelt (`src/lib/technologies.ts`),
  fotós hero + trust-pillek + microcopy + HeroStats, figuratív Lucide-ikonok (sehol pipa).
- **7 megoldás-oldal** — `/megoldasok/[slug]/` (faipari hulladék, raklap, forgács/por/apríték,
  nedves biomassza, faanyag szárítása, ipari por/elszívás, komplett anyagáram).
- **5 fő-nav oldal** — `/rolunk/`, `/szerviz-es-alkatresz/`, `/tudastar/`, `/referenciak/`,
  `/kapcsolat/` (fotós `PageHero`).
- **Funnel** — `/ajanlatkeres/` (SSR, `?tech=&source=` prefill) → siker után `/koszonjuk/`.
- **4 jogi oldal** — `/impresszum/`, `/adatvedelmi-tajekoztato/`, `/cookie-tajekoztato/`,
  `/felhasznalasi-feltetelek/` (`LegalLayout`), a `project docs/jogi/` jóváhagyott szöveggel egyezően.
- `/styleguide` — token-proof regressziós oldal.

### Rendszer / komponensek
- **Chrome** — bal navy brand/utility rail (≥1280), felső sticky fejléc prémium **mega-menüvel**
  (Megoldások + Technológiák), footer (5 oszlop + „Kapcsolódó oldalak" spoke-domének).
  Top nav rövidítve („Szerviz"), a Kapcsolat kikerült a felső navból.
- **Újrafelhasználható hero** — `src/components/site/PageHero.astro`; valódi fotók `public/heroes/`.
- **Előminősítő űrlap** — `src/components/forms/QuoteForm.astro` (kártyafejléc, **progresszív
  megjelenítés**: előbb a kötelező mezők, az opcionálisak interakcióra nyílnak; technológia-specifikus
  placeholderek; **GDPR consent-checkbox**; mezők: név, e-mail, anyag, cél + cégnév, telefon,
  mennyiség, üzenet). Backend: `/api/contact` (Resend), `tech`+`forras` mezőkkel.
- **Light/Dark mód** — DS dark-réteg (`[data-mode="dark"]`); alapból a **rendszerbeállítást**
  követi, a fejléc kapcsolójával váltható és perzisztál (FOUC-mentes inline szkript). A rail+footer+
  HeroStats közös legmélyebb sávszínt kap; a navy „statement" szekciók dark módban egy mély horgony
  (`--color-feature-deep`); a hero-maszk dark módban a rail színébe olvad.
- **Breadcrumb-szabály (mindenhol)** — NAGYBETŰS, zöld bold `|` elválasztó, a hero+trust sáv alatti
  első blokkban (globális szabály a `BaseLayout`-ban).
- **CTA** — pill-gomb (12px), akadálymentes (WCAG AA) zöld + halk glow. Sub-oldali CTA-k a
  `/ajanlatkeres/` funnelre mennek `quoteHref()`-fel; a főoldal az inline `#ajanlatkeres` űrlapra.
- **Kontakt e-mail bontás** — jogi oldalak: `info@ecoteq.hu`; a site többi része: `sales@ecoteq.hu`.

### Tartalom / QA
- Stratégia + tartalom: `project docs/` (00 masterspec, 01 főoldal, 02_* kapuoldalak,
  03 navigáció/UX, `jogi/` jogi szövegek).
- Vizuális QA: `npm run shot` (Playwright → `.shots/`, git-ignored).

## Következő teendők
1. **Resend bekötése** — `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` (igazolt domain) a Vercel env-be
   (`CONTACT_TO_EMAIL` default: `sales@ecoteq.hu`). Addig az űrlap `not_configured` ággal elegánsan elbukik.
2. **Launch-előtti tisztázás** — az adatvédelmi/cookie szöveg **GA4 + Zoho Bigin CRM**-et említ
   aktívként, miközben élesben csak **Vercel + Resend** van. Egyeztetni, mielőtt indexelhetővé válik.
3. **SOCIAL placeholder URL-ek** a brand-railben (instagram/facebook/linkedin gyökér) → valódira.
4. **Valódi referenciák/logók** (validált tartalom kell; jelenleg semleges helykitöltők).
5. **Launch-kapu**: `ALLOW_INDEXING` + `robots.txt` átállítása a user jóváhagyására.

## Folytatás másik gépen
1. Telepítsd: Node 20+, Git, GitHub CLI (`gh`), Claude Code.
2. `gh auth login` → `gh repo clone ecoteq/ecoteq-web` → `cd ecoteq-web`.
3. `npm install` → `npm run dev` (a `dev`/`build` automatikusan szinkronizálja a design systemet a
   `SOURCE OF TRUTH …` mappából `src/ds`-be). Sandboxolt npm esetén az `esbuild`/`sharp` install-scriptet
   jóvá kell hagyni (lásd `package.json` → `allowScripts`).
4. Indítsd a Claude Code-ot a mappában — a `CLAUDE.md` + `project docs/` + ez a `STATUS.md` a kontextus.

### Ami NEM jön át automatikusan
- **Titkok:** `.env` nincs commitolva (lásd `.env.example`) — `RESEND_API_KEY` stb. újra kell rögzíteni
  (vagy `vercel env pull`).
- **Claude memória:** a `~/.claude/projects/.../memory/` gépspecifikus; ezt a `STATUS.md` pótolja a repón belül.
- **Vercel plugin / Playwright:** user-scope, az új gépen újra kell telepíteni
  (`npm i -D playwright && npx playwright install chromium`).
