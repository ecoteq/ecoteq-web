# ECOTEQ.hu navigáció és HUB UX architektúra v1.1

> **v1.1 — összhangba hozva az „általános szabályok" réteggel (2026-06-21).**
> - **Felső nav 7 → 6:** a „Kapcsolat" kikerült a top navból (a footerben, a kapcsolati
>   pontokon és a `/kapcsolat/` oldalon marad elérhető).
> - **CTA-rendszer cserélve** (QA 2.1 §16): „Technológiai irányt kérek" kivezetve →
>   kontextusfüggő locked CTA (header/hero: **„Leírom, mit kell megoldani"**; kapuoldal:
>   **„Leírom az anyagot és a célt"**; submit: **„Elküldöm az alapadatokat"**); hero
>   másodlagos: **„Megnézem a technológiákat"**.
> - CTA-/érv-autoritás: a Stratégia v1.0 és a QA 2.1 §16.

## 0. Dokumentum célja

Ez a dokumentum az új ECOTEQ.hu navigációs, információ-architektúra és HUB UX rendszerének v1.0 specifikációja.

A cél nem egy hagyományos menüszerkezet leírása, hanem annak rögzítése, hogyan vezesse az ECOTEQ.hu a látogatót:

**problémából → technológiai irányba → bizonyíték felé → előminősítő konverzióba → szükség esetén spoke oldalra.**

Az ECOTEQ.hu központi ipari brand HUB.  
Nem gépkatalógus.  
Nem minden technológiát mélyen kifejtő tudástár.  
Nem agresszív ajánlatkérő landing.  

A fő UX-feladat:

- a látogató gyorsan értse, mivel foglalkozik az ECOTEQ,
- saját problémája alapján találjon belépési pontot,
- értse meg a fő technológiai területeket,
- kapjon bizalmi bizonyítékot,
- tudjon ajánlatkérés vagy szakértői előminősítés felé menni,
- a mélyebb szakmai tartalmakhoz a megfelelő spoke oldalra jusson.

---

## 1. Stratégiai UX-alapelv

Az ECOTEQ.hu navigációja kétféle látogatót kezeljen egyszerre.

### 1. Problémával érkező látogató

Ő nem feltétlenül tudja, hogy milyen gépre vagy technológiára van szüksége.

Példák:

- „Sok a faipari hulladék.”
- „Raklapot kellene darálni.”
- „Nedves az alapanyag.”
- „Forgácsból brikettet szeretnénk.”
- „Poros az üzem.”
- „Nem tudom, milyen rendszer kell.”

Neki a **Megoldások** menüpont a természetes belépő.

### 2. Technológiát már ismerő látogató

Ő már tudja, hogy daráló, brikettáló, vákuumszárító, elszívó vagy más technológiai irány érdekli.

Példák:

- „Ipari darálót keresünk.”
- „Brikettáló gépet nézünk.”
- „Vákuumszárító kellene faanyaghoz.”
- „Biomassza-szárító rendszert keresünk.”
- „Elszívástechnikai rendszer kell.”

Neki a **Technológiák** menüpont a természetes belépő.

### Következtetés

A fő navigációban a **Megoldások** és a **Technológiák** külön menüpont legyen.

Nem szabad őket összevonni, mert más keresési és döntési helyzetet kezelnek.

---

## 2. Top navigation — desktop

## Javasolt főmenü

1. Megoldások
2. Technológiák
3. Referenciák
4. Szerviz és alkatrész
5. Rólunk
6. Tudástár

> A **Kapcsolat kikerült a felső navból** (v1.1). A footerben, a kapcsolati pontokon és a
> `/kapcsolat/` oldalon marad elérhető.

## Primer CTA a fejlécben

**Leírom, mit kell megoldani**

URL:

`/ajanlatkeres/`

## Másodlagos CTA opcionálisan

**Megnézem a technológiákat**

URL:

`/#megoldasok`

## Fejléc viselkedés

- Desktopon sticky top nav.
- Görgetés után kompaktabb állapotba válthat.
- A CTA mindig maradjon látható.
- Ne legyen túl magas fejléc.
- Ne takarja túl sokáig a tartalmat.
- A menü szövege legyen rövid és tiszta.
- A fő CTA zöld akcentussal jelenjen meg.
- A nav mozgásai legyenek visszafogottak: 120–200 ms transition.
- `prefers-reduced-motion` tiszteletben tartása kötelező.

