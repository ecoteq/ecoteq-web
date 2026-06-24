# ECOTEQ.hu — állapot és folytatás (handoff)

**Utolsó frissítés:** 2026-06-24 · **Branch:** `main` · **Minden commit felpusholva** a `github.com/ecoteq/ecoteq-web`-re.
**Indexelés:** ✅ BEKAPCSOLVA — **az oldal ÉLES** (`ALLOW_INDEXING=true`, `robots.txt` Allow, sitemap nyitva). A köszönőoldal `noindex` + sitemapból kivéve.

---

## ▶️ 2026-06-24 — LAUNCH + PERFORMANCE + A11Y kör (legutóbbi munka) — ITT FOLYTASD

**Folytatás:** `git pull` → `npm install` → `npm run dev`. Utolsó commit: **`2872dad`**.

Az oldal **éles** (noindex kikapcsolva). Mai munka röviden:

1. **Launch:** `ALLOW_INDEXING=true`, `robots.txt` Allow + sitemap, canonical az apexre. GA4 mérés (`GA_ID = G-3QGMK9EDLN`) Consent Mode v2 + cookie-sávval; lead-mailek külön (sales/info); köszönőoldal `noindex` + sitemapból kivéve.
2. **Űrlap (Resend) javítva:** a `{error}` visszatérést nem ellenőriztük → most igen; a hitelesített küldő-domain **`send.ecoteq.hu`** (a `LEAD_FROM_EMAIL=noreply@send.ecoteq.hu` a Vercel env-ben). Működik.
3. **Trailing-slash dedup:** `astro.config.mjs` `trailingSlash: 'always'` → a `/X` 308-cal a `/X/`-re; form fetch `/api/contact/`, mobil CTA `/ajanlatkeres/`.
4. **PageSpeed 100/100 (mobil+asztal):** a GA `gtag.js` betöltése a `load`/első-interakció utánra halasztva (kikerült az LCP-ablakból); hero LCP-kép `decoding=async` levéve. **CSP-fix:** a `vercel.json`-ban a `script-src`/`connect-src` kiegészítve a GA4-domainekkel (eddig a CSP blokkolta a gtag.js-t).
5. **Akadálymentesség 100-felé:** új tokenek a sötét/világos kontrasztra — `--color-text-muted-on-dark: #9aa0a6` (sötét szekciók halvány feliratai), világos módban `--color-accent-text: #25702f` (zöld overline), `.num`/`.suf` zöld → `--color-accent-on-dark #54c35e`. Karusszel-pöttyök 24×24px érintési cél (`::before`-os vizuál). **Megj.:** a lokális Lighthouse 0 kontraszt-bukót ad, de a **PSI mobil szigorúbb** (kisebb betűméret → 4,5:1 küszöb) — a fenti javítások matematikailag AA-margósak; a deploy utáni **friss PSI-futás** a mérvadó (ne a mentett analysis-linket nyisd újra, hanem `?fresh=1`-gyel új elemzést).

**A11Y verifikáció trükk:** a `data-reveal` elemek betöltéskor `opacity:0` → az axe kihagyja őket, ezért a sima Lighthouse félre-mér. Mérvadó: friss PSI a deploy után.

---

## ▶️ 2026-06-23 (este) — v0.9, LAUNCH-READINESS AUDIT kész — ITT FOLYTASD

**Folytatás:** `git pull` → `npm install` → `npm run dev`.

A site **v0.9**, élesítés (ecoteq.hu domain ráirányítása) előtt. Lefutott egy teljes,
több-ügynökös **launch-readiness + CRO audit** (6 dimenzió, 44 finding). A priorizált
teendőlista (P0/P1/P2) itt: **`project docs/AUDIT_launch_readiness_2026-06-23.md`** —
ezt visszük fentről lefelé. A site ~85-90%-ban kész.

