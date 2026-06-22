/** V2 content overrides for technology gateway pages.
 *  Spreads the original TECHNOLOGY_GATEWAYS and overrides selected slugs with the
 *  QA/strategy-reworked copy (Stratégia §7.2 assignment + Copy QA-mag + QA 2.1).
 *  Originals in ./technologies stay untouched; v2 pages import from here. */
import { TECHNOLOGY_GATEWAYS } from './technologies';
import type { TechnologyGateway } from './technologies';

/* BRIKETTÁLÁS — vezető pillér: Végig ott vagyunk (megtérülés) · nyitó-archetípus:
   számszerű-realitás · tudatossági szint: megoldás-tudatos · primer CTA: Leírom az anyagot
   és a célt. Nincs mondatközi kötőjel, címben nincs pont, nincs kitalált szám ([VALIDÁLANDÓ]). */
const brikettalas: TechnologyGateway = {
  slug: 'brikettalas',
  name: 'Brikettálás',
  metaTitle: 'Brikettáló rendszerek faipari és biomassza alapanyaghoz',
  metaDescription:
    'Brikettálás forgácsból, porból, fűrészporból és aprítékból. Az ECOTEQ a megtérülés felől nézi: az anyagmennyiség, az üzemóra, az energia és a cél alapján mondja meg, milyen hidraulikus vagy mechanikus brikettáló rendszer reális.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Brikettálás',
    h1: 'Brikettáló rendszerek faipari és biomassza alapanyaghoz',
    lead: 'Egy brikettgyártó beruházás megtérülése az anyagmennyiségen, az üzemórán, az energiaköltségen és a végtermék hasznosíthatóságán múlik. Először ezeket nézzük meg, és csak utána mondjuk meg, milyen brikettáló rendszer hozhat reális üzleti eredményt.',
    secondaryCta: { label: 'Részletes brikettáló oldal', href: 'https://brikettalo.hu' },
    microcopy:
      'A megfelelő brikettáló technológia kiválasztásához elég, ha megadja az alapanyagot, a mennyiséget és a nedvességet, és hogy saját fűtésre vagy értékesítésre szánja a brikettet.',
    trustPills: [],
    image: '/heroes/hero-brikettalas.jpg',
    imageAlt: 'Ipari brikettáló gépsor üzem közben: présgépek és szállítószalagokon mozgó brikett (CF Nielsen)',
  },
  // Brikettálás-specifikus trust sor. A hidraulikus/mechanikus típusszám [VALIDÁLANDÓ]
  // (most a user által adott példaérték). A „6 gyártó" validált: CF Nielsen, Prodeco
  // (brikettálók) + ISVE (darálók), RP Engineering (szárítás/silók/anyagmozgatás),
  // AL-KO (porleválasztás), STROJPLAST (csomagolás). „2008 óta" validált.
  heroStats: [
    { value: '24', suffix: '', label: 'típus hidraulikus brikettáló gép' },
    { value: '15', suffix: '', label: 'típus mechanikus brikettáló gép' },
    { value: '6', suffix: '', label: 'európai gyártó egy rendszerben' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor hozhat jó eredményt a brikettálás?',
    intro:
      'A brikettgyártás nem önmagáért éri meg. Akkor van értelme, ha a laza melléktermék ma helyet, fuvardíjat vagy egyéb kezelési költséget visz el, viszont tömörítve saját fűtésre vagy értékesítésre fordítható. Az alapkérdés nem az, melyik brikettprés a legjobb, hanem az, hogy a számok kijönnek-e.',
    items: [
      {
        title: 'Sok forgács és por gyűlik naponta',
        text: 'A laza forgács és por sok helyet és kezelői időt visz el. Tömörítve a térfogat töredékére csökken.',
      },
      {
        title: 'Pénzbe kerül, hogy elvigyék',
        text: 'A melléktermék elszállítása és kezelése visszatérő költség. Ha helyben brikettáljuk, kevesebb a fuvar, és az addigi hulladékból jól eladható termék lesz.',
      },
      {
        title: 'Saját fűtésre fordítaná a mellékterméket',
        text: 'Megfelelő alapanyagból a brikett saját fűtésre is használható, így csökkenhet a vásárolt energia. Megvizsgáljuk, hogy ez Önnél reális-e.',
      },
      {
        title: 'Eladható terméket szeretne belőle',
        text: 'Az értékesítéshez nem elég, hogy a prés brikettet gyárt. Stabil minőség, kiszámítható mennyiség, csomagolás és logisztika is kell. Ezt is megtervezzük.',
      },
      {
        title: 'Rendet tenne a melléktermék körül',
        text: 'A laza forgács és por rossz üzemi képet ad, és nehezen adagolható. A tömörített, egységes brikett tárolása és mozgatása rendezettebb és kiszámíthatóbb.',
      },
      {
        title: 'Előbb még előkészítés kell',
        text: 'Jó minőségű brikett gyártásához az alapanyag nem lehet túl nedves, túl nagy vagy változó összetételű. Ilyenkor először a daráló, szárító és adagolási lépéseket tesszük rendbe, mielőtt brikettáló gépet választunk.',
      },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó brikettáló rendszer?',
    intro:
      'A brikettáló géppel vagy technológiával szemben alapvető elvárás, hogy a faaprítékból, forgácsból vagy fűrészporból kezelhető és üzletileg is értelmezhető folyamat legyen.',
    cards: [
      {
        problem: 'A laza melléktermék sok helyet foglal',
        why: 'A forgács, a fűrészpor és az apríték gyorsan megtölti a tárolóteret, nehezen kezelhető, és rendezetlen üzemi képet ad.',
        answer:
          'A megfelelő brikettáló rendszer tömörebb, egységesebb és jobban tárolható brikettet készít az alkalmas alapanyagból, ami helyet és kezelői időt szabadít fel.',
      },
      {
        problem: 'Az elvitel és a tárolás állandó költség',
        why: 'A melléktermék elszállítása, díja és a lekötött raktárterület visszatérő, sokszor növekvő tétel.',
        answer:
          'Helyben tömörítve csökkenhet a fuvarszám és a lekötött terület, az anyag pedig fűtésre vagy értékesítésre fordítható. A tényleges hatást az aktuális mennyiség és költség alapján számoljuk.',
      },
      {
        problem: 'Saját energiaként hasznosítaná a mellékterméket',
        why: 'A laza, ingadozó minőségű anyag fűtésre nehezen használható, az energiaár viszont mindennapi terhet jelent.',
        answer:
          'Alkalmas alapanyag és előkészítés esetén a brikett saját fűtésre kezelhetőbb formát ad. A műszaki és engedélyezési feltételeket esetenként külön vizsgáljuk.',
      },
      {
        problem: 'Eladná, de nem áll össze a gazdaságos gyártás',
        why: 'Értékesítésnél a stabil minőség, az alapanyag-ellátás, a kapacitás, a csomagolás és a logisztika dönt, nem önmagában a prés.',
        answer:
          'A brikettálási technológiát a végtermék elvárt minőségéhez és a kiszámítható üzemhez illesztjük, hogy a gyártás üzletileg is fenntartható legyen.',
      },
    ],
  },
  materials: {
    h2: 'Milyen anyagból és milyen mennyiségnél jön szóba?',
    intro:
      'A brikettálásnál az alapanyag minősége és a mennyiség dönt. A tömöríthetőség a nedvességtől, a szemcsemérettől, az összetételtől és a szennyezettségtől függ, a megtérülés pedig attól, mennyi keletkezik és mi lesz a brikett célja.',
    materials: [
      'faipari forgács',
      'fűrészpor',
      'csiszolatpor',
      'apríték',
      'gyaluforgács',
      'faipari mellékanyag',
      'biomassza',
      'mezőgazdasági mellékanyagok előminősítés után',
      'egyéb tömöríthető száraz ipari mellékanyagok',
    ],
    industries: [
      'faipar',
      'asztalosüzemek',
      'bútorgyártás',
      'nyílászárógyártás',
      'fűrészüzemek',
      'biomassza-feldolgozás',
      'mezőgazdasági mellékanyag-feldolgozás',
      'ipari mellékanyag-hasznosítás',
    ],
    goals: [
      'saját fűtőanyag előállítása',
      'értékesíthető brikett gyártása',
      'elviteli és tárolási költség csökkentése',
      'forgács és por rendezett kezelése',
      'jobb tárolhatóság',
      'hulladéklogisztika egyszerűsítése',
      'biomassza energetikai hasznosítása',
      'darált vagy szárított anyag továbbfeldolgozása',
    ],
  },
  process: {
    h2: 'Mi kell még a brikettpréshez, hogy a rendszer működjön?',
    intro:
      'A brikettáló gép a rendszer központi eleme. Egy jól megtervezett brikettgyártó rendszernél ugyanúgy számít az alapanyag deponálása, a nedvesség, a szemcseméret, az adagolás, a kihordás, a csomagolás és a tárolás, valamint a gazdaságos üzemeltetés. Az alábbi folyamatábra azt mutatja, milyen főbb lépésekből, elemekből áll össze egy jól működő brikettáló rendszer.',
    steps: [
      { title: 'Alapanyag gyűjtése', text: 'Az anyag érkezhet elszívórendszerből, silóból, zsákból, konténerből vagy közvetlenül a gyártási mellékáramból.' },
      { title: 'Előkészítés', text: 'Szükség lehet darálásra, aprításra, rostálásra, szárításra vagy idegenanyag-leválasztásra. A brikett minősége nagyban függ az előkészített anyagtól.' },
      { title: 'Adagolás és pufferelés', text: 'A prés akkor működik egyenletesen, ha az anyag kiszámíthatóan érkezik. Ehhez adagoló, siló, csiga vagy szalag kellhet.' },
      { title: 'Brikettálás', text: 'A fő lépés hidraulikus vagy mechanikus prés. A választást az anyag, a mennyiség, az üzemóra, a céltermék és a beruházási keret együtt dönti el.' },
      { title: 'Kihordás, hűlés, tárolás vagy csomagolás', text: 'A kész brikettet kezelni, hűteni, tárolni vagy csomagolni kell. Értékesítési célnál ez különösen fontos.' },
      { title: 'Üzemeltetés és támogatás', text: 'A tartós megtérüléshez kezelői rutin, karbantartás, kopóalkatrész-ellátás és elérhető szerviz is kell, nem csak a kezdeti beruházás.' },
    ],
  },
  decisionFactors: {
    h2: 'Mi dönti el, hogy megéri-e, és melyik irány?',
    intro:
      'A brikettáló kiválasztása nem csak kapacitáskérdés. Ugyanaz a gép más eredményt ad eltérő anyaggal, nedvességgel és üzemórával. A jó döntéshez először a feladatot és a számokat tisztázzuk.',
    factors: [
      { title: 'Mennyiség és üzemóra', text: 'Mennyi melléktermék keletkezik, és hány műszakban? Ez dönti el, hogy egy kisebb prés elég, vagy folyamatosabb, nagyobb rendszer kell.' },
      { title: 'A brikett célja', text: 'Saját fűtés vagy értékesítés? Saját felhasználásnál más szempontok dominálnak, mint a piacra szánt, stabil minőségű briketteknél.' },
      { title: 'Anyag típusa', text: 'Forgács, fűrészpor, csiszolatpor, apríték vagy biomassza? Az összetétel meghatározza a tömöríthetőséget.' },
      { title: 'Nedvességtartalom', text: 'A túl nedves vagy ingadozó anyag rontja a brikettet. Sokszor szárítás vagy stabilabb alapanyag-kezelés szükséges.' },
      { title: 'Szemcseméret', text: 'A túl nagy, szálas vagy változó frakció rontja a stabilitást, ilyenkor darálásra vagy osztályozásra lehet szükség.' },
      { title: 'Hidraulikus vagy mechanikus irány', text: 'Kisebb és közepes üzemnél gyakran hidraulikus prés jön szóba, nagyobb, folyamatos gyártásnál a mechanikus irány is vizsgálandó. A pontos döntéshez anyag- és kapacitásadat kell.' },
      { title: 'Energia és üzemeltetési költség', text: 'A megtérülésbe beleszámít az energiaigény, a kopóalkatrész, a karbantartás és a kezelői munka, nem csak a gép ára.' },
      { title: 'Beruházási realitás', text: 'Nem a legolcsóbb gép a jó döntés, hanem az a rendszer, amely az adott mennyiséggel és céllal hosszú távon is működtethető.' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ a tervezéstől a megtérülésig?',
    body: [
      'Az ECOTEQ-nél nem minden érdeklődőnek ugyanazt a gépet akarjuk eladni. Abból indulunk ki, hogy az Ön üzemében mennyi és milyen melléktermék keletkezik, mi a célja a brikettel, és a számok alapján megéri-e egyáltalán belevágni.',
      'A célunk nem a gyors gépeladás, hanem az, hogy tisztán lássa a brikettáló projektjét a tervezéstől az üzemeltetésen át az alkatrészpótlásig, és a beruházás megtérülése reális legyen.',
    ],
    points: [
      { title: 'Megtérülés-alapú előminősítés', text: 'A mennyiség, az üzemóra, az energia és a végtermékcél alapján nézzük, hogy a brikettálás üzletileg értelmes-e.' },
      { title: 'Technológiai irány', text: 'Segítünk eldönteni, hidraulikus vagy mechanikus irányt érdemes-e vizsgálni, és milyen előkészítés kell hozzá.' },
      { title: 'Rendszerszemlélet', text: 'A prés mellett az adagolást, a darálást, a szárítást, a kihordást és a csomagolást is végiggondoljuk, mert a megtérülés ezeken is múlik.' },
      { title: 'Végig ott vagyunk', text: 'A projekt az ötlettől a telepítésen és betanításon át a szervizig és a kopóalkatrész-ellátásig egy felelős kézben marad.' },
      { title: 'Gyártói háttér', text: 'A brikettáláshoz több európai gyártó közül választunk a feladathoz illőt, nem egy márkát, a hidraulikus és a mechanikus irányra egyaránt.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés, az ajánlat-előkészítés és a projektkövetés magyar nyelvű szakmai kapcsolattal történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro:
      'A brikettálás ritkán önálló gépbeszerzés. A jó brikettminőséghez megfelelő frakció, nedvesség és stabil alapanyagáram kell, ezért gyakran darálás, szárítás vagy anyagmozgatás is kapcsolódik hozzá.',
    links: [
      { label: 'Ipari darálás', href: '/technologiak/ipari-daralas/', description: 'Ha az alapanyag túl nagy, szálas vagy darabos a brikettálás előtt.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha az alapanyag túl nedves vagy ingadozó nedvességtartalmú.' },
      { label: 'Pelletálás', href: '/technologiak/pelletalas/', description: 'Ha brikett helyett egységes pellet formájú végtermék lehet a jobb irány.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha adagolás, siló, csiga, szalag, kihordó vagy csomagolási elem is kell a stabil üzemhez.' },
    ],
    spoke: {
      label: 'Részletes brikettáló gépválasztó és kalkulátor',
      href: 'https://brikettalo.hu',
      description:
        'A részletes brikettáló gépválasztó, a hidraulikus és mechanikus technológiai út, a kalkulátor, a megtérülési logika és a szakmai tudástár a brikettalo.hu oldalon érhető el.',
    },
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, milyen brikettáló technológia lehet reális az Ön számára',
    body:
      'Nem kell kész műszaki specifikációval érkeznie. Az első körben azt nézzük meg, hogy az adott mennyiségre, anyagra és célra a brikettálás üzletileg reális-e, vagy előbb darálást, szárítást vagy más technológiát érdemes vizsgálni.',
    // Prequal-felhő: kulcsszavak (a szkript minden betöltéskor véletlen sorrendbe keveri).
    fields: [
      'darálás',
      'szárítás',
      'dobszárító',
      'szalagos szárító',
      'szemcseméret',
      'apríték',
      'biomassza',
      'szalma',
      'kapacitás',
      'ipari brikett',
      'lakossági brikett',
      'zsugorfóliázó',
      'fűtőérték',
      'nedvességtartalom',
      'hamutartalom',
      'egységrakat',
      'fűrészpor',
      'forgács',
      'hidraulikus prés',
      'mechanikus prés',
      'adagolás',
      'silózás',
      'csomagolás',
      'üzemóra',
      'megtérülés',
      'elszívás',
      'porleválasztás',
      'préselési nyomás',
      'brikettméret',
      'energiaköltség',
      'raklapozás',
    ],
  },
  faq: {
    h2: 'Gyakori kérdések a brikettálás kapcsán',
    items: [
      { q: 'Milyen alapanyagból lehet brikettet készíteni?', a: 'Leggyakrabban száraz faipari forgácsból, fűrészporból, csiszolatporból és aprítékból. Sok mezőgazdasági melléktermék is szóba jön, de azt előbb megvizsgáljuk. A tömöríthetőséget a nedvesség, a szemcseméret és az összetétel dönti el.' },
      { q: 'Kell-e szárítani brikettálás előtt?', a: 'Ha az alapanyag nedvessége túl magas vagy ingadozó, akkor általában igen. A megfelelő nedvességi tartomány anyagonként más, ezt anyagteszttel állapítjuk meg.' },
      { q: 'Kell-e kötőanyag a fabriketthez?', a: 'Tiszta faipari alapanyagnál általában nem: a fa saját lignintartalma préselés közben összeköti a brikettet. Kötőanyag inkább egyes mezőgazdasági vagy vegyes anyagoknál merülhet fel.' },
      { q: 'Mi a különbség az ipari és a lakossági brikett között?', a: 'A lakossági brikett egységes méretű, csomagolt fűtőanyag a kiskereskedelemnek. Az ipari brikett nagyobb tételben, saját fűtésre vagy ipari felhasználásra készül, ahol a csomagolás kötöttsége kisebb.' },
      { q: 'Elég önmagában egy brikettáló gép?', a: 'Ritkán. A préshez általában adagolás és silózás, sok esetben darálás vagy szárítás is tartozik, a végén pedig hűtés, tárolás vagy csomagolás. Ezek együtt adnak üzembiztos, gazdaságos rendszert.' },
      { q: 'Hidraulikus vagy mechanikus brikettáló gép kell?', a: 'Kisebb és közepes mennyiségnél gyakran a hidraulikus prés a célszerű, nagyobb, folyamatos gyártásnál a mechanikus irány is vizsgálandó. A kiindulás a mennyiség, az üzemóra és a céltermék.' },
      { q: 'Mennyi idő alatt térül meg egy brikettáló beruházás?', a: 'Erre nincs általános szám. A megtérülést a melléktermék mennyisége, a mai kezelési költség, az energiaár és a brikett célja együtt adja. Az Ön adataiból viszont reális becslést tudunk készíteni.' },
      { q: 'Tudnak konkrét gépet ajánlani?', a: 'Igen. Miután tisztáztuk az alapanyagot, a mennyiséget, a nedvességet és a célterméket, megnevezzük a feladathoz illő brikettáló gépet és a hozzá tartozó rendszerelemeket.' },
    ],
  },
  finalCta: {
    h2: 'Megéri belevágni a brikettálásba? Nézzük meg a számokat!',
    body: [
      'A brikettálásnál a jó döntés nem a géptípussal kezdődik. Először azt tisztázzuk, mennyi és milyen alapanyag keletkezik, mibe kerül ma a kezelése, és mi lenne a brikettáló beruházás célja.',
      'Ha ezt leírja, megmondjuk, hogy a brikettálás reális irány-e, és ha igen, milyen rendszerrel érdemes számolni.',
    ],
    secondaryCta: { label: 'Részletes brikettáló oldal', href: 'https://brikettalo.hu' },
  },
};

/* IPARI DARÁLÁS — Anyag-először · tünet-nyitás · ISVE (darálók) */
const ipariDaralas: TechnologyGateway = {
  slug: 'ipari-daralas',
  name: 'Ipari darálás',
  metaTitle: 'Ipari darálók és darálási rendszerek hulladék-előkészítésre',
  metaDescription:
    'Ipari darálás fa, raklap, műanyag, biomassza és vegyes hulladék előkészítésére. Az ECOTEQ az anyagból indul ki: egy- vagy kéttengelyes daráló, frakció és rendszerfelépítés az anyag és a cél alapján.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Ipari darálás',
    h1: 'Ipari darálók hulladék és mellékanyag előkészítésére',
    lead: 'Sok üzemben a darabos, vegyes hulladék foglalja a helyet és lassítja a munkát. Az ipari darálásnál nem a gép a kiindulás, hanem az anyag: mit, mennyit és milyen frakcióra kell aprítani.',
    secondaryCta: { label: 'Részletes ipari daráló oldal', href: 'https://iparidaralo.hu' },
    microcopy: 'A megfelelő ipari daráló kiválasztásához elég, ha megadja az anyagot, a mennyiséget, a darabméretet és a kívánt frakciót.',
    trustPills: [],
    image: '/heroes/hero-ipari-daralas.jpg',
    imageAlt: 'Ipari daráló gép működés közben',
  },
  heroStats: [
    { value: '20', suffix: '+', label: 'típus ipari daráló gép' }, // [VALIDÁLANDÓ]
    { value: '2', suffix: '', label: 'darálási elv: egy- és kéttengelyes' },
    { value: '6', suffix: '', label: 'európai gyártó egy rendszerben' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány az ipari darálás?',
    intro: 'Az ipari darálás nem önmagáért fontos. Akkor van értelme, ha a jelenlegi anyag túl nagy, túl rendezetlen vagy nem alkalmas a következő technológiai lépésre. Az első kérdés nem a gép mérete, hanem hogy mit szeretne elérni az anyaggal.',
    items: [
      { title: 'Tele van az udvar darabos hulladékkal', text: 'A nagy, vegyes anyag sok helyet foglal és nehezen mozgatható. Darálva rendezettebb, kisebb frakció lesz belőle, amit könnyebb tárolni és továbbadni.' },
      { title: 'Drága a darabos anyag elszállítása', text: 'Darabos hulladéknál a levegőt is fizetjük. Aprítva kisebb térfogat és kevesebb fuvar lehet az eredmény, a tényleges hatást a mennyiség adja.' },
      { title: 'A következő gép nem eszi meg az anyagot', text: 'Brikettálás, pelletálás vagy szárítás előtt sokszor egységesebb frakció kell. A darálás készíti elő az anyagot a következő lépéshez.' },
      { title: 'Raklap és csomagolóanyag áll a sarokban', text: 'A raklap és a csomagolófa darálva töredék helyet foglal. A fémekre és a szennyeződésre figyelni kell, ezt az előminősítésnél nézzük.' },
      { title: 'Vegyes, kiszámíthatatlan az anyag', text: 'Eltérő méret, forma és szennyezettség mellett nem a kapacitás dönt, hanem a darálási elv, az adagolás és a gépvédelem.' },
      { title: 'Folyton elakad a jelenlegi megoldás', text: 'Ha a mostani aprítás sokat áll vagy karbantartásra szorul, érdemes az anyaghoz illő darálási irányt újragondolni.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó darálási rendszer?',
    intro: 'Egy darálási projekt ritkán csak arról szól, hogy kisebb darabokra vágunk valamit. A háttérben általában helyhiány, drága hulladékkezelés vagy egy akadozó továbbfeldolgozás áll.',
    cards: [
      { problem: 'Rendezetlen hulladékudvar', why: 'A darabos, vegyes anyag sok helyet foglal és rontja az üzem átláthatóságát.', answer: 'A feladathoz illő ipari daráló rendezettebb, kezelhetőbb frakciót ad, amit könnyebb tárolni és továbbvinni.' },
      { problem: 'Magas szállítási és kezelési költség', why: 'A darabos hulladék elszállítása és tárolása visszatérő, sokszor növekvő tétel.', answer: 'Térfogatcsökkentéssel kevesebb fuvar és lekötött terület lehet az eredmény. A pontos hatást az anyag és a mennyiség adja.' },
      { problem: 'Akadozó továbbfeldolgozás', why: 'A brikettáló, pelletáló vagy szárító nem szereti a túl nagy vagy változó anyagot.', answer: 'A darálás egységesebb frakciót készít, így a következő lépés stabilabban működik.' },
      { problem: 'Idegenanyag veszélyezteti a gépet', why: 'Fém, csavar vagy kő komoly kárt okozhat a darálóban.', answer: 'Mágnes, szeparátor és megfelelő gépvédelem épül a rendszerbe az anyag alapján.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'Az ipari darálásnál az anyag mindent meghatároz. Más irány kell száraz faipari hulladékhoz, raklaphoz, műanyaghoz, biomasszához és vegyes ipari hulladékhoz.',
    materials: ['faipari hulladék', 'raklap', 'láda és csomagolóanyag', 'fűrészáru-maradék', 'forgács és apríték', 'műanyag hulladék', 'fólia', 'biomassza', 'papír és karton', 'vegyes ipari hulladék', 'gyártási selejt'],
    industries: ['faipar', 'bútorgyártás', 'nyílászárógyártás', 'fűrészüzemek', 'logisztika', 'csomagolóipar', 'műanyagipar', 'hulladékkezelés', 'biomassza-feldolgozás'],
    goals: ['térfogatcsökkentés', 'homogénebb frakció', 'jobb tárolhatóság', 'könnyebb anyagmozgatás', 'brikettálás vagy pelletálás előkészítése', 'energetikai felhasználás előkészítése', 'üzemi hulladékkezelés rendezése'],
  },
  process: {
    h2: 'Mi kell a darálóhoz, hogy a rendszer is működjön?',
    intro: 'A daráló önmagában csak akkor működik jól, ha az adagolás, a kihordás, a gépvédelem és a kiszolgálás is illeszkedik. Az alábbi főbb lépésekből áll össze egy működő darálási rendszer.',
    steps: [
      { title: 'Anyag fogadása vagy gyűjtése', text: 'Az anyag érkezhet kézi adagolással, targoncával, rakodógéppel, szalagról vagy silóból.' },
      { title: 'Adagolás és előkészítés', text: 'A kialakítás függ attól, hogy darabos, ömlesztett, poros vagy változó méretű anyagról van szó.' },
      { title: 'Darálás', text: 'A fő lépés lehet egytengelyes, kéttengelyes vagy más darálási elv. A választást az anyag, a kapacitás és a kívánt frakció adja.' },
      { title: 'Kihordás és anyagmozgatás', text: 'A darált anyagot szállítószalag, csiga, pneumatikus rendszer vagy konténer fogadhatja.' },
      { title: 'Leválasztás és gépvédelem', text: 'Mágnes, szeparátor, rostálás vagy porleválasztás védi a gépet és javíthatja a frakciót.' },
      { title: 'Továbbfeldolgozás vagy tárolás', text: 'A kimenet mehet brikettálásra, pelletálásra, energetikai felhasználásra, silóba vagy tárolóba.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt darálót választ?',
    intro: 'Ugyanaz a névleges teljesítmény teljesen mást jelenthet különböző anyagoknál. A jó döntéshez először az anyagot és a folyamatot tisztázzuk.',
    factors: [
      { title: 'Anyag típusa', text: 'Fa, raklap, műanyag, fólia, biomassza vagy vegyes hulladék? Minden anyag másképp viselkedik a darálóban.' },
      { title: 'Méret és forma', text: 'Hosszú, darabos, lapos, rugalmas vagy változó méretű az anyag?' },
      { title: 'Szennyezettség', text: 'Lehet-e benne fém, csavar, kő vagy idegenanyag? Ez dönti el a gépvédelmet.' },
      { title: 'Kívánt frakció', text: 'Durva térfogatcsökkentés kell, vagy pontosabb szemcseméret a továbbfeldolgozáshoz?' },
      { title: 'Kapacitás és üzemóra', text: 'Mennyi anyagot kell kezelni, és hány műszakban?' },
      { title: 'Adagolás és kiszolgálás', text: 'Kézzel, targoncával, szalagról vagy automata rendszerből kerül be az anyag?' },
      { title: 'Kimeneti oldal', text: 'Hová kerül a darált anyag: konténerbe, silóba, brikettálóba vagy szeparálásra?' },
      { title: 'Hely, energia és zaj', text: 'Van-e elég telepítési hely, elektromos kapacitás, és kell-e zajra vagy porra figyelni?' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy darálási projektben?',
    body: [
      'Az ipari darálásnál nem azzal kezdünk, melyik darálót adnánk el. Először az anyagot nézzük meg: milyen, mennyi, mennyire szennyezett, és mi lesz a darálás utáni következő lépés.',
      'A cél, hogy időben kizárjuk a rossz irányokat, és az anyaghoz, mennyiséghez és kiszolgáláshoz illő darálási rendszer szülessen.',
    ],
    points: [
      { title: 'Anyagalapú előminősítés', text: 'Megnézzük az anyag típusát, méretét, szennyezettségét, mennyiségét és a kívánt kimenetet.' },
      { title: 'Technológiai irány', text: 'Nem minden daráló való minden anyagra. A darálási elvet a feladat alapján választjuk.' },
      { title: 'Rendszerszemlélet', text: 'Az adagolást, a kihordást, a mágneses leválasztást és a porleválasztást is végiggondoljuk.' },
      { title: 'Gyártói háttér', text: 'A daráláshoz több európai gyártó, köztük az ISVE technológiái közül a feladathoz illőt választjuk.' },
      { title: 'Továbbfeldolgozási logika', text: 'Ha a cél brikettálás, pelletálás vagy szárítás, a darálást ezekhez méretezzük.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés, az ajánlat-előkészítés és a projektkövetés magyar nyelvű szakmai kapcsolattal történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'A darálás sokszor csak az első lépés. A darált anyag útja dönti el, kell-e mellé szárítás, brikettálás, pelletálás vagy anyagmozgatás.',
    links: [
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha a darált száraz mellékanyagból tömör brikettet szeretne.' },
      { label: 'Pelletálás', href: '/technologiak/pelletalas/', description: 'Ha a cél egységes pellet formájú végtermék.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha az anyag nedvessége túl magas a továbbfeldolgozáshoz.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha az adagolás, a kihordás vagy a leválasztás is része a feladatnak.' },
    ],
    spoke: { label: 'Részletes ipari daráló gépválasztó és tudástár', href: 'https://iparidaralo.hu', description: 'A részletes gépválasztó, anyagoldalak és tudástár az iparidaralo.hu oldalon érhető el.' },
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, milyen darálási irány lehet reális',
    body: 'Nem kell kész specifikációval érkeznie. Az első körben azt nézzük meg, hogy az adott anyagra, mennyiségre és célra milyen darálási irány jöhet szóba, és kell-e mellé más technológia.',
    fields: ['egytengelyes daráló', 'kéttengelyes daráló', 'aprítás', 'szemcseméret', 'frakció', 'fahulladék', 'raklap', 'műanyag', 'fólia', 'biomassza', 'vegyes hulladék', 'fémleválasztás', 'mágnes', 'szeparátor', 'adagolás', 'szállítószalag', 'siló', 'kihordás', 'kapacitás', 'üzemóra', 'térfogatcsökkentés', 'brikettálás-előkészítés', 'pelletálás-előkészítés', 'szennyezettség', 'kopóalkatrész', 'porelszívás', 'telepítés', 'rostálás'],
  },
  faq: {
    h2: 'Gyakori kérdések az ipari darálás kapcsán',
    items: [
      { q: 'Milyen anyagot lehet ipari darálóval aprítani?', a: 'Fát, raklapot, ládát, csomagolóanyagot, műanyagot, fóliát, biomasszát és sok vegyes ipari hulladékot. A pontos alkalmasságot az anyag mérete, szennyezettsége és a kívánt frakció adja.' },
      { q: 'Egytengelyes vagy kéttengelyes daráló kell?', a: 'Más anyaghoz más elv illik: a kéttengelyes jól bír durva, darabos anyagot, az egytengelyes pontosabb frakciót ad. A választáshoz anyag- és kapacitásadat kell.' },
      { q: 'Mekkora daráló kell az anyagunkhoz?', a: 'Önmagában a kg/óra adat kevés. A típus, a méret, a szennyezettség és a kívánt frakció együtt mutatja meg a reális gépméretet.' },
      { q: 'Mi történik, ha fém vagy idegenanyag kerül a gépbe?', a: 'Ezért épül a rendszerbe mágnes, szeparátor vagy más gépvédelem. Raklapnál és vegyes anyagnál ez különösen fontos.' },
      { q: 'Elég önmagában a daráló?', a: 'Sok esetben nem. Az adagolás, a kihordás, a leválasztás és a porelszívás ugyanúgy a működő rendszer része lehet.' },
      { q: 'Darálás után mi lesz az anyaggal?', a: 'A darált anyag mehet brikettálásra, pelletálásra, energetikai felhasználásra, szeparálásra vagy tárolásra. A kívánt kimenet visszahat a darálási irányra.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, milyen daráló kell? Írja le az anyagot',
    body: [
      'A darálásnál a jó döntés nem a gép nevével kezdődik. Először azt tisztázzuk, milyen anyag keletkezik, mekkora mennyiségben, milyen állapotban, és mi lesz a darálás utáni következő lépés.',
      'Ha ezt leírja, segítünk eldönteni, milyen formában lehet reális irány az ipari darálás, és kell-e mellé más technológia.',
    ],
    secondaryCta: { label: 'Részletes ipari daráló oldal', href: 'https://iparidaralo.hu' },
  },
};

/* PELLETÁLÁS — Függetlenség · döntési-villa · Nova Pellet */
const pelletalas: TechnologyGateway = {
  slug: 'pelletalas',
  name: 'Pelletálás',
  metaTitle: 'Pelletáló rendszerek biomassza és faipari alapanyaghoz',
  metaDescription:
    'Pelletálás biomasszából és faipari mellékanyagból. Az ECOTEQ független módon, több gyártó közül a feladathoz illő pelletáló rendszert javasolja, az alapanyag-előkészítéstől a hűtésig.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Pelletálás',
    h1: 'Pelletáló rendszerek biomassza és faipari alapanyaghoz',
    lead: 'Pelletálásnál ritkán a présgép az első kérdés. Inkább az: elég-e a meglévő alapanyag, vagy előbb a darálást, a szárítást és az adagolást kell rendbe tenni. Több gyártó közül a feladathoz illőt választjuk, nem egy márkát.',
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
    microcopy: 'A megfelelő pelletáló kiválasztásához elég, ha megadja az alapanyagot, a mennyiséget, a nedvességet és a végtermék célját.',
    trustPills: [],
    image: '/heroes/hero-pelletalas.jpg',
    imageAlt: 'Pellet gyártó gépsor működés közben',
  },
  heroStats: [
    { value: '10', suffix: '+', label: 'típus pelletáló prés' }, // [VALIDÁLANDÓ]
    { value: '1–6', suffix: ' t/h', label: 'pelletálási kapacitás' }, // [VALIDÁLANDÓ]
    { value: '6', suffix: '', label: 'európai gyártó egy rendszerben' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány a pelletálás?',
    intro: 'A pelletálás nagyobb fegyelmet kíván, mint elsőre tűnik. Stabil alapanyag, megfelelő nedvesség és szemcseméret, egyenletes adagolás és átgondolt hűtés is kellhet. Az első kérdés ezért nem a prés, hanem hogy az anyag alkalmas-e.',
    items: [
      { title: 'Egységes, jól adagolható végterméket szeretne', text: 'A pellet mérete és sűrűsége miatt jól tárolható és adagolható, ha az alapanyag és az előkészítés ezt támogatja.' },
      { title: 'Eladható pelletet gyártana', text: 'Értékesítéshez stabil minőség, kiszámítható mennyiség és csomagolás kell, nem csak a prés. Ezt a végtermék felől tervezzük vissza.' },
      { title: 'Brikett vagy pellet a kérdés', text: 'Az alapanyag, a célpiac és a kapacitás dönti el. Megmondjuk, melyik irány reálisabb az Ön esetében.' },
      { title: 'Folyamatosan van alapanyag', text: 'A pelletálás akkor stabil, ha az alapanyag-ellátás, a nedvesség és a frakció nem esik szét naponta.' },
      { title: 'Még előkészítés kell a prés elé', text: 'Sok projekt darálás vagy szárítás nélkül nem stabil. Az adagolás és a hűtés ugyanúgy a rendszer része.' },
      { title: 'Energetikai célra gyártana', text: 'Energetikai vagy ipari felhasználásnál a végtermék-követelmény szabja meg a rendszer összetettségét.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó pelletáló rendszer?',
    intro: 'A pelletálás üzemi oldalról arról szól, hogyan lesz az ömlesztett, változó alapanyagból egységesebb, jól kezelhető és értékesíthető végtermék.',
    cards: [
      { problem: 'Változó minőségű alapanyag', why: 'Az ingadozó nedvesség és szemcseméret instabil gyártást és gyengébb pelletet okoz.', answer: 'A prés előtt az alapanyag-előkészítést stabilizáljuk: darálás, szárítás, osztályozás és adagolás.' },
      { problem: 'Nehezen kezelhető ömlesztett anyag', why: 'A laza, poros anyag tárolása, adagolása és értékesítése nehéz.', answer: 'Megfelelő előkészítéssel a pellet egységesebb, jobban kezelhető végtermék lehet.' },
      { problem: 'Bizonytalan végtermékcél', why: 'Más rendszer kell saját energetikai felhasználásra, mint értékesítési célú, magasabb elvárású pellethez.', answer: 'A rendszert a végfelhasználásból tervezzük vissza, nem a présből előre.' },
      { problem: 'Túl korai gépválasztás', why: 'A pelletprés önmagában nem oldja meg az anyagminőségi és adagolási gondokat.', answer: 'Először az anyag-előkészítési láncot vizsgáljuk, és csak utána javaslunk pelletálási irányt.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'Pelletálásnál az alapanyag előkészítettsége meghatározó. A technológia érzékeny a nedvességre, a szemcseméretre és az adagolás egyenletességére.',
    materials: ['faipari fűrészpor', 'finom apríték', 'biomassza', 'mezőgazdasági mellékanyagok előminősítés után', 'energianövények előkészített anyagai', 'szárított és homogenizált alapanyagok'],
    industries: ['biomassza-feldolgozás', 'faipar', 'fűrészüzemek', 'energetikai projektek', 'mezőgazdasági mellékanyag-hasznosítás'],
    goals: ['pellet saját felhasználásra', 'értékesíthető pellet gyártása', 'biomassza egységesítése', 'jobb adagolhatóság', 'energetikai alapanyag előkészítése', 'ömlesztett anyag értéknövelése'],
  },
  process: {
    h2: 'Mi kell a préshez, hogy a pelletáló rendszer működjön?',
    intro: 'Egy pelletáló rendszer több egymásra épülő lépésből áll. A stabil működéshez az alapanyag fogadásától a hűtésig és a tárolásig végig kell gondolni az anyag útját.',
    steps: [
      { title: 'Alapanyag fogadása és pufferelése', text: 'Az anyag érkezhet ömlesztve, silóból, zsákból vagy előző technológiai lépésből.' },
      { title: 'Darálás vagy finomítás', text: 'A pelletálás előtt gyakran egységesebb, megfelelő szemcseméretű frakció kell.' },
      { title: 'Szárítás vagy nedvességbeállítás', text: 'A túl nedves vagy ingadozó anyag pelletálási gondokat okoz.' },
      { title: 'Adagolás és kondicionálás', text: 'Az egyenletes anyagellátás és a kondicionálás a stabil gyártás kulcsa.' },
      { title: 'Pelletálás', text: 'A pelletprés a fő egység, de csak megfelelően előkészített anyaggal működik tartósan jól.' },
      { title: 'Hűtés, rostálás, tárolás vagy csomagolás', text: 'A kész pellet kezelése a végfelhasználástól vagy az értékesítési céltól függ.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt pelletáló rendszert választ?',
    intro: 'A rossz döntés gyakori oka, hogy a beruházó a présből indul ki, miközben az alapanyag-előkészítés nincs tisztázva.',
    factors: [
      { title: 'Alapanyag típusa', text: 'Fa, biomassza, mezőgazdasági mellékanyag vagy kevert? Minden anyag más viselkedést mutat.' },
      { title: 'Nedvességtartalom', text: 'A túl magas vagy ingadozó nedvesség szárítási vagy kondicionálási feladatot jelent.' },
      { title: 'Szemcseméret', text: 'A túl durva vagy szálas frakció instabil működést okozhat.' },
      { title: 'Kapacitás és üzemóra', text: 'Időszakos felhasználás, egy műszak vagy folyamatos termelés? Más rendszerlogika kell.' },
      { title: 'Végtermékcél', text: 'Saját energetikai felhasználás vagy értékesítési pellet? A végtermék elvárása visszahat a rendszerre.' },
      { title: 'Kiegészítő technológiák', text: 'Daráló, szárító, hűtő, rostáló és anyagmozgató elemek is kellhetnek.' },
      { title: 'Csomagolás és logisztika', text: 'Zsák, big-bag vagy ömlesztett? Az értékesítési mód befolyásolja a rendszert.' },
      { title: 'Beruházási és üzemeltetési realitás', text: 'A pelletálás folyamatos üzemeltetési fegyelmet kíván: energia, kopóalkatrész és kezelői rutin.' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy pelletálási projektben?',
    body: [
      'Több gyártó pelletáló technológiáját képviseljük, ezért nem egy géphez igazítjuk a feladatot. Először az alapanyagot, a nedvességet, a frakciót és a végtermékcélt nézzük meg.',
      'A cél, hogy kiderüljön: a pelletálás reális irány-e, milyen előkészítés kell hozzá, és melyik rendszerlogika vállalható műszakilag és üzletileg.',
    ],
    points: [
      { title: 'Alapanyag-előkészítés tisztázása', text: 'Megnézzük, kell-e darálás, szárítás, osztályozás vagy pufferelés a prés elé.' },
      { title: 'Független technológiai irány', text: 'Több gyártó közül a feladathoz illőt választjuk, nem egy márkát toljuk.' },
      { title: 'Rendszerszemlélet', text: 'A présen túl a teljes anyagutat nézzük: bemenet, előkészítés, pelletálás, hűtés, csomagolás.' },
      { title: 'Gyártói háttér', text: 'A pelletálásra a Nova Pellet és további európai gyártók technológiái közül választunk.' },
      { title: 'Üzleti realitás', text: 'A beruházás mellett az energiaigény, a karbantartás és az alapanyagellátás is kritikus.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés és az ajánlat-előkészítés magyar nyelvű szakmai támogatással történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'A pelletálás szinte mindig előkészítési rendszerrel együtt értelmezhető. A jó pellethez stabil anyag, megfelelő frakció és nedvesség kell.',
    links: [
      { label: 'Ipari darálás', href: '/technologiak/ipari-daralas/', description: 'Ha az alapanyag túl durva, szálas vagy változó méretű.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha az alapanyag túl nedves vagy ingadozó nedvességtartalmú.' },
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha pellet helyett nagyobb, tömörebb brikett a jobb irány.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha adagolásra, pufferelésre, hűtésre vagy csomagolásra van szükség.' },
    ],
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, reális-e a pelletálási irány',
    body: 'Nem kell kész specifikációval érkeznie. Az első körben azt nézzük meg, hogy az adott alapanyag, mennyiség, nedvesség és cél alapján a pelletálás jó megoldás-e, vagy előbb más előkészítő technológiát kell vizsgálni.',
    fields: ['pelletprés', 'matrica', 'görgő', 'granulátum', 'faipari fűrészpor', 'finom apríték', 'biomassza', 'kötőanyag', 'nedvesség', 'szemcseméret', 'kondicionálás', 'szárítás', 'darálás', 'hűtés', 'rostálás', 'adagolás', 'kapacitás', 'üzemóra', 'zsákolás', 'big-bag', 'ömlesztett', 'fűtőérték', 'hamutartalom', 'agripellet', 'energianövény', 'csomagolás', 'tárolás', 'megtérülés'],
  },
  faq: {
    h2: 'Gyakori kérdések a pelletálás kapcsán',
    items: [
      { q: 'Milyen anyagból lehet pelletet készíteni?', a: 'Jellemzően megfelelően előkészített faipari vagy biomassza alapanyagból. Az alkalmasságot a nedvesség, a szemcseméret és az összetétel adja.' },
      { q: 'Kell-e szárítani pelletálás előtt?', a: 'Sokszor igen. A pelletálás érzékeny a nedvességre, ezért a túl nedves anyag előszárítást vagy nedvességbeállítást igényelhet.' },
      { q: 'Elég önmagában a pelletprés?', a: 'Általában nem. A stabil gyártáshoz darálás, szárítás, adagolás, hűtés, rostálás és tárolás is kellhet.' },
      { q: 'Brikettálás vagy pelletálás a jobb irány?', a: 'Az alapanyag, a mennyiség, a végtermékcél és a felhasználás dönti el. Nem érdemes csak gépár alapján választani.' },
      { q: 'Kell-e kötőanyag a pellethez?', a: 'Faalapú anyagnál általában nem, a lignin köt. Egyes mezőgazdasági anyagoknál merülhet fel, ezt anyagvizsgálattal nézzük.' },
      { q: 'Tudnak konkrét rendszert ajánlani?', a: 'Igen. Az alapanyag-előkészítés, a nedvesség, a mennyiség és a végtermékcél tisztázása után megnevezzük a feladathoz illő pelletáló rendszert.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, hogy a pelletálás a jó irány? Nézzük meg együtt',
    body: [
      'A pelletálásnál a jó döntés nem a présgéppel kezdődik. Először azt tisztázzuk, alkalmas-e az alapanyag, kell-e darálás vagy szárítás, és milyen minőségű végtermék a cél.',
      'Ha ezt leírja, segítünk eldönteni, reális irány-e a pelletálás, vagy más megoldást érdemes vizsgálni.',
    ],
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
  },
};

/* BIOMASSZA-SZÁRÍTÁS — Anyag-először · tévhit-nyitás · RP Engineering */
const biomasszaSzaritas: TechnologyGateway = {
  slug: 'biomassza-szaritas',
  name: 'Biomassza-szárítás',
  metaTitle: 'Biomassza-szárítás ipari feldolgozáshoz és energetikához',
  metaDescription:
    'Biomassza-szárítás nedves apríték, fűrészpor és mezőgazdasági mellékanyag előkészítésére. Az ECOTEQ a vízelvonási feladatból indul ki: hőforrás, anyagáram és cél nedvesség alapján.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Biomassza-szárítás',
    h1: 'Biomassza-szárítás feldolgozáshoz és energetikai felhasználáshoz',
    lead: 'A nedves biomasszát nem a szárító menti meg elsőként. Először az a kérdés, mennyi vizet kell kivenni, milyen hőforrással és milyen célra. A szárító típusa csak ezután jön.',
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
    microcopy: 'A megfelelő szárítási irány kiválasztásához elég, ha megadja az anyagot, a bemeneti és a cél nedvességet, a mennyiséget és a hőforrást.',
    trustPills: [],
    image: '/heroes/hero-biomassza-szaritas.jpg',
    imageAlt: 'Biomassza szárító rendszer',
  },
  heroStats: [
    { value: 'dob- és szalagos', suffix: '', label: 'szárító technológia' },
    { value: '1–10', suffix: ' t/h', label: 'szárítási kapacitás' }, // [VALIDÁLANDÓ]
    { value: '6', suffix: '', label: 'európai gyártó egy rendszerben' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány a biomassza-szárítás?',
    intro: 'A szárítás akkor merül fel, ha a nedvesség akadályozza a tárolást, a feldolgozást vagy az energetikai felhasználást. A kérdés nem az, milyen szárítót vegyünk, hanem hogy mennyi vizet kell kivenni, milyen anyagból és milyen hőforrással.',
    items: [
      { title: 'Az anyag túl nedves a következő lépéshez', text: 'Brikettálás, pelletálás vagy energetikai felhasználás előtt sokszor nedvességcsökkentés kell.' },
      { title: 'Ingadozik a bemeneti minőség', text: 'A változó nedvesség instabil gyártást és kezelési gondot okoz. A szárítás stabilabb alapanyagot ad.' },
      { title: 'Kockázatos a nedves tárolás', text: 'A nedves biomassza nehezebben és kockázatosabban tárolható, mint a stabil nedvességű anyag.' },
      { title: 'A nedvesség felesleges súlyt visz', text: 'Nedves anyag mozgatásakor jelentős részben vizet szállítunk. A szárítás csökkentheti a tömeget, a hatást a logisztika adja.' },
      { title: 'Nem biztos, hogy szárítani kell', text: 'Sokszor előbb azt érdemes eldönteni, megéri-e egyáltalán szárítani, vagy más előkészítés a jobb irány.' },
      { title: 'A szárítás a rendszer része', text: 'A szárító gyakran darálóval, adagolóval és tömörítő technológiával együtt működik jól, nem önmagában.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó szárítási rendszer?',
    intro: 'A szárítás üzemi oldalról nem pusztán nedvességcsökkentés. A fő kérdés, hogy az anyag stabilabban kezelhető, tárolható és továbbfeldolgozható legyen.',
    cards: [
      { problem: 'Túl nedves vagy ingadozó biomassza', why: 'A magas nedvesség rontja a tárolhatóságot és a további feldolgozás tervezhetőségét.', answer: 'Megfelelő szárítási technológiával az anyag nedvessége a célfolyamathoz közelíthető.' },
      { problem: 'Akadály a tömörítés előtt', why: 'A brikettálás és a pelletálás érzékeny a nedvességre. A túl nedves anyag instabil működést okoz.', answer: 'A szárítás az anyag-előkészítési lánc egyik kulcseleme lehet.' },
      { problem: 'Rossz hőforrás- vagy energiaillesztés', why: 'A szárítás energiaigényes. Rossz hőforrással a beruházás gazdaságtalanná válhat.', answer: 'Az irányt a rendelkezésre álló hőforrás, az energiaár és a vízelvonási igény alapján választjuk.' },
      { problem: 'Tisztázatlan bemeneti és cél nedvesség', why: 'Ha nem tudjuk, honnan hová kell szárítani, nem lehet jól méretezni.', answer: 'Először a bemeneti nedvességet, a cél nedvességet, a mennyiséget és a felhasználást tisztázzuk.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'A szárítási technológia kiválasztásánál az anyag szemcsemérete, nedvessége, tapadása és hőérzékenysége is számít.',
    materials: ['faapríték', 'fűrészpor', 'forgács', 'aprított biomassza', 'mezőgazdasági mellékanyag', 'energianövény', 'brikettálás vagy pelletálás előtti alapanyag'],
    industries: ['biomassza-feldolgozás', 'faipar', 'energetikai projektek', 'mezőgazdasági mellékanyag-hasznosítás', 'brikett- és pelletgyártás'],
    goals: ['nedvességcsökkentés', 'brikettálás előkészítése', 'pelletálás előkészítése', 'energetikai hasznosítás javítása', 'tárolhatóság javítása', 'stabilabb anyagáram'],
  },
  process: {
    h2: 'Mi kell a szárítóhoz, hogy a rendszer működjön?',
    intro: 'A szárító önmagában nem elég, ha az adagolás, a kihordás, a porleválasztás és a hőellátás nincs végiggondolva. Az alábbi lépésekből áll össze egy működő szárítási rendszer.',
    steps: [
      { title: 'Anyag fogadása és pufferelése', text: 'Az anyag érkezhet aprítékként, fűrészporként vagy más biomassza formában.' },
      { title: 'Előkészítés és adagolás', text: 'Szükség lehet darálásra, rostálásra, szétterítésre vagy egyenletes adagolásra.' },
      { title: 'Hőforrás és szárítás', text: 'A hőforrás lehet meglévő vagy új. A technológiát a vízelvonási igény és az anyagtulajdonság adja.' },
      { title: 'Porleválasztás és levegőkezelés', text: 'A keletkező por és levegő, valamint az esetleges emisszió kezelése a rendszer része.' },
      { title: 'Kihordás és tárolás', text: 'A szárított anyagot stabilan kell továbbítani, hűteni és tárolni.' },
      { title: 'Továbbfeldolgozás', text: 'A kimenet mehet brikettálásra, pelletálásra vagy energetikai felhasználásra.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt szárítót választ?',
    intro: 'A legfontosabb kérdés sokszor az, mennyi vizet kell kivenni, milyen hőforrással és milyen üzemidő alatt.',
    factors: [
      { title: 'Anyag típusa', text: 'Faapríték, fűrészpor vagy mezőgazdasági biomassza? Minden anyag másképp szárítható.' },
      { title: 'Bemeneti és cél nedvesség', text: 'A szárítási feladat alapja: honnan hová kell eljutni nedvességben?' },
      { title: 'Mennyiség és üzemóra', text: 'Egy műszakban vagy folyamatosan kell működnie a rendszernek?' },
      { title: 'Hőforrás', text: 'Van-e meglévő kazán, hulladékhő, vagy új hőtermelő kell?' },
      { title: 'Szemcseméret és anyagáram', text: 'A méret és az adagolhatóság befolyásolja a szárító típusát.' },
      { title: 'Por, emisszió és környezet', text: 'A porleválasztást és a telepítési környezetet külön vizsgáljuk.' },
      { title: 'Továbbfeldolgozás', text: 'Brikettálás, pelletálás vagy tüzelés a cél? A kimeneti nedvességet ehhez illesztjük.' },
      { title: 'Energia és üzemeltetés', text: 'A szárítás energiaigénye és üzemórája a megtérülés kulcstényezője.' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy szárítási projektben?',
    body: [
      'Nem abból indulunk ki, mekkora szárító kell. Először azt nézzük meg, milyen anyagról van szó, mennyi a bemeneti és a cél nedvesség, mennyit kell kezelni, és milyen hőforrás áll rendelkezésre.',
      'A cél, hogy reális szárítási irány szülessen, amely illeszkedik a teljes anyagáramhoz és a későbbi feldolgozáshoz.',
    ],
    points: [
      { title: 'Nedvesség- és anyagalapú előminősítés', text: 'A bemeneti és kimeneti nedvesség, az anyagtípus és a mennyiség alapján indul a gondolkodás.' },
      { title: 'Rendszerszemlélet', text: 'Adagolás, szárítás, kihordás, porleválasztás, hőforrás és továbbfeldolgozás együtt számít.' },
      { title: 'Technológiai irány', text: 'Nem minden szárítás való minden biomasszára és üzemeltetési helyzetre.' },
      { title: 'Gyártói háttér', text: 'A szárítórendszerekre az RP Engineering és további európai gyártók technológiái közül választunk.' },
      { title: 'Üzleti realitás', text: 'A szárítás energiaigényét, üzemóráját és beruházási logikáját külön tisztázzuk.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés, az előkészítés és a projektkövetés magyar nyelvű szakmai támogatással történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'A szárítás gyakran nem önálló cél, hanem brikettálás, pelletálás vagy stabilabb anyagkezelés előfeltétele.',
    links: [
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha a szárított anyagból tömör brikettet szeretne.' },
      { label: 'Pelletálás', href: '/technologiak/pelletalas/', description: 'Ha a szárított alapanyagból pellet készülne.' },
      { label: 'Ipari darálás', href: '/technologiak/ipari-daralas/', description: 'Ha az anyag túl nagy vagy rosszul adagolható a szárítás előtt.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha stabil adagolásra, kihordásra vagy tárolásra van szükség.' },
    ],
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, milyen szárítási irány lehet reális',
    body: 'Nem kell kész specifikációval érkeznie. Első körben azt nézzük meg, milyen anyagból mennyi vizet kell eltávolítani, milyen célra, milyen üzemidőben és milyen hőforrással.',
    fields: ['dobszárító', 'szalagos szárító', 'faapríték', 'fűrészpor', 'mezőgazdasági biomassza', 'bemeneti nedvesség', 'cél nedvesség', 'vízelvonás', 'hőforrás', 'hulladékhő', 'kazán', 'porleválasztás', 'emisszió', 'kapacitás', 'üzemóra', 'adagolás', 'kihordás', 'szemcseméret', 'brikettálás-előkészítés', 'pelletálás-előkészítés', 'energetikai felhasználás', 'tárolhatóság', 'energiaköltség', 'megtérülés'],
  },
  faq: {
    h2: 'Gyakori kérdések a biomassza-szárítás kapcsán',
    items: [
      { q: 'Milyen biomasszát lehet szárítani?', a: 'Faaprítékot, fűrészport, forgácsot és sok mezőgazdasági mellékanyagot. A pontos irányt az anyag és a nedvesség adja.' },
      { q: 'Mi a legfontosabb adat szárítóválasztás előtt?', a: 'A bemeneti nedvesség, a cél nedvesség, az anyagmennyiség és a rendelkezésre álló hőforrás.' },
      { q: 'Dobszárító vagy szalagos szárító kell?', a: 'Az anyag, a kapacitás és a hőforrás dönti el. A szalagos kíméletesebb és egyenletesebb, a dobszárító robusztusabb.' },
      { q: 'Mindig kell szárítás brikettálás vagy pelletálás előtt?', a: 'Nem mindig, de gyakran. Az alapanyag nedvessége és a választott tömörítési technológia mondja meg.' },
      { q: 'Megéri-e energetikailag a szárítás?', a: 'Erre nincs általános válasz. A hőforrás, az energiaár, az üzemóra és a felhasználás együtt dönti el, ezt számoljuk át az Ön adataira.' },
      { q: 'Tudnak konkrét szárítót ajánlani?', a: 'Igen. A vízelvonási feladat, a hőforrás, az üzemóra és a célfolyamat tisztázása után megnevezzük a feladathoz illő szárítórendszert.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, milyen szárítás kell? Kezdjük a vízelvonási feladattal',
    body: [
      'A szárításnál a jó döntés nem a szárítógép nevével kezdődik. Először azt tisztázzuk, milyen anyagból mennyi vizet kell kivenni, milyen célra és milyen hőforrással.',
      'Ha ezt leírja, segítünk eldönteni, milyen szárítási irány lehet reális.',
    ],
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
  },
};

/* VÁKUUMSZÁRÍTÁS — Végig ott vagyunk (szerviz) · konkrét-anyag · ISVE (vákuum) */
const vakuumszaritas: TechnologyGateway = {
  slug: 'vakuumszaritas',
  name: 'Vákuumszárítás',
  metaTitle: 'Vákuumszárító faipari üzemeknek',
  metaDescription:
    'Vákuumszárítás faanyag kontrollált, gyorsabb és kiszámíthatóbb szárítására. Az ECOTEQ az ISVE vákuumtechnológiai háttérrel, magyar szervizzel segít a fafaj, a vastagság és a cél alapján.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Vákuumszárítás',
    h1: 'Vákuumszárító faipari üzemeknek, ahol a minőség és az idő számít',
    lead: 'Vastag tölgy vagy bükk egészen más szárítási feladat, mint a vékony fűrészáru. A vákuumszárítás akkor jó irány, ha a fafaj, a vastagság és a minőségi elvárás kontrollált, gyorsabb ciklust kíván.',
    secondaryCta: { label: 'Megnézem a részletes vákuumszárító oldalt', href: 'https://vakuumszarito.hu' },
    microcopy: 'A megfelelő vákuumszárító kiválasztásához elég, ha megadja a fafajt, a vastagságot, az induló és a cél nedvességet és a heti mennyiséget.',
    trustPills: [],
    image: '/heroes/hero-vakuumszaritas.jpg',
    imageAlt: 'Vákuumemelő daru faipari raktárban, rakott fűrészáruval',
  },
  heroStats: [
    { value: 'kontrollált', suffix: '', label: 'szárítási folyamat' },
    { value: 'ISVE', suffix: '', label: 'vákuumtechnológiai háttér' },
    { value: 'magyar', suffix: '', label: 'szerviz és betanítás' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány a vákuumszárítás?',
    intro: 'A vákuumszárítás nem minden faipari üzemnek ugyanazt jelenti. Más a helyzet egy asztalosüzemnél, más egy fűrészüzemnél, és más értékes keményfa esetén. A fafaj, a vastagság és a cél együtt dönt.',
    items: [
      { title: 'Hosszú vagy kiszámíthatatlan a szárítási idő', text: 'A vákuumszárítás rövidebb és jobban tervezhető ciklusokban gondolkodik, ha az anyag ezt támogatja.' },
      { title: 'Értékes faanyaggal dolgozik', text: 'Keményfánál és vastagabb anyagnál a szárítás minősége közvetlen gazdasági kérdés.' },
      { title: 'Saját, megbízható száraz alapanyag kell', text: 'Ha a külső szárítás lassú, drága vagy bizonytalan, a saját vákuumszárító reális irány lehet.' },
      { title: 'Repedés és vetemedés a gond', text: 'Belső feszültség és nedvességingadozás esetén kontrolláltabb szárítási technológia kell.' },
      { title: 'A szárítás visszafogja a gyártást', text: 'Ha a gyártás a szárításra vár, a döntés nemcsak műszaki, hanem termelési és pénzügyi kérdés is.' },
      { title: 'Többféle fafajt és vastagságot kezel', text: 'Változó alapanyagnál fontos a rugalmasan tervezhető, kontrollált szárítási folyamat.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó vákuumszárító?',
    intro: 'A vákuumszárítás mögött ritkán az a kérdés, kell-e egy új szárító. A valódi kérdés, mennyire lassítja, drágítja vagy bizonytalanítja el a jelenlegi szárítás a gyártást.',
    cards: [
      { problem: 'Hosszú szárítási ciklusok', why: 'A hagyományos szárítás sokáig tart vagy külső partnerre vár, ami leköti a készletet.', answer: 'A vákuumszárítás bizonyos faanyagoknál rövidebb, jobban tervezhető ciklust tesz lehetővé.' },
      { problem: 'Ingadozó faanyagminőség', why: 'A nedvesség, a repedés és a vetemedés bizonytalansága a gyártási minőséget is érinti.', answer: 'Kontrollált technológiai környezetben a szárítás jobban kézben tartható.' },
      { problem: 'Külső szárítási függőség', why: 'A bérszárítás határidő-, minőség- és költségkockázatot jelent.', answer: 'Saját vákuumszárítóval a szárítás egy része vagy egésze házon belülre kerül.' },
      { problem: 'Rosszul méretezett kapacitás', why: 'Túl kicsi kamra vagy rossz hossz hosszú távon korlátozza a termelést.', answer: 'A méretezést fafaj, vastagság, induló és cél nedvesség, valamint termelési ütem alapján végezzük.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'A fafaj, a vastagság, a hosszúság, az induló és a cél nedvesség, valamint a végfelhasználás együtt adja meg a reális gépméretet és technológiát.',
    materials: ['keményfa', 'tölgy', 'bükk', 'kőris', 'akác külön vizsgálattal', 'értékesebb lombos faanyagok', 'fűrészáru', 'asztalosipari alapanyag', 'nyílászáró- és bútoripari faanyag'],
    industries: ['asztalosüzemek', 'bútorgyártás', 'nyílászárógyártás', 'fűrészüzemek', 'fatelepek', 'faanyag-kereskedelem', 'egyedi faipari gyártás'],
    goals: ['szárítási ciklusidő csökkentése', 'saját gyártási alapanyag előkészítése', 'külső szárítástól való függés csökkentése', 'minőségi kockázatok mérséklése', 'gyártási tervezhetőség javítása'],
    note: 'Ha nem biztos benne, hogy az Ön faanyaga vagy gyártási helyzete ide tartozik, elég, ha elküldi az alapadatokat. Segítünk eldönteni, érdemes-e vákuumszárításban gondolkodni.',
  },
  process: {
    h2: 'Mi kell a kamrán túl, hogy a rendszer működjön?',
    intro: 'A jó döntéshez nem elég a kamraméret. A faanyag, a rakodás, az energiaellátás, a vezérlés és a későbbi szerviz együtt dönti el, hogy a rendszer valóban használható lesz-e a mindennapi gyártásban.',
    steps: [
      { title: 'Faanyag előminősítése', text: 'Fafaj, vastagság, hosszúság, induló és cél nedvesség, valamint mennyiség tisztázása.' },
      { title: 'Kamraméret és kapacitás', text: 'A nettó térfogatot és a hasznos hosszúságot a tipikus anyagmérethez és a gyártási ritmushoz illesztjük.' },
      { title: 'Rakodási és telepítési logika', text: 'A faanyag mozgatása, betöltése és a kezelői hozzáférés meghatározza a gyakorlati használhatóságot.' },
      { title: 'Vákuumszárítási technológia', text: 'A folyamat a választott géptől, a programtól, a faanyagtól és a minőségi elvárástól függ.' },
      { title: 'Vezérlés és üzemeltetés', text: 'Fontos a kezelhetőség, a programozhatóság, a mérés és a dokumentálhatóság.' },
      { title: 'Szerviz, alkatrész és támogatás', text: 'A hosszú távú működéshez elérhető szakmai háttér, alkatrész és betanítás is kell.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt vákuumszárítót választ?',
    intro: 'Könnyű hibás döntést hozni, ha csak a kamraméretet vagy az árat nézzük. A faanyag, a cél, a kapacitás és az üzemeltethetőség együtt számít.',
    factors: [
      { title: 'Fafaj', text: 'Másképp viselkedik a tölgy, a bükk, a kőris vagy más keményfa. A fafaj adja a cikluslogikát.' },
      { title: 'Vastagság és hosszúság', text: 'A tipikus méretek alapján választunk kamrahosszt, rakodási módot és kapacitást.' },
      { title: 'Induló és cél nedvesség', text: 'Nem mindegy, honnan hová kell szárítani. A cél nedvesség a végfelhasználástól függ.' },
      { title: 'Minőségi elvárás', text: 'Repedés, vetemedés, szín és feldolgozhatóság szempontjai.' },
      { title: 'Heti vagy havi mennyiség', text: 'A kapacitást a termelési ritmushoz illesztjük, nem egyszeri maximumhoz.' },
      { title: 'Energiaellátás', text: 'Elektromos kapacitás, fűtési igény és telepítési környezet.' },
      { title: 'Telepítés és kiszolgálás', text: 'A rakodás, a hozzáférés és a kezelői munkaterület is döntési szempont.' },
      { title: 'Üzleti realitás', text: 'Saját szárító akkor indokolt, ha a mennyiség, az érték és az időnyereség együtt értelmezhető.' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ a tervezéstől a szervizig?',
    body: [
      'Nem abból indulunk ki, mekkora kamrát lehetne eladni. Először tisztázzuk, milyen faanyagot kell szárítani, milyen nedvességgel, mekkora mennyiségben és milyen gyártási célra.',
      'A cél, hogy a vákuumszárító ne önálló gépbeszerzés legyen, hanem az Ön gyártásába illeszkedő, a telepítéstől a szervizig kísért fejlesztés.',
    ],
    points: [
      { title: 'Anyagalapú előminősítés', text: 'Fafaj, vastagság, hossz, induló és cél nedvesség, mennyiség és minőségi elvárás alapján indul a javaslat.' },
      { title: 'Reális technológiai javaslat', text: 'Segítünk eldönteni, jó irány-e a vákuumszárítás, és milyen kamraméret vagy konfiguráció reális.' },
      { title: 'Végig ott vagyunk', text: 'A telepítés, a betanítás és a későbbi támogatás során sem marad egyedül.' },
      { title: 'Gyártói háttér', text: 'A vákuumszárításra az elismert ISVE vákuumtechnológiai háttérrel dolgozunk.' },
      { title: 'Üzleti realitás', text: 'A ciklusidőt, a kapacitást, a külső szárítás költségét és a gyártási hatást együtt mérlegeljük.' },
      { title: 'Magyar szerviz és betanítás', text: 'Az egyeztetés, a beüzemelés és a támogatás magyar nyelvű szakmai háttérrel történik.' },
    ],
  },
  related: {
    h2: 'Ha a szárítás mellett más kérdés is felmerül',
    intro: 'A vákuumszárítás sok faipari üzemben önmagában is jó irány. Máskor a faanyag kezelése, mozgatása vagy impregnálása is a feladat része.',
    links: [
      { label: 'Vákuumimpregnálás', href: '/technologiak/vakuumimpregnalas/', description: 'Ha a faanyag védelme vagy speciális kezelése is része a feladatnak.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha a faanyag rakodása vagy a kamra kiszolgálása külön megoldást igényel.' },
    ],
    spoke: { title: 'Részletes vákuumszárító oldal', label: 'Megnézem a részletes vákuumszárító oldalt', href: 'https://vakuumszarito.hu', description: 'A részletes vákuumszárító információk, gépválasztás és döntési szempontok a vakuumszarito.hu oldalon érhetők el.' },
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, reális-e a vákuumszárító',
    body: 'Nem kell kész specifikációval érkeznie. Első körben tisztázzuk, milyen faanyagot, milyen méretben, milyen nedvességről milyen célra és mennyiségben szeretne szárítani.',
    fields: ['fafaj', 'tölgy', 'bükk', 'kőris', 'vastagság', 'hosszúság', 'induló nedvesség', 'cél nedvesség', 'ciklusidő', 'kamraméret', 'kapacitás', 'repedés', 'vetemedés', 'minőség', 'fűrészáru', 'keményfa', 'vákuum', 'energiaigény', 'rakodás', 'vezérlés', 'szerviz', 'alkatrész', 'betanítás', 'bérszárítás', 'megtérülés', 'bővíthetőség'],
  },
  faq: {
    h2: 'Gyakori kérdések a vákuumszárítás kapcsán',
    items: [
      { q: 'Mikor érdemes vákuumszárítóban gondolkodni?', a: 'Akkor, ha a szárítási idő, a faanyag értéke, a minőségi kontroll vagy a gyártási tervezhetőség fontos üzemi kérdés.' },
      { q: 'Milyen faanyagnál releváns?', a: 'Gyakran keményfáknál és értékesebb faanyagoknál merül fel, de az alkalmasság fafajtól, mérettől és cél nedvességtől függ.' },
      { q: 'Mekkora kamra kell?', a: 'A jellemző faanyag-hossz, vastagság, mennyiség és termelési ritmus alapján határozzuk meg.' },
      { q: 'Gyorsabb, mint a hagyományos szárítás?', a: 'Bizonyos anyagoknál és céloknál rövidebb ciklus érhető el, de konkrét időt csak anyagadat és egyeztetés alapján ígérünk.' },
      { q: 'Van magyar szerviz és betanítás?', a: 'Igen. A beüzemelés, a betanítás és a későbbi támogatás magyar nyelvű szakmai háttérrel történik.' },
      { q: 'Mi van, ha nem biztos, hogy ez a jó irány?', a: 'Akkor is érdemes elküldeni az alapadatokat. Ha nem a vákuumszárító a reális megoldás, azt is megmondjuk.' },
    ],
  },
  finalCta: {
    h2: 'Nem kell tudnia, melyik gép kell. Elég, ha leírja, mit szeretne szárítani',
    body: [
      'A vákuumszárító kiválasztása nem a kamraméretnél kezdődik. Először tisztázzuk a faanyagot, a nedvességet, a mennyiséget és a gyártási célt.',
      'Ezek alapján segítünk eldönteni, érdemes-e vákuumszárításban gondolkodni, és ha igen, milyen méret és kapacitás reális.',
    ],
    secondaryCta: { label: 'Megnézem a részletes vákuumszárító oldalt', href: 'https://vakuumszarito.hu' },
  },
};

/* VÁKUUMIMPREGNÁLÁS — Függetlenség · „mikor NEM kell" · ISVE (vákuum) */
const vakuumimpregnalas: TechnologyGateway = {
  slug: 'vakuumimpregnalas',
  name: 'Vákuumimpregnálás',
  metaTitle: 'Vákuumimpregnálás faanyag kezelésére és védelmére',
  metaDescription:
    'Vákuumimpregnálás faanyag ipari kezelésére, védelmére és speciális felhasználásra. Az ECOTEQ a kezelési célból indul ki, és a feladathoz illő vákuumtechnológiai irányt javasolja.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Vákuumimpregnálás',
    h1: 'Vákuumimpregnálás faanyag kezelésére és ipari felhasználásra',
    lead: 'Nem minden faanyaghoz kell vákuumimpregnálás. Akkor jó irány, ha a kezelés mélysége, egyenletessége és ismételhetősége ipari elvárás. Több vákuumtechnológiai megoldás közül a feladathoz illőt választjuk.',
    secondaryCta: { label: 'Kapcsolódó vákuumtechnológiák megtekintése', href: 'https://vakuumszarito.hu' },
    microcopy: 'A megfelelő vákuumimpregnáló kiválasztásához elég, ha megadja a faanyagot, a kezelőanyagot, a méreteket és a kezelési célt.',
    trustPills: [],
    image: '/heroes/hero-vakuumimpregnalas.jpg',
    imageAlt: 'Vákuumimpregnáló berendezés',
  },
  heroStats: [
    { value: 'vákuum / nyomás', suffix: '', label: 'kezelési ciklus' },
    { value: 'ISVE', suffix: '', label: 'vákuumtechnológiai háttér' },
    { value: 'magyar', suffix: '', label: 'szerviz és betanítás' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány a vákuumimpregnálás?',
    intro: 'A vákuumimpregnálás nem általános faanyagkezelő gép. Akkor merül fel, ha a kezelés mélysége, egyenletessége és ipari kontrollja fontos. A faanyag, a kezelőanyag és a végfelhasználás együtt dönt.',
    items: [
      { title: 'Nem minden faanyaghoz kell', text: 'Ha a meglévő kezelés elég, nem kell ipari impregnálás. Megmondjuk, mikor indokolt és mikor nem.' },
      { title: 'A faanyag védelme termékminőségi kérdés', text: 'Kültéri vagy ipari felhasználású faanyagnál a kezelés minősége közvetlen értékkérdés.' },
      { title: 'Kontrolláltabb, ismételhető kezelés kell', text: 'A vákuumtechnológia akkor jön szóba, ha a kezelés mérhető, ismételhető ipari folyamatként kezelendő.' },
      { title: 'Speciális kezelőanyaggal dolgoznak', text: 'A kezelőanyag tulajdonságai és előírásai meghatározzák a rendszer irányát.' },
      { title: 'Ipari mennyiséget kell kezelni', text: 'Kézi vagy merítéses megoldás helyett ipari folyamat kell, ha a mennyiség vagy a határidő ezt indokolja.' },
      { title: 'A szárítás és impregnálás együtt merül fel', text: 'Bizonyos projektekben a szárítás és az impregnálás egy vákuumtechnológiai rendszerben vizsgálandó.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó vákuumimpregnáló rendszer?',
    intro: 'A vákuumimpregnálás mögött termékminőségi, tartóssági vagy megfelelőségi kérdés áll. A technológia akkor jó, ha a kezelési cél és az elvárt eredmény világos.',
    cards: [
      { problem: 'Nem elég kontrollált a jelenlegi kezelés', why: 'Ha a folyamat nem ismételhető, nehéz stabil termékminőséget tartani.', answer: 'A vákuumimpregnálás kontrolláltabb, technológiai folyamatként kezelhető irányt ad.' },
      { problem: 'Magasabb termékérték vagy speciális felhasználás', why: 'Kültéri vagy ipari terméknél a kezelés a végtermék elfogadhatóságát is befolyásolja.', answer: 'A rendszert a faanyaghoz, a kezelőanyaghoz és az elvárt felhasználáshoz igazítjuk.' },
      { problem: 'Tisztázatlan kezelőanyag és technológia', why: 'A gép kiválasztása előtt tudni kell, milyen kezelőanyaggal és milyen ciklussal kell dolgozni.', answer: 'Az előminősítésnél a kezelési célból indulunk, és ehhez vizsgálunk technológiai irányt.' },
      { problem: 'Kézi folyamat helyett ipari rendszer kell', why: 'A kézi kezelés mennyiségi, minőségi vagy dokumentálhatósági korlátot jelenthet.', answer: 'Ipari vákuumimpregnáló rendszerrel a folyamat tervezhetőbbé és szabályozhatóbbá válik.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'A faanyag tulajdonságai és a kezelési cél együtt számítanak. Nem minden faanyag, kezelőanyag vagy végfelhasználás igényli ugyanazt a technológiát.',
    materials: ['fűrészáru', 'faipari kész- vagy félkész termék', 'kültéri faanyag', 'ipari faanyag', 'oszlop, gerenda, szerkezeti faanyag külön vizsgálattal', 'speciális kezelést igénylő faipari termékek'],
    industries: ['faipar', 'fatelepek', 'fűrészüzemek', 'kültéri faipari termékgyártás', 'ipari faanyag-feldolgozás'],
    goals: ['faanyag védelme', 'kezelőanyag bevitele kontrollált folyamatban', 'tartósság javítása', 'ipari kezelés standardizálása', 'dokumentálhatóbb kezelési folyamat'],
  },
  process: {
    h2: 'Mi kell a kamrán túl, hogy a rendszer működjön?',
    intro: 'A vákuumimpregnáló rendszer nem csak kamrából áll. A kezelőanyag tárolása, betöltése, visszanyerése, a munkatér és a biztonság ugyanúgy a rendszer része.',
    steps: [
      { title: 'Faanyag és kezelési cél tisztázása', text: 'Fafaj, méret, mennyiség, végfelhasználás és elvárt kezelés meghatározása.' },
      { title: 'Kezelőanyag és követelmény', text: 'A kezelőanyag tulajdonságai és előírásai meghatározzák a rendszer kialakítását.' },
      { title: 'Rakodás és kamrakialakítás', text: 'A faanyag mérete, kötegelése és a kezelési mennyiség alapján méretezzük a kamrát.' },
      { title: 'Vákuumimpregnálási folyamat', text: 'A vákuum, az esetleges nyomás és a ciklus a technológiától és az anyagtól függ.' },
      { title: 'Kezelőanyag-kezelés', text: 'Tartály, visszanyerés, szűrés és technológiai tisztaság kérdései.' },
      { title: 'Dokumentálás és support', text: 'Ipari használatnál a kezelhetőség, a karbantartás és a támogatás kulcsfontosságú.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt vákuumimpregnálót választ?',
    intro: 'A gép kiválasztása előtt tisztázni kell a faanyagot, a kezelőanyagot, a végfelhasználást és a követelményeket. Enélkül könnyű rossz irányba indulni.',
    factors: [
      { title: 'Faanyag típusa és mérete', text: 'Fafaj, hossz, keresztmetszet, kötegelés és a kezelés gyakorisága.' },
      { title: 'Kezelőanyag', text: 'Milyen anyaggal, milyen viszkozitással és technológiai előírással történik a kezelés?' },
      { title: 'Kezelési cél', text: 'Védelem, tartósság, speciális tulajdonság vagy termékérték növelése?' },
      { title: 'Mennyiség és ciklus', text: 'Mekkora mennyiséget kell kezelni naponta, hetente vagy havonta?' },
      { title: 'Technológiai fokozat', text: 'Elég a vákuumos kezelés, vagy nyomásos, kombinált ciklus is kell?' },
      { title: 'Üzemi környezet', text: 'Vegyszerkezelés, munkavédelem, tartályok, helyigény és kezelői rutin.' },
      { title: 'Szárítási kapcsolat', text: 'A kezelés előtt vagy után faanyag-szárítási kérdések is felmerülhetnek.' },
      { title: 'Dokumentálhatóság', text: 'Ha a végfelhasználás megköveteli, a kezelésnek visszakövethetőnek kell lennie.' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy vákuumimpregnálási projektben?',
    body: [
      'Több vákuumtechnológiai megoldást képviselünk, ezért nem egy géphez igazítjuk a feladatot. Először a faanyagot, a kezelőanyagot, a végfelhasználást és a mennyiséget nézzük meg.',
      'A cél, hogy a vákuumimpregnálás reális, működtethető és szakmailag védhető irány legyen.',
    ],
    points: [
      { title: 'Kezelési feladat előminősítése', text: 'Faanyag, kezelőanyag, mennyiség és végfelhasználás alapján indul a javaslat.' },
      { title: 'Független technológiai irány', text: 'Segítünk eldönteni, vákuumos, nyomásos vagy kombinált irányt érdemes vizsgálni.' },
      { title: 'Rendszerszemlélet', text: 'Kamra, tartály, kezelőanyag-áram, rakodás és biztonság együtt számít.' },
      { title: 'Gyártói háttér', text: 'A területen az ISVE vákuumtechnológiai háttérrel dolgozunk.' },
      { title: 'Üzleti realitás', text: 'A kezelés ipari folyamatként a mennyiséggel, a kezelőanyaggal és az üzemeltetéssel együtt értelmezhető.' },
      { title: 'Magyar projektkommunikáció', text: 'Az előkészítés, az ajánlatkérés és a projektkövetés magyar szakmai támogatással történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'A vákuumimpregnálás a faipari vákuumtechnológiai rendszer része. Sok projektben szárítási, rakodási vagy anyagmozgatási kérdés is felmerül.',
    links: [
      { label: 'Vákuumszárítás', href: '/technologiak/vakuumszaritas/', description: 'Ha a faanyag nedvessége vagy szárítása is kulcskérdés.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha a faanyag mozgatása, rakodása vagy kiszolgálása külön figyelmet igényel.' },
    ],
    spoke: { label: 'Részletes vákuumtechnológiai oldal megnyitása', href: 'https://vakuumszarito.hu', description: 'A faipari vákuumtechnológiai információk a vakuumszarito.hu oldalon érhetők el.' },
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, reális-e a vákuumimpregnálási irány',
    body: 'Nem kell kész specifikációval érkeznie. Első körben azt nézzük meg, milyen faanyagot, milyen méretben, milyen kezelőanyaggal, milyen célra és mennyiségben szeretne kezelni.',
    fields: ['fafaj', 'jellemző méretek', 'kezelendő mennyiség', 'kezelőanyag', 'viszkozitás', 'kezelési cél', 'védelem', 'tartósság', 'végfelhasználás', 'kültéri faanyag', 'vákuum', 'nyomás', 'kombinált ciklus', 'kamraméret', 'tartály', 'visszanyerés', 'munkavédelem', 'dokumentálhatóság', 'szárítás', 'rakodás', 'telepítés', 'szerviz', 'betanítás'],
  },
  faq: {
    h2: 'Gyakori kérdések a vákuumimpregnálás kapcsán',
    items: [
      { q: 'Mikor érdemes vákuumimpregnálásban gondolkodni?', a: 'Akkor, ha a faanyag kezelését kontrolláltabb, ismételhetőbb és ipari folyamatként szeretné megoldani.' },
      { q: 'Milyen faanyag kezelhető?', a: 'Ez fafajtól, mérettől, kezelőanyagtól és célfelhasználástól függ. Pontos választ előminősítés után adunk.' },
      { q: 'A kezelőanyag is része a rendszernek?', a: 'Igen. A kezelőanyag tulajdonságai és előírásai kulcskérdések, ezeket külön tisztázzuk.' },
      { q: 'Vákuum vagy nyomás kell?', a: 'A kezelési céltól és a faanyagtól függ. Bizonyos feladatoknál vákuum, máskor nyomásos vagy kombinált folyamat merül fel.' },
      { q: 'Mikor NEM kell vákuumimpregnálás?', a: 'Ha a meglévő kezelés elég a felhasználáshoz, vagy a mennyiség nem indokol ipari rendszert. Ezt őszintén megmondjuk.' },
      { q: 'Tudnak konkrét gépet ajánlani?', a: 'Igen. A faanyag, a méret, a kezelőanyag és a célfelhasználás tisztázása után megnevezzük a feladathoz illő rendszert.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, hogy vákuumimpregnálás kell? Nézzük meg a kezelési célt',
    body: [
      'A vákuumimpregnálásnál a jó döntés nem a kamramérettel kezdődik. Először azt tisztázzuk, milyen faanyagot, milyen kezelőanyaggal, milyen célra és mennyiségben kell kezelni.',
      'Ha ezt leírja, segítünk eldönteni, reális irány-e a vákuumimpregnálás, és milyen kérdéseket kell tovább vizsgálni.',
    ],
    secondaryCta: { label: 'Kapcsolódó vákuumtechnológiák megtekintése', href: 'https://vakuumszarito.hu' },
  },
};

/* ELSZÍVÁS ÉS PORLEVÁLASZTÁS — Anyag-először · tünet-nyitás · AL-KO */
const elszivasPorlevalasztas: TechnologyGateway = {
  slug: 'elszivas-porlevalasztas',
  name: 'Elszívás és porleválasztás',
  metaTitle: 'Elszívás- és szűrőtechnológia: ipari por-, forgács- és füstelszívás',
  metaDescription:
    'Ipari por-, forgács- és hegesztésifüst-elszívás és -leválasztás faipari és fémipari üzemeknek. Gyári AL-KO technológia, W3 és ATEX kivitel, magyarországi tervezés, telepítés és szerviz.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Elszívás és porleválasztás',
    h1: 'Ipari por-, forgács- és füstelszívás kulcsrakészen',
    lead: 'Poros a munkatér, a gépekre lerakódik a forgács, és a hegesztésifüst is bent marad. A jól méretezett elszívás a forrásnál fogja meg a port: tisztább a levegő, kíméltebbek a gépek, kézben az üzemeltetési költség.',
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
    microcopy: 'A megfelelő elszívás kiválasztásához elég, ha megadja a gépeket, az anyagot és a porkaraktert, és a tisztasági vagy munkavédelmi elvárást.',
    trustPills: [],
    image: '/heroes/hero-elszivas.jpg',
    imageAlt: 'Ipari elszívó- és porleválasztó rendszer',
  },
  // AL-KO portfólióból validált specifikációk (pilot): max légszállítás, W3 tanúsítvány, ATEX kivitel.
  heroStats: [
    { value: '22 000', suffix: ' m³/h', label: 'maximális légszállítás' },
    { value: 'W3', suffix: '', label: 'tanúsítvány hegesztésifüstre' },
    { value: 'ATEX', suffix: '', label: 'kivitel robbanásveszélyes porra' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor jó irány az elszívás és porleválasztás?',
    intro: 'Elszívási rendszer akkor merül fel, ha a por, a forgács vagy a hegesztésifüst nem kezelhető megfelelően a jelenlegi megoldással. A feladat lehet munkakörnyezeti, munkavédelmi, gépkiszolgálási, anyaggyűjtési vagy üzembiztonsági.',
    items: [
      { title: 'Poros, forgácsos a munkatér', text: 'A megmunkáló- és csiszológépeknél keletkező por mindenre lerakódik. A forrásnál történő elszívás ott fogja meg, ahol keletkezik.' },
      { title: 'A hegesztésifüst bent marad', text: 'A hegesztési és vágási füst munkavédelmi határértékhez kötött. Mobil vagy álló szűrővel a forrásnál vagy a térben tisztítható, akár W3 osztályú szűréssel.' },
      { title: 'Több gépet kell egy rendszerre kötni', text: 'Itt nem elég egyedi elszívókban gondolkodni. A csőhálózat, a légmennyiség, a szűrés és az anyagkezelés együtt számít.' },
      { title: 'A por miatt nő a selejt és az állásidő', text: 'A gépekre és vezérlésekre lerakódó por hibákat okoz. A forrásnál elszívott por kíméli a gépet és csökkenti a selejtet.' },
      { title: 'Nő a termelés, fullad a régi elszívás', text: 'Új gép vagy nagyobb terhelés mellett a meglévő elszívás szűk keresztmetszetté válhat, ilyenkor újra kell méretezni.' },
      { title: 'Robbanásveszélyes a por', text: 'Fa-, fém- vagy szerves pornál porrobbanási kockázat állhat fenn. Ilyen esetben ATEX-kivitelű rendszer és külön szakági vizsgálat szükséges.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg egy jó elszívási rendszer?',
    intro: 'A por nem csak takarítási kérdés. Közvetlenül érinti a dolgozók egészségét, a gépek élettartamát, a gyártás folyamatosságát és az üzemeltetési költséget.',
    cards: [
      { problem: 'Munkahelyi egészség és megfelelés', why: 'A belélegezhető por és a hegesztésifüst munkavédelmi határértékhez kötött, a hiánya egészségkockázat és bírság.', answer: 'A megfelelő porosztályú, igény szerint W3 tanúsítványú szűrés bizonyíthatóan tartja a tiszta levegőt a munkatérben.' },
      { problem: 'Gépvédelem és minőség', why: 'A leváló por kíméletlen a megmunkálógépekkel, a vezérlésekkel és a végtermékkel.', answer: 'A forrásnál történő elszívás kíméli a gépeket, és csökkenti a szennyeződésből eredő selejtet és állásidőt.' },
      { problem: 'Magas, folyamatos üzemeltetési költség', why: 'Az elszívás jellemzően folyamatosan jár, így az energiafogyasztás közvetlenül a költségben jelenik meg.', answer: 'Automatikus szűrőtisztítás, hosszú szűrőélettartam és IE3/IE4 motorok együtt mérséklik az energia- és karbantartási költséget.' },
      { problem: 'Az elszívott anyag nincs jól kezelve', why: 'A por és forgács összegyűlik, de nincs jól silózva, szállítva vagy hasznosítva.', answer: 'A leválasztás, a silózás, a kihordás és a brikettálás együtt ad működő, zárt anyagáramot.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és iparágakban merül fel?',
    intro: 'A feladatot a por típusa, a gépi forrásai, a légmennyiség és a megfelelőségi elvárás dönti el. Faipari forgács, csiszolatpor, hegesztésifüst, olaj- vagy festékköd más-más rendszert kíván.',
    materials: ['faipari forgács', 'csiszolatpor', 'fűrészpor', 'hegesztésifüst', 'technológiai por', 'olajköd', 'festékköd', 'szűrőpor', 'könnyű ömlesztett anyagok'],
    industries: ['faipar', 'fémipar', 'hegesztés', 'műanyagipar', 'papíripar', 'építőanyag-ipar', 'élelmiszeripar', 'újrahasznosítás'],
    goals: ['tisztább munkakörnyezet', 'munkavédelmi megfelelés', 'gépvédelem', 'selejtcsökkentés', 'anyaggyűjtés és hasznosítás', 'porrobbanás-védelem (ATEX)', 'energiatakarékos üzem', 'brikettálás előtti gyűjtés'],
    note: 'A teljes elszívási láncra van bevált, egymással illeszkedő AL-KO technológia: tisztalevegős porleválasztók, hegesztésifüst-szűrők, központi szűrőberendezések, ipari porszívók és nagyvákuum, valamint nedves-, olaj- és festékköd-leválasztók.',
  },
  process: {
    h2: 'Mi kell a ventilátoron túl, hogy a rendszer működjön?',
    intro: 'A jó elszívás nem egyetlen berendezés. A megfogástól a leválasztáson át az anyag elszállításáig minden lépcső számít, és együtt adják a tiszta levegőt és a kézben tartott költséget.',
    steps: [
      { title: 'Elszívási pontok felmérése', text: 'Mely gépekről, mekkora légmennyiséggel és milyen porkarakterrel kell elszívni, és egyszerre hány gép működik.' },
      { title: 'Megfogás a forrásnál', text: 'Elszívócsonkok, burkolatok vagy elszívókarok a keletkezés helyén, hogy a por ne kerüljön a térbe.' },
      { title: 'Csőhálózat és légmennyiség', text: 'A csővezeték, a légsebesség és az ellenállás méretezése a stabil, kiegyensúlyozott elszívásért.' },
      { title: 'Leválasztás és szűrés', text: 'A megfelelő porosztályú szűrő vagy leválasztó, igény szerint W3 vagy ATEX kivitelben, automatikus szűrőtisztítással.' },
      { title: 'Anyaggyűjtés és kihordás', text: 'A leválasztott por és forgács konténerbe, silóba, brikettálóba vagy más hasznosításra kerülhet.' },
      { title: 'Vezérlés és energiahatékonyság', text: 'Frekvenciaváltós szabályozás, IE3/IE4 motorok és igény szerint hővisszanyerés a folyamatos üzem költségének mérséklésére.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt elszívási rendszert választ?',
    intro: 'Az elszívás nem csak szűrőméret vagy ventilátorteljesítmény kérdése. A jó rendszer a gépekhez, a porhoz, a hálózathoz, a megfeleléshez és a biztonsághoz igazodik.',
    factors: [
      { title: 'Gépek és elszívási pontok', text: 'Mely gépeket kell kiszolgálni, egyszerre hány működik, milyen csatlakozással?' },
      { title: 'Anyag és porkarakter', text: 'Forgács, csiszolatpor, hegesztésifüst, olaj- vagy festékköd? Más-más leválasztást igényel.' },
      { title: 'Légmennyiség és csőhálózat', text: 'A csővezeték, a légsebesség és az ellenállás határozza meg a működést, központi rendszernél akár 22 000 m³/h-ig.' },
      { title: 'Szűrés, porosztály és megfelelés', text: 'A szűrési igény, a porosztály és a hegesztésifüstnél a W3 tanúsítvány kulcskérdés.' },
      { title: 'Porrobbanás és ATEX', text: 'Gyúlékony vagy robbanásveszélyes pornál ATEX-kivitel és külön szakági vizsgálat szükséges.' },
      { title: 'Kihordás és hasznosítás', text: 'Zsák, konténer, siló vagy brikettáló fogadja a leválasztott anyagot?' },
      { title: 'Energiahatékonyság', text: 'IE3/IE4 motorok, frekvenciaváltó és hővisszanyerés mérséklik a folyamatos üzem költségét.' },
      { title: 'Bővíthetőség', text: 'Lesz-e új gép, kapacitásnövekedés vagy technológiai átalakítás?' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy elszívási projektben?',
    body: [
      'Nem katalógusból árulunk dobozt. Felmérjük az anyagot, a gépeket és a célt, ehhez méretezzük a rendszert, majd telepítjük és karbantartjuk.',
      'A gyári AL-KO elszívás- és szűrőtechnológia mögött magyarországi tervezés és szerviz áll, a forrásnál való megfogástól a leválasztáson át az anyagkezelésig.',
    ],
    points: [
      { title: 'Feladatalapú felmérés és méretezés', text: 'A tényleges porkarakter, légmennyiség és előírások alapján indul a javaslat.' },
      { title: 'Rendszerszemlélet', text: 'Megfogás, csőhálózat, leválasztás, kihordás és vezérlés egy rendszerként.' },
      { title: 'Gyári AL-KO háttér', text: 'Az elszívás- és szűrőtechnológiát az AL-KO portfólióból a feladathoz illesztjük.' },
      { title: 'Megfelelés és biztonság', text: 'Porosztály, W3 és ATEX kérdések szakszerű, szabványos kezelése.' },
      { title: 'Szerviz és alkatrész', text: 'Telepítés, üzembe helyezés és hosszú távú szerviz a megfelelőségi szintű, folyamatos üzemért.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés, az ajánlat-előkészítés és a projektkövetés magyar szakmai kapcsolattal történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'Az elszívás gyakran kapcsolódik brikettáláshoz, daráláshoz és anyagmozgatáshoz. A leválasztott anyag sokszor nem végpont, hanem további hasznosítás alapja.',
    links: [
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha az elszívott forgács vagy por alkalmas a tömörítésre.' },
      { label: 'Ipari darálás', href: '/technologiak/ipari-daralas/', description: 'Ha nagyobb faipari vagy ipari hulladékot is kezelni kell.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha kihordás, silózás vagy adagolás is szükséges.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha a leválasztott forgács nedves és további feldolgozásra megy.' },
    ],
  },
  preQual: {
    h2: 'Mondja el a gépeket és a porkaraktert, mi megtervezzük a rendszert',
    body: 'Nem kell kész légtechnikai tervvel érkeznie. Első körben azt nézzük meg, milyen gépekről, milyen anyagot és milyen tisztasági vagy munkavédelmi elvárás mellett kell elszívni.',
    fields: ['elszívás', 'porleválasztás', 'hegesztésifüst', 'ciklon', 'patronos szűrő', 'zsákos szűrő', 'ventilátor', 'csőhálózat', 'légmennyiség', 'm³/h', 'légsebesség', 'porosztály', 'W3 tanúsítvány', 'ATEX', 'robbanásvédelem', 'forrásnál elszívás', 'központi elszívás', 'mobil porszívó', 'nagyvákuum', 'olajköd', 'festékköd', 'csiszolatpor', 'fűrészpor', 'forgács', 'frekvenciaváltó', 'hővisszanyerés', 'IE4 motor', 'automata szűrőtisztítás', 'silózás', 'brikettálás'],
  },
  faq: {
    h2: 'Gyakori kérdések az elszívás és porleválasztás kapcsán',
    items: [
      { q: 'Mi az a W3 tanúsítvány, és mikor kell?', a: 'A W3 a hegesztésifüst-szűrés legmagasabb tisztasági osztálya, ötvözött acél hegesztésénél is alkalmas. Akkor releváns, ha a füstöt bizonyíthatóan a munkavédelmi határérték alá kell szorítani.' },
      { q: 'Mennyi légmennyiség (m³/h) kell?', a: 'A gépek számától, a csonkméretektől és a porkaraktertől függ. A pontos értéket a gépek és a csőhálózat alapján számoljuk, központi rendszernél akár 22 000 m³/h-ig.' },
      { q: 'Kell-e ATEX, robbanásvédelem?', a: 'Ha a por gyúlékony vagy robbanásveszélyes, igen. Ilyen esetben ATEX-kivitelű rendszer és külön szakági vizsgálat szükséges.' },
      { q: 'Forrásnál vagy központi elszívás legyen?', a: 'Kevés gépnél vagy mobil igénynél a forrásnál való megfogás célszerű, több gépnél vagy egész csarnoknál központi rendszer. Sokszor a kettő kombinációja a jó.' },
      { q: 'Csökkenthető az elszívás energiafogyasztása?', a: 'Igen: frekvenciaváltós szabályozással, IE3/IE4 motorokkal, automatikus szűrőtisztítással és igény szerint hővisszanyeréssel. A konkrét hatást az üzemmenet adja.' },
      { q: 'Hasznosítható az elszívott forgács?', a: 'Sokszor igen, például brikettálással vagy gyűjtéssel. Az anyag tisztasága, nedvessége és frakciója dönti el.' },
      { q: 'Elég egy nagyobb ventilátor?', a: 'Nem feltétlenül. A csőhálózat, a gépcsatlakozások, a légsebesség, a szűrés és a kihordás együtt határozza meg a működést.' },
    ],
  },
  finalCta: {
    h2: 'Poros az üzem, vagy szigorúbb a munkavédelmi elvárás? Tervezzük meg az elszívást',
    body: [
      'Az elszívásnál a jó döntés nem a ventilátorral kezdődik. Először azt tisztázzuk, milyen gépekről, milyen port vagy füstöt, milyen mennyiségben és milyen tisztasági elvárás mellett kell elszívni.',
      'Ha ezt leírja, méretezett technológiai javaslattal és tájékoztató költségkerettel jelentkezünk.',
    ],
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
  },
};

/* ANYAGMOZGATÁS ÉS RENDSZERELEMEK — Rendszerszemlélet · döntési-villa · RP Engineering + társak */
const anyagmozgasRendszerelemek: TechnologyGateway = {
  slug: 'anyagmozgas-rendszerelemek',
  name: 'Anyagmozgatás és rendszerelemek',
  metaTitle: 'Anyagmozgatás és rendszerelemek ipari feldolgozó rendszerekhez',
  metaDescription:
    'Anyagmozgató, adagoló, kihordó, siló, mágnes és szeparátor rendszerelemek daráláshoz, brikettáláshoz, pelletáláshoz, szárításhoz és elszíváshoz. ECOTEQ rendszerintegráció.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Anyagmozgatás és rendszerelemek',
    image: '/heroes/hero-komplett.jpg',
    h1: 'Anyagmozgatás és rendszerelemek ipari feldolgozó rendszerekhez',
    lead: 'Egy rendszer ritkán a főgépen bukik el, hanem azon, hogyan jut be és ki az anyag. A kérdés ritkán egy szalag vagy csiga, inkább hogy a teljes anyagáram stabil-e a beadagolástól a végtermékig.',
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
    microcopy: 'A megfelelő anyagmozgatás kiválasztásához elég, ha megadja, milyen anyagot, honnan hová, milyen mennyiségben és milyen főtechnológia mellett kell mozgatni.',
    trustPills: [],
  },
  heroStats: [
    { value: 'szalag · csiga · siló', suffix: '', label: 'rendszerelemek' },
    { value: 'mágnes · szeparátor', suffix: '', label: 'gépvédelem' },
    { value: '6', suffix: '', label: 'európai gyártó egy rendszerben' },
    { value: '2008', suffix: '', label: 'óta a piacon' },
  ],
  fit: {
    h2: 'Mikor kell külön figyelni az anyagmozgatásra?',
    intro: 'Az anyagmozgatás nem mellékes kiegészítő. Ha az adagolás, a kihordás vagy a szeparálás rosszul van megoldva, a jó főgép sem működik stabilan. Ezért az anyag teljes útját nézzük.',
    items: [
      { title: 'A főgépet nem lehet egyenletesen adagolni', text: 'Daráló, szárító, brikettáló vagy pelletáló akkor működik jól, ha az anyag kiszámíthatóan érkezik.' },
      { title: 'A kimeneti anyag nincs jól kezelve', text: 'A darált, szárított vagy tömörített anyagot továbbítani, hűteni, tárolni vagy csomagolni kell.' },
      { title: 'Idegenanyag veszélyezteti a gépet', text: 'Fém, csavar vagy pánt esetén mágnesre, szeparálásra vagy gépvédelemre lehet szükség.' },
      { title: 'Pufferelni kell az anyagot', text: 'Siló, tartály vagy köztes tárolás hangolja össze az eltérő kapacitású technológiai lépéseket.' },
      { title: 'A rendszer több gépből áll', text: 'Daráló, szárító és brikettáló, vagy elszívás, siló és brikettáló esetén az anyagáram a rendszer gerince.' },
      { title: 'Sok kézi mozgatás köti le a munkaerőt', text: 'Ha az anyag mozgatása sok kézi munkát igényel, érdemes automatizálhatóbb adagolást és kihordást vizsgálni.' },
    ],
  },
  problems: {
    h2: 'Milyen problémát old meg a jó anyagmozgatás?',
    intro: 'Az anyagmozgatás célja, hogy a technológia ne csak papíron működjön, hanem a mindennapi üzemben is. Sokszor ez különbözteti meg a gépbeszerzést a valódi rendszertől.',
    cards: [
      { problem: 'Egyenetlen adagolás', why: 'Ha az anyag hol túl sok, hol túl kevés, a főgép működése instabillá válik.', answer: 'Adagoló, puffer, csiga vagy szalag segít egyenletesebb anyagáramot kialakítani.' },
      { problem: 'Kihordási torlódás', why: 'A feldolgozott anyag elakadása leállást és kezelői beavatkozást okoz.', answer: 'A kimeneti oldalt ugyanúgy méretezzük, mint a főgépet.' },
      { problem: 'Idegenanyag-kockázat', why: 'Fém, csavar vagy más szennyeződés károsíthatja a gépet vagy rontja a végterméket.', answer: 'Mágnes, szeparátor vagy más gépvédelem kerül a rendszerbe.' },
      { problem: 'Széteső anyagáram több gép között', why: 'Ha a gépek nincsenek jól összekötve, a teljes folyamat akadozhat.', answer: 'Az anyag útját a bemenettől a végtermékig rendszerként tervezzük.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro: 'Az anyagmozgatás mindig az anyag fizikai tulajdonságaitól függ. Más megoldás kell porhoz, forgácshoz, aprítékhoz, briketthez, pellethez vagy nedves biomasszához.',
    materials: ['faipari forgács', 'fűrészpor', 'apríték', 'darált fa', 'raklapdarálék', 'biomassza', 'szárított alapanyag', 'brikett', 'pellet', 'por és szűrőpor', 'műanyag darálék'],
    industries: ['faipar', 'biomassza-feldolgozás', 'brikett- és pelletgyártás', 'hulladékkezelés', 'csomagolóipar', 'műanyagipar', 'energetikai projektek'],
    goals: ['stabil adagolás', 'kihordás', 'pufferelés', 'tárolás', 'idegenanyag-leválasztás', 'gépvédelem', 'technológiák összekötése', 'végtermék-kezelés'],
  },
  process: {
    h2: 'Hogyan épül fel egy anyagmozgatási lánc?',
    intro: 'A pontos rendszer attól függ, milyen anyagot kell mozgatni, milyen főtechnológia mellett, milyen távolságra, milyen szintkülönbséggel és milyen automatizálási igénnyel.',
    steps: [
      { title: 'Anyag fogadása', text: 'Az anyag érkezhet gépből, konténerből, silóból, elszívórendszerből vagy kézi betáplálásból.' },
      { title: 'Adagolás vagy pufferelés', text: 'A lépések összehangolásához siló, adagoló, csiga vagy puffer kellhet.' },
      { title: 'Szállítás', text: 'Szalag, csiga, láncos szállító vagy pneumatikus rendszer jöhet szóba.' },
      { title: 'Leválasztás vagy osztályozás', text: 'Mágnes, szeparátor vagy rostálás védi a gépet és javíthatja a folyamatot.' },
      { title: 'Főtechnológiai kapcsolódás', text: 'Daráló, szárító, brikettáló, pelletáló vagy elszívási rendszer kiszolgálása.' },
      { title: 'Kihordás, tárolás vagy csomagolás', text: 'A végterméket kezelhető módon kell továbbítani, tárolni vagy csomagolni.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt anyagmozgató rendszert választ?',
    intro: 'A rossz döntés gyakori oka, hogy csak egy szalagot vagy csigát választanak, miközben az anyag viselkedése, a kapacitás és az automatizálás nincs tisztázva.',
    factors: [
      { title: 'Anyag típusa és viselkedése', text: 'Poros, tapadós, darabos, könnyű, nehéz, nedves vagy abrazív az anyag?' },
      { title: 'Mennyiség és kapacitás', text: 'Mennyit kell mozgatni óránként vagy naponta? Folyamatos vagy szakaszos üzem?' },
      { title: 'Útvonal és szintkülönbség', text: 'Honnan hová, mekkora távolságra és milyen magasságkülönbséggel kell mozgatni?' },
      { title: 'Kapcsolódó gépek', text: 'Daráló, szárító, brikettáló, pelletáló vagy elszívó kiszolgálása a feladat?' },
      { title: 'Porzás és környezet', text: 'Zárt vagy nyitott rendszer kell? Szükséges-e porleválasztás vagy burkolat?' },
      { title: 'Idegenanyag és gépvédelem', text: 'Kell-e mágnes, szeparátor vagy rostálás?' },
      { title: 'Automatizálás és vezérlés', text: 'Kézi, félautomata vagy automata üzem? Kell-e szintérzékelés vagy frekvenciaváltás?' },
      { title: 'Bővíthetőség', text: 'Számolni kell-e későbbi kapacitásbővítéssel vagy új technológiával?' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy anyagmozgatási projektben?',
    body: [
      'Nem külön kezeljük a főgépet és a kiegészítőket. Azt nézzük, hogyan jut be az anyag a rendszerbe, hogyan halad át rajta, hol kell pufferelni, és hogyan kezelhető a kimeneti anyag.',
      'A cél, hogy az anyagáram ne utólagos kompromisszum legyen, hanem a rendszer egyik alapja.',
    ],
    points: [
      { title: 'Anyagáram-felmérés', text: 'Megnézzük, honnan hová, milyen mennyiségben és milyen állapotban kell mozgatni az anyagot.' },
      { title: 'Rendszerillesztés', text: 'A szállítást, az adagolást, a pufferelést és a kihordást a főtechnológiához igazítjuk.' },
      { title: 'Gépvédelem és szeparálás', text: 'Idegenanyag-kockázat esetén mágnes, szeparátor vagy más védelem is vizsgálható.' },
      { title: 'Gyártói háttér', text: 'A rendszerelemekre az RP Engineering és további európai gyártók megoldásai közül választunk.' },
      { title: 'Bővíthetőség', text: 'A rendszert úgy tervezzük, hogy későbbi kapacitásbővítés is kezelhető legyen.' },
      { title: 'Magyar projektkommunikáció', text: 'Az egyeztetés, az ajánlat-előkészítés és a projektkövetés magyar szakmai kapcsolattal történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro: 'Az anyagmozgatás szinte minden ECOTEQ technológiai területhez kapcsolódik. A főgép akkor működik jól, ha az anyag előtte és utána is stabilan kezelhető.',
    links: [
      { label: 'Ipari darálás', href: '/technologiak/ipari-daralas/', description: 'Ha darabos vagy nagyméretű anyagot kell előkészíteni.' },
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha a tömörítéshez stabil adagolásra és kihordásra van szükség.' },
      { label: 'Pelletálás', href: '/technologiak/pelletalas/', description: 'Ha a pelletáláshoz előkészítés, hűtés vagy csomagolás kapcsolódik.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha a nedves anyagot szárítóba kell adagolni vagy onnan továbbvezetni.' },
      { label: 'Elszívás és porleválasztás', href: '/technologiak/elszivas-porlevalasztas/', description: 'Ha a por vagy forgács légtechnikai úton kerül leválasztásra.' },
      { label: 'Vákuumszárítás', href: '/technologiak/vakuumszaritas/', description: 'Ha a faanyag rakodása vagy a szárítókamra kiszolgálása a feladat.' },
    ],
  },
  preQual: {
    h2: 'Küldje el az adatokat, és megnézzük, milyen anyagmozgatási irány lehet reális',
    body: 'Nem kell kész layouttal érkeznie. Első körben azt nézzük meg, milyen anyagot, honnan hová, milyen mennyiségben és milyen főtechnológia mellett kell mozgatni.',
    fields: ['szállítószalag', 'csiga', 'vályúcsiga', 'serleges felhordó', 'láncos szállító', 'pneumatikus szállítás', 'siló', 'puffertartály', 'adagoló', 'cellás adagoló', 'mágnes', 'szeparátor', 'rostálás', 'szintérzékelés', 'frekvenciaváltó', 'vezérlés', 'automatizálás', 'porzás', 'burkolat', 'kihordás', 'betáplálás', 'szintkülönbség', 'kapacitás', 'gépvédelem'],
  },
  faq: {
    h2: 'Gyakori kérdések az anyagmozgatás és rendszerelemek kapcsán',
    items: [
      { q: 'Miért nem elég csak a főgépet kiválasztani?', a: 'Mert a főgép akkor működik jól, ha az anyag stabilan érkezik, és a kimeneti oldalon is kezelhetően távozik.' },
      { q: 'Szalag vagy csiga kell?', a: 'Az anyag típusától, mennyiségétől, az útvonaltól, a szintkülönbségtől és a porzástól függ.' },
      { q: 'Mikor kell mágnes vagy szeparátor?', a: 'Ha az anyagban fém, csavar vagy más idegenanyag lehet, gépvédelmi vagy végtermékminőségi okból.' },
      { q: 'Kell-e siló vagy puffer?', a: 'Ha a technológiai lépések kapacitása eltér, vagy a rendszer folyamatosabb működést igényel, a puffer segít.' },
      { q: 'Automatizálható az anyagmozgatás?', a: 'Sok esetben igen: szintérzékelés, frekvenciaváltás és gépek közti kommunikáció csökkentheti a kézi munkát.' },
      { q: 'Tudnak komplett anyagáramot tervezni?', a: 'Igen. Éppen az a feladatunk, hogy ne csak gépet, hanem működő rendszerlogikát vizsgáljunk a bemenettől a végtermékig.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, milyen rendszerelem kell? Nézzük meg az anyag útját',
    body: [
      'Az anyagmozgatásnál a jó döntés nem azzal kezdődik, hogy szalagot vagy csigát választunk. Először azt tisztázzuk, milyen anyagot, honnan hová, milyen mennyiségben és milyen főtechnológia mellett kell mozgatni.',
      'Ha ezt leírja, segítünk eldönteni, milyen anyagáram-irány lehet reális.',
    ],
    secondaryCta: { label: 'Kapcsolódó technológiák megtekintése', href: '/#technologiak' },
  },
};

const V2_OVERRIDES: Record<string, TechnologyGateway> = {
  brikettalas,
  'ipari-daralas': ipariDaralas,
  pelletalas,
  'biomassza-szaritas': biomasszaSzaritas,
  vakuumszaritas,
  vakuumimpregnalas,
  'elszivas-porlevalasztas': elszivasPorlevalasztas,
  'anyagmozgas-rendszerelemek': anyagmozgasRendszerelemek,
};

const V2_GATEWAYS: Record<string, TechnologyGateway> = { ...TECHNOLOGY_GATEWAYS, ...V2_OVERRIDES };

export const gatewaySlugs = () => Object.keys(V2_GATEWAYS);
export const getGateway = (slug: string): TechnologyGateway | undefined => V2_GATEWAYS[slug];