## UX-szabály

A navigáció ne akarjon mindent egyszerre megmutatni.  
A cél: gyors orientáció, nem teljes oldaltérkép a fejlécben.

---

## 3. Desktop brand rail

## Döntés

Desktopon használható a **bal oldali navy brand rail + felső nav** kombináció.

## Szerepe

A bal rail nem elsődleges navigáció.  
Nem menühelyettesítő.  
Nem kell sok funkciót kapnia.

Feladata:

- prémium ipari brand-frame érzés,
- erős vizuális megkülönböztetés,
- nagyobb oldalaknál stabil ECOTEQ jelenlét,
- Liebherr / UNTHA / WEIMA jellegű ipari komolyság erősítése.

## Javasolt tartalom a railen

- ECOTEQ logó vagy rövidített brand marker,
- opcionális függőleges „ECOTEQ” felirat,
- opcionális minimál kontakt ikon vagy CTA jelzés,
- nincs hosszú szöveg,
- nincs fő navigáció.

## Desktop szabályok

- Csak nagyobb képernyőn jelenjen meg.
- Javasolt breakpoint: `min-width: 1024px` vagy `min-width: 1200px`.
- Legyen keskeny.
- Ne vegyen el érdemi tartalmi helyet.
- Ne rontsa a hero és fő tartalmak olvashatóságát.
- Ne okozzon horizontális scrollt.
- Ha a design system másképp dönt, akkor a tartalom ne törjön el rail nélkül sem.

## Mobil/tablet szabályok

- Mobilon teljesen tűnjön el.
- Kisebb tableten szintén ne jelenjen meg, ha szűkíti a tartalmat.
- A mobil UX kizárólag top nav + hamburger + CTA logikára épüljön.

---

## 4. Mega menu architektúra

Az ECOTEQ.hu esetében két mega menu indokolt:

1. Megoldások
2. Technológiák

A többi főmenü egyszerű link legyen.

---

# 4.1 Megoldások mega menu

## Funkció

A problémával érkező látogatót segíti.

Ez ne géptípus-lista legyen, hanem üzemi helyzetek szerint vezessen.

## Menü címe

**Megoldások üzemi feladatra**

## Rövid magyarázat

„Válasszon abból kiindulva, milyen anyaggal vagy üzemi problémával dolgozik. Ha nem egyértelmű a technológia, segítünk irányt választani.”

## Javasolt menüpontok

### Faipari hulladék kezelése

URL:

`/megoldasok/faipari-hulladek-kezelese/`

Leírás:

Forgács, por, apríték, fahulladék és faipari mellékanyag rendezettebb kezelése, hasznosítása vagy továbbfeldolgozása.

Kapcsolódó technológiák:

- ipari darálás,
- brikettálás,
- elszívás,
- anyagmozgatás,
- biomassza-szárítás.

### Raklap és csomagolóanyag darálása

URL:

`/megoldasok/raklap-es-csomagoloanyag-daralasa/`

Leírás:

Raklap, láda, csomagolófa és ipari csomagolóanyag térfogatcsökkentése és előkészítése.

Kapcsolódó technológiák:

- ipari darálás,
- szeparálás,
- anyagmozgatás.

### Forgács, por és apríték hasznosítása

URL:

`/megoldasok/forgacs-por-apritek-hasznositasa/`

Leírás:

Laza mellékanyag tömörítése, szárítása, brikettálása vagy pelletálása saját felhasználásra vagy értékesítésre.

Kapcsolódó technológiák:

- brikettálás,
- pelletálás,
- biomassza-szárítás,
- elszívás,
- anyagmozgatás.

### Nedves biomassza előkészítése

URL:

`/megoldasok/nedves-biomassza-elokeszitese/`

Leírás:

Magas vagy ingadozó nedvességtartalmú biomassza előkészítése szárításhoz, brikettáláshoz, pelletáláshoz vagy energetikai felhasználáshoz.

Kapcsolódó technológiák:

- biomassza-szárítás,
- ipari darálás,
- pelletálás,
- brikettálás,
- anyagmozgatás.

### Faanyag szárítása és kezelése

URL:

`/megoldasok/faanyag-szaritasa-es-kezelese/`

Leírás:

Faanyag kontrollált szárítása, vákuumszárítása, impregnálása vagy speciális kezelése faipari üzemeknek.

Kapcsolódó technológiák:

- vákuumszárítás,
- vákuumimpregnálás,
- anyagmozgatás.

### Ipari por és elszívási problémák

URL:

`/megoldasok/ipari-por-es-elszivasi-problemak/`

Leírás:

Por, forgács, technológiai levegő és elszívott anyag kezelése faipari és ipari környezetben.

Kapcsolódó technológiák:

- elszívás és porleválasztás,
- brikettálás,
- anyagmozgatás.

### Komplett anyagáram-rendszerek

URL:

`/megoldasok/komplett-anyagaram-rendszerek/`

Leírás:

Darálás, szárítás, tömörítés, elszívás, adagolás és anyagmozgatás összekapcsolása működő technológiai rendszerré.

Kapcsolódó technológiák:

- ipari darálás,
- brikettálás,
- pelletálás,
- biomassza-szárítás,
- elszívás,
- anyagmozgatás.

### Nem tudom, milyen technológia kell

URL:

`/ajanlatkeres/?need=unknown`

Leírás:

Ha a feladat ismert, de a technológiai irány még nem, küldje el az alapadatokat, és segítünk szűkíteni a lehetőségeket.

## Megoldások mega menu CTA

**Nem tudom, milyen technológia kell**

URL:

`/ajanlatkeres/?need=unknown`

## UX-megjegyzés

A Megoldások menü ne legyen túl hosszú.  
Desktopon kétoszlopos vagy háromoszlopos grid használható.  
Minden elemnél legyen:

- cím,
- 1 mondatos leírás,
- 2–4 kapcsolódó technológia chip,
- nyíl ikon.

---

# 4.2 Technológiák mega menu

## Funkció

A technológiát már ismerő látogatót vezeti.

## Menü címe

**Technológiai területek**

## Rövid magyarázat

„Ha már tudja, melyik technológiai irány érdekli, innen induljon.”

## Javasolt menüpontok

### Ipari darálás

URL:

`/technologiak/ipari-daralas/`

Leírás:

Fa, raklap, műanyag, biomassza és ipari hulladék térfogatcsökkentése, frakcióképzése és továbbfeldolgozásra való előkészítése.

Spoke:

`https://iparidaralo.hu`

### Brikettálás

URL:

`/technologiak/brikettalas/`

Leírás:

Forgács, por, fűrészpor, apríték és biomassza tömörítése kezelhető vagy értékesíthető briketté.

Spoke:

`https://brikettalo.hu`

### Pelletálás

URL:

`/technologiak/pelletalas/`

Leírás:

Biomassza és faipari alapanyag előkészítése és tömörítése egységes pellet formába.

Spoke:

MVP-ben ECOTEQ.hu kapuoldal. Később dedikált spoke vagy landing döntendő.

### Biomassza-szárítás

URL:

`/technologiak/biomassza-szaritas/`

Leírás:

Nedves biomassza, apríték, fűrészpor vagy mellékanyag nedvességtartalmának csökkentése további feldolgozáshoz.

Spoke:

MVP-ben ECOTEQ.hu kapuoldal. Később dedikált spoke vagy landing döntendő.

### Vákuumszárítás

URL:

`/technologiak/vakuumszaritas/`

Leírás:

Faanyag kontrollált, gyorsabb és kiszámíthatóbb szárítása faipari üzemeknek.

Spoke:

`https://vakuumszarito.hu`

### Vákuumimpregnálás

URL:

`/technologiak/vakuumimpregnalas/`

Leírás:

Faanyag vákuumos kezelése, impregnálása és ipari felhasználásra való előkészítése.

Spoke:

`https://vakuumszarito.hu`

### Elszívás és porleválasztás

URL:

`/technologiak/elszivas-porlevalasztas/`

Leírás:

Por, forgács, technológiai levegő és elszívott anyag kezelése ipari és faipari környezetben.

Spoke:

MVP-ben ECOTEQ.hu kapuoldal. Később dedikált spoke csak akkor, ha üzletileg indokolt.

### Anyagmozgatás és rendszerelemek

URL:

`/technologiak/anyagmozgas-rendszerelemek/`

Leírás:

Szalagok, csigák, silók, adagolók, mágnesek, szeparátorok és kiegészítő elemek a stabil anyagáramhoz.

