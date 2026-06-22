# ECOTEQ.hu HUB Master Spec v1.1 — alapirány

> **v1.1 — összhangba hozva az „általános szabályok" réteggel (2026-06-21).**
> Ez a doksi a hub source-of-truth. A három vezérdokumentum FÖLÉ rendelve dolgozik,
> rögzített sorrendben (lásd `project docs/általános szabályok/`):
> 1. **Stratégiai pozicionálás és üzenetarchitektúra v1.0** → *mi a nyerő érv*
> 2. **Copy QA-mag v1.0** → *hogyan szóljon*
> 3. **QA v2.1** → *referencia-függelék (csak kétségnél)*
>
> **v1.1 changelog (mit változtattunk a v1.0-hoz képest):**
> - **Hero H1 → A/B teszt.** Régi locked H1 kivezetve. **B = éles default** („Ipari
>   hulladékból kezelhető anyag"), **A = kihívó** („A jó technológia
>   nem géppel kezdődik, hanem az anyaggal." — *technológia*, nem *rendszer*).
>   Az **„anyagáram" entitás áthelyezve** a heróból a rendszerszemlélet-blokkba (H2) +
>   meta descriptionbe (nem veszett el, csak helyet váltott).
> - **CTA-rendszer cserélve.** A „Technológiai irányt kérek" / „Technológiai javaslatot
>   kérek" KIVEZETVE (QA 2.1 §16 kifejezetten kerülendő fő CTA-ként). Az új kanonikus
>   készlet a locked listából + QA §16 „jobb CTA-k".
> - **Felső nav 7 → 6.** A „Kapcsolat" kikerült a felső menüből (a footerben és a
>   kapcsolati pontokon marad).
> - **Érv-réteg beemelve** (3 értékpillér, versenytárs-keret, kétsávos mondat,
>   tudatossági szintek, 8-spoke variációs rendszer, bizonyíték-létra) — összefoglalva,
>   autoritás a Stratégia v1.0.
> - **Cégadatok rögzítve:** 2008 óta; 10+ gyártó/beszállító partner; „jellemzően 24 órán
>   belül visszajelzés" (microcopy, nem headline-SLA). Valós referenciák: `[VALIDÁLANDÓ]`.

---

## 1. Stratégiai döntés

Az új ECOTEQ.hu nem gépkatalógus, nem klasszikus landing oldal és nem minden
technológiát mélyen kifejtő tudástár.

Az új ECOTEQ.hu szerepe:

**az ECOTEQ központi ipari márkaoldala, amely bemutatja a cég rendszerben gondolkodó
szakértelmét, a fő technológiai irányokat, a referenciákat, a gyártói/partneri hátteret,
és elegánsan továbbvezeti a látogatót a megfelelő technológiai spoke oldalra vagy
ajánlatkérési útra.**

A látogató érzése:

> „Jó helyen vagyok. Ezek nem csak gépet akarnak eladni, hanem értik az anyagomat, az
> üzememet, a problémámat és a megtérülési logikát."

---

## 1.5 Érvelési réteg — a nyerő érv (autoritás: Stratégia v1.0)

A masterspec a *struktúrát* és a *rögzített döntéseket* adja; az *érvet* a Stratégia v1.0.
Az alábbi az operatív sűrítmény — konfliktusnál a Stratégia v1.0 és ez a masterspec együtt
győz a QA-réteg felett.

**A nagy gondolat (minden oldal alatt fusson):**
> Nem az a kérdés, melyik gép a legjobb, hanem hogy az anyaggal egyáltalán mit érdemes
> kezdeni. Aki előbb a gépet választja, később fizet rá. Az ECOTEQ ezért előbb az anyagot
> érti meg, és csak azt ajánlja, ami a feladatból következik.

**Kivel szemben nyerünk** (ide ütünk, finoman): „nem csinálok semmit" (a jelenlegi
állapotnak is ára van) · gyártói képviselő (egy márka) → mi **függetlenek** vagyunk ·
katalógus-kereskedő (gépet árul) → mi a **feladatot** értjük · mérnökiroda (túllő) → mi
**csak az indokolt scope-ot** · használtgép (nincs felelős) → mi **végig ott vagyunk**.

