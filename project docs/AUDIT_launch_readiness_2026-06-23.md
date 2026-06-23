# ECOTEQ.hu — Launch-readiness backlog (priorizált)

> Belső munkadoksi. Forrás: 6-dimenziós, több-ügynökös audit (SEO, teljesítmény/CWV,
> akadálymentesség, CRO, technikai/launch-readiness, tartalom/copy-QA) — 2026-06-23.
> A site ekkor **v0.9**, noindex alatt, élesítés (ecoteq.hu domain ráirányítása) előtt.
> Folytatás: ezt a listát fentről lefelé visszük; P0 = launch-blokkoló.

## 1. Vezetői összegzés

A site mérnöki és tartalmi minősége magas: 0-warning build, példás security headerök,
robusztus Resend-endpoint, erős SEO-alapok (per-oldal title/description, JSON-LD @graph,
breadcrumb, llms.txt), kiváló teljesítmény-alap (nulla hidratáció, WebP srcset),
professzionális, tiltott-szó-mentes magyar copy. A site **kb. 85-90%-ban launch-kész**,
de három valódi blokkoló marad: (a) a jogi oldalak nem létező analitikát/consent-sávot/CRM-et
dokumentálnak — GDPR valóság-ellentmondás **és** egyúttal nincs semmilyen forgalommérés egy
konverzió-fókuszú launchnál; (b) hiányzik a teljes favicon/ikon/manifest készlet; (c) mobilon
teljesen eltűnik az elsődleges CTA, ami a legnagyobb egyszeri konverziós veszteség. Ezenfelül a
Resend éles env + domain-verifikáció beállítása és a noindex-kapu feloldása kötelező go-live
lépés. A P1 réteg (OG/Twitter kártyák, kontraszt-bukások, skip-link, CTA-felirat egységesítés,
hero/font preload, inline űrlap-validáció) magas megtérülésű, launchra erősen ajánlott. A legtöbb
tétel kódból önállóan megoldható; a felhasználói döntést igénylők alább jelölve.

---

## P0 — Launch-blokkoló (élesítés előtt KÖTELEZŐ)

### P0-1. Jogi oldalak ↔ valóság: nem létező analitika, consent-sáv, CRM
**Indok:** A jogi oldalak GA4 Consent Mode-ot, Vercel Analytics-et, cookie-sávot és Zoho Bigin
CRM-et állítanak, miközben a kódban egyik sincs — egyszerre GDPR-megtévesztés és nulla forgalommérés.
**Fájlok:** `src/pages/adatvedelmi-tajekoztato.astro:63`, `src/pages/cookie-tajekoztato.astro:26`,
`src/layouts/BaseLayout.astro`, `astro.config.mjs`, `package.json`
**Javítás:** Döntés kell. Ajánlott: `@vercel/analytics` (sütimentes, jogos érdek) bekapcsolása +
a jogi oldalak átírása a tényleges állapotra (Vercel szervernapló + sütimentes Web Analytics +
Resend), a GA4/Consent Mode/Zoho bekezdések törlése. Ha GA4 mégis kell: valódi Consent Mode +
cookie-banner komponens + CSP `connect-src`/`script-src` bővítés.
**→ FELHASZNÁLÓI DÖNTÉS:** A (tényleges eszközök + GA4) vagy B (csak sütimentes Vercel Analytics +
jogi szöveg igazítás). Utána a kód/szöveg módosítás önállóan elvégezhető.

