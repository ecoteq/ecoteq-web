# ECOTEQ.hu — Teljes site-audit + nemzetközi benchmark + priorizált backlog

**Dátum:** 2026-06-23 · **Repo:** `Documents/web/ecoteq-web` · **Branch:** main
**Brief:** `Downloads/ECOTEQ_CC_Benchmark_Audit_Prompt.md` (v1.0) alapján
**Készítette:** Claude Code (Opus 4.8) — Fázis 1–5

> **Bizonyíték-elv:** minden ECOTEQ-állítás fájl/sor vagy build-`dist/` mérés; minden
> versenytárs-állítás élőben fetchelt URL. A 9–11. dimenzió (mobil/CWV/WCAG) a
> versenytársaknál strukturális következtetés, nem labor-mérés (a WebFetch markdownná
> alakít, így a JSON-LD/meta gyakran nem igazolható náluk).

---

## VEZETŐI ÖSSZEFOGLALÓ

Az ecoteq-web egy jól strukturált, spec-konform Astro-rebuild. A 13 élőben fetchelt
nemzetközi versenytárshoz mérve az **ECOTEQ már most birtokolja a két kategória-szintű
white-space-t**, amit minden vizsgált szereplő nyitva hagy:

1. **SEO/AISEO/schema** — a 13 versenytárs közül egynek sincs látható JSON-LD-je;
   az ECOTEQ minden oldalon Organization + FAQPage + HowTo + BreadcrumbList schemát szállít.
2. **Következetes problémavezetés** — a nagyok gép-első copyt visznek (storytelling 2–4);
   az ECOTEQ végig a vevő problémájával nyit.

**Az egyetlen valódi lemaradás a bizalom/proof (2/5 vs mezőny 3–5)** — ez azonban
adat-beszerzési, nem mesterségbeli probléma (placeholder referenciák, `[VALIDÁLANDÓ]`
statok). A javasolt #1 stratégiai lépés egy **integrátor referenciafal** (konszolidált,
kvantált, több gyártó projektjeiből) — olyan előny, amit egyetlen egy-gyártós versenytárs
sem tud nyújtani.

**ECOTEQ benchmark-összpontszám: 48/60** — a mezőny élmezőnyében (Camfil APC 51,
C.F. Nielsen 49, RUF 48), a proof feltöltésével a #1 helyre kerülhet.

---

## FÁZIS 1 — Site-megértés és inventory

### 1.1 Route-inventory (tényleges build: 28 prerenderelt + 1 on-demand)

- **Core (11):** `/`, `/referenciak/`, `/rolunk/`, `/szerviz-es-alkatresz/`, `/tudastar/`,
  `/ajanlatkeres/` (on-demand, `prerender=false` a Resend végponthoz), `/kapcsolat/`,
  `/koszonjuk/`, + 4 jogi (`impresszum`, `adatvedelmi-tajekoztato`,
  `felhasznalasi-feltetelek`, `cookie-tajekoztato`).
- **8 technológiai kapuoldal** (`technologiak/[slug]`, adat `lib/technologies-v2.ts`):
  ipari-darálás, brikettálás, pelletálás, biomassza-szárítás, vákuumszárítás,
  vákuumimpregnálás, elszívás-porleválasztás, anyagmozgatás-rendszerelemek. ✓ Mind a 8.