**A három értékpillér** (más vezet oldalanként — lásd kapuoldal-variáció, 7. szakasz):
1. **Függetlenség** — azt ajánljuk, ami illik, nem amit gyártunk.
2. **Anyag-először** — a feladatot minősítjük elő, nem gépet sózunk rá.
3. **Végig ott vagyunk** — tervezéstől szervizig, a megtérülésig.

> Ez a három pillér az **értéket** írja le (*miért* minket). Külön él a főoldali
> rendszerszemlélet-blokk három **folyamat**-lépésétől (Anyag és mennyiség / Technológiai
> irány / Működő rendszer = *hogyan* dolgozunk). A kettő kiegészíti egymást, ne keveredjen.

**A kétsávos mondat (signature minta):** a legjobb blokk egyetlen mondatban szolgálja ki a
műszaki és az üzleti döntéshozót — **műszaki tény + gazdasági következmény** összekötve
(„ha az anyag már száraz és megfelelő méretű, sokszor nem kell külön előkészítő gép — ami
a beruházást és az üzemórát is lejjebb viszi").

**Tudatossági szint — 1 oldal = 1 szint = 1 elsődleges CTA:**
- Főoldal → **probléma-tudatos** (rövidúttal a megoldás-tudatosnak).
- Technológiai kapuoldal → **megoldás-tudatos**.
- Spoke / gépválasztó / ajánlatkérés → **termék-tudatos**.
- Tudástár → **nem tudatos / probléma-tudatos**.

**Bizonyíték:** a kulcsoldalakon a bizonyíték-létra 4–5. fokáig (konkrét anyag/kapacitás-
spec, referencia-idézet). Ahol nincs validált adat (szám, kapacitás, referencia), **ne
találj ki** — `[VALIDÁLANDÓ]` jelölő + a végén lista, mit kell beszerezni.

**A hét nem-alkudható szabály (ezt nézd ELŐSZÖR, oldalanként):** 1) Anyag és cél előbb,
gép utóbb. 2) A függetlenség (és hogy a vevővel vagyunk) látszódjon minden kulcsoldalon. 3) Egy oldal = egy tudatossági
szint = egy elsődleges (locked) CTA. 4) Konkrét + feltétel + következő lépés — sosem
túlígérő. 5) Kétsávos mondat. 6) Nyolc oldal, nyolc nyitás. 7) Csak az indokolt scope.

---

## 2. Végleges HUB–SPOKE elv

### ECOTEQ.hu-n marad

Minden technológiáról legyen egy-egy rövid, prémium, áttekintő kapuoldal. Céljuk:
megmutatni, mire való a technológia, milyen üzemi problémára ad választ, milyen anyagoknál
és iparágaknál releváns, hogyan illeszkedik rendszerbe, mi az ECOTEQ szerepe, és hová
érdemes továbbmenni.

### Spoke oldalakra megy

A részletes tartalom, kalkulátor, gépválasztó, tudástár és mély SEO/AISEO anyag külön
spoke oldalon vagy dedikált domainen legyen. Példák: ipari darálás → iparidaralo.hu;
brikettálás → brikettalo.hu; vákuumszárítás és faimpregnálás → vakuumszarito.hu;
raklapdarálás → raklapdaralo.hu; biomassza-szárítás és pelletálás → később külön spoke.

> **Nincs ROI-kalkulátor az MVP hubon** (locked). A mély eszközök a spoke-okon élnek.

---

## 3. Fő navigáció

### Felső menü (6 elem)

1. Megoldások
2. Technológiák
3. Referenciák
4. Szerviz és alkatrész
5. Rólunk
6. Tudástár

> A **Kapcsolat kikerült a felső navból** (v1.1). A kapcsolat a footerben, a kapcsolati
> pontokon és a CTA-utakon érhető el.

**Főoldali hero — elsődleges CTA:** **Leírom, mit kell megoldani** *(locked)*
**Másodlagos CTA:** **Megnézem a technológiákat**