Spoke:

MVP-ben ECOTEQ.hu kapuoldal.

## Technológiák mega menu CTA

**Technológiát választok feladathoz**

URL:

`/ajanlatkeres/?source=technology-menu`

## UX-megjegyzés

A Technológiák menü lehet vizuálisan erősebb, mint a Megoldások menü.

Javasolt:

- 8 technológiai kártya,
- kicsi tag: „Kapuoldal” vagy „Részletes oldal is elérhető”,
- spoke link csak másodlagos szinten,
- ne vigye el túl korán a látogatót az ECOTEQ.hu-ról.

---

## 5. Egyszerű főmenüpontok

## Referenciák

URL:

`/referenciak/`

Szerep:

Bizalmi oldal. Megvalósított rendszerek, iparágak, technológiák, logók és rövid projektkártyák.

Menü tooltip / microcopy:

„Valós ipari projektek, technológiák és ügyféltípusok szerint rendezve.”

## Szerviz és alkatrész

URL:

`/szerviz-es-alkatresz/`

Szerep:

A vásárlás utáni bizalom építése. Nem csak leadgenerálás, hanem kockázatcsökkentés.

Menü tooltip / microcopy:

„Szerviz, alkatrész, támogatás és hosszabb távú üzemeltetési háttér.”

## Rólunk

URL:

`/rolunk/`

Szerep:

Márkabizalom, ECOTEQ történet, szemlélet, partneri háttér, rendszerintegrátori pozíció.

Menü tooltip / microcopy:

„Kik vagyunk, hogyan gondolkodunk, és miért rendszerben dolgozunk.”

## Tudástár

URL:

`/tudastar/`

Szerep:

AISEO, edukáció, döntéstámogatás, zero-click válaszok.

Menü tooltip / microcopy:

„Gyakorlati útmutatók ipari darálásról, brikettálásról, szárításról és anyagáramokról.”

## Kapcsolat

URL:

`/kapcsolat/`

Szerep:

Cégadatok, elérhetőségek, térkép, általános kapcsolatfelvétel.

Menü tooltip / microcopy:

„Elérhetőségek, cégadatok és közvetlen kapcsolat.”

---

## 6. Mobil navigáció

## Alapelv

Mobilon ne másoljuk át a desktop mega menüt teljes mélységben.  
A cél: gyors választás és könnyű CTA.

## Mobil fejléc

Tartalom:

- ECOTEQ logó,
- hamburger menü,
- opcionális rövid CTA gomb: „Leírom a feladatot”.

## Mobil menüstruktúra

### Első szint

1. Megoldások
2. Technológiák
3. Referenciák
4. Szerviz és alkatrész
5. Rólunk
6. Tudástár
7. Leírom, mit kell megoldani

> (A Kapcsolat a mobil menüből is kikerült a top szintről; a footerben és a `/kapcsolat/`
> oldalon érhető el.)

### Megoldások lenyitva

- Faipari hulladék kezelése
- Raklap és csomagolóanyag darálása
- Forgács, por és apríték hasznosítása
- Nedves biomassza előkészítése
- Faanyag szárítása és kezelése
- Ipari por és elszívási problémák
- Komplett anyagáram-rendszerek
- Nem tudom, milyen technológia kell

### Technológiák lenyitva

- Ipari darálás
- Brikettálás
- Pelletálás
- Biomassza-szárítás
- Vákuumszárítás
- Vákuumimpregnálás
- Elszívás és porleválasztás
- Anyagmozgatás és rendszerelemek

## Mobil CTA sticky

Mobilon érdemes alsó sticky CTA-t használni, de csak visszafogottan.

Javasolt CTA:

**Leírom, mit kell megoldani**

Viselkedés:

- csak scroll után jelenjen meg,
- ne takarja a tartalmat,
- zárható vagy természetesen alul rögzített lehet,
- űrlapoldalon ne duplikálja zavaróan a submit gombot.

---

## 7. Főoldali HUB útvonal

A főoldal ne legyen túl hosszú, ne ismételje magát, és ne viselkedjen agresszív landingként.

## Elfogadott főoldali sorrend

