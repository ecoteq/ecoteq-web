# ECOTEQ.hu — állapot és folytatás (handoff)

**Utolsó frissítés:** 2026-06-23 · **Branch:** `main` · **Minden commit felpusholva** a `github.com/ecoteq/ecoteq-web`-re.
**Indexelés:** KIKAPCSOLVA (`ALLOW_INDEXING=false` a `src/config.ts`-ben + `public/robots.txt` disallow). Szándékos, a launchig marad.

---

## ⚠️ EGYETLEN NYITOTT BLOKKOLÓ: a Vercel deploy

A repo **nincs Vercel-projekthez kötve**, és a Vercel CLI **nincs bejelentkezve** ezen a gépen (a CLI telepítve van: 51.7.0). A kód kész és felpusholva, csak az élesítés van hátra. Az irodai gépen két út:

**A) CLI (gyors):**
```bash
cd <repo>            # ahova klónoztad az ecoteq-web-et
vercel login         # interaktív bejelentkezés
vercel link          # projekt létrehozása/kötése (név: ecoteq)
vercel --prod --yes  # éles deploy
```

**B) GitHub-integráció (tartós, mint a többi projektnél):** importáld a `ecoteq/ecoteq-web` repót a **vercel.com/new** alatt. Onnantól minden `main`-push automatikusan deployol.

A build parancs `npm run build` (előbb lefuttatja a `sync:ds`-t). A DESIGN SYSTEM forrásmappa **be van commitolva**, így a Vercel build önállóan lefut. Az indexelés a deploy után is KIKAPCSOLVA marad, amíg kifejezetten nem kéred a launchot (akkor: `ALLOW_INDEXING=true` + `public/robots.txt` engedés).

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