---

## 4. „Megoldások" menü logikája

A „Megoldások" ne géptípus szerint induljon, hanem ügyfélhelyzet szerint. Javasolt
belépők: Faipari hulladék kezelése · Raklap és csomagolóanyag darálása · Forgács, por és
apríték hasznosítása · Nedves biomassza előkészítése · Faanyag szárítása és kezelése ·
Ipari por és elszívási problémák · Komplett anyagáram-rendszerek · (és a bizonytalan
látogatónak: *Nem tudom, mi kell — segítsenek választani*).

Ez UX-ben erősebb, mert a látogató sokszor nem technológianévvel érkezik, hanem problémával.

---

## 5. „Technológiák" menü logikája

Tiszta technológiai bontás, 8 kapuoldal: Ipari darálás · Brikettálás · Pelletálás ·
Biomassza-szárítás · Vákuumszárítás · Vákuumimpregnálás · Elszívás és porleválasztás ·
Anyagmozgatás és rendszerelemek. Mindegyik rövid, elegáns, prémium áttekintés — nem
hosszú tudástár.

---

## 6. Főoldal blokksorrend

> Tudatossági szint: **probléma-tudatos**, egy elsődleges (zöld) CTA nézetenként.

### 1. Hero — A/B teszt (csak a H1 változik)

**Közös elemek (mindkét variánsban szó szerint azonos):**

- **Eyebrow:** Ipari hulladék- és biomassza-feldolgozó rendszerek
- **Alcím (rövid, életszagú — NINCS benefit-felsorolás a heróban):** Ipari darálási,
  szárítási, brikettálási, pelletálási és elszívási rendszerek. Megnézzük az anyagot,
  a mennyiséget és a célt, hogy azt ajánljuk, ami a feladathoz illik.
- **Fő CTA:** Leírom, mit kell megoldani *(locked — főoldali hero)*
- **Másodlagos CTA:** Megnézem a technológiákat

**Variáns B — DEFAULT (eredmény-keret):**
> H1: **Ipari hulladékból kezelhető anyag** *(cím — nincs pont a végén)*

**Variáns A — KIHÍVÓ (reframe):**
> H1: **A jó technológia nem géppel kezdődik, hanem az anyaggal**
> *(Fontos: „technológia", NEM „rendszer"; cím — nincs pont a végén.)*

**Megvalósítás:** variáns-kapcsoló `?v=a` / `?v=b` (default = `b`, ha nincs paraméter);
csak a H1 különbözik; mérés: hero-CTA kattintás + előminősítő submit.
**Governance:** az „anyagáram" entitás NEM a heróban — a rendszerszemlélet-blokkban (H2)
és a meta descriptionben él.

### 2. Technológiai választó

Cím: **Milyen feladatot kell megoldani?** — 8 kártya (a 8 technológia), kártyánként 1
mondatos, feladatvezérelt cím + „áttekintés" link. (Kerüld a gépies anyag-ismétlést.)

### 3. Probléma alapú belépő (döntési utak)

Cím: **Nem biztos, hogy gépre van szüksége — lehet, hogy előbb az irányt kell tisztázni.**
Belépők ügyfélhelyzetből (nem géptípusból). Elsődleges CTA: **Leírom a feladatot**;
a bizonytalan látogatónak: **Nem tudom, mi kell — segítsenek választani**.

### 4. Rendszerben gondolkodunk (navy)