1. Hero
2. Technológiai kapuk
3. Probléma-alapú belépő
4. Rendszerszemlélet — navy márkapillanat
5. Referenciák
6. Gyártói és technológiai háttér
7. Hogyan indul egy projekt?
8. Miért ECOTEQ?
9. Tudástár
10. Előminősítő űrlap
11. Záró CTA
12. Footer

## Szekciófunkciók

### 1. Hero

Feladat:

- azonnal pozicionálja az ECOTEQ-et,
- mutassa, hogy ipari hulladék- és biomassza-feldolgozó rendszerekről van szó,
- ne gépet, hanem technológiai irányt ígérjen.

CTA:

- Leírom, mit kell megoldani
- Megnézem a technológiákat

### 2. Technológiai kapuk

Feladat:

- egy helyen mutassa a 8 fő technológiai területet,
- ne ismétlődjön külön „gyors választó” és „fő technológiák” blokkban.

Javasolt megoldás:

8 kártya, mindegyiknél:

- feladatvezérelt cím,
- kis technológiai tag,
- 1 sor magyarázat,
- nyíl.

Példa:

Cím: „Fa, raklap, műanyag vagy vegyes hulladék aprítása”  
Tag: „Ipari darálás”

### 3. Probléma-alapú belépő

Feladat:

A bizonytalan látogatót saját üzemi problémája alapján vezeti.

### 4. Rendszerszemlélet — navy márkapillanat

Feladat:

Erős márkaállítás.  
Nem számozott folyamat.

Javasolt főmondat:

**Nem gépet választunk először. Anyagot, célt és üzemi realitást tisztázunk.**

Tartalom:

- anyag,
- mennyiség,
- nedvesség,
- cél,
- hely,
- energia,
- üzemeltetés,
- megtérülési realitás.

### 5. Referenciák

Feladat:

Bizonyíték.  
Ne legyen túl hosszú.  
3–6 kártya + logófal + link a referenciaoldalra.

### 6. Gyártói és technológiai háttér

Feladat:

Megmutatja, hogy van európai technológiai háttér, de az ECOTEQ nem egyetlen gyártót tol minden helyzetre.

### 7. Hogyan indul egy projekt?

Feladat:

Csökkenti a bizonytalanságot.  
Itt jöhet a számozott folyamat.

### 8. Miért ECOTEQ?

Feladat:

Rendszerszemlélet, ipari fókusz, magyar támogatás, európai háttér, üzleti realitás.

### 9. Tudástár

Feladat:

Döntéstámogató és AISEO blokk.  
Csak 3–4 kiemelt cikk / útmutató.

### 10. Előminősítő űrlap

Feladat:

Konverzió.

Fontos:

Az űrlap legyen progresszív. Első lépésben minimális mezők.

Első lépés mezői:

- név,
- cég,
- e-mail vagy telefon,
- anyag,
- mennyiség,
- cél.

Második lépés opcionális:

- nedvesség,
- telepítés helye,
- energia,
- fotó/videó,
- megjegyzés,
- érdeklődési technológia.

### 11. Záró CTA

Feladat:

A bizonytalan látogatót is továbbviszi.

### 12. Footer

Feladat:

Oldaltérkép, cégadat, belső linkháló, jogi oldalak, spoke linkek.

---

## 8. Footer architektúra

## Rövid cégszöveg

Az ECOTEQ ipari hulladék- és biomassza-feldolgozó rendszerek tervezésével, értékesítésével és támogatásával foglalkozik. Fő területeink: ipari darálás, brikettálás, pelletálás, biomassza-szárítás, vákuumszárítás, vákuumimpregnálás, elszívás, porleválasztás és anyagmozgatás.

## Footer oszlopok

### Megoldások

- Faipari hulladék kezelése
- Raklap és csomagolóanyag darálása
- Forgács és por hasznosítása
- Nedves biomassza előkészítése
- Faanyag szárítása és kezelése
- Komplett anyagáram-rendszerek

### Technológiák

- Ipari darálás
- Brikettálás
- Pelletálás
- Biomassza-szárítás
- Vákuumszárítás
- Vákuumimpregnálás
- Elszívás és porleválasztás
- Anyagmozgatás és rendszerelemek

### ECOTEQ

- Rólunk
- Referenciák
- Szerviz és alkatrész
- Tudástár
- Kapcsolat
- Ajánlatkérés

### Kapcsolódó oldalak

- iparidaralo.hu
- brikettalo.hu
- vakuumszarito.hu
- raklapdaralo.hu

