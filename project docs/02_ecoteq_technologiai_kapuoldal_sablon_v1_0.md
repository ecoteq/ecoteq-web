# ECOTEQ.hu technológiai kapuoldal-sablon v1.1

> **v1.1 — összhangba hozva az „általános szabályok" réteggel (2026-06-21).**
> - **CTA-rendszer cserélve** (QA 2.1 §16): a kapuoldal primer CTA-ja a „Technológiai
>   irányt kérek" helyett **„Leírom az anyagot és a célt"**; űrlap submit „Elküldöm a
>   projekt adatait" → **„Elküldöm az alapadatokat"**.
> - **Variációs rendszer beemelve** (1.5 szakasz, Stratégia §7): 8 oldal = 8 nyitás,
>   nyitó-archetípus + vezető pillér + bizonyíték-rotáció kiosztással.
> - Tudatossági szint rögzítve: **megoldás-tudatos**.
> - Kétsávos mondat + bizonyíték-létra + `[VALIDÁLANDÓ]` szabály.
> - Tiltólista autoritása: QA 2.1 §7–§8 (nem duplikál).

## 0. Dokumentum célja

Ez a sablon az ECOTEQ.hu technológiai kapuoldalainak egységes szerkezeti, tartalmi, UX/CRO és AISEO alapja.

A kapuoldalak célja nem az, hogy teljes mélységben kifejtsék az adott technológiát. Erre a dedikált spoke oldalak, technológiai landingek, kalkulátorok és tudástáranyagok szolgálnak.

A kapuoldal feladata:

- röviden és hitelesen bemutatni az adott technológiai irányt,
- összekötni a technológiát a látogató üzemi problémájával,
- tisztázni, mikor lehet jó irány és mikor nem,
- bemutatni az ECOTEQ rendszerszemléletét,
- továbbvezetni a látogatót ajánlatkérésre, szakértői előminősítésre vagy részletes spoke oldalra.

A látogató fejében ennek kell megszületnie:

„Értem, mire való ez a technológia. Értem, mikor lehet releváns nekünk. Nem kell most pontos géptípust választanom, elég elküldenem az alapadatokat, és kapok egy szakmai irányt.”

---

## 1. Oldaltípus stratégiai szerepe

### Oldaltípus neve

Technológiai kapuoldal

### URL-minta

`/technologiak/[technologia-slug]/`

Példák:

- `/technologiak/ipari-daralas/`
- `/technologiak/brikettalas/`
- `/technologiak/pelletalas/`
- `/technologiak/biomassza-szaritas/`
- `/technologiak/vakuumszaritas/`
- `/technologiak/vakuumimpregnalas/`
- `/technologiak/elszivas-porlevalasztas/`
- `/technologiak/anyagmozgas-rendszerelemek/`

### Fő konverziós cél

Szakértői előminősítés.

Primer CTA:

**Leírom az anyagot és a célt**

Űrlap CTA:

**Elküldöm az alapadatokat**

Spoke továbbvezető CTA:

**Részletes gépválasztó és tudástár**

### Másodlagos cél

A látogatót a megfelelő spoke oldalra vagy kapcsolódó technológiai kapuoldalra továbbvezetni.

### Nem cél

- Nem gépkatalógus.
- Nem teljes tudástár.
- Nem automata végleges ajánlat.
- Nem túlzó ROI-ígéret.
- Nem gyártói brosúra átmásolása.
- Nem amerikaias sales landing.

---

## 1.5 Variációs rendszer — nyolc oldal, nyolc nyitás (autoritás: Stratégia v1.0 §7)

> Tudatossági szint: **megoldás-tudatos** (a látogató tudja a technológiát, módszer/szállító
> közül választ). Egy elsődleges (zöld) CTA: **Leírom az anyagot és a célt**.

A közös komponens-architektúra NEM jelent közös szöveget. Két szomszédos kapuoldal **soha
ne** ugyanazzal a nyitóval és ugyanazzal a vezető pillérrel induljon. Minden oldal a
kiosztott nyitó-archetípusból indul, a kiosztott vezető pillért viszi, és a kiemelt
bizonyítéktípust is rotáljuk.