Cím: **Nem gépet választunk először. Anyagot, célt és üzemi realitást tisztázunk.**
Itt él az **„anyagáram"** entitás (rendszerszemléleti szövegben helyén van) és itt mondjuk
ki a **függetlenséget** (Pillér 1). Folyamat-lépések: 1) Anyag és mennyiség · 2)
Technológiai irány · 3) Rendszerfelépítés / anyagáram · 4) Gép és kiegészítők · 5)
Telepítés, betanítás, support. Legalább egy **kétsávos mondat** legyen a blokkban.
CTA: **Leírom az anyagot és a célt** *(a korábbi „Konzultációt kérek" helyett — QA §16).*

### 5. Kiemelt technológiai kapuk

Cím: **Fő technológiai területeink** — a 8 technológia kártyarácsa, feladatvezérelt
címmel, „áttekintés" linkkel.

### 6. Referenciák és megvalósított rendszerek

Cím (validált refekig enyhítve): **Tipikus üzemi feladatok, és a hozzájuk illő technológiai
irány.** Logófal + 3–6 projektkártya (iparág, anyag, technológia, rövid eredmény).
**`[VALIDÁLANDÓ]`:** valós, megnevezett referenciák (fotó + 1 ügyfélidézet + 1 mérhető
üzemi tény) — feltöltés a tartalom rendezése után. CTA: **Megnézem a referenciákat**.

### 7. Gyártói és technológiai háttér

Cím: **Elismert európai gyártók, magyar szakértői támogatással.** Itt mondjuk ki a
függetlenséget: több vezető európai gyártót képviselünk, ezért a feladathoz illő gépet
ajánljuk, nem egy márkát. Partnerek: ISVE · Prodeco · CF Nielsen · Nova Pellet ·
RP Engineering · AL-KO · (további validált partnerek). CTA: **Megnézem, milyen irány illik
a feladatomhoz**.

### 8. Hogyan indul egy projekt?

Cím: **Így jutunk el az első kérdéstől a reális technológiai irányig.** 6 lépés (alapadat →
előszűrés → technológiai irány → pontosítás → ajánlat → megvalósítás és support).
CTA: **Elküldöm az alapadatokat**. Microcopy: *A beérkező megkereséseket munkanapokon
előszűrjük, és jellemzően 24 órán belül visszajelzünk a következő lépésről.*

### 9. Záró CTA

Cím: **Nem biztos benne, melyik technológia kell? Ez teljesen normális.** A jó döntés nem a
géptípusnál kezdődik, hanem az anyagnál, a mennyiségnél, a célnál és az üzemi körülményeknél.
CTA: **Leírom, mit kell megoldani**. Másodlagos: **Kapcsolatfelvétel**.
Microcopy: *Az első lépés nem kötelezettségvállalás, hanem szakmai előminősítés.*

---

## 7. Technológiai kapuoldal sablon

Minden kapuoldal ugyanarra a *vázra* épül, de **a tartalom nem klónozott**: nyolc oldal,
nyolc nyitás (Stratégia §7). Két szomszédos oldal soha ne ugyanazzal nyisson.

> Tudatossági szint: **megoldás-tudatos**. Elsődleges CTA: **Leírom az anyagot és a célt**
> *(QA §16 — a „Technológiai irányt kérek" itt is kivezetve).* Másodlagos: **Megnézem a
> részletes oldalt** (spoke), ahol van dedikált domain.

**Variációs rendszer (6 nyitó-archetípus, rotálva):** tünet-nyitás · tévhit-nyitás ·
döntési-villa · konkrét-anyag · „mikor NEM kell" · számszerű-realitás. A **vezető pillér**
és a kiemelt **bizonyítéktípus** is rotál oldalanként (a kiosztás a 02_xx specekben).

**Blokkváz:** 1) Hero (H1 = technológia + üzleti eredmény; alcím: kinek, milyen anyagra,
milyen problémára) · 2) Üzemi probléma · 3) Mikor jó megoldás (3–6 konkrét helyzet) ·
4) Anyagok és alkalmazások · 5) Rendszerfelépítés (anyag útja 4–6 lépésben) · 6) Döntési
tényezők · 7) ECOTEQ szerepe (előminősítés, technológiai irány, gyártópartner-kiválasztás,
rendszerintegráció, szerviz) · 8) Előminősítés · 9) Kapcsolódó technológiák / spoke ·
10) GYIK · 11) Záró CTA.

---

## 8. CTA-rendszer (v1.1 — kanonikus, locked)

> A „Technológiai irányt kérek" és a „Technológiai javaslatot kérek" **kivezetve**
> (QA 2.1 §16 kifejezetten kerülendő fő CTA-ként). A CTA mindig azt mondja, amit a látogató
> ténylegesen megtesz. Nézetenként **egy** elsődleges (zöld) CTA.