**Ami már kész azóta (commitolva):** a főoldali „ECOTEQ technológiai irányok" kártyák
közül 5 valós fotót kapott (`public/tech/`): ipari darálás, brikettálás, biomassza-szárítás,
vákuumimpregnálás, anyagmozgatás. A forrásképek: `Downloads\főoldal fotók\`.

**Tőled várt döntés/adat a P0-hoz** (e nélkül nem zárható a launch):
- **P0-1** analytics-irány: A) GA4 + valódi consent-banner, vagy B) sütimentes Vercel Analytics
  (+ a jogi oldalak szövegét a valósághoz igazítom — most nem létező GA4/Zoho/cookie-sávot említenek).
- **P0-4** Resend: API kulcs + ecoteq.hu DKIM/SPF verifikáció + Vercel Production env.
- **P0-5** végleges lead- és jogi e-mail cím (info@ vs sales@).
- **P0-6** explicit „go" a noindex feloldásához (utolsó lépés a domain ráirányítása előtt).
- **P1-1/P1-5/P1-9** OG-kártya + elsődleges CTA-felirat + meta-leírás jóváhagyás.

**✅ Kódból már elkészült** (commit `bcfb659`): P0-2 favicon/manifest, P0-3 mobil sticky CTA, P1-2 hero-preload,
P1-3 font-preload, P1-4 kontraszt-csomag, P1-6 tiltott-CTA maradványok, P1-7 skip-link, P1-8 inline űrlap-validáció.
**Következő, szintén kódból:** P1-1 OG-kép (kell egy 1200×630 jóváhagyás), P1-5 CTA-felirat egységesítés
(felirat jóváhagyás), P1-9 meta-leírások ≤160, P1-10 e-mail-VAGY-telefon, majd a P2 kódos tételei.

**Maradék korábbról:** valós SOCIAL URL-ek ·
fotós esettanulmányok a `/referenciak`-on (Diósjenő story megvan, Jákófa story jön).
*(LEZÁRVA — döntés szerint nem módosítjuk: a 3 tech-kártya fotó (pelletálás, vákuumszárítás, elszívás)
a mostani hero-fotókon marad, az jó.)*

---

## 🆕 2026-06-23 — Benchmark audit + referenciafal (folytatás a másik gépen)

**Folytatás:** `git pull` → `npm install` → `npm run dev` (→ http://localhost:4321) → a fal a `/referenciak`-on.

**1) Teljes audit + benchmark + backlog** elkészült: `project docs/AUDIT_benchmark_2026-06-23.md`
(Fázis 1–5: site-inventory, 13 nemzetközi versenytárs élő benchmarkja, 12-dimenziós mátrix
[ECOTEQ 48/60], ICE-pontozott P0/P1/P2 backlog, és elemenként beilleszthető CC-prompt).

**2) Cégadat ELDÖNTVE** (eddig ellentmondásos volt): **alapítás 2008**; **11 gyártói képviselet**
(„10+ gyártói képviselet"): ISVE, CF Nielsen, Prodeco, RP Engineering, AL-KO, Nova Pellet,
Lumago, Cormall, Pettini, Strojplast, Italsime. Megj.: a `CLAUDE.md` elavult — top nav **6** (nem 7),
és a benne dokumentált CTA-k már nincsenek a kódban → **P0-05-ben javítandó**.

**3) P0-01 KÉSZ — szűrhető referenciafal megépítve:**
- `src/lib/references.ts` — **41 valós, PII-mentes magyar/nemzetközi referencia** (24 marquee),
  technológia-kategóriákkal (komplett, brikettálás, ipari darálás, pelletálás, elszívás, szárítás).
- `src/pages/referenciak.astro` — átírva **CSS-only (0 JS) technológia-szűrőre**, marquee-kiemeléssel;
  a korábbi „anonimizált / helykitöltő logófal" lecserélve. Build hibamentes, 1 H1.
- Források: `project docs/referenciák/` 2 PDF — **GITIGNORE-olt (ügyfél-PII)**; a PII-mentes kivonat:
  `project docs/referenciák/referenciafal_adatok_DRAFT.md`. (A PDF-ek a másik gépen nincsenek meg,
  ha kellenek, külön kell átmásolni.)

**Nyitott teendők (sorrendben):**
- **Szegmens szűrő** (Ipari · Önkormányzat · Nonprofit · Oktatás · Nemzetközi) — a user kérésére
  „előbb az adatbevitel lezárása", utána egyszerre épül (`segment` mező + 2. CSS-only szűrősor).
- **Fotós kiemelt esettanulmány:** Diósjenő + Magyar Máltai Szeretetszolgálat (fotók kellenek).
- **P0-05:** 11 partner + 2008 egységesítés (`site-v2.ts`, `ProofV2.astro`, `CLAUDE.md`); a `ProofV2`
  jelenleg még a régi 6 partnert + generikus „tipikus feladatok"-at mutatja → 3–5 marquee referencia
  bekötése a főoldalra is.
- **Hullám 0 maradék:** P0-02 (`[VALIDÁLANDÓ]` statok), P0-03 kontraszt (megj.: a `--color-accent-text`
  token MÁR létezik és használatban), P0-04 (meta >160 / title >60 hangolás). Részletek + CC-promptok
  az audit-doksiban.

---

## ✅ Vercel deploy — MEGOLDVA (2026-06-23)

A repo **Vercel GitHub-integrációval él**: minden `main`-push **automatikusan deployol**.
Az indexelés a deploy után is KIKAPCSOLVA marad (`ALLOW_INDEXING=false` + robots disallow),
amíg kifejezetten nem kéred a launchot. *(Lentebb a régi, kézi élesítési útmutató — már nem kell,
csak referenciaként marad.)*

<details><summary>Korábbi kézi deploy-útmutató (elavult)</summary>

**A) CLI (gyors):**
```bash
cd <repo>            # ahova klónoztad az ecoteq-web-et
vercel login         # interaktív bejelentkezés
vercel link          # projekt létrehozása/kötése (név: ecoteq)
vercel --prod --yes  # éles deploy
```

**B) GitHub-integráció (tartós, mint a többi projektnél):** importáld a `ecoteq/ecoteq-web` repót a **vercel.com/new** alatt. Onnantól minden `main`-push automatikusan deployol.

A build parancs `npm run build` (előbb lefuttatja a `sync:ds`-t). A DESIGN SYSTEM forrásmappa **be van commitolva**, így a Vercel build önállóan lefut. Az indexelés a deploy után is KIKAPCSOLVA marad, amíg kifejezetten nem kéred a launchot (akkor: `ALLOW_INDEXING=true` + `public/robots.txt` engedés).

</details>

---

## ✅ Ami elkészült (ebben a munkamenetben)

1. **7 megoldás-oldal újraírva** közös `src/components/site/SolutionPage.astro` komponensre: probléma-tudatos szint, locked CTA („Nem tudom, mi kell — segítsenek választani"), kétsávos helyzetkártyák, függetlenség-pillér, mini-FAQ + BreadcrumbList/FAQPage schema, oldalanként eltérő nyitás.
2. **Teljes `/v2/` → éles promotálás**: a v2 oldalak a kanonikus URL-en, v1 törölve, a `/v2/` fa megszüntetve. `SiteLayout` átkötve a V2 chrome-ra (egységes fejléc/lábléc/CTA mindenhol, jogi oldalakon is).
3. **Audit (3 ügynök) + javítások**: `data-reveal` kuglibiztos; `contact.ts` (rate limit, payload-limit, CR/LF-safe tárgy); `vercel.json` security headerök (CSP, HSTS, X-Frame-Options…); branded `404`; `public/llms.txt`; Organization schema logo+contactPoint; CTA-címkék locked rendszerre; „(V2)" és dupla „· ECOTEQ" cím javítva.
4. **Világszínvonalú hero képek**: a beszállítói valódi fotókból (ISVE, CF Nielsen, Nova Pellet, AL-KO) nanobananával (Gemini) mozis heroők, gyártói logók eltüntetve. Mind a 8 tech kapuoldal + főoldali kártyák + megoldás-oldalak frissítve. A nagy `/ds/photos` PNG-k kikerültek a renderelt oldalakról. Minden hero újrakódolva (`public/heroes` ~15 MB → ~5,4 MB).

---

## 📋 TŐLED kell (valós adat — NINCS kitalálva, `[VALIDÁLANDÓ]` jelölve a kódban)

A 14 tétel a forrásban `[VALIDÁLANDÓ]` jelölővel keresve (`grep -rn "VALIDÁLANDÓ" src`):
- **Tech trust-statok** (`src/lib/technologies-v2.ts`): brikettáló típusszámok (hidraulikus/mechanikus); ipari daráló típusszám; pelletáló típusszám + `1–6 t/h`; biomassza `1–10 t/h`.
- **Megoldás-oldali FAQ küszöbök** (`src/pages/megoldasok/*`): faipari hulladék küszöbmennyiség; nedves biomassza nedvesség/mennyiség küszöb; forgács nedvességtartomány; faanyag ciklusidők fafajonként; elszívás légmennyiség géptípusonként; raklap kezelhető anyagtípusok; komplett rendszer referenciaprojekt neve.
- **Referenciák** (`src/components/v2/ProofV2.astro`): 3–5 valós, megnevezett referencia (ügyfél + fotó + 1 mérhető üzemi tény).
- **Valós social URL-ek** (`src/lib/site.ts` `SOCIAL`): most placeholder (üres profilok).

## 🔧 Opcionális (nem blokkol, noindex alatt)
- Főoldali/OG hero még `/ds/photos/hero-briquette-plant.jpg` (552 KB) — cserélhető generált heróra (`src/components/v2/HeroV2.astro`, `src/layouts/BaseLayout.astro` ogImage).
- Meta-leírások hosszhangolása (több 160+ kar.); dedikált 1200×630 OG-kép.
- `npm audit`: 3 high a **build-toolchainben** (path-to-regexp ReDoS az adapteren át) — nem futásidejű, csak Astro 7 töréssel javul.
- `src/lib/technologies.ts` (v1, nem használt a kanonikus oldalakon) még tartalmaz nagy PNG-ket — takarítható.
- 7 dead v1 komponens (SiteHeader, SiteFooter, Hero, Proof, DecisionPaths, ProcessTimeline, SystemsThinking) tree-shake-elve — törölhető higiéniából.

---

## 🎨 Hero-újragenerálás (ha kell)
- Jelöltek: `hero-candidates/` (gitignore-olt). Eszköz: `_tools/nanobanana` (`@google/genai`, Gemini, billing kell, prompt angolul).
- A generáló szkript a `hero-candidates/_gen.sh`-ban; minden prompt tartalmazza: logó-törlés, gép-hűség, mozis fény, bal harmad sötétítés, full-bleed.
- Szabály: képgenerálás előtt **koncepciót egyeztetni** (optika/szög/fény/hangulat).

## Hasznos parancsok
```bash
npm run dev      # fejlesztői szerver (sync:ds + astro dev) → http://localhost:4321
npm run build    # éles build
grep -rn "VALIDÁLANDÓ" src   # a beszerzendő adatok listája
```
