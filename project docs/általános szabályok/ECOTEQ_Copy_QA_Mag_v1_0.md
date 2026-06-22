# ECOTEQ — Copy QA-mag v1.0

*A „hogyan szóljon" réteg **végrehajtható** magja. A 32 szakaszos „Nyelvi és tartalmi QA v2.1" sűrítménye: CC ezt futtatja <b>minden</b> oldalon; a teljes v2.1-be csak akkor néz, ha egy jelzés kétséges vagy határeset.*

\---

## 0\. Hol a helye — háromrétegű sorrend

```
1) Pozicionálás + üzenetarchitektúra v1.0   → MI A NYERŐ ÉRV   (előbb ez fut)
2) Copy QA-mag v1.0  (EZ a fájl)            → HOGYAN SZÓLJON   (erre fut rá)
3) QA v2.1 teljes                          → REFERENCIA-FÜGGELÉK (csak kétségnél)
```

**Amit ez a fájl NEM tartalmaz** (mert a pozicionálás-rétegben van, ne duplikáld): a versenyél, a három üzenetpillér, a kétfejű-vevő mondatminta, az „indokolt scope", a tudatossági szintek, a CTA-rendszer (az locked a hub specben). Ez a fájl **csak a nyelvi/tartalmi minőséget** ellenőrzi: AI-szag, kártya, mondat, kifejezés, entitás-elhelyezés.

**Alapfeszültség (mindkét irányba bukhatsz):** *túl AI-szagú/marketinges* ↔ *túl steril, kulcsszómentes „szép próza".* A cél a kettő között: emberi hang, erős szakmai entitásokkal, keresőbarát szerkezetben.

\---

## 1\. AI-szag gyorsteszt — ezzel kezdd

Az AI-szag a leggyakoribb és legdrágább hiba. Fut végig a szövegen, és jelöld, hány stimmel:

* \[ ] **Minden kártya/blokk azonos szerkezetű** (ugyanaz a ritmus, ugyanaz a hossz).
* \[ ] **Minden 2. mondat ugyanazt az anyagot sorolja** („por, forgács, fahulladék…" újra meg újra).
* \[ ] Sok **„nemcsak…, hanem…"** szerkezet.
* \[ ] Sok **„segít / támogat / lehetővé tesz"** konkrétum nélkül.
* \[ ] Sok blokk így kezdődik: **„Ha Ön…", „Amennyiben…", „Ez a megoldás…".**
* \[ ] Sok **absztrakt főnév**: hatékonyság, optimalizálás, transzformáció, rendszerlogika, realitás.
* \[ ] **Túl szabályos ritmus**, túl sima felület — minden mondat „szakmainak" akar látszani.
* \[ ] A kártyák **„probléma + megoldás" sablonban**, emberi nyelv nélkül.

**Ha 2+ stimmel → át kell írni.** Javítási mozdulatok:

1. **Rövidebb mondatok.** Egy mondat = egy fő gondolat. Ha 2 vesszőnél több kell, valószínűleg túl hosszú.
2. **Konkrét üzemi helyzet** absztrakció helyett.
3. **Törd a ritmust** — ne legyen minden kártya azonos szerkezetű/hosszú.
4. **Olvasd fel hangosan.** Ha idegen, át kell írni. Teszt: *„Elmondanám ezt egy ügyféltárgyaláson?"*

\---

## 2\. Ügyfélgondolat-kártya szabály

Ahol a cél, hogy a látogató **magára ismerjen**, a kártya ne szakértői nyelven beszéljen, hanem ügyfélgondolatként:

* \[ ] A **cím egy ügyfél gondolata**, nem SEO-kulcsszó. *(„Nem férünk tőle rendesen." — nem „Por és forgács kezelése".)*
* \[ ] **1 rövid magyarázó bekezdés**, nem mini SEO-cikk.
* \[ ] **Nem ismétli gépiesen** az anyagokat.
* \[ ] **Nem minden kártya azonos szerkezetű** (lásd §1).
* \[ ] Egyértelmű, **milyen konkrét üzemi helyzetről** szól.

**Ügyfélgondolat-kártyában TILOS:** anyagáram, technológiai irány, rendszerlogika, előminősítés, komplex rendszer, „hasznosítható mellékanyag" túl gyakran. *(Ezek a szakmai blokkba és a H2/GYIK-be valók — lásd §4.)*

**Használható címhangok:** „Nem férünk tőle rendesen." · „Már a munka rovására megy." · „Kár lenne csak elvitetni." · „Minden műszak végén ugyanaz a kupac marad." · „Ezt így már nem jó tárolni." · „Túl vegyes, nehéz vele mit kezdeni." · „Állandóan útban van."

> \*\*Példa.\*\* Rossz: \*„Rendezetlen anyagáram — A rendezetlen anyagáram lassítja a termelési folyamatokat."\* → Jó: \*„Már a munka rovására megy. — Ha állandóan pakolni, üríteni és kerülgetni kell, az időt vesz el az üzemtől."\*

\---

## 3\. Mondat- és kifejezésszűrő — „ezt látod → erre cseréld"

|Ha ezt látod (kerülendő)|Erre cseréld|
|-|-|
|fedezze fel, forradalmasítsa, emelje új szintre, lépjen szintet|konkrét üzemi helyzet vagy döntési szempont|
|maximalizálja / optimalizálja folyamatait|„kevesebb pakolás", „rendezettebb üzem", „jobban tervezhető termelés"|
|prémium megoldás (üresen), világszínvonalú, future-proof, game changer|a tényleges műszaki/gazdasági ok|
|innovatív ökoszisztéma, komplex vertikum, corporate|„több ipari technológiai területen dolgozunk: aprítás, szárítás…"|
|decision cockpit, rendszerscope, kapcsolódó spoke, layout, budget|belső funnel-/webszó **tilos publikus szövegben** → természetes magyar|
|garantált megtérülés, biztos eredmény, „minden problémára megoldás"|„a megtérülés az anyagmennyiségtől, üzemórától, energiától… függ"|
|Ipar 4.0 / digitális (konkrét tartalom nélkül)|hagyd ki, vagy nevezd meg a tényleges funkciót|
|„…értékes erőforrássá történő transzformálása" (fordításszag)|„a hulladékból akkor lesz hasznosítható anyag, ha jól elő van készítve"|

**Természetes szókészlet (ezt használd bátran):**

* *Szakmai:* feladat, anyag, mennyiség, nedvesség, szemcseméret, üzemmód, előminősítés, üzemfelmérés, anyagteszt, gépválasztás, rendszerelemek, kapacitás, kopóalkatrész, beüzemelés, megtérülési lehetőség.
* *Üzemi, ügyfélközeli:* tele van vele az üzem, nem férünk tőle, útban van, kerülgetni kell, sok helyet foglal, állandóan pakolni kell, már a munka rovására megy, gyorsan megtelik a tároló, lassítja a munkát, kár lenne elvitetni.

**Mondatszerkesztés:** egy mondat = egy gondolat · kerüld a „…történő" szerkezetet · ne halmozz jelzőt/absztrakt főnevet · a szöveg hangosan felolvasva se legyen idegen.

**Két kötelező formai szabály (gyakori AI-jel):**
- **Címben / H1-ben nincs pont a végén.** (A cím nem mondat.)
- **Kerüld a mondatközi gondolatjelet** (a „ – " jelet, amely két mondatrészt választ el). Ez erősen AI-szagú. Helyette: bontsd két külön mondatra, vagy használj vesszőt, kettőspontot, esetleg zárójelet. (Kötőjel csak szóösszetételben jó, pl. „anyag-előkészítés".)

\---

## 4\. SEO / AISEO entitás-elhelyezés

**Aranyszabály: nem törlünk vakon, hanem áthelyezünk.** Ha egy kifejezés (pl. *anyagáram*, *porleválasztás*, *brikettálás*) egy blokkban művinek hat, **nem töröljük** — áttesszük oda, ahol természetesen működik.

|Entitás IDE való (természetes)|Entitás NE IDE (művivé teszi)|
|-|-|
|H1 / H2 / H3 címek|ügyfélgondolat-kártya|
|technológiai magyarázó blokk|CTA gomb|
|GYIK, döntési szempontok|hero fő üzenet (ha túl művivé teszi)|
|meta title / description, schema, alt|ismétlődő kártyarács|
|belső link anchor, kapuoldal bevezető|minden 2. mondat|

**Átíráskor ne vesszen el** az oldal entitáslistája (faipari hulladék-oldalnál pl.: forgács, fűrészpor, apríték, darabos fahulladék, raklap, darálás, brikettálás, elszívás, porleválasztás, térfogatcsökkentés, üzemi rend) — csak **ne ismétlődjön gépiesen** minden kártyában.

> \*\*Anyagáram-szabály konkrétan:\*\* ügyfélkártyában tilos → szakmai/rendszerblokkban használható. \*„Egy ipari rendszer akkor működik jól, ha az anyagáram a beadagolástól a kész anyagig végig átgondolt."\* — ez jó helyen van.

**Steril-teszt:** ha az átírás után eltűnt minden kereshető fogalom, és „szép próza" maradt → **túl messzire mentél**, vissza kell tenni az entitásokat a fenti jó helyekre.

\---

## 5\. Túlígérés-kapu (kemény szabály)

Ipari technológiánál az eredmény anyag- és üzemfüggő → **soha ne ígérj biztosat.**

* \[ ] Nincs garantált megtérülés / validálatlan százalék / „biztosan alkalmas az Ön anyagára".
* \[ ] Nincs validálatlan projektmennyiség, „piacvezető", számszerűsített SLA fedezet nélkül.
* \[ ] Minden szám a **konkrét + feltétel + következő lépés** formulában áll *(lásd pozicionálás-réteg §4)*: állítás → mitől függ → anyagteszt/előminősítés.

\---

## 6\. Záró három-körös QA — oldalanként

**A) Szerkezeti**

* \[ ] Minden blokk **új döntési szintet** ad (nem ismétel)? Ha nem → összevon vagy kivesz.
* \[ ] Logikus a sorrend, nincs levegőben lógó blokk, nincs túl sok egyforma kártyarács egymás után?
* \[ ] A CTA-k nem versenyeznek egymással (nézetenként 1 elsődleges)?

**B) Nyelvi**

* \[ ] Természetes magyar, úgy hangzik, ahogy egy szakember beszélne egy döntéshozóval?
* \[ ] Nincs AI-szag (§1), fordításszag, felesleges angol/corporate szó, túl hosszú mondat?
* \[ ] A kártyák nem mind azonos szerkezetűek?

**C) Szakmai / konverziós**

* \[ ] Nem ígér túl sokat, nem sugall végleges gépválasztást előzetes adatok nélkül (§5)?
* \[ ] Segíti a következő lépést, nem nyomulós, a CTA azt mondja, amit a látogató ténylegesen megtesz?
* \[ ] Megmaradtak a fontos SEO/AISEO entitások (§4), nem lett túl steril?
* \[ ] Vállalnád ezt a szöveget egy **személyes ügyféltárgyaláson** is?

> Ha bármelyik pont bukik → javítsd, mielőtt élesítesz.

\---

*v1.0 — a QA v2.1 végrehajtható magja. A pozicionálás + üzenetarchitektúra v1.0 alá rendelve, a teljes v2.1 fölé referenciaként. Rögzített döntést (CTA, szín, architektúra) nem ír felül.*