### Kapcsolat

ECOTEQ Kft.  
1037 Budapest, Csillaghegyi út 19–21.  
E-mail: info@ecoteq.hu  
Telefon: +36 1 430-1556

## Footer CTA

**Leírom, mit kell megoldani**

URL:

`/ajanlatkeres/`

---

## 9. Belső linkelési szabályok

## HUB → technológiai kapuoldal

A főoldalról minden technológiai kapuoldal kapjon linket.

## Technológiai kapuoldal → kapcsolódó technológiák

Minden kapuoldal linkeljen 2–5 kapcsolódó ECOTEQ technológiai oldalra.

Példa brikettálás:

- ipari darálás,
- biomassza-szárítás,
- pelletálás,
- anyagmozgatás.

## Technológiai kapuoldal → spoke

Csak ott legyen erős spoke link, ahol valódi dedikált oldal van:

- ipari darálás → iparidaralo.hu,
- brikettálás → brikettalo.hu,
- vákuumszárítás → vakuumszarito.hu,
- vákuumimpregnálás → vakuumszarito.hu,
- raklapdarálás → raklapdaralo.hu, ha aktív.

## Megoldásoldal → technológiák

Minden megoldásoldal több technológiára linkeljen, mert üzemi problémából indul.

## Tudástár → kapuoldalak

A tudástár cikkekből mindig legyen visszalink a releváns kapuoldalra és ajánlatkérésre.

## Ne legyen

- minden oldalról minden oldalra linkelés,
- túl sok azonos anchor,
- agresszív külső domainre küldés túl korán,
- spoke oldal, amely kiváltja az ECOTEQ.hu kapuoldalt.

---

## 10. CTA-rendszer

## Primer CTA

**Leírom, mit kell megoldani** *(header/hero default)*

Használat:

- főoldali hero,
- top nav fejléc,
- főoldali záró CTA,
- mobil sticky.

> Kapuoldalon (megoldás-tudatos) a primer CTA: **Leírom az anyagot és a célt**.

URL:

`/ajanlatkeres/`

## Űrlap CTA

**Elküldöm az alapadatokat**

Használat:

- ajánlatkérési / előminősítő űrlap submit.

## Problémaalapú CTA

**Leírom a feladatot**

Használat:

- probléma-alapú belépők,
- bizonytalan látogatók.

## Anyagalapú CTA

**Leírom az anyagot és a célt**

Használat:

- anyagblokkok,
- kapuoldalak.

## Kapcsolódó technológia CTA

**Kapcsolódó technológiák megtekintése**

Használat:

- kapuoldalak,
- záró CTA másodlagos gomb.

## Spoke CTA

**Részletes gépválasztó és tudástár**

Használat:

- csak dedikált spoke esetén.

## Nem javasolt CTA-k

- „Vásárlás”
- „Kosárba teszem”
- „Azonnali ajánlat”
- „Garantált megtérülést kérek”
- „Legjobb ár”
- „Akciós gépek”

---

## 11. Ajánlatkérés / előminősítő funnel

## Oldal URL

`/ajanlatkeres/`

## Funnel elv

Az ajánlatkérés ne klasszikus kapcsolatfelvételi űrlap legyen, hanem szakértői előminősítő folyamat.

## Első lépés — minimális belépés

Mezők:

- név,
- cég,
- e-mail vagy telefon,
- anyag,
- mennyiség,
- cél.

CTA:

**Tovább a részletekhez**

## Második lépés — opcionális részletek

Mezők:

- érdeklődési technológia,
- nedvesség,
- telepítés helye,
- rendelkezésre álló energia,
- jelenlegi kezelés,
- fotó / videó feltöltés,
- megjegyzés.

CTA:

**Elküldöm az alapadatokat**

## Köszönő oldal

URL:

`/koszonjuk/`

Üzenet:

„Köszönjük, megkaptuk a projekt alapadatait. Munkanapokon előszűrjük a megkereséseket, és jellemzően 24 órán belül visszajelzünk a következő lépésről.”

## Lead source paraméterek

A CTA-k adják át a kontextust query paraméterrel.

Példák:

- `/ajanlatkeres/?tech=ipari-daralas`
- `/ajanlatkeres/?tech=brikettalas`
- `/ajanlatkeres/?tech=vakuumszaritas`
- `/ajanlatkeres/?need=unknown`
- `/ajanlatkeres/?source=footer`
- `/ajanlatkeres/?source=mobile-sticky`

---

## 12. Spoke átvezetési szabály

## Alapelv

A spoke oldalak mély szakmai és SEO/AISEO célra szolgálnak, de az ECOTEQ.hu-nak nem szabad túl korán elveszítenie a látogatót.

## Mikor linkeljünk spoke-ra?

- amikor a látogató már megértette a technológiai irányt,
- kapcsolódó szakmai oldalak blokkban,
- kapuoldal végén,
- footer kapcsolódó oldalak között,
- tudástár cikkekből.

## Mikor ne?

- top nav elsődleges kattintásként ne küldjük rögtön külső domainre,
- hero primer CTA ne spoke legyen,
- bizonytalan látogatót ne vigyük azonnal mély technológiai oldalra.

## Javasolt anchor szövegek

- Részletes ipari daráló tudástár és gépválasztó
- Részletes brikettáló gépválasztó és kalkulátor
- Részletes vákuumszárító oldal megnyitása
- Kapcsolódó szakmai oldal megnyitása

---

## 13. Design / UI viselkedési szabályok

## Általános vizuális irány

- tiszta,
- robusztus,
- ipari,
- prémium,
- bőséges whitespace,
- nem zsúfolt,
- nem túlmozgó,
- nem túlmarketingelt.

## Javasolt ritmus

- világos / törtfehér szekciók,
- világosszürke váltások,
- egyetlen erős navy teljes szélességű márkaszekció,
- zöld kizárólag CTA-ra és finom akcentusra,
- kártyák visszafogott hoverrel.

## Kártyák

Kártyaelemek:

- tag,
- cím,
- 1 rövid mondat,
- opcionális chip,
- nyíl ikon.

## Mozgások

- 120–200 ms,
- csendes hover,
- nincs túlzott parallax,
- nincs agresszív scroll animation,
- `prefers-reduced-motion` támogatás kötelező.

## Képek

- valós ipari képek előnyben,
- stock-hatás kerülendő,
- gép + anyagáram + környezet jobb, mint izolált gépfotó,
- minden kép kapjon SEO és accessibility szempontból értelmes alt szöveget.

---

## 14. Accessibility és performance szabályok

## Accessibility

- A menük legyenek billentyűzettel kezelhetők.
- Mega menu nyitható és zárható legyen billentyűzettel is.
- Fókuszállapot látható legyen.
- CTA-k kontrasztja feleljen meg az elvárásoknak.
- Ne csak szín jelezzen állapotot.
- Mobilmenüben egyértelmű legyen a nyitott / zárt állapot.
- `aria-expanded`, `aria-controls`, `aria-label` használata indokolt helyeken.

## Performance

- Astro static-first megközelítés.
- Minimális JavaScript.
- Mega menu működhet könnyű client-side interakcióval, de ne húzzon be felesleges framework-terhet.
- Képek optimalizálva.
- Fontbetöltés kontrollált.
- Vizuális effektek ne rontsák a Core Web Vitals értékeket.

---

## 15. SEO / AISEO navigációs szabályok

## Oldalstruktúra

Minden fontos témának legyen saját, indexelhető belépőoldala.

## H1-szabály

Minden oldalon egy H1.

## Breadcrumb

Minden aloldalon legyen breadcrumb.

Példa:

`Főoldal / Technológiák / Brikettálás`

## llms.txt / llms-full.txt

MVP után, amikor a sitemap stabil, készüljön:

- `/llms.txt`
- `/llms-full.txt`

Tartalom:

- ECOTEQ entitás,
- fő technológiák,
- kapuoldalak,
- spoke oldalak,
- kapcsolódó domainek,
- ajánlatkérési út,
- cégadatok.

## Schema javaslat

- Organization
- WebSite
- BreadcrumbList
- WebPage
- FAQPage azokon az oldalakon, ahol valóban van látható GYIK
- Service schema csak óvatosan, validált és nem túltermékesített tartalommal

---

## 16. Claude Code implementációs irány

## Fájl- és komponensjavaslat

### Layout

- `src/layouts/BaseLayout.astro`
- `src/layouts/PageLayout.astro`

### Navigáció