**6 nyitó-archetípus:** tünet-nyitás · tévhit-nyitás · döntési-villa · konkrét-anyag ·
„mikor NEM kell" · számszerű-realitás.

**Kiosztás (Stratégia §7.2):**

| Kapuoldal | Vezető pillér | Nyitó-archetípus |
|---|---|---|
| Ipari darálás | Anyag-először | Tünet-nyitás |
| Brikettálás | Végig ott vagyunk (megtérülés) | Számszerű-realitás |
| Pelletálás | Függetlenség (gyártói háttér) | Döntési-villa |
| Biomassza-szárítás | Anyag-először | Tévhit-nyitás |
| Vákuumszárítás | Végig ott vagyunk (szerviz) | Konkrét-anyag |
| Vákuumimpregnálás | Függetlenség | „Mikor NEM kell" |
| Elszívás és porleválasztás | Anyag-először | Tünet-nyitás |
| Anyagmozgatás és rendszerelemek | Rendszerszemlélet | Döntési-villa |

**Kétsávos mondat (kötelező legalább 1×/oldal):** műszaki tény + gazdasági következmény egy
mondatban (pl. „ha az anyag már száraz és megfelelő méretű, sokszor nem kell külön
előkészítő gép — ami a beruházást és az üzemórát is lejjebb viszi").

**Bizonyíték-létra:** a kapuoldal kulcsoldal → a 4–5. fokig (konkrét anyag/kapacitás-spec,
referencia-idézet). Ahol nincs validált adat: **`[VALIDÁLANDÓ]`**, ne találj ki számot.

---

## 2. Tartalmi alapelv

Minden oldal az alábbi logikát kövesse:

**Feladat → Anyag → Technológiai irány → Rendszerlogika → ECOTEQ szerepe → Következő lépés**

A copy ne abból induljon ki, hogy „itt van egy gép”, hanem abból, hogy:

- milyen üzemi probléma jelentkezik,
- milyen anyagot kell kezelni,
- milyen céltermék vagy eredmény kell,
- milyen korlátok vannak,
- milyen technológiai irány lehet reális.

---

## 3. Oldalszerkezet áttekintés

Minden technológiai kapuoldal javasolt szekciói:

1. Hero
2. Mikor lehet jó irány?
3. Milyen problémát old meg?
4. Tipikus anyagok és alkalmazások
5. Tipikus rendszerfelépítés
6. Mire kell figyelni döntés előtt?
7. ECOTEQ szerepe
8. Kapcsolódó technológiák és spoke továbbvezetés
9. Projektindítás / előminősítés
10. Rövid GYIK
11. Záró CTA

MVP-ben a 10. GYIK blokk lehet rövid, 4 kérdéses. Phase 1.5-ben bővíthető.

---

## 4. SEO / AISEO alapadat-sablon

### Meta title sablon

`[Technológia] ipari rendszerek | ECOTEQ`

Példák:

- `Ipari darálási rendszerek | ECOTEQ`
- `Brikettáló rendszerek | ECOTEQ`
- `Vákuumszárítás faipari üzemeknek | ECOTEQ`

### Meta description sablon

`[Technológia] [anyagokhoz / ipari feladatokra]. Az ECOTEQ segít kiválasztani a megfelelő technológiai irányt, rendszerfelépítést és következő lépést magyarországi és közép-európai üzemeknek.`

### H1 sablon

`[Technológia] [fő felhasználási célra vagy üzemi eredményre]`

Példák:

- `Ipari darálás hulladék és mellékanyag előkészítésére`
- `Brikettáló rendszerek faipari és biomassza mellékanyagokhoz`
- `Vákuumszárítás faipari üzemeknek, ahol a minőség és az idő is számít`

### Entitásmezők

Minden oldalhoz legyen külön, strukturált entitáslista:

- technológia neve,
- kapcsolódó anyagok,
- kapcsolódó géptípusok,
- tipikus iparágak,
- kapcsolódó céltermékek,
- kiegészítő rendszerelemek,
- kapcsolódó spoke oldal,
- kapcsolódó ECOTEQ domain.

Példa brikettáláshoz:

- technológia: brikettálás
- anyagok: forgács, por, fűrészpor, apríték, biomassza
- céltermék: brikett
- géptípus: hidraulikus brikettáló, mechanikus brikettáló
- kapcsolódó technológia: darálás, szárítás, anyagmozgatás
- spoke: brikettalo.hu

---

## 5. Szekcióspecifikáció

# 1. HERO

## Funkció

Azonnal tisztázza:

- milyen technológiáról van szó,
- milyen üzemi feladatra való,
- miért ne géptípussal kezdjen a látogató,
- mi a következő lépés.

## Komponensjavaslat

`TechnologyHero.astro`

## Tartalmi mezők

- eyebrow
- H1
- alcím
- primer CTA
- secondary CTA
- microcopy
- 3–4 trust / context pill
- hero vizuál

## Copy-sablon

### Eyebrow

`ECOTEQ technológiai kapu`

### H1

`[Technológia] [anyaghoz / üzemi feladathoz / eredményhez]`

### Alcím

`Az ECOTEQ abban segít, hogy az adott [anyag / üzemi probléma] alapján ne csak gépet válasszon, hanem reális technológiai irányt. Megnézzük az anyagot, a mennyiséget, a nedvességet, a célt és az üzemi körülményeket, majd ezek alapján javasolunk következő lépést.`

### Primer CTA

**Leírom az anyagot és a célt**

### Másodlagos CTA

**Megnézem a részletes oldalt** *(ahol van dedikált spoke)*

Ha nincs dedikált spoke oldal:

**Kapcsolódó megoldások megtekintése**

### Microcopy

`Nem kell kész műszaki specifikációval érkeznie. Elég, ha leírja az anyagot, a mennyiséget és a célt.`

### Trust/context pill példák

- Anyagalapú előminősítés
- Géptől a rendszerig
- Magyar szakértői támogatás
- Európai gyártói háttér

## UX-megjegyzés

A hero legyen nagyvonalú és nyugodt. Ne legyen túlzsúfolt. A fő CTA mindig látható legyen desktopon és mobilon is.

---

# 2. MIKOR LEHET JÓ IRÁNY?

## Funkció

Gyorsan segít a látogatónak eldönteni, hogy az adott technológia egyáltalán releváns-e.

## Komponensjavaslat

`FitChecklist.astro`

## H2

`Mikor lehet jó irány a [technológia]?`

## Bevezető copy

`A [technológia] akkor lehet jó irány, ha az anyag, a mennyiség, a cél és az üzemi körülmények is támogatják. Az első lépés nem a géptípus kiválasztása, hanem annak tisztázása, hogy ez a technológiai út egyáltalán reális-e.`

## Kártyák / bulletök

Minden oldalhoz 4–6 konkrét helyzet.

### Sablon

- `Ha [anyag] rendszeresen keletkezik, és jelenleg nehezen kezelhető.`
- `Ha a cél [térfogatcsökkentés / szárítás / tömörítés / jobb tárolhatóság / értékesíthető végtermék].`
- `Ha az anyagot további feldolgozásra kell előkészíteni.`
- `Ha fontos a rendezettebb anyagáram és az átláthatóbb üzemi működés.`
- `Ha a jelenlegi hulladékkezelés, szállítás vagy tárolás túl sok költséget és figyelmet visz el.`

## CTA

**Leírom az anyagot és a célt**

---

# 3. MILYEN PROBLÉMÁT OLD MEG?

## Funkció

A technológiát üzemi és üzleti problémákhoz köti.

## Komponensjavaslat

`ProblemOutcomeGrid.astro`

## H2

`Milyen üzemi problémára adhat választ?`

## Bevezető copy

`Egy technológiai beruházás akkor jó, ha nem önmagáért történik. A kérdés az, hogy mit javít az üzemben: az anyagkezelést, a tárolást, a további feldolgozást, a minőséget, a kiszolgálást vagy a költséglogikát.`

## Kártyasablon

### Probléma

`[Konkrét üzemi probléma]`

### Miért gond?

`[Rövid magyarázat: helyet foglal, költséges, kiszámíthatatlan, lassítja a gyártást, rontja a minőséget.]`

### Technológiai válasz

`[Hogyan segíthet az adott technológia, túlzó ígéret nélkül.]`

## Ajánlott 4 probléma-kategória

1. Anyagkezelési káosz
2. Túl nagy térfogat vagy rossz tárolhatóság
3. További feldolgozás előtti akadály
4. Minőség, nedvesség, frakció vagy üzembiztonsági probléma

## Fontos tiltás

Ne írjunk garantált megtakarítást, konkrét ROI-t vagy százalékos eredményt validáció nélkül.

---

# 4. TIPIKUS ANYAGOK ÉS ALKALMAZÁSOK

## Funkció

AISEO és UX szempontból is kulcsblokk. Segít a látogatónak felismerni saját helyzetét.

## Komponensjavaslat

`MaterialApplicationMatrix.astro`

## H2

`Milyen anyagoknál és helyzetekben merül fel?`

## Bevezető copy

`A technológiai irány mindig az anyagtól indul. Ugyanaz a géptípus vagy rendszer másképp működik száraz forgácsnál, nedves biomasszánál, raklapnál, értékes faanyagnál vagy poros üzemi környezetben.`

## Mezők

### Anyagok

- `[anyag 1]`
- `[anyag 2]`
- `[anyag 3]`
- `[anyag 4]`
- `[anyag 5]`

### Iparágak

- `[iparág 1]`
- `[iparág 2]`
- `[iparág 3]`

### Tipikus célok

- `[cél 1]`
- `[cél 2]`
- `[cél 3]`

## CTA

**Megírom, milyen anyaggal dolgozunk**

---

# 5. TIPIKUS RENDSZERFELÉPÍTÉS

## Funkció

Megmutatja, hogy az ECOTEQ rendszerben gondolkodik, nem önmagában gépet ad el.

## Komponensjavaslat

`ProcessFlow.astro`

## H2

`Hogyan épülhet fel egy tipikus rendszer?`

## Bevezető copy

`A pontos rendszer mindig az anyagtól, a mennyiségtől, a telepítési helytől és a céltól függ. Az alábbi folyamat nem kész ajánlat, hanem azt mutatja meg, milyen elemekből állhat össze egy működő technológiai irány.`

## Folyamat-sablon

1. `Anyag fogadása / gyűjtése`
2. `Előkészítés vagy adagolás`
3. `[Fő technológiai lépés]`
4. `Kiegészítő technológia, ha szükséges`
5. `Kihordás, tárolás vagy csomagolás`
6. `Vezérlés, biztonság, szervizelhetőség`

## Példa brikettálásra

1. Forgács / por / apríték gyűjtése
2. Adagolás vagy silózás
3. Szükség esetén darálás vagy szárítás
4. Brikettálás
5. Kihordás, hűlés, tárolás vagy csomagolás
6. Üzemeltetés, karbantartás, support

## CTA

**Rendszerirányt kérek a saját anyagunkra**

---

# 6. MIRE KELL FIGYELNI DÖNTÉS ELŐTT?

## Funkció

Kifogáskezelés, szakértői hitelesség, rossz beruházások megelőzése.

## Komponensjavaslat

`DecisionFactors.astro`

## H2

`Mire kell figyelni, mielőtt gépet választ?`

## Bevezető copy

`A rossz technológiai döntések nagy része abból jön, hogy túl kevés adat alapján választanak gépet. Az ECOTEQ-nél ezért először a döntési tényezőket tisztázzuk.`

## Standard döntési tényezők

### Anyag

Milyen az anyag összetétele, mérete, szennyezettsége, szemcsemérete vagy darabossága?

### Mennyiség

Mennyi keletkezik óránként, naponta vagy hetente? Egy műszakban vagy több műszakban kell működnie a rendszernek?

### Nedvesség

Száraz, nedves vagy ingadozó nedvességtartalmú anyagról van szó? Kell-e szárítás vagy kondicionálás?

### Céltermék vagy eredmény

Mi legyen a folyamat vége: kisebb térfogat, tüzelőanyag, brikett, pellet, értékesíthető alapanyag, jobb tárolás vagy tisztább üzem?

### Hely és kiszolgálás

Mekkora hely áll rendelkezésre? Hogyan kerül be az anyag a rendszerbe, és hová kerül a végtermék?

### Energia és üzemeltetés

Milyen elektromos vagy hőenergia áll rendelkezésre? Ki fogja kezelni, karbantartani és kiszolgálni a rendszert?

### Bővíthetőség

Csak a jelenlegi mennyiséget kell kezelni, vagy várható kapacitásnövekedés is?

## CTA

**Segítsenek tisztázni a döntési tényezőket**

---

# 7. ECOTEQ SZEREPE

## Funkció

Megkülönbözteti az ECOTEQ-et a sima gépértékesítőtől.

## Komponensjavaslat

`EcoteqRoleBlock.astro`

## H2

`Miben segít az ECOTEQ?`

## Copy

`Az ECOTEQ nem abból indul ki, hogy melyik gépet szeretnénk eladni. Abból indulunk ki, hogy az Ön üzemében milyen anyag keletkezik, milyen problémát okoz, és milyen eredményt kell elérni.`

`A feladatunk az, hogy a lehetőségeket leszűkítsük, a rossz irányokat időben kizárjuk, és olyan technológiai javaslatot adjunk, amely műszakilag és üzletileg is értelmezhető.`

## Értékpontok

### Előminősítés

Az anyag, mennyiség, nedvesség és cél alapján első körben technológiai irányt javaslunk.

### Rendszerszemlélet

Nem csak a főgépet nézzük, hanem az adagolást, anyagmozgatást, tárolást, vezérlést és kiszolgálást is.

### Gyártói háttér

Az adott feladathoz illő európai gyártói és technológiai háttérből választunk.

### Magyar projektkommunikáció

Az egyeztetés, előkészítés, telepítés és támogatás magyar szakmai kapcsolattal történik.

### Üzleti realitás

Figyelembe vesszük az üzemórát, kapacitást, beruházási logikát, működési feltételeket és kockázatokat.

## CTA

**Leírom az anyagot és a célt**

---

# 8. KAPCSOLÓDÓ TECHNOLÓGIÁK ÉS SPOKE TOVÁBBVEZETÉS

## Funkció

A HUB–SPOKE rendszer egyik legfontosabb eleme. A kapuoldal ne zsákutca legyen, hanem okosan vezessen tovább.

## Komponensjavaslat

`RelatedTechnologyLinks.astro`

## H2

`Kapcsolódó technológiák és részletes szakmai oldalak`

## Bevezető copy

`Az ipari anyagkezelési feladatok sokszor több technológia kombinációjából állnak. Egy darálási projektből lehet brikettálás vagy pelletálás. A brikettálás előtt szükség lehet szárításra. Egy elszívási rendszer anyagmozgatással, leválasztással és tárolással együtt lesz teljes.`

## Linktípusok

### Kapcsolódó ECOTEQ technológiai oldalak

- `[Kapcsolódó technológia 1]`
- `[Kapcsolódó technológia 2]`
- `[Kapcsolódó technológia 3]`

### Részletes spoke oldal

`A részletes gépválasztó, kalkulátor, műszaki tudástár és mélyebb szakmai tartalom itt érhető el: [spoke domain / oldal].`

## CTA-sablonok

- **Megnézem a részletes oldalt**
- **Kapcsolódó technológiák megtekintése**
- **Nem tudom, melyik irány kell**

## Spoke mapping

### Ipari darálás

Elsődleges spoke: `iparidaralo.hu`

Kapcsolódó: brikettálás, pelletálás, biomassza-szárítás, anyagmozgatás, raklapdarálás.

### Brikettálás

Elsődleges spoke: `brikettalo.hu`

Kapcsolódó: ipari darálás, biomassza-szárítás, pelletálás, anyagmozgatás.

### Vákuumszárítás

Elsődleges spoke: `vakuumszarito.hu`

Kapcsolódó: vákuumimpregnálás, faanyag-előkészítés, anyagmozgatás.

### Raklapdarálás

Elsődleges spoke: `raklapdaralo.hu`, ha aktív; addig iparidaralo.hu kapcsolódó aloldal.

### Pelletálás

MVP-ben ECOTEQ.hu technológiai kapuoldal. Később külön spoke vagy dedikált landing.

### Biomassza-szárítás

MVP-ben ECOTEQ.hu technológiai kapuoldal. Később külön spoke vagy dedikált landing.

### Elszívás és porleválasztás

MVP-ben ECOTEQ.hu technológiai kapuoldal. Később külön spoke, ha üzletileg indokolt.

### Anyagmozgatás és rendszerelemek

MVP-ben ECOTEQ.hu technológiai kapuoldal, rendszerintegrációs támogató szereppel.

---

# 9. PROJEKTINDÍTÁS / ELŐMINŐSÍTÉS

## Funkció

Konverziós blokk. A látogatót nem azonnali árkérésre, hanem szakmai adatbeküldésre vezeti.

## Komponensjavaslat

`PreQualificationCTA.astro`

## H2

`Küldje el az alapadatokat, és segítünk eldönteni, reális-e ez a technológiai irány.`

## Copy

`Nem kell kész műszaki specifikációval érkeznie. Az első körben az a cél, hogy lássuk: az adott anyagra, mennyiségre és célra a [technológia] jó irány lehet-e, vagy más technológiát érdemes vizsgálni.`

## Bekért adatok

- anyag típusa,
- mennyiség,
- nedvesség, ha ismert,
- jelenlegi kezelés,
- kívánt cél,
- telepítési hely,
- rendelkezésre álló hely és energia, ha ismert,
- fotó, videó vagy anyagminta információ, ha van.

## CTA

**Elküldöm az alapadatokat**

## Microcopy

`A beérkező megkereséseket munkanapokon előszűrjük, és jellemzően 24 órán belül visszajelzünk a következő lépésről.`

---

# 10. RÖVID GYIK

## Funkció

Zero-click, AISEO és kifogáskezelés. Rövid, pontos válaszok. Nem túl hosszú tudástár.

## Komponensjavaslat

`CompactFAQ.astro`

## H2

`Gyakori kérdések a [technológia] kapcsán`

## GYIK-sablon

### 1. Mikor érdemes [technológia] irányban gondolkodni?

`Akkor, ha az anyag, a mennyiség, a cél és az üzemi körülmények alapján ez a technológia reális választ adhat a feladatra. A pontos döntéshez anyagadat, mennyiség, nedvesség és cél is szükséges.`

### 2. Elég önmagában egy gép?

`Sok esetben nem. A működő rendszerhez adagolás, anyagmozgatás, előkészítés, tárolás, vezérlés vagy kiegészítő technológia is kellhet.`

### 3. Tudnak konkrét gépet ajánlani?

`Igen, de csak akkor érdemes géptípust választani, ha az alapadatok már tiszták. Első lépésként technológiai irányt javaslunk, utána pontosítható a gép vagy rendszer.`

### 4. Milyen adatokat érdemes elküldeni?

`Anyagtípus, mennyiség, nedvesség, cél, telepítési hely, rendelkezésre álló hely és energia. Fotó vagy rövid videó sokat segíthet az előminősítésben.`

## CTA

**További kérdésem van**

---

# 11. ZÁRÓ CTA

## Funkció

A bizonytalan látogatót is továbbviszi.

## Komponensjavaslat

`FinalTechnologyCTA.astro`

## H2

`Nem biztos benne, hogy a [technológia] a jó irány? Ez teljesen normális.`

## Copy

`A legtöbb ipari projekt elején még nem a pontos géptípus a legfontosabb kérdés. Először azt kell tisztázni, milyen anyag keletkezik, mennyi van belőle, milyen állapotban, és mi legyen a cél.`

`Ha ezt leírja, segítünk eldönteni, hogy a [technológia] reális irány-e, vagy más megoldást érdemes vizsgálni.`

## CTA

**Leírom az anyagot és a célt**

## Másodlagos CTA

**Kapcsolódó technológiák megtekintése**

## Microcopy

`Az első lépés nem kötelezettségvállalás, hanem szakmai előminősítés.`

---

## 6. Oldalankénti tartalmi adatmodell

Claude Code / Astro fejlesztéshez javasolt tartalmi struktúra.

```ts
export type TechnologyGatewayPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;

  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
    trustPills: string[];
    visualKey: string;
  };

  fit: {
    h2: string;
    intro: string;
    items: string[];
  };

  problems: {
    h2: string;
    intro: string;
    cards: {
      problem: string;
      whyItMatters: string;
      technologyAnswer: string;
    }[];
  };

  materials: {
    h2: string;
    intro: string;
    materials: string[];
    industries: string[];
    goals: string[];
  };

  process: {
    h2: string;
    intro: string;
    steps: string[];
  };

  decisionFactors: {
    h2: string;
    intro: string;
    factors: {
      title: string;
      text: string;
    }[];
  };

  ecoteqRole: {
    h2: string;
    body: string[];
    valuePoints: {
      title: string;
      text: string;
    }[];
  };

  related: {
    h2: string;
    intro: string;
    internalTechnologyLinks: {
      label: string;
      href: string;
    }[];
    spoke?: {
      label: string;
      href: string;
      description: string;
    };
  };

  preQualification: {
    h2: string;
    body: string;
    fieldsHint: string[];
    cta: {
      label: string;
      href: string;
    };
  };

  faq: {
    h2: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  finalCta: {
    h2: string;
    body: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
  };
};
```

---

## 7. Komponenslista Claude Code-hoz

Javasolt komponensek:

- `TechnologyHero.astro`
- `FitChecklist.astro`
- `ProblemOutcomeGrid.astro`
- `MaterialApplicationMatrix.astro`
- `ProcessFlow.astro`
- `DecisionFactors.astro`
- `EcoteqRoleBlock.astro`
- `RelatedTechnologyLinks.astro`
- `PreQualificationCTA.astro`
- `CompactFAQ.astro`
- `FinalTechnologyCTA.astro`

A komponensek legyenek újrahasználhatók mind a 8 technológiai kapuoldalhoz.

---

## 8. Navigációs és linkelési szabályok

### Breadcrumb

Minden oldalon:

`Főoldal / Technológiák / [Technológia neve]`

### Fő CTA cél

`/ajanlatkeres/`

### CTA query paraméter javaslat

A technológiai irány átadható query paraméterrel:

- `/ajanlatkeres/?tech=ipari-daralas`
- `/ajanlatkeres/?tech=brikettalas`
- `/ajanlatkeres/?tech=pelletalas`
- `/ajanlatkeres/?tech=biomassza-szaritas`
- `/ajanlatkeres/?tech=vakuumszaritas`
- `/ajanlatkeres/?tech=vakuumimpregnalas`
- `/ajanlatkeres/?tech=elszivas`
- `/ajanlatkeres/?tech=anyagmozgas`

### Spoke linkelés

A spoke link ne vigye el túl korán a látogatót. Előbb értse meg a kapuoldal lényegét, utána kapjon részletes linket.

Javasolt helyek:

- hero secondary CTA, ha van erős dedikált spoke,
- kapcsolódó technológiák blokk,
- footer / kapcsolódó szakmai oldalak.

---

## 9. Schema / strukturált adat javaslat

MVP-ben javasolt:

- `BreadcrumbList`
- `Organization`
- `WebPage`
- `FAQPage`, ha a GYIK publikus és oldalon látható
- később `Service` vagy `Product` csak óvatosan, validált tartalommal

A kapuoldalakat inkább szolgáltatás / technológiai információs oldalként kezeljük, ne konkrét termékoldalként.

---

## 10. Nyelvi szabályok

A szöveg legyen:

- szakmai,
- emberi,
- nyugodt,
- tiszta,
- prémium,
- magyar ipari B2B döntéshozónak írt,
- nem túlmarketingelt,
- nem amerikaias,
- nem startupos,
- nem katalógus-szagú.

Kerülendő:

- forradalmasítja,
- maximalizálja,
- garantált megtérülés,
- garantált eredmény,
- „világszínvonalú” üresen,
- „prémium megoldás” bizonyíték nélkül,
- validálatlan százalékos megtakarítás,
- validálatlan ROI,
- mesterséges FOMO,
- kitalált referenciaszám,
- túlzott gyártói szuperlatívusz.

> A teljes tiltólista és AI-szag-ellenőrzés autoritása: **QA 2.1 §7–§8** (ne duplikáld). A
> nyerő érv, a 3 pillér, a tudatossági szintek és a variáció autoritása: **Stratégia v1.0**.

---

## 11. Elfogadási kritériumok

Egy technológiai kapuoldal akkor tekinthető késznek, ha:

- egyértelmű, melyik technológiáról szól,
- nem gépkatalógus,
- nem túl hosszú,
- tartalmazza az anyag- és problémaalapú belépést,
- világosan megmutatja, mikor lehet jó irány,
- nem ígér validálatlan megtakarítást vagy ROI-t,
- továbbvezet a megfelelő spoke oldalra vagy ajánlatkérésre,
- CTA-rendszere egységes,
- tartalmaz rövid GYIK-et,
- SEO meta adatai megvannak,
- belső linkjei illeszkednek a HUB–SPOKE rendszerhez,
- hangneme összhangban van az ECOTEQ márkával.

---

## 12. Rövid oldalgyártási workflow

1. Technológia kiválasztása
2. Anyagok és iparágak listázása
3. Kapcsolódó problémák megfogalmazása
4. Rendszerfolyamat leírása
5. Döntési tényezők testreszabása
6. Kapcsolódó technológiák és spoke linkek hozzáadása
7. GYIK megírása
8. SEO meta kitöltése
9. CTA query paraméter beállítása
10. QA: claim, nyelv, belső link, mobil UX, schema

---

## 13. Master copy-sablon rövidített verzió

Ez használható gyors oldalgyártáshoz.

```md
# [Technológia] [fő üzemi célra]

Az ECOTEQ abban segít, hogy az adott [anyag / üzemi probléma] alapján ne csak gépet válasszon, hanem reális technológiai irányt. Megnézzük az anyagot, a mennyiséget, a nedvességet, a célt és az üzemi körülményeket, majd ezek alapján javaslunk következő lépést.

CTA: Leírom az anyagot és a célt

## Mikor lehet jó irány?

- Ha [anyag] rendszeresen keletkezik.
- Ha a jelenlegi kezelés túl sok helyet, költséget vagy figyelmet visz el.
- Ha az anyagot további feldolgozásra kell előkészíteni.
- Ha fontos a rendezettebb anyagáram.
- Ha a cél [technológiaspecifikus eredmény].

## Milyen problémát oldhat meg?

A [technológia] segíthet abban, hogy az anyag kezelhetőbb, tárolhatóbb, feldolgozhatóbb vagy üzembiztosabban mozgatható legyen. A pontos eredmény az anyagtól, mennyiségtől, nedvességtől és a rendszerfelépítéstől függ.

## Milyen anyagoknál merül fel?

- [anyag 1]
- [anyag 2]
- [anyag 3]
- [anyag 4]

## Tipikus rendszerfelépítés

1. Anyag fogadása
2. Előkészítés / adagolás
3. [fő technológiai lépés]
4. Kiegészítő technológia, ha szükséges
5. Kihordás / tárolás / csomagolás
6. Üzemeltetés és support

## Mire kell figyelni döntés előtt?

- anyag,
- mennyiség,
- nedvesség,
- céltermék,
- helyigény,
- energia,
- üzemóra,
- bővíthetőség.

## Miben segít az ECOTEQ?

Az ECOTEQ nem csak gépet ajánl. Segítünk előminősíteni az anyagot, kiválasztani a technológiai irányt, átgondolni a rendszerfelépítést, és meghatározni, milyen adatok kellenek a pontos ajánlathoz.

## Kapcsolódó technológiák

- [kapcsolódó 1]
- [kapcsolódó 2]
- [kapcsolódó 3]

Részletes szakmai oldal: [spoke link]

## Gyakori kérdések

### Mikor érdemes ebben a technológiában gondolkodni?

Akkor, ha az anyag, mennyiség, cél és üzemi körülmények alapján ez reális technológiai irány lehet.

### Elég önmagában egy gép?

Sok esetben nem. A működő rendszerhez adagolás, anyagmozgatás, előkészítés vagy kiegészítő technológia is kellhet.

### Tudnak konkrét gépet ajánlani?

Igen, de először az alapadatokat kell tisztázni.

### Milyen adatokat küldjek?

Anyagtípus, mennyiség, nedvesség, cél, telepítési hely, fotó vagy videó, ha van.

## Záró CTA

Nem biztos benne, hogy a [technológia] a jó irány? Küldje el az alapadatokat, és segítünk eldönteni, merre érdemes indulni.

CTA: Elküldöm az alapadatokat
```
