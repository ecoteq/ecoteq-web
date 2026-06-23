# ECOTEQ.hu — állapot és folytatás (handoff)

**Utolsó frissítés:** 2026-06-23 · **Branch:** `main` · **Minden commit felpusholva** a `github.com/ecoteq/ecoteq-web`-re.
**Indexelés:** KIKAPCSOLVA (`ALLOW_INDEXING=false` a `src/config.ts`-ben + `public/robots.txt` disallow). Szándékos, a launchig marad.

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