- **7 megoldás-oldal** (`megoldasok/*`, problématudatos belépés) — a szűk MVP-térképben
  nem szerepel, de implementált és integrált (SolutionPage.astro, locked
  „Nem tudom, mi kell" CTA). → **többlet, nem hiány.**
- `styleguide` (token-proof, sitemapból szűrve) + `404`.
- **Hiányzó MVP-oldal: nincs.**

### 1.2 Technikai alapvonal (mért, build `dist/`-ből)

| Mutató | Eredmény | |
|---|---|---|
| Build | exit 0, **0 warning**, 28 statikus route + sitemap | ✓ |
| **Külső JS bundle** | **0 KB** — csak inline modulok (menü/téma/reveal); nincs hidratált framework | ✓ kiváló |
| H1/oldal | mind a 28 oldalon **pontosan 1** (jogi oldalak is: `LegalLayout.astro:18`) | ✓ |
| Schema | Organization 28×, FAQPage 15×, **HowTo 8× (48 lépés)**, BreadcrumbList 20×, 72 Q&A, WebSite/WebPage/ContactPoint/PostalAddress | ✓ elit |
| Mega-menü a11y | `aria-expanded`+`aria-haspopup`+`aria-controls`+`aria-label`+Escape+billentyűkezelés (`SiteHeaderV2.astro`) | ✓ |
| Motion | `prefers-reduced-motion` tisztelve (reveal, timeline, kulcsfelhő, hover) | ✓ |
| Kép | `<picture>` webp srcset (640/1280/1920) + jpg fallback, width/height, alt, `fetchpriority` | ✓ |
| Hero-kép súly | 10,5 MB / 68 fájl (51 webp + 17 jpg); teljes `public` raszter 30 MB | ⚠ optimalizálható |
| Indexelés | `noindex,nofollow` minden oldalon + robots `Disallow: /` | ✓ launch-zárolt (szándékos) |

### 1.3 Gyengeségek (Fázis 1)

- **Meta description túl hosszú** ~10 oldalon (160+ kar.): brikettálás 254, főoldal 228,
  ipari darálás 220, biomassza 206, vákuumszárítás 208, nedves-biomassza 207,
  pelletálás 207, elszívás 205, vákuumimpregnálás 197, anyagmozgatás 192 → SERP-csonkolás.
- **`<title>` túl hosszú** 4 tech oldalon: elszívás 88, ipari darálás 79,
  anyagmozgatás 75, biomassza 72 kar.
- **Proof = placeholder:** `[VALIDÁLANDÓ]` trust-statok
  (`technologies-v2.ts:28/276/406/407…`), TODO ügyféllogók (`referenciak.astro:84`),
  „Hamarosan" tudástár-cikkek, üres social URL-ek. **A legnagyobb tartalmi hiány.**
- **CTA-eltérés:** a zárolt rendszer él („Leírom, mit kell megoldani",
  „Leírom az anyagot és a célt", „Nem tudom, mi kell…", „Elküldöm az alapadatokat"),
  de megjelenik 1× „Ajánlatot kérek" — jelölve.

### 1.4 ⚠ Ellentmondások

1. **Partnerszám — ELDÖNTVE (2026-06-23):** hivatalos lista (11 gyártó, „10+ gyártói
   képviselet" megfogalmazással): **ISVE, CF Nielsen, Prodeco, RP Engineering, AL-KO,
   Nova Pellet, Lumago, Cormall, Pettini, Strojplast, Italsime.** A korábbi CLAUDE.md (4)
   és brief (6) listák elavultak.
2. **Alapítási év — ELDÖNTVE (2026-06-23): 2008** (a 2009 elvetve).
3. **Doc↔kód drift:** a `CLAUDE.md` elavult — „Top nav (7)" valójában **6**
   (`site-v2.ts:3`); a dokumentált CTA-k („Technológiai javaslatot kérek",
   „Elküldöm a projekt adatait") **nincsenek a kódban** (a kód az újabb locked rendszert
   követi). → CLAUDE.md frissítendő.

> **Megjegyzés:** egy párhuzamos inventory-ágens „kritikus: a jogi oldalakon nincs H1"
> állítást tett — ezt a build-`dist/` mérés **megcáfolta** (`<h1>Impresszum</h1>` stb.,
> `LegalLayout.astro:18`). Mind a 28 oldalon pontosan 1 H1 van.

---

## FÁZIS 2 — Végleges nemzetközi versenytárs-halmaz (10 + 1 referenciaosztály)

Mind élőben fetchelve. Kategória-lefedettség az ECOTEQ technológiáira hangolva:

| # | Versenytárs | Kategória | Miért bent | Kulcs-URL |
|---|---|---|---|---|
| 1 | **Vecoplan** | aprítás | dual-axis IA etalon | vecoplan.com/en/products |
| 2 | **UNTHA** | aprítás | proof-etalon (49 nevesített eset) | untha.com/en/references |
| 3 | **WEIMA** | aprítás/brikett | kvantált trust + ingyen anyagteszt | weima.com/en |
| 4 | **C.F. Nielsen** | brikettálás | **ECOTEQ-beszállító**; Segments×Solutions | cfnielsen.com |
| 5 | **RUF** | brikettálás | legjobb konverzió (ingyen présteszt + szegmentáló űrlap) | ruf-briquetter.com |
| 6 | **Amandus Kahl** | pelletálás | Machines×Industries IA + PDF-mélység | akahl.com/en |
| 7 | **Nederman** | elszívás | kategória-frázis + Industries×Applications | nederman.com |
| 8 | **Camfil APC** | elszívás | legjobb előminősítő quote-űrlap + proof | camfilapc.com |
| 9 | **AL-KO Extraction** | elszívás | **ECOTEQ-beszállító**; Anwendung×Produkt mátrix | alko-extractiontechnology.com |
| 10 | **Swiss Combi** | szárítás | proof-fegyelem (500+/56/15/60+, nevesített referenciák) | swisscombi.ch |
| — | **Liebherr** | *referenciaosztály* | art-direction „így néz ki a csúcs" (WebP, mozis) | liebherr.com/en-int |

*Másodlagos, szintén fetchelt: Lindner (gyenge konverzió), Donaldson Torit (kvantált
proof, de szétaprózott IA), STELA Laxhuber (1922 / „43 M t/év" proof, de űrlap nélküli
konverzió). Mühlböck 403 WAF-blokk miatt kizárva.*

### Kategória-szintű minták (mind a 13-ból)

- **Kéttengelyű IA a kategória-standard** a több-termékes/több-alkalmazásos házaknál
  (anyag/probléma × gép/technológia). Ez a legjobban átvihető minta ECOTEQ-nek.
- **A kvantált, nevesített proof választja el az élmezőnyt** (UNTHA „20 t/h",
  Camfil „200 000+ telepítés / 80% visszatartás", AL-KO HOLZ-HER/Lignatur refek).
  Lindner és Kahl épp ezért kapott 2–3-at proofra (örökség igen, kvantált eset nem).
- **A legjobb konverzió = de-riszkelő mikro-konverzió + szegmentáló űrlap**
  (RUF „ingyen présteszt", WEIMA „anyagteszt", Camfil APC „quick quote" portípus szerint).
- **Problémavezető copy ritka és értékes** — csak RUF (5) és a Vecoplan/WEIMA/CF Nielsen
  kategóriaoldalai nyitnak valódi vevői fájdalommal.
- **A schema/AISEO-t az egész kategória elhanyagolja** — egy szereplőnek sincs látható
  JSON-LD-je; több élő 404 (Vecoplan ×3, WEIMA ×2, Camfil APC, Liebherr deep). **ECOTEQ
  legtisztább white-space-e.**

---

## FÁZIS 3 — Benchmark mátrix és gap-elemzés

**Dimenziók:** 1 Pozicionálás · 2 IA/navigáció · 3 Hero · 4 Probléma→megoldás ·
5 Bizalom/proof · 6 Konverzió/lead · 7 Műszaki mélység · 8 Art direction · 9 Mobil ·
10 CWV · 11 WCAG AA · 12 SEO/AISEO/schema

| Szereplő | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Σ/60 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **ECOTEQ.hu** | 4 | 4 | 4 | **5** | **2** | 4 | 4 | 4 | 4 | **5** | 3 | **5** | **48** |
| Vecoplan | 5 | 5 | 3 | 4 | 5 | 3 | 3 | 3 | 4 | 3 | 3 | 4 | 45 |
| UNTHA | 4 | 4 | 3 | 3 | 5 | 3 | 4 | 4 | 3 | 3 | 3 | 2 | 41 |
| WEIMA | 5 | 4 | 3 | 4 | 4 | 4 | 5 | 4 | 3 | 3 | 3 | 3 | 45 |
| C.F. Nielsen | 5 | 5 | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | 3 | 49 |
| RUF | 5 | 5 | 4 | 5 | 5 | 5 | 3 | 4 | 3 | 3 | 3 | 3 | 48 |
| Amandus Kahl | 5 | 5 | 3 | 2 | 3 | 2 | 4 | 3 | 3 | 4 | 3 | 2 | 39 |
| Nederman | 5 | 5 | 4 | 5 | 3 | 4 | 3 | 4 | 4 | 3 | 3 | 4 | 47 |
| Camfil APC | 5 | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 3 | 3 | 3 | 4 | 51 |
| AL-KO Extr. | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | 3 | 3 | 47 |
| Swiss Combi | 4 | 3 | 3 | 2 | 5 | 2 | 4 | 3 | 3 | 3 | 3 | 2 | 37 |
| *Liebherr (ref.)* | 4 | 4 | 4 | 2 | 3 | 2 | 3 | **5** | 4 | 4 | 3 | 3 | 41 |

### ECOTEQ pontok indoklása (bizonyítékkal)

- **Pozicionálás 4** — független, anyag-first HUB, tiszta; de a hero-H1 absztraktabb,
  mint a kategória „ownable" frázisai (Nederman „Clean Air Company").
- **IA 4** — kéttengelyű (Megoldások × Technológiák) = a kategória-best minta; hiányzó
  harmadik tengely: „gyártó szerint".
- **Hero 4** — mozis beszállítói heroők (nanobanana), egy primer CTA.
- **Probléma→megoldás 5** — 7 megoldás-oldal + minden tech oldal „Milyen problémát old
  meg" nyitással; a mezőny legkövetkezetesebb problémavezetése.
- **Bizalom/proof 2** — placeholder referenciák / `[VALIDÁLANDÓ]` statok.
- **Konverzió 4** — kétlépcsős előminősítő funnel, query-param lead-context, tudatossági
  szintenként locked CTA; hiányzik a szegmentáló mező + mikro-konverzió.
- **Műszaki mélység 4** — per-tech mély (problémák, illeszkedés, anyagok, folyamat,
  döntési tényezők) katalógussá válás nélkül.
- **Art direction 4** — bespoke navy/zöld DS, Fustat; „twins"-csapda watch-item.
- **CWV 5** — 0 külső JS, statikus Astro, webp srcset, fetchpriority.
- **WCAG 3** — jó alap (fókusz, reduced-motion, menü-aria, 1 H1/oldal), de ismert
  `#43ad4d` fehéren 2.87 kontraszt-bukás (accent-text routingig).
- **SEO/AISEO 5** — Organization minden oldalon, FAQPage/HowTo/BreadcrumbList; a teljes
  mezőnyt veri (noindex csak launch-gate; meta-hossz hangolandó).

### Hol VEZET az ECOTEQ
- **SEO/AISEO/schema (12):** egyetlen versenytársnak sincs látható JSON-LD-je; ECOTEQ
  teljes schema-stacket szállít minden oldalon. Már birtokolt white-space.
- **Probléma→megoldás (4):** a nagyok 2–4 (gép-első: Liebherr 2, Kahl 2, Swiss Combi 2);
  ECOTEQ a Camfil APC / RUF (5) szinten.
- **CWV-architektúra (10):** 0 külső JS + statikus — szerkezetileg veri a media-nehéz
  CMS-eket.

### Hol EGYENRANGÚ
- **IA (2):** kéttengelyű = kategória-best (CF Nielsen/Vecoplan/Nederman/AL-KO 5); hiányzó
  3. tengely („gyártó szerint") integrátor-egyedi lehetőség.
- **Konverzió (6):** funnel jó (4), de a benchmark Camfil APC + RUF (5): szegmentáló mező
  + de-riszkelő mikro-konverzió. ECOTEQ-nek van funnelje, hiányzik a „próba" ajánlat.
- **Art direction (8):** ECOTEQ 4; etalon Liebherr (5) full-bleed valódi gép-/helyszínfotó.
  A „twins"-csapda valós watch-item.

### Hol LEMARAD
- **Bizalom/proof (5): ECOTEQ 2 vs mezőny 3–5.** Az egyetlen komoly deficit. Benchmark:
  UNTHA (49 eset kemény számokkal), Camfil APC („200 000+ telepítés, 80% visszatartás,
  ATEX/NFPA"), AL-KO (HOLZ-HER/CAPiTA/Lignatur + EcoVadis Silver), Swiss Combi/STELA
  (kvantált stat-bank + lokalizált referenciafal). ECOTEQ-nél placeholder.
  → Integrátorként strukturális előny: **egy konszolidált referenciafal több gyártó
  projektjeiből** — amit egy-gyártós oldal nem tud.
- **WCAG AA (11): 3** — `#43ad4d` fehéren 2.87; accent-text routing kell.

### A három legnagyobb tanulság
1. **A két kategória-szintű white-space (schema/AISEO + következetes problémavezetés)
   MÁR megvan** — launchkor élesíteni (indexelés + meta-finomhangolás) és kommunikálni.
2. **Az egyetlen valódi lemaradás a proof** — adat-beszerzési, nem mesterségbeli kérdés;
   `[VALIDÁLANDÓ]`/TODO feltöltés + kvantált integrátor referenciafal a legnagyobb hatású.
3. **Két adaptálandó mechanika a korlátokon belül:** (a) gyártó szerinti 3. IA-tengely
   (ECOTEQ-egyedi); (b) szegmentáló mező az ajánlatkérőn + low-commitment „anyagteszt/
   konzultáció" mikro-konverzió (Camfil APC + RUF minta, DE locked CTA-n, FOMO nélkül).

---

## FÁZIS 4 — Priorizált backlog (ICE = I·C/E, Effort: kisebb = jobb)

### P0 — launch-blokkoló

| ID | Cím | Kat. | I·C/E | ICE | A rés, amit zár |
|---|---|---|---|---|---|
| **P0-05** | Cégadat-konzisztencia + CLAUDE.md doc-drift | 1/12 | 3·5/1 | **15.0** | Partnerszám 4↔5↔6, év 2008↔2009; CLAUDE.md nav 7→6, halott CTA-k |
| **P0-02** | `[VALIDÁLANDÓ]` trust-statok feltöltése | 5 | 4·5/2 | **10.0** | kitalált-tilalom alatti placeholder számok |
| **P0-03** | WCAG kontraszt: accent-text routing | 11 | 4·5/2 | **10.0** | `#43ad4d` fehéren 2.87 < 4.5 (AA-bukás) |
| **P0-04** | Meta/title SERP-hangolás | 12 | 3·5/2 | **7.5** | 10 meta >160, 4 title >60 kar. (mért) |
| **P0-01** | **Integrátor referenciafal** (kvantált, szűrhető) | 5 | 5·4/3 | **6.67** | proof = ECOTEQ #1 lemaradás (2 vs 3–5) |

> P0-01 ICE-rangban utolsó az effort/adatfüggés miatt, de **stratégiai hatásban a #1** —
> külön kiadási hullámba kerül, amint az adat megvan.

### P1 — magas érték, launch után közvetlen

| ID | Cím | Kat. | I·C/E | ICE | A rés |
|---|---|---|---|---|---|
| **P1-02** | Előminősítő mezők az ajánlatkérő űrlapon | 6 | 4·4/3 | **5.33** | Camfil APC/RUF szegmentálás; ECOTEQ funnel megvan, mező hiányzik |
| **P1-05** | Hero-H1 „ownable" pozicionáló frázis | 1/3 | 3·3/2 | **4.5** | Nederman/Camfil ownable frázis; ECOTEQ hero absztraktabb |
| **P1-03** | Low-commitment mikro-konverzió | 6 | 4·3/3 | **4.0** | RUF/WEIMA „anyagteszt", de locked CTA-n, FOMO nélkül |
| **P1-01** | Gyártó szerinti 3. IA-tengely | 2 | 4·3/4 | **3.0** | integrátor-egyedi belépés; egy-gyártós oldal nem tudja |
| **P1-04** | „Twins" art-direction differenciálás | 8 | 3·3/3 | **3.0** | brief §0 vizuális csapda: kapuoldalak overlay miatt egyformák |

### P2 — polish / higiénia

| ID | Cím | Kat. | I·C/E | ICE | A rés |
|---|---|---|---|---|---|
| **P2-04** | Kapcsolat-térkép + valós social URL-ek | 5 | 2·4/1 | **8.0** | `kapcsolat.astro:58` TODO; `site.ts` SOCIAL placeholder |
| **P2-03** | Halott v1 komponensek + nagy PNG-k törlése | — | 1·5/1 | **5.0** | 7 dead komponens + `technologies.ts` v1 nagy PNG-k |
| **P2-01** | Hero-kép súly + dedikált OG 1200×630 | 10 | 2·4/2 | **4.0** | heroes 10,5 MB; OG még `/ds/photos` 552 KB |
| **P2-02** | Tudástár „Hamarosan" cikkek | 12 | 3·3/4 | **2.25** | `tudastar.astro:60` aria-disabled placeholderek; AISEO |

### Javasolt kiadási hullámok
- **Hullám 0 (launch-gate):** P0-05 → P0-02 → P0-03 → P0-04 *(adatfüggetlen / gyors)*
- **Hullám 1 (proof, #1 stratégiai):** P0-01 — amint a referenciaadat megvan
- **Hullám 2 (konverzió):** P1-02 → P1-03 → P1-05
- **Hullám 3 (megkülönböztetés):** P1-01 → P1-04
- **Hullám 4 (higiénia, bármikor):** P2-04 → P2-03 → P2-01 → P2-02

---

## FÁZIS 5 — Beilleszthető Claude Code végrehajtási promptok

*Mindegyik önállóan futtatható; a felhasználó egyesével indítja. Repo: `Documents/web/ecoteq-web`.*

### Közös korlátblokk (minden prompthoz érvényes)
- DS tokenek zárolva: navy `#1c3449`, zöld `#43ad4d`, navy-900 `#0f2030`. **Tiltott:**
  `#0B131F`, `#10B981`/Tailwind emerald. Font: **Fustat** (teljes magyar ékezet).
- CTA-nyelv a locked rendszer („Leírom, mit kell megoldani" / „Leírom az anyagot és a
  célt" / „Nem tudom, mi kell — segítsenek választani" / „Elküldöm az alapadatokat").
  **Tiltott:** „Vásárlás", „Kosárba", „Azonnali ajánlat", „Garantált megtérülést kérek",
  „Legjobb ár", „Akciós gépek".
- Tartalmi tiltás: validálatlan %, ROI, garantált pénzügyi eredmény, FOMO, kitalált
  referencia. Ahol nincs adat → `[VALIDÁLANDÓ]`, a végén listázva.
- WCAG AA (accent-text routing fehér háttéren), `prefers-reduced-motion`.
- Astro static-first, minimális JS, CWV megőrzés. Magyar formális „Ön/Önök".
- hub≠katalógus; hub-spoke linkelési fegyelem; az ECOTEQ márkát építjük, nem a beszállítókét.
- Munkamód: terv/szöveg előbb válaszban review-ra, csak jóváhagyás után kódba.

---

### P0-05 — Cégadat-konzisztencia + CLAUDE.md doc-drift javítás

**Cél:** Egységes, hiteles cégadat (partnerlista, alapítási év) az egész site-on, és a
`CLAUDE.md` szinkronba hozása a tényleges kóddal.

**Érintett fájlok:** `src/lib/site-v2.ts`, `src/lib/site.ts`, `src/components/seo/Schema.astro`
(`foundingDate`), `src/pages/rolunk.astro`, `src/components/v2/SiteFooterV2.astro`, `CLAUDE.md`.

**Változtatás specifikációja:**
- A felhasználó által megadott **hivatalos partnerlistát** és **alapítási évet** egyetlen
  forrásba (`site-v2.ts` konstans) tedd, minden megjelenés innen hivatkozzon.
- `Schema.astro` Organization `foundingDate` → hiteles év.
- `CLAUDE.md`: „Top nav (7)" → **6**; töröld a már nem létező CTA-kat
  („Technológiai javaslatot kérek", „Elküldöm a projekt adatait"), írd be a tényleges
  locked CTA-rendszert; partnerlistát igazítsd.
- Grep-eld a `2008|2009` és a partnernevek minden előfordulását, egységesítsd.

**Definition of Done:**
- [ ] `grep -rn "2008\|2009" src` egyetlen, konzisztens évet ad
- [ ] partnerszám minden oldalon azonos
- [ ] `CLAUDE.md` nav=6 és a CTA-lista a kóddal egyezik
- [ ] build hibamentes; a11y/CWV nem romlott

**Tesztelés:** `npm run build` + grep évre/partnerszámra. **Hatókörön kívül:** DS, layout, új tartalom.

---

### P0-02 — `[VALIDÁLANDÓ]` trust-statok feltöltése valós adattal

**Cél:** A placeholder számok lecserélése hiteles adatra (vagy a stat eltávolítása), hogy
ne menjen ki ellenőrizetlen állítás éles oldalra.

**Érintett fájlok:** `src/lib/technologies-v2.ts` (28, 276, 406, 407 + minden `[VALIDÁLANDÓ]`),
`src/pages/megoldasok/*` FAQ-küszöbök, `src/components/v2/ProofV2.astro`.

**Változtatás specifikációja:**
- `grep -rn "VALIDÁLANDÓ" src` → teljes lista.
- Minden tételnél: hiteles adat beírása; ha nincs, a stat-pill **eltávolítása** (ne maradjon
  becsült/üres szám). Kevesebb, de igaz szám.

**Definition of Done:**
- [ ] egyetlen renderelt számhoz sincs „[VALIDÁLANDÓ]"
- [ ] `grep -rn "VALIDÁLANDÓ" src` üres VAGY csak nem renderelt, dokumentált jelölő marad
- [ ] build hibamentes

**Tesztelés:** build + grep. **Hatókörön kívül:** referenciafal (P0-01), layout.

---

### P0-03 — WCAG kontraszt: `--color-accent-text` routing

**Cél:** A `#43ad4d` zöld normál szövegként fehéren 2.87 (AA-bukás). Sötétebb accent-text
token szöveghez; a `#43ad4d` marad dekoratív/nagy elemhez.

**Érintett fájlok:** DESIGN SYSTEM **forrásmappa** (`SOURCE OF TRUTH — … NE SZERKESZD/`),
majd `npm run sync:ds`; fogyasztó: `src/ds/styles.css` (generált), szöveg-accent helyek.

**Változtatás specifikációja:**
- A DS forrásban (nem a generált `src/ds`-ben) `--color-accent-text` token, ≥4.5:1 fehéren
  (sötétebb zöld a navy-zöld családban — **nem** emerald `#10B981`).
- A szöveges zöld előfordulásokat (linkek, kis címkék) routeold erre; `#43ad4d` marad
  ikon/grafikai/nagy (≥24px bold) elemhez.
- `npm run sync:ds`.

**Definition of Done:**
- [ ] minden normál szöveg-zöld ≥4.5:1 fehéren (axe + kontraszt-kalkulátor)
- [ ] `#43ad4d` csak AA-konform (nagy/grafikai) helyen
- [ ] build hibamentes, vizuális regresszió nincs a `/styleguide`-on

**Tesztelés:** axe a `/styleguide`-on. **Hatókörön kívül:** új színek a palettán kívül.

---

### P0-04 — Meta description és title SERP-hangolás

**Cél:** A 160+ kar. metaleírások és 60+ kar. title-ök csonkolásának megelőzése.

**Érintett fájlok:** `src/lib/technologies-v2.ts` (per-tech `title`/`description`),
oldal-frontmatterek (`index.astro`, `megoldasok/*`).

**Változtatás specifikációja:**
- Meta description: **150–158 kar.**, leglényegesebb kulcsszó+érték előre. Érintett:
  főoldal, brikettálás, ipari darálás, biomassza, vákuumszárítás, nedves-biomassza,
  pelletálás, elszívás, vákuumimpregnálás, anyagmozgatás.
- Title: **≤60 kar.** (a „· ECOTEQ" előtt). Érintett: elszívás, ipari darálás,
  anyagmozgatás, biomassza.

**Definition of Done:**
- [ ] minden meta ≤160, minden title ≤60 kar. (build `dist/` méréssel)
- [ ] kulcsszó-relevancia megmarad; build hibamentes

**Tesztelés:** title/meta hossz-mérő szkript a `dist/`-en. **Hatókörön kívül:** törzsszöveg.

---

### P0-01 — Integrátor referenciafal (kvantált, szűrhető)

**Cél:** A proof-lemaradás zárása egy konszolidált, több gyártó projektjeit felvonultató
referenciafallal (UNTHA/Camfil/AL-KO szint, integrátor-csavarral).

**Érintett fájlok:** `src/components/v2/ProofV2.astro`, `src/pages/referenciak.astro`,
új `src/lib/references.ts`, `Schema.astro` (opcionális `ItemList`/`CreativeWork`).

**Változtatás specifikációja:**
- Adatmodell: referencia = {iparág, technológia, gyártó, hely, 1 mérhető üzemi tény,
  fotó, év}.
- Szűrhető fal **technológia / iparág / gyártó** szerint (a P1-01 3. tengely előképe),
  lehetőleg CSS-only vagy minimális JS.
- Minden kártya **egy kvantált, hiteles tény** — `[VALIDÁLANDÓ]` jelölővel, amíg az adat
  meg nem érkezik.
- Főoldali `ProofV2` 3–5 kiemelt referencia + „összes" link a `/referenciak/`-ra.

**Definition of Done:**
- [ ] szűrhető fal 3 tengelyen működik
- [ ] minden megjelenített tény valós VAGY látható helyett `[VALIDÁLANDÓ]` és listázott
- [ ] CWV nem romlik (lazy + webp); build hibamentes

**Tesztelés:** build + szűrőpróba; Lighthouse a `/referenciak/`-on. **Hatókörön kívül:**
ügyféladat beszerzése (felhasználói).

---

### P1-02 — Előminősítő mezők az ajánlatkérő űrlapon

**Cél:** A funnel benchmark-szintre emelése: anyag-/cél-/mennyiség-szerinti szegmentáló
mező (Camfil APC / RUF), de a locked CTA-nyelven.

**Érintett fájlok:** `src/components/forms/QuoteForm.astro`, `src/pages/ajanlatkeres.astro`,
`src/pages/api/contact.ts`, query-param lead-context.

**Változtatás specifikációja:**
- 3 strukturált mező: **anyagtípus** (fa/raklap/műanyag/biomassza/vegyes…), **cél**
  (térfogatcsökkentés/saját fűtés/értékesítés/előkészítés), **nagyságrend** (opcionális tartomány).
- `?tech=`/`?megoldas=` lead-context előtöltse a releváns mezőt.
- Submit CTA marad **„Elküldöm az alapadatokat"**; mezők a meglévő rate-limit/CRLF-safe
  `contact.ts`-be.
- a11y: `<label>`, `aria-describedby` hibához, billentyűnavigálható `Select`.

**Definition of Done:**
- [ ] 3 előminősítő mező lead-context előtöltéssel
- [ ] form a11y (label+aria error states) axe-tiszta
- [ ] `contact.ts` validál + levélbe tesz; build hibamentes

**Tesztelés:** end-to-end űrlapküldés dev-en (Resend teszt), axe a formon.
**Hatókörön kívül:** új CTA-szöveg, fizetés.

---

### P1-05 — Hero-H1 „ownable" pozicionáló frázis

**Cél:** A hero-H1 élesítése birtokolható, kategória-frázis erejű, formális magyar
állítássá (Nederman/Camfil minta, független-integrátor pozícióból).

**Érintett fájlok:** `src/components/v2/HeroV2.astro`, `src/lib/technologies-v2.ts`
(per-tech hero highlight).

**Változtatás specifikációja:**
- 2–3 H1-variáns **review-ra** (ne kódba jóváhagyás előtt). Fejezze ki: független / több
  gyártó egy kézből / anyag-first.
- A 8 kapuoldal nyitása maradjon eltérő (locked: „nyolc különböző nyitás").
- Mondatközi kötőjel tilos.

**Definition of Done:**
- [ ] H1-variánsok előbb válaszban, jóváhagyás után kódba
- [ ] továbbra is 1 H1/oldal; build hibamentes

**Tesztelés:** vizuális + H1-count. **Hatókörön kívül:** layout, szekciósorrend.

---

### P1-03 — Low-commitment mikro-konverzió (korlát-konform)

**Cél:** Alacsony elköteleződésű belépő („szakmai anyagvizsgálat / konzultáció") a tőkeigényes
döntés első apró lépéseként — RUF/WEIMA mechanika, FOMO és „ingyen ajánlat" nélkül.

**Érintett fájlok:** `src/components/sections/PreQualForm.astro`, kapuoldali záró szekció,
`ajanlatkeres.astro`.

**Változtatás specifikációja:**
- Másodlagos útként: „leírja az anyagot és a célt → szakmai értékelést kap" mint
  kis-súrlódású belépő (nem vásárlás).
- Nyelv a locked készletből; tilos „akció/garancia/azonnali".

**Definition of Done:**
- [ ] a mikro-konverzió szövege a locked CTA-rendszerből
- [ ] nincs tiltott ígéret; build hibamentes; CWV nem romlik

**Tesztelés:** copy QA a `Copy_QA_Mag` ellenében. **Hatókörön kívül:** fizetős funkció, kalkulátor.

---

### P1-01 — Gyártó szerinti harmadik IA-tengely (browse-by-manufacturer)

**Cél:** A kéttengelyű IA kiegészítése integrátor-egyedi **„Gyártó szerint"** belépéssel.

**Érintett fájlok:** `src/components/v2/SiteHeaderV2.astro` (mega menü), új `src/pages/gyartoink/`
vagy szűrő a `/referenciak/`-on, `src/lib/site-v2.ts`.

**Változtatás specifikációja:**
- Gyártónként rövid, márka-alárendelt blokk (a HUB az ECOTEQ-et építi): mit gyárt, mely
  ECOTEQ-technológiához kapcsolódik, mely referenciák.
- Kösd a P0-01 referenciafal „gyártó" szűrőjéhez.
- A mega menü a11y mintája maradjon (aria-expanded/controls).

**Definition of Done:**
- [ ] gyártó-tengely elérhető a navból, a11y megőrizve
- [ ] minden gyártóblokk ECOTEQ-keretben (nem beszállítói reklám)
- [ ] build hibamentes; CWV nem romlik

**Tesztelés:** billentyűnavigáció a menüben + axe. **Hatókörön kívül:** logó-galéria engedély nélkül.

---

### P1-04 — „Twins" art-direction differenciálás

**Cél:** A brief §0 vizuális csapdájának feloldása: a kapuoldalak layout-személyiségben
különbözzenek, ne csak overlay-színben.

**Érintett fájlok:** `src/pages/technologiak/[slug].astro`, `src/lib/technologies-v2.ts`
(per-tech layout-variáns flag), kapuoldali szekció-komponensek.

**Változtatás specifikációja:**
- 2–3 layout-variáns (hero-kompozíció, szekciósorrend-hangsúly, ikon/diagram-stílus),
  technológiánként hozzárendelve, hogy az ipari-darálás és az elszívás-porleválasztás ne
  hasson „ikernek".
- A megkülönböztetés karakterből/elrendezésből jöjjön, ne új színből.

**Definition of Done:**
- [ ] a két „iker"-veszélyes oldal vizuálisan elkülönül screenshot-összevetésen
- [ ] DS-konform; build hibamentes

**Tesztelés:** `.shots` screenshot-összevetés kapuoldal-páronként. **Hatókörön kívül:** új paletta.

---

### P2-04 — Kapcsolat-térkép + valós social URL-ek

**Cél:** A `kapcsolat.astro` TODO térkép és a placeholder social profilok lezárása.

**Érintett fájlok:** `src/pages/kapcsolat.astro:58`, `src/lib/site.ts` (`SOCIAL`),
`Schema.astro` (`sameAs`).

**Változtatás specifikációja:**
- Könnyű, lazy térkép (statikus kép-link vagy `loading=lazy` iframe — CWV-barát).
- Valós social URL-ek a `SOCIAL`-ba; üres profilt **ne** linkelj; `sameAs` csak élő profilra.

**Definition of Done:**
- [ ] térkép lazy, nem rontja az LCP-t
- [ ] csak élő social URL; build hibamentes

**Tesztelés:** Lighthouse a `/kapcsolat/`-on. **Hatókörön kívül:** új közösségi tartalom.

---

### P2-03 — Halott v1 komponensek + nem használt nagy PNG-k törlése

**Cél:** Higiénia: tree-shake-elt v1 komponensek és `technologies.ts` (v1) nagy PNG-i eltávolítása.

**Érintett fájlok:** `src/components/{site/SiteHeader,site/SiteFooter,site/Hero,
sections/Proof,sections/DecisionPaths,sections/ProcessTimeline,sections/SystemsThinking}.astro`,
`src/lib/technologies.ts`.

**Változtatás specifikációja:**
- Erősítsd meg grep-pel, hogy a kanonikus oldalak egyikére sincs import; majd töröld.
- A `technologies.ts` nagy PNG-hivatkozásait távolítsd el / a fájlt töröld, ha nem használt.

**Definition of Done:**
- [ ] `grep` igazolja: 0 import a törlendőkre
- [ ] build hibamentes, route-szám változatlan (28)

**Tesztelés:** build + route-diff. **Hatókörön kívül:** v2 komponensek.

---

### P2-01 — Hero-kép súly + dedikált OG 1200×630

**Cél:** A heroes 10,5 MB további csökkentése és dedikált OG-kép a jobb megosztáshoz/LCP-hez.

**Érintett fájlok:** `public/heroes/*`, `src/layouts/BaseLayout.astro` (ogImage),
`hero-candidates/_gen.sh`.

**Változtatás specifikációja:**
- AVIF-variáns a webp mellé; a 17 jpg fallback méret-ellenőrzése.
- Dedikált 1200×630 OG-kép (a `/ds/photos/hero-briquette-plant.jpg` 552 KB cseréje
  optimalizált változatra).
- **Képgenerálás előtt koncepció-egyeztetés** (optika/szög/fény/hangulat); gyártói logó nélkül.

**Definition of Done:**
- [ ] heroes összsúly csökken, vizuális minőség tartva
- [ ] dedikált OG 1200×630; LCP nem romlik (Lighthouse)

**Tesztelés:** Lighthouse főoldal + OG-debug. **Hatókörön kívül:** layout.

---

### P2-02 — Tudástár „Hamarosan" cikkek feltöltése

**Cél:** Az `aria-disabled` placeholder tudástár-cikkek valós tartalommal — entitásépítés
és AISEO-mélység.

**Érintett fájlok:** `src/pages/tudastar.astro`, új cikk-route-ok, `Schema.astro` (Article).

**Változtatás specifikációja:**
- Cikkenként: rövid, gyakorlatias, magyar formális anyag; Article schema; belső link a
  releváns kapuoldalra (hub-spoke fegyelem).
- Az `aria-disabled` feloldása csak kész cikknél.

**Definition of Done:**
- [ ] legalább az első cikkek élnek, Article schema + belső link
- [ ] nincs élő „Hamarosan" hamis link; build hibamentes

**Tesztelés:** schema-validátor + belső link-ellenőrzés. **Hatókörön kívül:** spoke mély tartalom.

---

## NYITOTT ADATIGÉNY (a P0-05 + P0-01 lezárásához)

1. **Hivatalos partnerlista — MEGVAN (2026-06-23):** ISVE, CF Nielsen, Prodeco,
   RP Engineering, AL-KO, Nova Pellet, Lumago, Cormall, Pettini, Strojplast, Italsime
   (11 gyártó → „10+ gyártói képviselet"). → P0-05 indítható.
2. **Alapítási év — MEGVAN: 2008.** → P0-05 indítható.
3. **Referenciák — BEÉRKEZTEK + P0-01 VÉGREHAJTVA (2026-06-23):** `project docs/referenciák/`
   2 PDF (2014, 2022) + szárítás-kiegészítés (K és B 1 t/h, New Energy 1,2 t/h, Nyírmada Ö.,
   **Veolia Zrt. — Ercsi szennyvíztelep**). PII-mentes adathalmaz: `src/lib/references.ts`
   (**34 nevesített ügyfél**, 21 marquee). A felhasználó engedélyezte a nyilvános megnevezést.
   **Megépült a szűrhető referenciafal:** `src/pages/referenciak.astro` átírva — CSS-only
   (0 JS) technológia-szűrő (6 kategória), marquee-kiemelés, 1 H1, build hibamentes. A korábbi
   „anonimizált / helykitöltő logófal" lecserélve. Forrásmegjegyzés: `referenciafal_adatok_DRAFT.md`.

---

## MÓDSZERTANI MEGJEGYZÉSEK
- ECOTEQ-mérések: `npm run build` + `dist/` HTML elemzés (H1-count, schema-típusok,
  CTA-stringek, title/meta hossz, JS-bundle, képsúly), valamint forráskód grep.
- Versenytárs-adat: 13 oldal élő WebFetch, kategória-klaszterekben. A 9–11. dimenzió
  következtetés (a WebFetch markdown-konverziója eltávolítja a CWV/WCAG/JSON-LD igazolásához
  szükséges markupot) — ezek a sorok óvatos baseline-on állnak.
- A brief Section 0 korlátai minden javaslatra és CC-promptra kötelezően érvényesek.