- `src/components/navigation/Header.astro`
- `src/components/navigation/MegaMenu.astro`
- `src/components/navigation/MobileMenu.astro`
- `src/components/navigation/BrandRail.astro`
- `src/components/navigation/Breadcrumbs.astro`

### CTA

- `src/components/cta/PrimaryCTA.astro`
- `src/components/cta/FinalCTA.astro`
- `src/components/cta/MobileStickyCTA.astro`

### Footer

- `src/components/footer/Footer.astro`

### Adat

- `src/content/navigation.ts`
- `src/content/technologies.ts`
- `src/content/solutions.ts`
- `src/content/footer.ts`

## Navigation data structure

```ts
export const mainNav = [
  { label: "Megoldások", type: "mega", key: "solutions" },
  { label: "Technológiák", type: "mega", key: "technologies" },
  { label: "Referenciák", href: "/referenciak/" },
  { label: "Szerviz és alkatrész", href: "/szerviz-es-alkatresz/" },
  { label: "Rólunk", href: "/rolunk/" },
  { label: "Tudástár", href: "/tudastar/" },
  // Kapcsolat kikerült a top navból (v1.1) — footerben + /kapcsolat/ oldalon marad.
];

export const primaryNavCta = {
  // Header/hero default; kapuoldalon "Leírom az anyagot és a célt" (kontextusfüggő).
  label: "Leírom, mit kell megoldani",
  href: "/ajanlatkeres/",
};
```

## Technology item data structure

```ts
export const technologies = [
  {
    label: "Ipari darálás",
    href: "/technologiak/ipari-daralas/",
    description:
      "Fa, raklap, műanyag, biomassza és ipari hulladék előkészítése.",
    spoke: "https://iparidaralo.hu",
    tags: ["darálás", "előaprítás", "anyag-előkészítés"],
  },
];
```

## Solution item data structure

```ts
export const solutions = [
  {
    label: "Faipari hulladék kezelése",
    href: "/megoldasok/faipari-hulladek-kezelese/",
    description:
      "Forgács, por, apríték, fahulladék és faipari mellékanyag rendezettebb kezelése.",
    relatedTech: ["ipari-daralas", "brikettalas", "elszivas", "anyagmozgas"],
  },
];
```

---

## 17. MVP / Phase bontás

## MVP-ben kötelező

- top nav,
- Megoldások mega menu,
- Technológiák mega menu,
- desktop brand rail, ha design szerint működik,
- mobil nav,
- footer,
- ajánlatkérés CTA rendszer,
- technológiai kapuoldalak linkelése,
- spoke linkek visszafogott elhelyezése,
- breadcrumb,
- alap schema,
- progresszív előminősítő űrlap első verziója.

## Phase 1.5

- megoldásoldalak mélyebb kidolgozása,
- iparági oldalak,
- anyagalapú oldalak,
- szűrhető referenciarendszer,
- fejlettebb lead scoring,
- Bigin / n8n / Telegram integráció,
- llms.txt és llms-full.txt finomított verzió,
- AI citation monitoring.

---

## 18. Elfogadási kritériumok

A navigáció és HUB UX akkor tekinthető késznek, ha:

- a látogató problémából és technológiából is tud indulni,
- a top nav nem túlzsúfolt,
- a mega menük érthetők és nem katalógusszagúak,
- a mobil navigáció egyszerű,
- a primer CTA minden kritikus ponton elérhető,
- a spoke oldalakra nem túl korán viszünk ki látogatót,
- minden technológiai kapuoldal elérhető,
- a footer támogatja a teljes oldaltérképet,
- az ajánlatkérési út szakértői előminősítésként működik,
- a design prémium, ipari, nyugodt és nem túlmarketingelt,
- a rendszer teljesíti az accessibility és performance alapkövetelményeket.

---

## 19. Rövid végső állítás

Az ECOTEQ.hu navigációjának nem az a feladata, hogy mindent egyszerre megmutasson.

Az a feladata, hogy egy magyar B2B ipari döntéshozót gyorsan eljuttasson oda, hogy:

1. felismerje a saját üzemi problémáját,
2. megértse a lehetséges technológiai irányokat,
3. lássa az ECOTEQ rendszerszemléletét és hitelességét,
4. tudjon szakmai előminősítést kérni,
5. szükség esetén átmenjen a megfelelő mély spoke oldalra.