| Kontextus | CTA |
|---|---|
| Főoldali hero (elsődleges) | **Leírom, mit kell megoldani** |
| Főoldali hero (másodlagos) | **Megnézem a technológiákat** |
| Probléma-belépő | **Leírom a feladatot** |
| Bizonytalan látogató | **Nem tudom, mi kell — segítsenek választani** |
| Technológiai / anyagalapú oldal | **Leírom az anyagot és a célt** |
| Űrlap submit | **Elküldöm az alapadatokat** |
| Spoke továbbvezetés | **Megnézem a részletes oldalt** |
| Esetenként | Anyagtesztet kérek · Visszahívást kérek · Ajánlatot kérek a feladatra |

A teljes CTA-szabály és QA: QA 2.1 §16 + §27.

---

## 9. Hangnem

Szakmai, emberi, ipari, nyugodt, prémium — nem túlmarketingelt, nem amerikaias, nem
„startupos", nem gépkatalógus-szagú. Úgy szóljon, ahogy egy tapasztalt magyar ipari
szakember beszélne egy másik döntéshozóval.

> A **tiltott kifejezések és az AI-szag teljes listája: QA 2.1 §7–§8** (ez az autoritás —
> ne duplikáld). Röviden tiltott: forradalmasítja, maximalizálja, „prémium megoldás" üresen,
> garantált megtérülés, validálatlan %/ROI, 24/7 vagy reakcióidő validáció nélkül,
> mesterséges FOMO, „decision cockpit / rendszerscope / kapcsolódó spoke" típusú belső szó.

---

## 9.5 Cégadatok (validált — NE találd ki újra)

- **2008 óta** foglalkozik az ECOTEQ ipari gépek és technológiai rendszerek
  értékesítésével, tervezésével és beüzemelésével.
- **10+ gyártó és beszállító partner** (európai gyártói háttér; megnevezve: ISVE, Prodeco,
  CF Nielsen, Nova Pellet, RP Engineering, AL-KO + további validált partnerek).
- Visszajelzés: *jellemzően 24 órán belül* (microcopy, nem garantált SLA).
- Cég: ECOTEQ Kft., 1037 Budapest, Csillaghegyi út 19–21. · sales@ecoteq.hu · +36 1 430-1556.
- Valós projektreferenciák: **`[VALIDÁLANDÓ]`** (van bőven; a fotók és projektleírások
  rendezése után töltjük fel).

---

## 10. Technikai stack

Astro · Vercel · GitHub · Claude Code · Resend · (későbbi n8n / Zoho Bigin / Telegram
integráció) · komponensalapú, gyors, statikus, SEO-/AISEO-barát struktúra.
WordPress, Elementor, Stackable és ACF nem használatos.

---

## 11. MVP fókusz

MVP: 1) Főoldal · 2) Rólunk · 3) Referenciák · 4) Technológiai kapuoldalak · 5) Szerviz és
alkatrész · 6) Ajánlatkérés · 7) Kapcsolat · 8) Alap tudástár / cikklista · 9) Jogi oldalak ·
10) llms.txt / llms-full.txt később, ha a tartalmi térkép stabil.

Phase 1.5: anyagalapú kapuoldalak · iparági oldalak · mélyebb tudástár · case study oldalak ·
AISEO finomhangolás · CRM scoring · n8n automatizáció.

---

## 12. Végső alapmondat

Az ECOTEQ.hu legyen az a központi ipari márkaoldal, amelyből egy magyar B2B döntéshozó
gyorsan megérti: miben segít az ECOTEQ, milyen technológiai területeken erős, hogyan
gondolkodik rendszerben, milyen referenciák és partnerek állnak mögötte, és mi a következő
lépés, ha hulladékból vagy biomasszából kezelhető, hasznosítható anyagot szeretne — úgy,
hogy **előbb az anyagot értjük meg, és csak azt ajánljuk, ami a feladatból következik.**