### P0-2. Hiányzó favicon / apple-touch-icon / site.webmanifest / theme-color
**Indok:** Csak SVG-favicon van; iOS home-screen, régi böngészők, PWA-ikon és mobil böngésző-UI
szín hiányzik — alap-higiénia világszínvonalú launchnál.
**Fájlok:** `public/`, `src/layouts/BaseLayout.astro:26`
**Javítás:** Ikon-szett a logóból (`favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` 180×180,
`site.webmanifest` name/short_name/theme_color #1c3449/ikonok 192+512), majd a `<head>`-be `icon`
SVG+PNG fallback, `apple-touch-icon`, `manifest`, media-függő `theme-color` (light + dark navy).
**→ Önállóan kódból** (a meglévő SVG-logóból előállítható).

### P0-3. Mobil elsődleges CTA hiánya — nincs perzisztens konverziós pont
**Indok:** A `.header-cta` csak ≥1024px-en látszik; mobilon nincs mindig elérhető zöld CTA — a
legnagyobb egyszeri CRO-veszteség.
**Fájlok:** `src/components/v2/SiteHeaderV2.astro:263-264`, `:286-300`
**Javítás:** Mobil sticky bottom CTA-sáv (`position:fixed; bottom:0; <1024px`), a hero elhagyása
után scroll-triggerrel, egyetlen zöld pillel az `#ajanlatkeres`/`/ajanlatkeres`-re (felirat =
locked CTA, lásd P1-5), `prefers-reduced-motion` tisztelve.
**→ Önállóan kódból.**

### P0-4. Resend éles env + feladó-domain verifikáció (fő konverziós csatorna)
**Indok:** Env vagy DKIM hiányában az `/ajanlatkeres` űrlap némán 503-at ad — sem lead-notifikáció,
sem visszaigazoló nem megy ki.
**Fájlok:** `src/pages/api/contact.ts:71,76`
**Javítás:** ecoteq.hu SPF/DKIM verifikáció a Resendben; `RESEND_API_KEY` + `CONTACT_FROM_EMAIL`
(verifikált feladó) + `CONTACT_TO_EMAIL` a Vercel Production env-ben; éles end-to-end teszt.
**→ FELHASZNÁLÓI ADAT/MŰVELET:** Resend kulcs + domain-verifikáció + Vercel env.

### P0-5. Kontakt-email egységesítése (info@ vs sales@)
**Indok:** A lead-cél és a jogi cím szétszórtan info@/sales@ — a lead rossz postafiókba mehet,
a jogi címek inkonzisztensek. (Összefügg P0-1 és P0-4-gyel.)
**Fájlok:** `src/pages/api/contact.ts:72`, `.env.example`, `src/lib/site.ts:5`,
`src/pages/adatvedelmi-tajekoztato.astro:17`
**Javítás:** Hivatalos lead-cím (jellemzően sales@) és jogi kapcsolati cím rögzítése;
`.env.example` default == kód default; jogi oldalak igazítása.
**→ FELHASZNÁLÓI DÖNTÉS** a végleges címekről; utána kód/szöveg egységesítés önállóan.

### P0-6. Go-live kapu: noindex + robots feloldása (szándékos, nem bug)
**Indok:** A launch egyetlen atomi lépése; ha kimarad, a site láthatatlan marad.
**Fájlok:** `src/config.ts:9`, `public/robots.txt:3`
**Javítás:** Go-live-kor EGYÜTT: `ALLOW_INDEXING=true`; `robots.txt` → `Allow: /` +
`Sitemap: https://ecoteq.hu/sitemap-index.xml`. Deploy után élesben ellenőrizni.
**→ Önállóan elvégezhető, de CSAK a felhasználó explicit go-ahead-jére** (CLAUDE.md golden rule).

---

## P1 — Magas érték, launchhoz erősen ajánlott

### P1-1. Dedikált OG-kép (1200×630) + per-oldal OG/Twitter felülírás + JSON-LD kép
**Indok (dedup — SEO×2 + Technikai + JSON-LD):** Minden oldal ugyanazt a 16:9 brikett-fotót osztja
meg; hiányoznak az `og:image:width/height/type/alt` és a Twitter-tagek; a WebPage JSON-LD-ben nincs
`primaryImageOfPage`.
**Fájlok:** `src/layouts/BaseLayout.astro:15,34,35`, `src/components/seo/Schema.astro:63`,
kulcsoldalak (`index`, technológiák, megoldások)
**Javítás:** Márkás 1200×630 default OG `public/og/ecoteq-default.png`; `ogImage?: string` prop a
BaseLayoutban (SiteLayoutV2/SolutionPage továbbpasszolja); `og:image:width/height/type/alt`;
`twitter:title/description/image`; a kiszámolt `ogImage` átadása a Schema-nak `primaryImageOfPage`-hez.
**→ Önállóan kódból**; a default OG-kártya **vizuális jóváhagyást** igényelhet.

### P1-2. LCP hero-kép preload
**Indok:** A hero csak a CSS feldolgozása után derül ki — több száz ms LCP-veszteség 4G-n.
**Fájlok:** `src/components/v2/HeroV2.astro:12`, `src/components/site/PageHero.astro:24`,
`src/pages/technologiak/[slug].astro:76`, `src/layouts/BaseLayout.astro:20`
**Javítás:** `heroPreload` prop a BaseLayoutnak; `<link rel="preload" as="image" type="image/webp"
imagesrcset="…-640/-1280/-1920.webp" imagesizes="100vw" fetchpriority="high">` a `<head>`-be.
**→ Önállóan kódból.**

### P1-3. Fustat font preload (FOUT/CLS a H1-en)
**Fájlok:** `src/ds/tokens/fonts.css:3`, `src/layouts/BaseLayout.astro:20`
**Javítás:** `import fustatLatin from '../ds/assets/fonts/fustat-latin.woff2?url'` +
`<link rel="preload" as="font" type="font/woff2" crossorigin>` a `<head>`-ben.
**→ Önállóan kódból.**

### P1-4. Kontraszt-bukások (WCAG AA) — összevont csomag
**Indok (dedup — 4 a11y finding):** Több zöld/szürke szöveg az AA 4.5:1 (ill. 3:1 nagy szövegre) alatt.
- Hero H1 `.accent` zöld navy-n 2.7:1 → `color: var(--color-accent-on-dark)` (#54c35e). `HeroV2.astro:96,41`
- Sötét mód accent-szöveg 3.2:1 → `html[data-mode="dark"]{ --color-accent-text: var(--color-accent-on-dark) }`,
  ProofV2 `.cat`/`.cta` → `--color-accent-text`. `BaseLayout.astro:128-138`, `ProofV2.astro:196`
- `text-muted` világosban 2.5-2.8:1 → app-szintű `:root` `--color-text-muted: var(--gray-600)` (#6c6c6e),
  placeholderekre/partner-nevekre. `BaseLayout.astro` (global), `forms/Input.astro:87`, `ProofV2.astro:200,262`
**→ Önállóan kódból** (a read-only DS-t nem szerkesztve, csak app-szintű override-okkal).

### P1-5. Elsődleges CTA felirat egységesítése (locked, egy forrás)
**Indok:** Ugyanaz a gomb két feliratban él („Leírom, mit kell megoldani" 3× vs „Leírom az anyagot
és a célt" 17×).
**Fájlok:** `src/lib/site-v2.ts:35`, `src/lib/site.ts:21`, `HeroV2.astro:29`, `DecisionPathsV2.astro:14`,
`index.astro:18`
**Javítás:** Egységes felirat `CTA.primary.label`-ben (17:3 arány + QA 2.1 §16 → „Leírom az anyagot
és a célt" ajánlott); hardcode-ok cseréje `CTA.primary.label`-re.
**→ Önállóan kódból**; a végső szöveget **érdemes jóváhagyatni**.

### P1-6. Tiltólistás CTA-keret eltávolítása
**Fájlok:** `src/components/v2/DecisionPathsV2.astro:28` („Rendszerirányt kérek"),
`src/pages/tudastar.astro:76` („kérjen technológiai javaslatot")
**Javítás:** DecisionPaths 3. kártya → tényleges lépés (P1-5 szerint); tudastar záró cím átírása.
**→ Önállóan kódból.**

### P1-7. Skip-link + fókuszálható `main` (WCAG 2.4.1)
**Fájlok:** `src/components/v2/SiteLayoutV2.astro:23`, `src/layouts/BaseLayout.astro:60`
**Javítás:** „Ugrás a tartalomra" skip-link a `.shell` elejére; `<main id="fooldal-tartalom" tabindex="-1">`.
**→ Önállóan kódból.**

### P1-8. Inline (mező-szintű) űrlap-validáció + a11y kötés
**Indok (dedup — CRO + a11y):** Csak összevont hibaüzenet; nincs `aria-invalid`/`aria-describedby`/fókusz
a hibás mezőre; e-mail formátumot nem ellenőriz kliensoldalon.
**Fájlok:** `src/components/forms/QuoteForm.astro:30,115-130`, `src/components/forms/Input.astro:33-41,94-98`
**Javítás:** Submitkor hibás mezőkre `error` + `aria-invalid="true"`, fókusz+scroll az első hibásra,
kliensoldali e-mail-formátum-ellenőrzés; az `aria-live` összegző marad SR-nek.
**→ Önállóan kódból.**

### P1-9. Meta description-ök 150-160 karakterre
**Fájlok:** `index.astro:17`, `referenciak.astro:14`, `technologies-v2.ts:15`, `megoldasok/*.astro`
(pl. `nedves-biomassza-elokeszitese.astro:34`, `forgacs-por-apritek-hasznositasa.astro:33`)
**Javítás:** Minden description ≤160 kar., a lényeg az első ~155-be. **→ Önállóan kódból** (copy-jóváhagyással).

### P1-10. Űrlap-elköteleződés finomítása (e-mail VAGY telefon + reassurance mikrocopy)
**Fájlok:** `src/components/forms/QuoteForm.astro:52-57,81-86,121-124`, `src/pages/ajanlatkeres.astro:91-104`
**Javítás:** Legalább egy elérhetőség (e-mail vagy telefon) kötelező, telefon a látható mezők közé;
mikrocopy a submit alá („Kötelezettség nélküli előminősítés — munkanapokon jellemzően 24 órán belül
visszajelzünk"). **→ Önállóan kódból**, a validációs döntés jóváhagyásával.

---

## P2 — Launch után

| # | Tétel | Fájl(ok) | Javítás |
|---|-------|----------|---------|
| P2-1 | Holt `technologies.ts` törlése (dupla `\| ECOTEQ` suffix-kockázat) | `src/lib/technologies.ts:40,187` | Törlés (csak a `-v2` importált). |
| P2-2 | Technológia-title-ök ≤60 kar. | `technologies-v2.ts:14,261,906,1038`, `[slug].astro:66` | `metaTitle` ≤~51 kar. |
| P2-3 | Karusszel ARIA + billentyűkezelés | `ProofV2.astro:94-95,122-126,246` | `role=group`; ArrowLeft/Right; disabled ne opacity:0; aria-live „N / 8". |
| P2-4 | Mega-menü `aria-controls` + Escape-fókusz | `SiteHeaderV2.astro:39-42,145-157` | `aria-controls`; Escape→trigger.focus(); ArrowDown nyit. |
| P2-5 | Szerviz-oldal CTA illesztése (QA 2.1 §27) | `szerviz-es-alkatresz.astro:62,93,123` | Szerviz-specifikus CTA. |
| P2-6 | „kulcsrakészen" az elszívás H1-ben | `technologies-v2.ts:911` | Semleges, entitásgazdag zárás. |
| P2-7 | „optimalizálásában" szerviz-kártya | `szerviz-es-alkatresz.astro:34` | Konkrét üzemi eredményre. |
| P2-8 | `/ajanlatkeres` `<title>` = CTA-felirat | `ajanlatkeres.astro:44,52` | Title → „Ajánlatkérés és előminősítés". |
| P2-9 | ThemeToggle állapot SR-nek | `ThemeToggle.astro:7` | `aria-pressed` + JS-frissítés. |
| P2-10 | Checkbox/consent hiba a11y | `QuoteForm.astro:115-130` | `aria-invalid`+fókusz (összevonható P1-8-cal). |
| P2-11 | Back-to-top reduced-motion + mobil | `SiteLayoutV2.astro:27,77` | `behavior` matchMedia szerint. |
| P2-12 | Heading-hierarchia (QuoteForm H2×2) | `QuoteForm.astro:40`, `PreQualForm.astro:10-14` | `headingLevel` prop. |
| P2-13 | Kiugró hero WebP/JPG tömörítés | `kapcsolat-1920.webp`, `hero-referenciak-1920.webp`, `*.jpg` | Újratömörítés q~72-78. |
| P2-14 | Duplikált hero WebP (1280==1920) | `hero-komplett-1920.webp`, `hero-tudastar-1920.webp` | Valódi 1920 vagy 1920w kihagyás. |
| P2-15 | `/ajanlatkeres` CSS 50KB | `PreQualForm.astro` | Duplikált scoped szabályok közös chunkba. |
| P2-16 | `trailingSlash` policy + www→apex | `astro.config.mjs`, `vercel.json` | `trailingSlash:'always'`; www→apex redirect. |
| P2-17 | HSTS `preload` megerősítése | `vercel.json:12` | **→ Felhasználói döntés** (visszafordíthatatlan). |
| P2-18 | Köszönöm-oldal trust + következő lépés | `koszonjuk.astro:23-35` | Megkeresés-tulajdonos a leadbe; bizalomépítő gomb. |
| P2-19 | CLAUDE.md ↔ kód CTA-szinkron | `site-v2.ts:37`, `site.ts:20`, `CLAUDE.md` | Doksi/MEMORY frissítése. |
| P2-20 | Hero másodlagos CTA / ATF | `HeroV2.astro:19-31`, `HeroStatsV2.astro:3-8` | A/B-teszt; másodlagost text-linkké. **→ Felhasználói A/B.** |

---

## Végrehajtási sorrend és felelősség

**Most, kódból önállóan** (copy-tételeknél szöveg-egyeztetéssel): P0-2, P0-3 → P1-1…P1-10 → a P2 kódos tételei.

**Felhasználói adat/döntés kell:**
- **P0-1** — analytics-irány (A: GA4+consent / B: sütimentes Vercel Analytics) + jogi szöveg jóváhagyás
- **P0-4** — Resend API kulcs, ecoteq.hu DKIM/SPF, Vercel Production env
- **P0-5** — végleges lead- és jogi e-mail cím
- **P0-6** — explicit go-live „go" (noindex feloldás)
- **P1-1 / P1-5 / P1-9** — OG-kártya és CTA/description szöveg jóváhagyás
- **P2-16 / P2-17** — Vercel domain-redirect és HSTS-preload döntés

---

## Honnan folytassuk (otthonról)
1. `git pull` → `npm install` → `npm run dev`.
2. Döntsd el a **P0-1 (analytics A/B)**, **P0-5 (e-mail címek)** kérdéseket, és add meg a **P0-4 Resend**
   adatokat — ezekre várok.
3. Közben a tisztán kódos tételeket (P0-2 favicon, P0-3 mobil CTA, P1-2/3 preload, P1-4 kontraszt,
   P1-7 skip-link, P1-8 inline validáció) elkezdhetem jóváhagyásra.
4. Maradék 3 tech-kártya fotó (pelletálás, vákuumszárítás, elszívás) — `Downloads\főoldal fotók\`.
5. Utolsó lépés: **P0-6 go-live** (noindex feloldás) a te „go"-dra, majd ecoteq.hu domain ráirányítása.
