/** Content model for the technology gateway pages (/technologiak/[slug]/). */

export type Cta = { label: string; href: string };
export type RelatedLink = { label: string; href: string; description?: string; title?: string };

export type TechnologyGateway = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    /** Words within h1 to render in the brand green accent. */
    h1Highlights?: string[];
    lead: string;
    secondaryCta?: Cta;
    microcopy: string;
    trustPills: string[];
    image?: string;
    imageAlt?: string;
  };
  /** Optional override for the stat band below the hero (defaults to homepage stats). */
  heroStats?: { value: string; suffix?: string; label: string }[];
  fit: { h2: string; intro: string; items: { title: string; text: string }[] };
  problems: { h2: string; intro: string; cards: { problem: string; why: string; answer: string }[] };
  materials: { h2: string; intro: string; materials: string[]; industries: string[]; goals: string[]; note?: string };
  process: { h2: string; intro: string; steps: { title: string; text: string }[] };
  decisionFactors: { h2: string; intro: string; factors: { title: string; text: string }[] };
  role: { h2: string; body: string[]; points: { title: string; text: string }[]; trust?: string[] };
  related: { h2: string; intro: string; links: RelatedLink[]; spoke?: RelatedLink };
  preQual: { h2: string; body: string; fields: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  finalCta: { h2: string; body: string[]; secondaryCta?: Cta; cta?: string; microcopy?: string; checklist?: { title: string; items: string[] }[] };
};

const ipariDaralas: TechnologyGateway = {
  slug: 'ipari-daralas',
  name: 'Ipari darálás',
  metaTitle: 'Ipari darálási rendszerek hulladék és mellékanyag előkészítésére | ECOTEQ',
  metaDescription:
    'Ipari darálás fa, raklap, műanyag, biomassza és vegyes ipari hulladék előkészítésére. Az ECOTEQ segít kiválasztani a reális darálási technológiai irányt, rendszerfelépítést és következő lépést.',
  hero: {
    eyebrow: 'ECOTEQ technológiák · Ipari darálás',
    h1: 'Ipari darálás hulladék és mellékanyag előkészítésére',
    lead: 'Az ipari darálás akkor jó megoldás, ha a nagyméretű, nehezen kezelhető vagy változó összetételű anyagból kisebb, rendezettebb és továbbfeldolgozásra alkalmas frakciót kell készíteni. Az ECOTEQ abban segít, hogy ne csak darálót válasszon, hanem az anyaghoz, mennyiséghez és célhoz illő technológiai irányt.',
    secondaryCta: { label: 'Részletes ipari daráló oldal', href: 'https://iparidaralo.hu' },
    microcopy: 'Nem kell pontos géptípussal érkeznie. Elég, ha leírja az anyagot, a mennyiséget, a kívánt frakciót és a célt.',
    trustPills: [
      'Anyagalapú előminősítés',
      'Darálótól a komplett anyagáramig',
      'Fa, raklap, műanyag, biomassza és ipari hulladék',
    ],
    image: '/ds/photos/shredder-ms40120-hero.jpg',
    imageAlt: 'Ipari daráló gép működés közben',
  },
  fit: {
    h2: 'Mikor lehet jó megoldás az ipari darálás?',
    intro:
      'Az ipari darálás nem önmagáért fontos. Akkor van értelme, ha a jelenlegi anyag túl nagy, túl rendezetlen, túl nehezen tárolható, túl költségesen szállítható, vagy nem alkalmas a következő technológiai lépésre. Az első kérdés ezért nem az, hogy „mekkora daráló kell”, hanem az, hogy mit szeretnénk elérni az anyaggal.',
    items: [
      { title: 'Ha túl nagy térfogatú az anyag', text: 'Raklap, láda, fahulladék, műanyag vagy csomagolóanyag esetén a darálás segíthet kezelhetőbb méretű anyagot előállítani.' },
      { title: 'Ha további feldolgozásra kell előkészíteni', text: 'Brikettálás, pelletálás, energetikai felhasználás, szeparálás vagy újrahasznosítás előtt sokszor szükség van egységesebb frakcióra.' },
      { title: 'Ha a tárolás és mozgatás nehézkes', text: 'A nagy darabos, összevissza álló anyag rosszul tárolható és nehezen adagolható. A darálás rendezettebb anyagáramot adhat.' },
      { title: 'Ha csökkenteni kell a szállítási és hulladékkezelési terhet', text: 'A kisebb térfogat és egységesebb anyag bizonyos esetekben egyszerűbb logisztikát és jobb kezelhetőséget eredményezhet. A konkrét megtakarítás mindig az anyagtól, mennyiségtől és jelenlegi folyamattól függ.' },
      { title: 'Ha a meglévő folyamat gyakran elakad', text: 'Darabos, heterogén vagy szennyezett anyagoknál nem mindegy, milyen darálási elv, adagolás, kihordás és védelem kerül a rendszerbe.' },
    ],
  },
  problems: {
    h2: 'Milyen üzemi problémára adhat választ?',
    intro:
      'Egy ipari darálási projekt ritkán csak arról szól, hogy „kisebb darabokra kell vágni valamit”. A háttérben általában helyhiány, drága hulladékkezelés, nehéz anyagmozgatás, további feldolgozási igény vagy üzembiztonsági probléma áll.',
    cards: [
      { problem: 'Rendezetlen hulladékudvar vagy gyártási mellékanyag', why: 'A nagy darabos vagy vegyes anyag sok helyet foglal, nehezebben mozgatható, és sokszor rontja az üzem átláthatóságát.', answer: 'A megfelelő darálási rendszer segíthet kisebb, rendezettebb frakciót előállítani, amely könnyebben tárolható, mozgatható vagy továbbfeldolgozható.' },
      { problem: 'Túl nagy szállítási térfogat', why: 'A levegőt is szállítjuk, nem csak az anyagot. Raklap, láda, csomagolóanyag vagy nagyobb fahulladék esetén ez gyorsan költség- és helyproblémává válhat.', answer: 'A darálás csökkentheti a térfogatot és javíthatja az anyag kezelhetőségét. A pontos gazdasági hatást mindig az aktuális logisztikai adatok alapján kell vizsgálni.' },
      { problem: 'Brikettálás vagy pelletálás előtti előkészítési gond', why: 'A brikettáló vagy pelletáló rendszer nem szereti a túl nagy, túl nedves, túl változó vagy rosszul adagolható anyagot.', answer: 'A darálás a szárítással, osztályozással vagy adagolással együtt előkészítheti az anyagot a tömörítési technológiához.' },
      { problem: 'Heterogén ipari hulladék', why: 'Vegyes anyagoknál az eltérő méret, forma, sűrűség vagy szennyezettség komoly kihívás lehet. Ilyenkor nem elég kapacitás alapján gépet választani.', answer: 'A darálási elvet, rotor- vagy tengelykialakítást, hajtást, védelmet, adagolást és kihordást az anyaghoz kell igazítani.' },
    ],
  },
  materials: {
    h2: 'Milyen anyagoknál és helyzetekben merül fel?',
    intro:
      'Az ipari darálásnál az anyag mindent meghatároz. Más technológiai irány kell száraz faipari hulladékhoz, más raklaphoz, más műanyaghoz, más biomasszához és más vegyes ipari hulladékhoz.',
    materials: ['faipari hulladék', 'raklap', 'láda és csomagolóanyag', 'fűrészáru-maradék', 'forgács és apríték előkészítés', 'műanyag hulladék', 'fólia és csomagolóipari mellékanyag', 'biomassza', 'papír és karton', 'vegyes ipari hulladék', 'selejttermékek és gyártási mellékanyagok'],
    industries: ['faipar', 'bútorgyártás', 'nyílászárógyártás', 'fűrészüzemek', 'logisztika', 'csomagolóipar', 'műanyagipar', 'hulladékkezelés', 'biomassza-feldolgozás', 'gyártóipar'],
    goals: ['térfogatcsökkentés', 'homogénebb frakció', 'jobb tárolhatóság', 'könnyebb anyagmozgatás', 'brikettálás vagy pelletálás előkészítése', 'energetikai felhasználás előkészítése', 'további válogatás vagy szeparálás előkészítése', 'üzemi hulladékkezelés rendezése'],
  },
  process: {
    h2: 'Hogyan épülhet fel egy ipari darálási rendszer?',
    intro:
      'A pontos rendszer mindig az anyagtól, a mennyiségtől, a kívánt frakciótól, a telepítési helytől és a céltechnológiától függ. Egy daráló önmagában csak akkor működik jól, ha az adagolás, kihordás, védelem és kiszolgálás is illeszkedik hozzá.',
    steps: [
      { title: 'Anyag fogadása vagy gyűjtése', text: 'Az anyag érkezhet kézi adagolással, targoncával, rakodógéppel, szalagról, silóból vagy elszívórendszerből.' },
      { title: 'Adagolás és előkészítés', text: 'A rendszer kialakítása függ attól, hogy darabos, ömlesztett, poros, szennyezett vagy változó méretű anyagról van szó.' },
      { title: 'Darálás', text: 'A fő technológiai lépés lehet egytengelyes, kéttengelyes vagy más ipari darálási megoldás. A választást az anyag, a kapacitás, a kívánt frakció és az üzemelési környezet határozza meg.' },
      { title: 'Kihordás és anyagmozgatás', text: 'A darált anyagot szállítószalag, csiga, pneumatikus rendszer, konténer, siló vagy további technológiai egység fogadhatja.' },
      { title: 'Kiegészítő technológiák', text: 'Szükség lehet mágnesre, szeparátorra, osztályozásra, porleválasztásra, szárításra vagy további aprításra.' },
      { title: 'Továbbfeldolgozás vagy tárolás', text: 'A kimenet mehet brikettálásra, pelletálásra, energetikai felhasználásra, újrahasznosításra, konténerbe, silóba vagy egyéb tárolóba.' },
    ],
  },
  decisionFactors: {
    h2: 'Mire kell figyelni, mielőtt darálót választ?',
    intro:
      'A darálógép kiválasztása nem csak a kilowattokról és a kapacitásról szól. Ugyanaz a névleges teljesítmény teljesen mást jelenthet különböző anyagoknál. A jó döntéshez az anyagot és a folyamatot kell először tisztázni.',
    factors: [
      { title: 'Anyag típusa', text: 'Fa, raklap, műanyag, fólia, biomassza, papír, vegyes ipari hulladék vagy gyártási selejt? Minden anyag másképp viselkedik a darálóban.' },
      { title: 'Anyag mérete és formája', text: 'Hosszú, darabos, lapos, rugalmas, poros, ömlesztett vagy változó méretű anyagról van szó?' },
      { title: 'Szennyezettség', text: 'Lehet-e benne fém, csavar, pánt, kő, homok, idegen anyag vagy más szennyeződés? Ez befolyásolja a gépvédelmet és a rendszerfelépítést.' },
      { title: 'Kívánt frakció', text: 'Durva térfogatcsökkentés kell, vagy pontosabb szemcseméret a további feldolgozáshoz?' },
      { title: 'Kapacitás és üzemóra', text: 'Mennyi anyagot kell kezelni óránként, naponta vagy hetente? Egy műszak, több műszak vagy időszakos üzem a cél?' },
      { title: 'Adagolás és kiszolgálás', text: 'Kézzel, targoncával, rakodóval, szalagról vagy automata rendszerből kerül be az anyag?' },
      { title: 'Kimeneti oldal', text: 'Hová kerül a darált anyag: konténerbe, silóba, szárítóba, brikettálóba, pelletálóba vagy szeparáló rendszerbe?' },
      { title: 'Hely, energia és zaj', text: 'Van-e elegendő telepítési hely, megfelelő elektromos kapacitás, és kell-e figyelni zajra, porra vagy környezetvédelmi szempontokra?' },
    ],
  },
  role: {
    h2: 'Miben segít az ECOTEQ egy ipari darálási projektben?',
    body: [
      'Az ECOTEQ nem abból indul ki, hogy melyik darálót szeretnénk eladni. Abból indulunk ki, hogy az Ön üzemében milyen anyag keletkezik, milyen problémát okoz, és mi legyen a darálás utáni következő lépés.',
      'A cél nem az, hogy minél gyorsabban kapjon egy gépnevet. A cél az, hogy időben kizárjuk a rossz irányokat, és olyan darálási technológiai javaslat szülessen, amely az anyaghoz, mennyiséghez, kiszolgáláshoz és üzemi realitáshoz illeszkedik.',
    ],
    points: [
      { title: 'Anyagalapú előminősítés', text: 'Megnézzük az anyag típusát, méretét, szennyezettségét, mennyiségét és a kívánt kimenetet.' },
      { title: 'Technológiai irány kiválasztása', text: 'Nem minden daráló való minden anyagra. A darálási elvet és rendszerfelépítést a feladat alapján kell kiválasztani.' },
      { title: 'Rendszerszemlélet', text: 'A daráló mellett az adagolást, kihordást, mágneses leválasztást, szállítást, porleválasztást és további feldolgozást is figyelembe vesszük.' },
      { title: 'Továbbfeldolgozási logika', text: 'Ha a cél brikettálás, pelletálás, szárítás vagy energetikai felhasználás, akkor a darálást ezekhez kell méretezni és illeszteni.' },
      { title: 'Magyar szakértői támogatás', text: 'Az egyeztetés, ajánlat-előkészítés, projektkövetés és későbbi támogatás magyar nyelvű szakmai kapcsolattal történik.' },
    ],
  },
  related: {
    h2: 'Kapcsolódó technológiák és részletes szakmai oldalak',
    intro:
      'Az ipari darálás sokszor csak az első lépés. A darált anyag útja határozza meg, hogy a rendszerhez kell-e szárítás, brikettálás, pelletálás, szeparálás, elszívás vagy anyagmozgatás.',
    links: [
      { label: 'Brikettálás', href: '/technologiak/brikettalas/', description: 'Ha a darált vagy előkészített száraz mellékanyagból tömör, kezelhető brikettet szeretne előállítani.' },
      { label: 'Pelletálás', href: '/technologiak/pelletalas/', description: 'Ha a cél egységes pellet formájú végtermék biomassza vagy faipari alapanyagból.' },
      { label: 'Biomassza-szárítás', href: '/technologiak/biomassza-szaritas/', description: 'Ha az anyag nedvességtartalma túl magas a további feldolgozáshoz vagy energetikai felhasználáshoz.' },
      { label: 'Anyagmozgatás és rendszerelemek', href: '/technologiak/anyagmozgas-rendszerelemek/', description: 'Ha a daráló csak akkor működik jól, ha az adagolás, kihordás, mágnes, szeparátor vagy tárolás is rendben van.' },
    ],
    spoke: {
      label: 'Részletes ipari daráló tudástár és gépválasztó',
      href: 'https://iparidaralo.hu',
      description: 'A részletes ipari daráló gépválasztó, anyagoldalak, tudástár és mélyebb szakmai tartalom az iparidaralo.hu oldalon érhető el.',
    },
  },
  preQual: {
    h2: 'Küldje el az alapadatokat, és segítünk eldönteni, milyen darálási irány lehet reális',
    body:
      'Nem kell kész műszaki specifikációval érkeznie. Az első körben az a cél, hogy lássuk: az adott anyagra, mennyiségre és célra milyen darálási technológiai irány jöhet szóba, és kell-e a rendszerbe más technológia is.',
    fields: [
      'milyen anyagot kell darálni',
      'mekkora darabokban érkezik az anyag',
      'mennyi keletkezik óránként, naponta vagy hetente',
      'van-e benne fém, csavar, pánt vagy más szennyeződés',
      'milyen kimeneti frakció vagy cél kell',
      'hová kerülne a darált anyag',
      'milyen módon történne az adagolás',
      'hol lenne a telepítés',
      'van-e fotó vagy videó az anyagról',
    ],
  },
  faq: {
    h2: 'Gyakori kérdések az ipari darálás kapcsán',
    items: [
      { q: 'Mekkora daráló kell az anyagunkhoz?', a: 'Ezt az anyag típusa, mérete, mennyisége, szennyezettsége, a kívánt frakció és az üzemelési mód alapján lehet eldönteni. Önmagában a „kg/óra” adat nem elég.' },
      { q: 'Elég önmagában egy darálógép?', a: 'Sok esetben nem. Az adagolás, kihordás, mágneses leválasztás, porleválasztás, szállítás vagy további feldolgozás ugyanúgy része lehet a működő rendszernek.' },
      { q: 'Lehet raklapot és csomagolóanyagot is darálni?', a: 'Igen, de a raklap, láda, csomagolófa vagy vegyes csomagolóanyag esetén figyelni kell a fémekre, szennyeződésekre, adagolásra és a kívánt kimeneti méretre.' },
      { q: 'Miért fontos a kívánt frakció?', a: 'Más darálási irány kell egyszerű térfogatcsökkentéshez, és más akkor, ha az anyag brikettálásra, pelletálásra, szeparálásra vagy energetikai felhasználásra megy tovább.' },
      { q: 'Tudnak konkrét gépet ajánlani?', a: 'Igen, de először az anyagot és a célt kell tisztázni. Ezután lehet eldönteni, milyen darálási elv és rendszerfelépítés lehet reális.' },
    ],
  },
  finalCta: {
    h2: 'Nem biztos benne, milyen daráló vagy darálási rendszer kell? Ez teljesen normális',
    body: [
      'Az ipari darálásnál a jó döntés nem a gép nevével kezdődik. Először azt kell tisztázni, milyen anyag keletkezik, mekkora mennyiségben, milyen állapotban, és mi lesz a darálás utáni következő lépés.',
      'Ha ezt leírja, segítünk eldönteni, hogy az ipari darálás milyen formában lehet reális irány, és kell-e mellé más technológia is.',
    ],
    secondaryCta: { label: 'Részletes ipari daráló oldal', href: 'https://iparidaralo.hu' },
  },
};

const brikettalas: TechnologyGateway = {
  slug: "brikettalas",
  name: "Brikettálás",
  metaTitle: "Brikettálási rendszerek faipari és biomassza mellékanyagokhoz | ECOTEQ",
  metaDescription: "Brikettálás forgács, por, fűrészpor, apríték és biomassza tömörítésére. Az ECOTEQ segít kiválasztani, hogy hidraulikus vagy mechanikus brikettáló rendszer lehet-e reális az Ön anyagára, mennyiségére és céljára.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Brikettálás",
    h1: "Brikettálási rendszerek faipari és biomassza mellékanyagokhoz",
    lead: "A brikettálás akkor lehet jó megoldás, ha a laza, száraz vagy megfelelően előkészíthető mellékanyagból kezelhetőbb, tárolhatóbb vagy értékesíthető brikettet szeretne előállítani. Az ECOTEQ segít eldönteni, hogy az adott anyaghoz, mennyiséghez és üzemelési célhoz milyen brikettálási irány lehet reális.",
    secondaryCta: { label: "Részletes brikettáló oldal", href: "https://brikettalo.hu" },
    microcopy: "Nem kell pontos géptípussal érkeznie. Elég, ha leírja az alapanyagot, a mennyiséget, a nedvességet és azt, hogy saját felhasználásra vagy értékesítésre készülne a brikett.",
    trustPills: [
      "Anyagalapú előminősítés",
      "Hidraulikus és mechanikus irány tisztázása",
      "Darálás, szárítás, adagolás és brikettálás rendszerben",
    ],
    image: "/ds/photos/briquetting-line.png",
    imageAlt: "Brikettáló gépsor működés közben",
  },
  fit: {
    h2: "Mikor lehet jó megoldás a brikettálás?",
    intro: "A brikettálás nem minden hulladékra és nem minden mennyiségre ugyanazt jelenti. Más irány kell egy faipari üzem saját forgácsához, más egy nagyobb ipari alapanyagáramhoz, és más akkor, ha a cél saját fűtés, értékesítés vagy rendezettebb hulladékkezelés. Az első kérdés ezért nem az, hogy „melyik brikettáló gép kell”, hanem az, hogy az anyag alkalmas-e tömörítésre, milyen előkészítés szükséges, és mit szeretnénk elérni a kész brikettel.",
    items: [
      { title: "Ha rendszeresen keletkezik forgács, por vagy fűrészpor", text: "Faipari üzemeknél a laza mellékanyag sok helyet foglalhat. Brikettálással kezelhetőbb, tömörebb forma készülhet belőle." },
      { title: "Ha a cél saját fűtőanyag előállítása", text: "A brikett saját felhasználásra is készülhet, ha az anyag minősége, nedvessége és mennyisége ezt lehetővé teszi." },
      { title: "Ha értékesíthető végterméket szeretne", text: "Bizonyos alapanyagokból piacképes brikett készülhet, de ehhez stabil alapanyag-minőség, megfelelő nedvesség és kiszámítható termelés kell." },
      { title: "Ha rendezettebb tárolás és anyagkezelés a cél", text: "A laza forgács, por vagy apríték sokszor nehezen kezelhető. A tömörítés javíthatja a tárolhatóságot és az üzemi rendet." },
      { title: "Ha a hulladéklogisztika túl sok költséget vagy figyelmet visz el", text: "A brikettálás bizonyos esetekben csökkentheti az elszállítási és tárolási terheket, de a gazdasági hatást mindig az aktuális mennyiség, költség és cél alapján kell vizsgálni." },
      { title: "Ha a brikettálás előtt előkészítésre van szükség", text: "Darálás, szárítás, adagolás vagy tárolás nélkül sok brikettáló rendszer nem működik jól. Ezért a gép helyett először a teljes anyagutat kell megnézni." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "A brikettálás mögött általában nem az a kérdés áll, hogy „vegyünk-e egy gépet”. A valódi kérdés az, hogy mit kezdjen az üzem a forgáccsal, porral, aprítékkal vagy más tömöríthető mellékanyaggal úgy, hogy abból kezelhetőbb és üzletileg értelmezhető folyamat legyen.",
    cards: [
      { problem: "Laza, sok helyet foglaló mellékanyag", why: "A forgács, por, fűrészpor vagy apríték gyorsan megtöltheti a tárolóteret, nehezen kezelhető, és sokszor rendezetlen üzemi képet ad.", answer: "A megfelelő brikettálási rendszer tömörebb, egységesebb, könnyebben tárolható brikettet készíthet az alkalmas alapanyagból." },
      { problem: "Hulladékból saját felhasználású energiahordozó", why: "Ha az üzem fűtési vagy energetikai célra tudná használni a mellékanyagot, a laza forma és az ingadozó minőség akadály lehet.", answer: "Megfelelő alapanyag és előkészítés esetén a brikett kezelhetőbb formát adhat saját felhasználáshoz. A pontos műszaki és engedélyezési feltételeket külön kell vizsgálni." },
      { problem: "Értékesítési célú brikettgyártás", why: "Értékesítésnél már nem elég, hogy a gép „brikettet csinál”. Stabil minőség, alapanyagellátás, kiszámítható kapacitás, csomagolás és logisztika is kell.", answer: "A brikettálási technológiát a végtermék elvárt minőségéhez és az üzemi működéshez kell illeszteni." },
      { problem: "Túl korai gépválasztás", why: "Sok hibás beruházás abból jön, hogy a döntés egy gépár vagy névleges kapacitás alapján születik, miközben az anyag nedvessége, szemcsemérete vagy mennyisége nincs tisztázva.", answer: "Az ECOTEQ először az anyagot és a célt nézi meg, utána javasol hidraulikus, mechanikus vagy más technológiai irányt." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "A brikettálásnál az alapanyag minősége döntő. A tömöríthetőség függ a nedvességtől, szemcsemérettől, anyagösszetételtől, szennyezettségtől és attól is, hogy saját felhasználásra vagy értékesítésre készül-e a végtermék.",
    materials: ["faipari forgács", "fűrészpor", "csiszolatpor", "apríték", "gyaluforgács", "faipari mellékanyag", "biomassza", "mezőgazdasági mellékanyagok előminősítés után", "egyéb tömöríthető száraz ipari mellékanyagok"],
    industries: ["faipar", "asztalosüzemek", "bútorgyártás", "nyílászárógyártás", "fűrészüzemek", "biomassza-feldolgozás", "mezőgazdasági mellékanyag-feldolgozás", "ipari mellékanyag-hasznosítás"],
    goals: ["saját fűtőanyag előállítása", "értékesíthető brikett gyártása", "hulladékhely csökkentése", "forgács és por rendezett kezelése", "tárolhatóság javítása", "hulladéklogisztika egyszerűsítése", "biomassza energetikai hasznosítása", "darált vagy szárított anyag továbbfeldolgozása"],
  },
  process: {
    h2: "Hogyan épülhet fel egy brikettálási rendszer?",
    intro: "A brikettáló gép csak a rendszer egyik eleme. A működő brikettálási folyamatnál fontos az alapanyaggyűjtés, az adagolás, a nedvesség, a szemcseméret, a kihordás, a tárolás és az üzemeltetés is.",
    steps: [
      { title: "Alapanyag gyűjtése", text: "Az anyag érkezhet elszívórendszerből, silóból, zsákból, konténerből vagy közvetlenül gyártási mellékáramból." },
      { title: "Előkészítés", text: "Szükség lehet darálásra, aprításra, rostálásra, szárításra vagy idegenanyag-leválasztásra. A brikettálás stabilitása nagyban függ az előkészített anyagtól." },
      { title: "Adagolás és pufferelés", text: "A brikettáló akkor működik jól, ha az anyag egyenletesen és kezelhető módon érkezik. Ehhez adagoló, siló, csiga, szalag vagy más anyagmozgató elem kellhet." },
      { title: "Brikettálás", text: "A fő technológiai lépés lehet hidraulikus vagy mechanikus brikettálás. A választást az anyag, a mennyiség, az üzemóra, a céltermék és a beruházási helyzet határozza meg." },
      { title: "Kihordás, hűlés, tárolás vagy csomagolás", text: "A kész brikettet kezelni, tárolni vagy csomagolni kell. Értékesítési cél esetén ez különösen fontos." },
      { title: "Üzemeltetés és support", text: "A rendszer működéséhez kezelői rutin, karbantartás, alkatrészellátás és technológiai támogatás is szükséges." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt brikettálót választ?",
    intro: "A brikettáló kiválasztása nem csak kapacitáskérdés. Ugyanaz a gép másképp viselkedhet eltérő anyaggal, nedvességgel, szemcsemérettel és üzemórával. A jó döntéshez először a feladatot kell tisztázni.",
    factors: [
      { title: "Anyag típusa", text: "Forgács, fűrészpor, csiszolatpor, apríték, biomassza vagy más mellékanyag? Az anyag összetétele meghatározza a tömöríthetőséget." },
      { title: "Nedvességtartalom", text: "A túl nedves vagy túl ingadozó nedvességű anyag problémát okozhat. Sok esetben szárítás vagy stabilabb alapanyag-kezelés szükséges." },
      { title: "Szemcseméret", text: "A túl nagy, túl szálas vagy túl változó szemcseméret ronthatja a brikettálás stabilitását. Ilyenkor darálásra vagy osztályozásra lehet szükség." },
      { title: "Mennyiség és üzemóra", text: "Más rendszer kell napi néhány órás saját felhasználásra, és más nagyobb, folyamatosabb ipari gyártásra." },
      { title: "Cél: saját felhasználás vagy értékesítés", text: "Saját fűtésnél más szempontok dominálnak, mint értékesítési célú brikettgyártásnál, ahol a végtermék minősége, kezelése és csomagolása is fontos." },
      { title: "Hidraulikus vagy mechanikus irány", text: "Kisebb és közepes üzemi helyzetekben gyakran hidraulikus brikettáló jön szóba. Nagyobb, folyamatosabb ipari kapacitásnál mechanikus brikettáló irány is vizsgálandó. A pontos döntéshez anyag- és kapacitásadat kell." },
      { title: "Rendszerelemek", text: "Siló, adagoló, csiga, szállítószalag, kihordó, csomagolóasztal, mágnes, szárító vagy daráló is része lehet a rendszernek." },
      { title: "Beruházási realitás", text: "Nem a legolcsóbb gép a jó döntés, hanem az a rendszer, amely az adott mennyiséggel, anyaggal és üzemi céllal hosszabb távon is működtethető." },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy brikettálási projektben?",
    body: [
      "Az ECOTEQ nem abból indul ki, hogy minden érdeklődőnek ugyanazt a brikettálót ajánlja. Abból indulunk ki, hogy milyen anyag keletkezik az Ön üzemében, milyen mennyiségben, milyen nedvességgel, és mi lenne a cél a kész brikettel.",
      "A cél az, hogy időben kiderüljön: a brikettálás reális irány-e, kell-e előtte darálás vagy szárítás, és inkább hidraulikus, mechanikus vagy más rendszerlogika érdemes-e.",
    ],
    points: [
      { title: "Anyagalapú előminősítés", text: "Megnézzük az anyag típusát, nedvességét, szemcseméretét, mennyiségét és a végtermék célját." },
      { title: "Technológiai irány kiválasztása", text: "Segítünk eldönteni, hogy hidraulikus vagy mechanikus brikettálási irányt érdemes-e vizsgálni." },
      { title: "Rendszerszemlélet", text: "A brikettáló mellett az adagolást, darálást, szárítást, tárolást, kihordást és csomagolást is figyelembe vesszük." },
      { title: "Üzleti realitás", text: "A brikettálás akkor jó, ha az anyag, mennyiség, üzemóra, energia, kezelői munka és beruházási cél együtt is értelmezhető." },
      { title: "Magyar projektkommunikáció", text: "Az egyeztetés, ajánlat-előkészítés, projektkövetés és későbbi támogatás magyar nyelvű szakmai kapcsolattal történik." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "A brikettálás sokszor nem önálló gépbeszerzés, hanem anyag-előkészítési és tömörítési rendszer. A jó brikettminőséghez megfelelő frakció, nedvesség, adagolás és stabil alapanyagáram kell.",
    links: [
      { label: "Ipari darálás", href: "/technologiak/ipari-daralas/", description: "Ha az alapanyag túl nagy, szálas, darabos vagy változó méretű, a brikettálás előtt darálásra lehet szükség." },
      { label: "Biomassza-szárítás", href: "/technologiak/biomassza-szaritas/", description: "Ha az alapanyag túl nedves vagy ingadozó nedvességtartalmú, a szárítás lehet a brikettálás előfeltétele." },
      { label: "Pelletálás", href: "/technologiak/pelletalas/", description: "Ha a cél nem brikett, hanem egységes pellet formájú végtermék, pelletálási irányt is érdemes vizsgálni." },
      { label: "Anyagmozgatás és rendszerelemek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha a brikettáló stabil működéséhez adagolás, siló, csiga, szalag, kihordó vagy csomagolási elem kell." },
    ],
    spoke: {
      label: "Részletes brikettáló gépválasztó és kalkulátor",
      href: "https://brikettalo.hu",
      description: "A részletes brikettáló gépválasztó, hidraulikus és mechanikus technológiai út, kalkulátor, megtérülési logika és szakmai tudástár a brikettalo.hu oldalon érhető el.",
    },
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, milyen brikettálási irány lehet reális",
    body: "Nem kell kész műszaki specifikációval érkeznie. Az első körben az a cél, hogy lássuk: az adott anyagra, mennyiségre és célra a brikettálás jó megoldás lehet-e, vagy előbb darálást, szárítást, pelletálást vagy más technológiát kell vizsgálni.",
    fields: ["milyen anyagot szeretne brikettálni", "mennyi keletkezik óránként, naponta vagy hetente", "ismert-e a nedvességtartalom", "milyen a szemcseméret", "saját felhasználás vagy értékesítés a cél", "van-e jelenlegi elszívó, siló vagy anyaggyűjtés", "szükség lehet-e szárításra vagy darálásra", "hol lenne a telepítés", "van-e fotó, videó vagy anyagminta információ"],
  },
  faq: {
    h2: "Gyakori kérdések a brikettálás kapcsán",
    items: [
      { q: "Milyen anyagból lehet brikettet készíteni?", a: "Leggyakrabban faipari forgács, fűrészpor, por, apríték vagy más tömöríthető biomassza jön szóba. A pontos alkalmasság az anyag nedvességétől, szemcseméretétől, összetételétől és szennyezettségétől függ." },
      { q: "Kell-e szárítani brikettálás előtt?", a: "Sok esetben igen, ha az alapanyag nedvességtartalma túl magas vagy ingadozó. A szükséges nedvességi tartományt az anyag és a technológia alapján kell pontosítani." },
      { q: "Elég önmagában egy brikettáló gép?", a: "Nem mindig. Szükség lehet silóra, adagolásra, darálásra, szárításra, kihordásra, csomagolásra vagy más rendszerelemre." },
      { q: "Hidraulikus vagy mechanikus brikettáló kell?", a: "Ez főleg az anyagtól, mennyiségtől, üzemórától, célterméktől és beruházási helyzettől függ. Kisebb és közepes mennyiségeknél gyakran hidraulikus, nagyobb folyamatos ipari gyártásnál mechanikus irány is vizsgálandó." },
      { q: "Tudnak konkrét gépet ajánlani?", a: "Igen, de először az alapanyagot, mennyiséget, nedvességet, célterméket és üzemi feltételeket kell tisztázni. Ezután lehet reális technológiai irányt és gépet javasolni." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, hogy a brikettálás a jó megoldás? Ez teljesen normális",
    body: [
      "A brikettálásnál a jó döntés nem a gép nevével kezdődik. Először azt kell tisztázni, milyen anyag keletkezik, mennyi van belőle, milyen a nedvessége, milyen frakcióban érkezik, és mi legyen a kész brikett célja.",
      "Ha ezt leírja, segítünk eldönteni, hogy a brikettálás reális irány-e, és ha igen, milyen rendszerlogikát érdemes vizsgálni.",
    ],
    secondaryCta: { label: "Részletes brikettáló oldal", href: "https://brikettalo.hu" },
  },
};

const pelletalas: TechnologyGateway = {
  slug: "pelletalas",
  name: "Pelletálás",
  metaTitle: "Pelletálási rendszerek biomassza és faipari alapanyagokhoz | ECOTEQ",
  metaDescription: "Pelletálás biomassza, faipari mellékanyag és előkészített alapanyag tömörítésére. Az ECOTEQ segít eldönteni, hogy az adott anyag, nedvesség, mennyiség és cél alapján reális-e a pelletálási technológiai irány.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Pelletálás",
    h1: "Pelletálási rendszerek biomassza és faipari alapanyagokhoz",
    lead: "A pelletálás akkor lehet jó megoldás, ha az előkészített alapanyagból egységes, jól adagolható és jól kezelhető pellet formájú végterméket szeretne előállítani. Az ECOTEQ abban segít, hogy az anyag, nedvesség, szemcseméret, mennyiség és cél alapján kiderüljön: reális-e a pelletálás, és milyen előkészítő rendszer kell hozzá.",
    secondaryCta: { label: "Kapcsolódó technológiák", href: "/#technologiak" },
    microcopy: "A pelletálásnál nem a pelletprés az első kérdés. Először az alapanyag, a nedvesség, a frakció, az üzemóra és a végtermékcél dönt.",
    trustPills: ["Alapanyag-előkészítés rendszerben", "Darálás, szárítás, adagolás, pelletálás", "Biomassza és faipari mellékanyagok", "Szakértői előminősítés"],
    image: "/ds/photos/pelletizing-line.png",
    imageAlt: "Pellet gyártó gépsor működés közben",
  },
  fit: {
    h2: "Mikor lehet jó megoldás a pelletálás?",
    intro: "A pelletálás nagyobb fegyelmet igényel, mint ahogy elsőre sokan gondolják. Nem elég egy présgépet választani: stabil alapanyag, megfelelő nedvesség, megfelelő szemcseméret, egyenletes adagolás és átgondolt utókezelés is kellhet.",
    items: [
      { title: "Ha egységes, jól adagolható végtermék a cél", text: "A pellet formája miatt könnyebben adagolható, tárolható és kezelhető lehet, ha az alapanyag minősége és a technológiai környezet ezt támogatja." },
      { title: "Ha biomassza energetikai vagy értékesítési célú feldolgozása a feladat", text: "A pelletálás energetikai célra vagy értékesítési célú termékgyártásra is szóba jöhet, de a végtermék-követelmények meghatározzák a rendszer összetettségét." },
      { title: "Ha a brikett helyett kisebb, egységesebb forma kell", text: "Bizonyos helyzetekben nem a brikett, hanem a pellet a megfelelő végtermék. Ezt az alapanyag, célpiac, felhasználás és kapacitás együtt dönti el." },
      { title: "Ha az alapanyag folyamatosan és kiszámíthatóan rendelkezésre áll", text: "A pelletálás akkor működik jól, ha az alapanyag-ellátás, a nedvesség és a frakció nem esik szét naponta." },
      { title: "Ha a rendszerbe szárítás vagy darálás is illeszthető", text: "Sok pelletálási projekt előkészítő rendszer nélkül nem működik stabilan. A darálás, szárítás, adagolás és hűtés gyakran ugyanúgy része a feladatnak, mint maga a pelletprés." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "A pelletálás nem csak tömörítés. Üzemi oldalról általában az a kérdés, hogyan lehet az ömlesztett, változó vagy nehezen értékesíthető alapanyagból egységesebb, kezelhetőbb végterméket előállítani.",
    cards: [
      { problem: "Változó minőségű biomassza vagy faipari mellékanyag", why: "Az ingadozó nedvesség, szemcseméret vagy összetétel instabil gyártást és gyengébb végterméket okozhat.", answer: "A pelletálási rendszer előtt az alapanyag-előkészítést kell stabilizálni: darálás, szárítás, osztályozás, adagolás és pufferelés is szükséges lehet." },
      { problem: "Nehezen kezelhető ömlesztett alapanyag", why: "A laza, poros vagy változó anyag tárolása, adagolása és értékesítése nehéz lehet.", answer: "Megfelelő előkészítéssel a pellet egységesebb és jobban kezelhető végtermék lehet." },
      { problem: "Rosszul meghatározott végtermékcél", why: "Más rendszer kell saját energetikai felhasználásra, más ipari tüzelőanyaghoz és más értékesítési célú, magasabb elvárású pellethez.", answer: "A rendszertervezésnek a végfelhasználásból kell visszafelé indulnia." },
      { problem: "Túl korai gépválasztás", why: "A pelletprés önmagában nem oldja meg az anyagminőségi, nedvességi és adagolási problémákat.", answer: "Az ECOTEQ először az anyag-előkészítési láncot vizsgálja, és csak utána javasol pelletálási irányt." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "Pelletálásnál az alapanyag előkészítettsége meghatározó. A technológia érzékeny lehet a nedvességre, szemcseméretre, kötőanyag-tulajdonságokra, szennyeződésre és az adagolás egyenletességére.",
    materials: ["faipari fűrészpor", "finom apríték", "biomassza", "mezőgazdasági mellékanyagok előminősítés után", "energianövények előkészített anyagai", "kevert biomassza csak külön vizsgálat után", "szárított és homogenizált alapanyagok"],
    industries: ["biomassza-feldolgozás", "faipar", "fűrészüzemek", "energetikai projektek", "mezőgazdasági mellékanyag-hasznosítás", "ipari alapanyag-előkészítés"],
    goals: ["pellet előállítása saját felhasználásra", "értékesíthető pellet gyártása", "biomassza egységesítése", "jobb adagolhatóság", "energetikai alapanyag előkészítése", "ömlesztett anyag értéknövelése"],
  },
  process: {
    h2: "Hogyan épülhet fel egy pelletálási rendszer?",
    intro: "Egy pelletálási rendszer több egymásra épülő lépésből állhat. A stabil működéshez az alapanyag fogadásától a végtermék hűtéséig és tárolásáig végig kell gondolni az anyag útját.",
    steps: [
      { title: "Alapanyag fogadása és pufferelése", text: "Az anyag érkezhet ömlesztve, silóból, konténerből, zsákból vagy előző technológiai lépésből." },
      { title: "Darálás vagy finomítás", text: "A pelletálás előtt gyakran szükség van egységesebb, megfelelő szemcseméretű frakcióra." },
      { title: "Szárítás vagy nedvességbeállítás", text: "A túl nedves vagy ingadozó nedvességű anyag pelletálási problémákat okozhat." },
      { title: "Adagolás és kondicionálás", text: "Az egyenletes anyagellátás és szükség szerinti kondicionálás a stabil gyártás fontos része." },
      { title: "Pelletálás", text: "A pelletprés a fő technológiai egység, de csak megfelelően előkészített anyaggal tud tartósan jól működni." },
      { title: "Hűtés, rostálás, tárolás vagy csomagolás", text: "A kész pellet kezelése a végfelhasználási vagy értékesítési céltól függ." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt pelletáló rendszert választ?",
    intro: "A pelletálás sok paraméter együttállását igényli. A rossz döntés gyakori oka, hogy a beruházó a pelletprésből indul ki, miközben az anyag-előkészítés nincs tisztázva.",
    factors: [
      { title: "Alapanyag típusa", text: "Fa, biomassza, mezőgazdasági mellékanyag vagy kevert alapanyag? Minden anyag más technológiai viselkedést mutat." },
      { title: "Nedvességtartalom", text: "A pelletálás egyik kulcskérdése. A túl magas vagy ingadozó nedvesség gyakran szárítási vagy kondicionálási feladatot jelent." },
      { title: "Szemcseméret", text: "A túl durva, túl szálas vagy változó frakció instabil működést okozhat." },
      { title: "Kapacitás és üzemóra", text: "Időszakos saját felhasználás, egy műszakos gyártás vagy folyamatos ipari termelés? Ez teljesen más rendszerlogikát jelent." },
      { title: "Végtermékcél", text: "Saját energetikai felhasználás, ipari tüzelőanyag vagy értékesítési célú pellet? A végtermék elvárása visszahat a teljes rendszerre." },
      { title: "Kiegészítő technológiák", text: "Daráló, szárító, keverő, adagoló, hűtő, rostáló, csomagoló és anyagmozgató elemek is szükségesek lehetnek." },
      { title: "Beruházási és üzemeltetési realitás", text: "A pelletálás nem csak gépberuházás, hanem folyamatos üzemeltetési fegyelem is: energia, karbantartás, kopóalkatrész, kezelői rutin és alapanyagellátás." },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy pelletálási projektben?",
    body: [
      "Az ECOTEQ pelletálási projektnél nem a présgéppel kezdi a gondolkodást. Először az alapanyagot, a nedvességet, a frakciót, a mennyiséget, a végtermékcélt és az üzemi környezetet nézzük meg.",
      "A cél az, hogy kiderüljön: a pelletálás reális technológiai irány-e, milyen előkészítő lépések kellenek, és milyen rendszerlogika lehet műszakilag és üzletileg vállalható.",
    ],
    points: [
      { title: "Alapanyag-előkészítés tisztázása", text: "Megnézzük, hogy kell-e darálás, szárítás, osztályozás, pufferelés vagy más előkészítés." },
      { title: "Rendszerszemlélet", text: "A pelletáló mellett a teljes anyagutat vizsgáljuk: bemenet, előkészítés, pelletálás, hűtés, tárolás, csomagolás." },
      { title: "Technológiai irány kiválasztása", text: "Nem minden pelletálási rendszer való minden anyagra és üzemi helyzetre." },
      { title: "Üzleti realitás", text: "A pelletálásnál a beruházás mellett az üzemeltetési költség, energiaigény, karbantartás és alapanyagellátás is kritikus." },
      { title: "Magyar szakértői kommunikáció", text: "Az egyeztetés és az ajánlat-előkészítés magyar nyelvű szakmai támogatással történik." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "A pelletálás szinte mindig előkészítési rendszerrel együtt értelmezhető. A jó pellethez stabil anyag, megfelelő frakció, nedvesség és adagolás kell.",
    links: [
      { label: "Ipari darálás", href: "/technologiak/ipari-daralas/", description: "Ha az alapanyag túl durva, szálas vagy változó méretű." },
      { label: "Biomassza-szárítás", href: "/technologiak/biomassza-szaritas/", description: "Ha az alapanyag túl nedves vagy ingadozó nedvességtartalmú." },
      { label: "Brikettálás", href: "/technologiak/brikettalas/", description: "Ha a pellet helyett nagyobb, tömörebb brikett formájú végtermék lehet jobb irány." },
      { label: "Anyagmozgatás és rendszerelemek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha stabil adagolásra, pufferelésre, hűtésre, tárolásra vagy csomagolásra van szükség." },
    ],
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, reális-e a pelletálási irány",
    body: "Nem kell kész műszaki specifikációval érkeznie. Az első körben azt kell látni, hogy az adott alapanyag, mennyiség, nedvesség és végtermékcél alapján a pelletálás jó megoldás lehet-e, vagy előbb más előkészítő technológiát kell vizsgálni.",
    fields: ["milyen alapanyagot szeretne pelletálni", "mennyi keletkezik óránként, naponta vagy hetente", "ismert-e a nedvességtartalom", "milyen a szemcseméret", "saját felhasználás vagy értékesítés a cél", "van-e szükség szárításra", "milyen energia és hely áll rendelkezésre", "hol lenne a telepítés", "van-e fotó, videó vagy anyagminta információ"],
  },
  faq: {
    h2: "Gyakori kérdések a pelletálás kapcsán",
    items: [
      { q: "Milyen anyagból lehet pelletet készíteni?", a: "Jellemzően megfelelően előkészített faipari vagy biomassza alapanyagból. A pontos alkalmasság az anyag nedvességétől, szemcseméretétől, összetételétől és tisztaságától függ." },
      { q: "Kell-e szárítani pelletálás előtt?", a: "Sok esetben igen. A pelletálás érzékeny a nedvességre, ezért a túl nedves vagy ingadozó anyag előszárítást vagy nedvességbeállítást igényelhet." },
      { q: "Elég önmagában a pelletprés?", a: "Általában nem. A stabil gyártáshoz darálás, szárítás, adagolás, hűtés, rostálás, tárolás vagy csomagolás is szükséges lehet." },
      { q: "Brikettálás vagy pelletálás a jobb irány?", a: "Ez az alapanyagtól, mennyiségtől, végtermékcéltól, felhasználástól és beruházási helyzettől függ. Nem érdemes csak gépár alapján dönteni." },
      { q: "Tudnak konkrét rendszert ajánlani?", a: "Igen, de először az alapanyag-előkészítést, a nedvességet, a mennyiséget és a végtermékcélt kell tisztázni." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, hogy a pelletálás a jó megoldás? Ez teljesen normális",
    body: [
      "A pelletálásnál a jó döntés nem a présgéppel kezdődik. Először azt kell tisztázni, hogy az alapanyag alkalmas-e, kell-e darálás vagy szárítás, milyen minőségű végtermék a cél, és milyen üzemeltetési feltételek adottak.",
      "Ha ezt leírja, segítünk eldönteni, hogy a pelletálás reális irány-e, vagy más megoldást érdemes vizsgálni.",
    ],
    secondaryCta: { label: "Kapcsolódó technológiák", href: "/#technologiak" },
  },
};

const biomasszaSzaritas: TechnologyGateway = {
  slug: "biomassza-szaritas",
  name: "Biomassza-szárítás",
  metaTitle: "Biomassza-szárítás ipari feldolgozáshoz és energetikai felhasználáshoz | ECOTEQ",
  metaDescription: "Biomassza-szárítás nedves apríték, fűrészpor, mezőgazdasági mellékanyag és ipari biomassza előkészítésére. Az ECOTEQ segít kiválasztani a reális szárítási technológiai irányt.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Biomassza-szárítás",
    h1: "Biomassza-szárítás ipari feldolgozáshoz és energetikai felhasználáshoz",
    lead: "A nedves biomassza sokszor nehezen tárolható, gyengébb minőségű, kiszámíthatatlanabb és nem mindig alkalmas közvetlen továbbfeldolgozásra. Az ECOTEQ segít eldönteni, hogy az adott anyaghoz, nedvességtartalomhoz, mennyiséghez és célhoz milyen szárítási irány lehet reális.",
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
    microcopy: "A szárítási rendszer nem csak a szárítógépről szól. Hőforrás, anyagáram, bemeneti és kimeneti nedvesség, üzemóra és utólagos felhasználás együtt határozza meg a jó megoldást.",
    trustPills: ["Nedvességalapú előminősítés", "Szárítás brikettálás vagy pelletálás előtt", "Biomassza és ipari mellékanyagok", "Rendszerben gondolkodó ECOTEQ megközelítés"],
    image: "/ds/photos/biomass-belt-dryer.png",
    imageAlt: "Biomassza szárító rendszer",
  },
  fit: {
    h2: "Mikor lehet jó megoldás a biomassza-szárítás?",
    intro: "A biomassza-szárítás akkor merül fel, ha az anyag nedvességtartalma akadályozza a tárolást, a feldolgozást, az energetikai felhasználást, a brikettálást vagy a pelletálást. A kérdés nem az, hogy „milyen szárítót vegyünk”, hanem az, hogy mennyi vizet kell kivenni, milyen anyagból, milyen üzemidővel és milyen hőforrással.",
    items: [
      { title: "Ha az anyag túl nedves a további feldolgozáshoz", text: "Brikettálás, pelletálás vagy energetikai felhasználás előtt sok esetben nedvességcsökkentésre van szükség." },
      { title: "Ha ingadozó a bemeneti anyagminőség", text: "A változó nedvességtartalom instabil gyártást, eltérő végterméket vagy kezelési problémát okozhat." },
      { title: "Ha javítani kell a tárolhatóságot", text: "A nedves biomassza tárolása nehezebb, kockázatosabb és kiszámíthatatlanabb lehet, mint a stabilabb nedvességű anyagé." },
      { title: "Ha a cél jobb energetikai hasznosítás", text: "A nedvességtartalom közvetlenül befolyásolja az energetikai felhasználás értelmét és hatékonyságát." },
      { title: "Ha a szárítás a rendszer része, nem önálló cél", text: "A szárító sokszor darálóval, adagolóval, pufferrel, brikettálóval, pelletálóval vagy hőtermelő rendszerrel együtt működik jól." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "A szárítás üzemi oldalról nem pusztán nedvességcsökkentés. A fő kérdés az, hogy az anyag stabilabban kezelhető, tárolható, adagolható vagy továbbfeldolgozható legyen.",
    cards: [
      { problem: "Túl nedves vagy ingadozó biomassza", why: "A magas nedvesség rontja a tárolhatóságot, a további feldolgozást és az energetikai felhasználás tervezhetőségét.", answer: "Megfelelő szárítási technológiával az anyag nedvességtartalma a célfolyamathoz közelebb vihető." },
      { problem: "Brikettálás vagy pelletálás előtti akadály", why: "A tömörítési technológiák érzékenyek lehetnek a nedvességre. A túl nedves alapanyag instabil működést okozhat.", answer: "A szárítás az anyag-előkészítési lánc egyik kulcseleme lehet." },
      { problem: "Rossz hőforrás- vagy energiaillesztés", why: "A szárítás energiaigényes folyamat lehet. Rossz hőforrással vagy üzemidővel a beruházás könnyen gazdaságtalanná válhat.", answer: "A technológiai irányt a rendelkezésre álló hőforrás, energiaár, üzemóra és vízelvonási igény alapján kell kiválasztani." },
      { problem: "Nem tisztázott bemeneti és kimeneti cél", why: "Ha nem tudjuk, honnan hová kell szárítani az anyagot, nem lehet jó rendszert méretezni.", answer: "Az ECOTEQ először a bemeneti nedvességet, a cél nedvességet, az anyagmennyiséget és a felhasználást tisztázza." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "A szárítási technológia kiválasztásánál az anyag fizikai tulajdonságai, szemcsemérete, nedvessége, tapadása, szennyezettsége és hőérzékenysége mind számítanak.",
    materials: ["faapríték", "fűrészpor", "forgács", "aprított biomassza", "mezőgazdasági mellékanyag", "energianövény", "szerves ipari mellékanyag előminősítés után", "brikettálás vagy pelletálás előtti alapanyag"],
    industries: ["biomassza-feldolgozás", "faipar", "energetikai projektek", "mezőgazdasági mellékanyag-hasznosítás", "brikett- és pelletgyártás", "ipari hulladék- és mellékanyag-kezelés"],
    goals: ["nedvességcsökkentés", "brikettálás előkészítése", "pelletálás előkészítése", "energetikai hasznosítás javítása", "tárolhatóság javítása", "stabilabb alapanyagáram", "anyagminőség egységesítése"],
  },
  process: {
    h2: "Hogyan épülhet fel egy biomassza-szárítási rendszer?",
    intro: "A szárítási rendszer a hőforrástól, az anyagáramtól és a cél nedvességtartalomtól függ. A szárító önmagában nem elég, ha az adagolás, kihordás, porleválasztás, hőellátás és utólagos feldolgozás nincs végiggondolva.",
    steps: [
      { title: "Anyag fogadása és pufferelése", text: "Az anyag érkezhet aprítékként, fűrészporként, forgácsként vagy más biomassza formában." },
      { title: "Előkészítés és adagolás", text: "Szükség lehet darálásra, rostálásra, szétterítésre, pufferelésre vagy egyenletes adagolásra." },
      { title: "Hőforrás és szárítás", text: "A hőforrás lehet meglévő vagy új rendszer. A szárítási technológiát a vízelvonási igény, üzemóra és anyagtulajdonság határozza meg." },
      { title: "Porleválasztás és levegőkezelés", text: "A szárítás során keletkező por, levegő és esetleges emissziós kérdések kezelése a rendszer része lehet." },
      { title: "Kihordás és tárolás", text: "A szárított anyagot stabilan kell továbbítani, hűteni, tárolni vagy további technológiára vezetni." },
      { title: "Továbbfeldolgozás", text: "A kimenet mehet brikettálásra, pelletálásra, energetikai felhasználásra vagy egyéb feldolgozásra." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt szárítót választ?",
    intro: "A szárító kiválasztása nem csak kapacitáskérdés. A legfontosabb kérdés sokszor az, mennyi vizet kell kivenni az anyagból, milyen hőforrással, milyen üzemidő alatt és milyen végfelhasználási célra.",
    factors: [
      { title: "Anyag típusa", text: "Faapríték, fűrészpor, mezőgazdasági biomassza vagy más szerves mellékanyag? Minden anyag másképp szárítható." },
      { title: "Bemeneti és cél nedvesség", text: "A szárítási feladat alapja: honnan hová kell eljutni nedvességben?" },
      { title: "Mennyiség és üzemóra", text: "Egy műszakban, több műszakban vagy folyamatosan kell működnie a rendszernek?" },
      { title: "Hőforrás", text: "Van-e meglévő hőforrás, kazán, hulladékhő vagy új hőtermelő rendszer kell?" },
      { title: "Szemcseméret és anyagáram", text: "Az anyag mérete, homogenitása és adagolhatósága befolyásolja a szárító típusát." },
      { title: "Por, emisszió és üzemi környezet", text: "A porleválasztást, levegőkezelést és telepítési környezetet külön vizsgálni kell." },
      { title: "Továbbfeldolgozás", text: "Brikettálás, pelletálás, tüzelés vagy tárolás a cél? A kimeneti nedvességet ehhez kell illeszteni." },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy biomassza-szárítási projektben?",
    body: [
      "Az ECOTEQ nem abból indul ki, hogy „mekkora szárító kell”. Először azt nézzük meg, milyen anyagról van szó, mennyi a bemeneti nedvesség, mi a cél nedvesség, milyen mennyiséget kell kezelni, és milyen hőforrás áll rendelkezésre.",
      "A cél az, hogy reális szárítási irány szülessen, amely illeszkedik a teljes anyagáramhoz és a későbbi feldolgozáshoz.",
    ],
    points: [
      { title: "Nedvesség- és anyagalapú előminősítés", text: "A bemeneti és kimeneti nedvesség, anyagtípus és mennyiség alapján indul a gondolkodás." },
      { title: "Rendszerszemlélet", text: "Adagolás, szárítás, kihordás, porleválasztás, hőforrás és továbbfeldolgozás együtt számít." },
      { title: "Technológiai irány kiválasztása", text: "Nem minden szárítási technológia való minden biomasszára és üzemeltetési helyzetre." },
      { title: "Üzleti realitás", text: "A szárítás energiaigényét, üzemóráját és beruházási logikáját különösen fontos tisztázni." },
      { title: "Magyar szakértői kommunikáció", text: "Az egyeztetés, előkészítés és projektkövetés magyar nyelvű szakmai támogatással történik." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "A biomassza-szárítás gyakran nem önálló cél, hanem brikettálás, pelletálás, energetikai felhasználás vagy stabilabb anyagkezelés előfeltétele.",
    links: [
      { label: "Brikettálás", href: "/technologiak/brikettalas/", description: "Ha a szárított anyagból tömör, kezelhető brikett készülne." },
      { label: "Pelletálás", href: "/technologiak/pelletalas/", description: "Ha a szárított és előkészített alapanyagból pellet készülne." },
      { label: "Ipari darálás", href: "/technologiak/ipari-daralas/", description: "Ha az anyag túl nagy, változó vagy rosszul adagolható a szárítás előtt." },
      { label: "Anyagmozgatás és rendszerelemek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha stabil adagolásra, kihordásra, pufferre vagy tárolásra van szükség." },
    ],
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, milyen szárítási irány lehet reális",
    body: "Nem kell kész műszaki specifikációval érkeznie. Első körben azt kell látni, milyen anyagból mennyi vizet kell eltávolítani, milyen célra, milyen üzemidőben és milyen hőforrással.",
    fields: ["milyen anyagot kell szárítani", "mennyi a jelenlegi nedvességtartalom", "milyen cél nedvességtartalom kell", "mennyi anyag keletkezik óránként, naponta vagy hetente", "milyen a szemcseméret", "mi lesz a szárított anyag célja", "van-e rendelkezésre álló hőforrás", "hol lenne a telepítés", "van-e fotó, videó vagy anyagminta információ"],
  },
  faq: {
    h2: "Gyakori kérdések a biomassza-szárítás kapcsán",
    items: [
      { q: "Milyen biomasszát lehet szárítani?", a: "Faaprítékot, fűrészport, forgácsot, mezőgazdasági mellékanyagokat és más biomassza-alapanyagokat is lehet vizsgálni. A pontos technológiai irány az anyagtól és nedvességtől függ." },
      { q: "Mi a legfontosabb adat szárító választás előtt?", a: "A bemeneti nedvesség, a cél nedvesség, az anyagmennyiség és a rendelkezésre álló hőforrás." },
      { q: "Kell-e darálás szárítás előtt?", a: "Ha az anyag túl nagy, változó vagy rosszul adagolható, akkor igen, előkészítésre lehet szükség." },
      { q: "Brikettálás vagy pelletálás előtt mindig kell szárítás?", a: "Nem mindig, de gyakran szükséges. Ez az alapanyag nedvességtartalmától és a választott tömörítési technológiától függ." },
      { q: "Tudnak konkrét szárítót ajánlani?", a: "Igen, de először a vízelvonási feladatot, a hőforrást, az üzemórát és a célfolyamatot kell tisztázni." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, milyen szárítási rendszer kell? Ez teljesen normális",
    body: [
      "A biomassza-szárításnál a jó döntés nem a szárítógép nevével kezdődik. Először azt kell tisztázni, milyen anyagból mennyi vizet kell kivenni, milyen célra, milyen hőforrással és milyen üzemidővel.",
      "Ha ezt leírja, segítünk eldönteni, milyen szárítási irány lehet reális.",
    ],
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
  },
};

const vakuumszaritas: TechnologyGateway = {
  slug: "vakuumszaritas",
  name: "Vákuumszárítás",
  metaTitle: "Vákuumszárítás faipari üzemeknek | ECOTEQ",
  metaDescription: "Vákuumszárítás faanyag kontrollált, gyorsabb és kiszámíthatóbb szárítására. Az ECOTEQ segít eldönteni, hogy az adott faanyaghoz, mennyiséghez, nedvességhez és gyártási célhoz reális-e a vákuumszárító technológia.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Vákuumszárítás",
    h1: "Vákuumszárító faipari üzemeknek. Ha számít a minőség és az idő",
    h1Highlights: ["minőség", "idő"],
    lead: "Az ECOTEQ segít eldönteni, hogy az Ön faanyagára, mennyiségére és gyártási céljára reális-e a vákuumszárító technológia.",
    secondaryCta: { label: "Megnézem a részletes vákuumszárító oldalt", href: "https://vakuumszarito.hu" },
    microcopy: "Nem kell kész gépspecifikációval érkeznie. Elég, ha leírja a fafajt, vastagságot, hosszúságot, induló és cél nedvességet, valamint a havi vagy heti szárítási igényt.",
    trustPills: ["Kontrollált folyamat", "Tervezhető gyártás", "Rövidebb ciklusidő", "Kevesebb selejt"],
    image: "/photos/vakuumszarito-hero.webp",
    imageAlt: "Vákuumemelő daru faipari raktárban, rakott fűrészáruval",
  },
  heroStats: [
    { value: "kontrollált", suffix: "", label: "Szárítás" },
    { value: "tervezhető", suffix: "", label: "Gyártás" },
    { value: "rövidebb", suffix: "", label: "Ciklusidő" },
    { value: "kevesebb", suffix: "", label: "Selejt" },
  ],
  fit: {
    h2: "Mikor jó megoldás a vákuumszárítás?",
    intro: "A vákuumszárítás nem minden faipari üzemnek ugyanazt jelenti. Más a helyzet egy asztalosüzemnél, más egy fűrészüzemnél, más értékes keményfa esetén, és más akkor, ha a cél saját gyártáshoz szükséges gyorsabb, kiszámíthatóbb alapanyag-előkészítés.",
    items: [
      { title: "Ha a szárítási idő túl hosszú vagy kiszámíthatatlan", text: "A vákuumszárítás segít rövidebb és jobban tervezhető ciklusokban gondolkodni." },
      { title: "Ha értékes faanyaggal dolgozik", text: "Keményfa, vastagabb anyag vagy magasabb hozzáadott értékű gyártás esetén a szárítás alapvető gazdasági kérdés." },
      { title: "Ha saját gyártáshoz kell megbízható száraz faanyag", text: "Ha a külső szárítás lassú, drága vagy bizonytalan, a saját vákuumszárító reális irány lehet." },
      { title: "Ha fontos a minőségi problémák csökkentése", text: "Repedés, vetemedés, belső feszültség és nedvességingadozás esetén kontrolláltabb szárítási technológiára van szükség." },
      { title: "Ha a szárítási kapacitás akadályozza a gyártást", text: "Ha a gyártás a szárításra vár, a döntés nem csak műszaki, hanem termelési és pénzügyi kérdés is." },
      { title: "Ha többféle fafajt vagy vastagságot kell kezelni", text: "Változó alapanyag, eltérő vastagság vagy kisebb-nagyobb gyártási tételek esetén fontos a rugalmasan tervezhető szárítási folyamat." },
    ],
  },
  problems: {
    h2: "Milyen problémára ad választ a vákuumszárító?",
    intro: "A vákuumszárítás mögött általában nem az a kérdés áll, hogy „kell-e egy új szárító”. A valódi kérdés az, hogy a jelenlegi szárítás mennyire lassítja, drágítja vagy bizonytalanítja el a faipari gyártást.",
    cards: [
      { problem: "Hosszú szárítási ciklusok", why: "Ha a hagyományos szárítás sokáig tart vagy külső partnerre vár, az lassítja a gyártást és leköti a készletet.", answer: "A vákuumszárítás bizonyos faanyagoknál és méreteknél rövidebb, jobban tervezhető ciklusokat tesz lehetővé." },
      { problem: "Ingadozó faanyagminőség", why: "A nedvességtartalom, repedéskockázat vagy vetemedés bizonytalansága közvetlenül érinti a gyártási minőséget.", answer: "Kontrollált technológiai környezetben jobban kézben tartható a szárítási folyamat." },
      { problem: "Külső szárítási függőség", why: "Ha a szárítás külső kapacitástól függ, az határidő-, minőség- és költségkockázatot jelent.", answer: "Saját vákuumszárító rendszerrel a szárítás egy része vagy egésze házon belülre kerül." },
      { problem: "Rosszul méretezett szárítási kapacitás", why: "Túl kicsi kamra, rosszul választott hossz, nem megfelelő kapacitás vagy energiaellátás hosszú távon korlátozhatja a termelést.", answer: "A méretezést fafaj, vastagság, hossz, induló nedvesség, cél nedvesség és termelési ütem alapján kell vizsgálni." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel a vákuumos szárítás?",
    intro: "A vákuumszárításnál a fafaj, vastagság, hosszúság, induló nedvesség, cél nedvesség és végfelhasználás együtt határozza meg, hogy milyen gépméret és technológiai megoldás lehet reális.",
    materials: ["keményfa", "tölgy", "bükk", "kőris", "akác külön vizsgálattal", "értékesebb lombos faanyagok", "fűrészáru", "asztalosipari alapanyag", "nyílászáró- és bútoripari faanyag"],
    industries: ["asztalosüzemek", "bútorgyártás", "nyílászárógyártás", "fűrészüzemek", "fatelepek", "faanyag-kereskedelem", "egyedi faipari gyártás"],
    goals: ["szárítási ciklusidő csökkentése", "saját gyártási alapanyag előkészítése", "külső szárítástól való függés csökkentése", "minőségi kockázatok mérséklése", "gyártási tervezhetőség javítása", "magasabb értékű faanyag kontrollált kezelése"],
    note: "Ha nem biztos benne, hogy az Ön faanyaga vagy gyártási helyzete ide tartozik, elég, ha elküldi az alapadatokat. Segítünk eldönteni, érdemes-e vákuumszárításban gondolkodni.",
  },
  process: {
    h2: "Egy vákuumszárító rendszer nem csak a kamráról szól",
    intro: "A jó döntéshez nem elég azt nézni, mekkora kamra fér el vagy mennyibe kerül a gép. A faanyag, a rakodás, az energiaellátás, a vezérlés, a telepítési hely és a későbbi üzemeltetés együtt határozza meg, hogy a rendszer valóban használható lesz-e a mindennapi gyártásban.",
    steps: [
      { title: "Faanyag előminősítése", text: "Fafaj, vastagság, hosszúság, induló nedvesség, cél nedvesség és mennyiség tisztázása." },
      { title: "Kamraméret és kapacitás meghatározása", text: "A szükséges nettó térfogatot, hasznos hosszúságot és kapacitást a tipikus anyagméretekhez és gyártási ritmushoz kell igazítani." },
      { title: "Rakodási és telepítési logika", text: "A faanyag mozgatása, raklapozása, betöltése, kitárolása és a kezelői hozzáférés meghatározza a gyakorlati használhatóságot." },
      { title: "Vákuumszárítási technológia", text: "A szárítási folyamat a választott géptől, programtól, faanyagtól, nedvességtől és minőségi elvárástól függ." },
      { title: "Vezérlés és üzemeltetés", text: "Fontos a kezelhetőség, programozhatóság, mérés, dokumentálhatóság és a kezelői rutin." },
      { title: "Szerviz, alkatrész és támogatás", text: "A hosszú távú működéshez nemcsak gép kell, hanem elérhető szakmai háttér, alkatrészellátás és támogatás is." },
    ],
  },
  decisionFactors: {
    h2: "Mire figyeljen, mielőtt vákuumszárítót választ?",
    intro: "A vákuumszárító beruházásnál könnyű hibás beruházási döntést hozni, ha csak a kamraméretet vagy az árat nézzük. A jó szárítási megoldáshoz a faanyag, a szárítási cél, a kapacitás és az üzemeltethetőségi szempontok együttesen számítanak.",
    factors: [
      { title: "Fafaj", text: "Másképp viselkedik a tölgy, bükk, kőris vagy más keményfa. A fafaj meghatározza a technológiai óvatosságot és cikluslogikát." },
      { title: "Vastagság és hosszúság", text: "A tipikus méretek alapján kell választani kamrahosszt, rakodási módot és kapacitást." },
      { title: "Induló és cél nedvesség", text: "Nem mindegy, honnan hová kell szárítani az anyagot. A cél nedvesség a végfelhasználástól függ." },
      { title: "Minőségi elvárás", text: "Repedés, vetemedés, szín, belső feszültség és feldolgozhatóság szempontjai." },
      { title: "Havi vagy heti mennyiség", text: "A szükséges kapacitást a termelési ritmushoz kell illeszteni, nem egyszeri maximumhoz." },
      { title: "Energiaellátás", text: "Elektromos kapacitás, fűtési igény, telepítési környezet és üzemeltetési feltételek." },
      { title: "Telepítési hely és kiszolgálás", text: "A kamraméret mellett a rakodás, hozzáférés, anyagmozgatás és kezelői munkaterület is döntési szempont." },
      { title: "Üzleti realitás", text: "Saját szárító akkor indokolt, ha a mennyiség, érték, időnyereség és minőségi kontroll együtt értelmezhető." },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy vákuumszárítási projektben?",
    body: [
      "Az ECOTEQ nem abból indul ki, hogy mekkora kamrát lehetne eladni. Először tisztázzuk, milyen faanyagot kell szárítani, milyen induló és cél nedvességgel, mekkora mennyiségben és milyen gyártási célra.",
      "Közös érdekünk, hogy a vákuumszárító ne önálló gépbeszerzés legyen, hanem az Ön faipari gyártásába illeszkedő, reális technológiai fejlesztés.",
    ],
    points: [
      { title: "Anyag-alapú előminősítés", text: "Fafaj, vastagság, hossz, induló és cél nedvesség, mennyiség és minőségi elvárás alapján indul a javaslat." },
      { title: "Reális technológiai javaslat", text: "Segítünk eldönteni, hogy a vákuumszárítás jó megoldás-e, és milyen kamraméretet, kapacitást vagy konfigurációt érdemes vizsgálni." },
      { title: "Üzleti realitás", text: "Nem csak a gépárat nézzük. A ciklusidőt, kapacitást, külső szárítás költségét, készletlekötést és gyártási hatást együtt kell mérlegelni." },
      { title: "Végigvisszük a folyamatot", text: "Segítünk az előkészítésben, az egyeztetésben, az ajánlat pontosításában, majd a telepítés, betanítás és későbbi támogatás során sem marad egyedül." },
    ],
    trust: ["Elismert ISVE vákuumtechnológiai háttér", "Magyar szakértői támogatás", "Faipari alapanyagból induló előminősítés"],
  },
  related: {
    h2: "Ha a szárítás mellett más kérdés is felmerül",
    intro: "A vákuumszárítás sok faipari üzemben önmagában is jó irány lehet. Más esetekben viszont nem csak az a kérdés, hogyan szárad meg a faanyag, hanem az is, hogyan kerül be a rendszerbe, hogyan mozgatják, kell-e kezelés, impregnálás vagy más kapcsolódó technológia. Ezért érdemes a teljes folyamatot együtt nézni, nem csak magát a szárítót.",
    links: [
      { label: "Vákuumimpregnálás", href: "/technologiak/vakuumimpregnalas/", description: "Ha a faanyag védelme, kezelése vagy speciális impregnálása is része a feladatnak." },
      { label: "Vákuumos anyagmozgató rendszerek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha a faanyag rakodása, mozgatása vagy a szárító kiszolgálása külön megoldást igényel." },
    ],
    spoke: {
      title: "Részletes vákuumszárító oldal",
      label: "Megnézem a részletes vákuumszárító oldalt",
      href: "https://vakuumszarito.hu",
      description: "Ha mélyebben is utánanézne a vákuumszárításnak, a gépválasztásnak, a döntési szempontoknak és az ajánlatkéréshez szükséges adatoknak, a részletes vákuumszárító oldalunkon több szakmai anyagot talál.",
    },
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, reális-e a vákuumszárító technológia",
    body: "Nem kell kész műszaki specifikációval érkeznie. Első körben tisztázzuk, milyen faanyagot, milyen méretben, milyen nedvességről milyen célra és milyen mennyiségben szeretne szárítani.",
    fields: ["fafaj", "vastagság", "hosszúság", "keményfa", "tölgy", "bükk", "kőris", "nedvesség", "cél nedvesség", "induló nedvesség", "ciklusidő", "kamraméret", "kapacitás", "mennyiség", "rakodás", "targoncaút", "betáp", "energia", "alaprajz", "telepítés", "kezelhetőség", "vezérlés", "karbantartás", "szerviz", "alkatrész", "betanítás", "repedés", "vetemedés", "minőség", "készlet", "átfutás", "saját szárítás", "külső szárítás", "bérszárítás", "megtérülés", "beruházási keret", "pályázat", "bővíthetőség", "több műszak", "fotó", "videó"],
  },
  faq: {
    h2: "Gyakori kérdések a vákuumszárítás kapcsán",
    items: [
      { q: "Mikor érdemes vákuumszárítóban gondolkodni?", a: "Akkor, ha a szárítási idő, a faanyag értéke, a minőségi kontroll vagy a gyártási tervezhetőség fontos üzemi kérdés." },
      { q: "Milyen faanyagnál lehet releváns?", a: "Gyakran keményfáknál és értékesebb faanyagoknál merül fel, de a pontos alkalmasság fafajtól, mérettől és cél nedvességtől függ." },
      { q: "Mekkora kamra kell?", a: "A jellemző faanyag-hossz, vastagság, mennyiség és termelési ritmus alapján lehet meghatározni." },
      { q: "Gyorsabb, mint a hagyományos szárítás?", a: "Bizonyos anyagoknál és céloknál rövidebb ciklusok érhetők el, de konkrét időt csak anyagadatok és technológiai egyeztetés alapján szabad ígérni." },
      { q: "Tudnak konkrét gépet ajánlani?", a: "Igen, de először a fafajt, méretet, mennyiséget, induló és cél nedvességet kell tisztázni." },
      { q: "Mi történik, ha nem biztos, hogy a vákuumszárítás a jó irány?", a: "Akkor is érdemes elküldeni az alapadatokat. Ha nem vákuumszárító a reális megoldás, azt is megmondjuk." },
    ],
  },
  finalCta: {
    h2: "Nem kell tudnia, melyik gép kell. Elég, ha leírja, mit szeretne szárítani",
    body: [
      "A vákuumszárító kiválasztása nem a kamraméretnél kezdődik. Először tisztázzuk, hogy milyen faanyaggal dolgozik, milyen nedvességről hová kell eljutni, mekkora mennyiségről van szó, és mi a gyártási cél.",
      "Ezek alapján segítünk eldönteni, hogy érdemes-e vákuumszárításban gondolkodni, és ha igen, milyen méretű és kapacitású szárító lehet reális.",
    ],
    cta: "Leírom az anyagot és a célt",
    microcopy: "Nem baj, ha nem tud minden adatot pontosan. Átnézzük a megkeresést, és visszajelzünk, merre érdemes továbbmenni.",
    checklist: [
      { title: "Faanyag és méretek", items: ["fafaj", "jellemző hosszúság", "vastagság"] },
      { title: "Nedvesség és mennyiség", items: ["induló nedvesség", "cél nedvesség", "heti vagy havi mennyiség"] },
      { title: "Cél és körülmények", items: ["saját gyártás vagy bérszárítás", "elektromos kapacitás", "telepítési hely", "fotó vagy meglévő alaprajz"] },
    ],
  },
};

const vakuumimpregnalas: TechnologyGateway = {
  slug: "vakuumimpregnalas",
  name: "Vákuumimpregnálás",
  metaTitle: "Vákuumimpregnálás faanyag kezelésére és védelmére | ECOTEQ",
  metaDescription: "Vákuumimpregnálás faanyag ipari kezelésére, védelmére és speciális felhasználásra való előkészítésére. Az ECOTEQ segít eldönteni, hogy az adott faanyaghoz, kezelési célhoz és üzemhez milyen vákuumimpregnálási irány lehet reális.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Vákuumimpregnálás",
    h1: "Vákuumimpregnálás faanyag kezelésére és ipari felhasználásra",
    lead: "A vákuumimpregnálás akkor lehet jó megoldás, ha a faanyagot kontrollált körülmények között kell kezelni, védeni vagy speciális felhasználásra előkészíteni. Az ECOTEQ segít eldönteni, hogy az adott faanyaghoz, kezelőanyaghoz, végfelhasználáshoz és üzemi működéshez milyen vákuumimpregnálási technológia lehet reális.",
    secondaryCta: { label: "Kapcsolódó vákuumtechnológiák megtekintése", href: "https://vakuumszarito.hu" },
    microcopy: "Nem kell kész gépspecifikációval érkeznie. Elég, ha leírja a faanyagot, a kezelési célt, a méreteket, a mennyiséget és a felhasználási környezetet.",
    trustPills: ["Faipari vákuumtechnológiai előminősítés", "ISVE technológiai háttér", "Kezelési cél alapján választott rendszer"],
    image: "/ds/photos/vacuum-kiln.png",
    imageAlt: "Vákuumimpregnáló berendezés",
  },
  fit: {
    h2: "Mikor lehet jó megoldás a vákuumimpregnálás?",
    intro: "A vákuumimpregnálás nem általános „faanyagkezelő gép”. Akkor merül fel, ha a kezelés mélysége, egyenletessége, ismételhetősége vagy ipari kontrollja fontos. A jó technológiai irányt a faanyag, kezelőanyag, ciklus, mennyiség és végfelhasználás együtt határozza meg.",
    items: [
      { title: "Ha a faanyag védelme üzemi vagy termékminőségi kérdés", text: "Kültéri, ipari vagy speciális felhasználású faanyagoknál a kezelés minősége közvetlen értékkérdés lehet." },
      { title: "Ha kontrolláltabb kezelési folyamat kell", text: "A vákuumtechnológia akkor merül fel, ha a kezelés nem ad hoc, hanem ismételhető, mérhető és üzemi folyamatként kezelendő." },
      { title: "Ha speciális kezelőanyaggal dolgoznak", text: "A kezelőanyag tulajdonságai, viszkozitása, előírásai és technológiai kompatibilitása meghatározzák a rendszer irányát." },
      { title: "Ha ipari mennyiséget kell kezelni", text: "Kézi vagy egyszerű merítéses megoldások helyett ipari folyamatra lehet szükség, ha a mennyiség, határidő vagy minőség ezt indokolja." },
      { title: "Ha a szárítás és impregnálás együtt is felmerül", text: "Bizonyos faipari projektekben a szárítás, gőzölés, impregnálás vagy egyéb vákuumtechnológiai lépés rendszerben vizsgálandó." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "A vákuumimpregnálás mögött általában termékminőségi, tartóssági, gyártási vagy megfelelőségi kérdés áll. A technológia csak akkor jó megoldás, ha a kezelési cél és az elvárt eredmény világosan meghatározható.",
    cards: [
      { problem: "Nem elég kontrollált a jelenlegi kezelés", why: "Ha a kezelési folyamat nem ismételhető, nehéz stabil termékminőséget biztosítani.", answer: "A vákuumimpregnálás kontrolláltabb, technológiai folyamatként kezelhető irányt adhat." },
      { problem: "Magasabb termékérték vagy speciális felhasználás", why: "Kültéri, ipari vagy speciális termékeknél a faanyag kezelése a végtermék értékét és elfogadhatóságát is befolyásolhatja.", answer: "A rendszer a faanyaghoz, kezelőanyaghoz és elvárt felhasználáshoz igazítható." },
      { problem: "Nem tisztázott kezelőanyag és technológia", why: "A gép kiválasztása előtt tudni kell, milyen kezelőanyaggal, milyen követelmény szerint és milyen ciklussal kell dolgozni.", answer: "Az ECOTEQ előminősítésnél a kezelési célból indul, és ehhez vizsgál technológiai irányt." },
      { problem: "Kézi folyamat helyett ipari rendszer kell", why: "A kézi vagy egyszerű kezelés mennyiségi, minőségi vagy dokumentálhatósági korlátot jelenthet.", answer: "Ipari vákuumimpregnáló rendszerrel a folyamat tervezhetőbbé és jobban szabályozhatóvá válhat." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "A vákuumimpregnálásnál a faanyag tulajdonságai és a kezelési cél együtt számítanak. Nem minden faanyag, kezelőanyag vagy végfelhasználás igényli ugyanazt a technológiát.",
    materials: ["fűrészáru", "faipari kész- vagy félkész termék", "kültéri felhasználásra szánt faanyag", "ipari faanyag", "oszlop, gerenda, szerkezeti faanyag külön vizsgálattal", "speciális kezelést igénylő faipari termékek"],
    industries: ["faipar", "fatelepek", "fűrészüzemek", "kültéri faipari termékgyártás", "ipari faanyag-feldolgozás", "speciális faanyagkezelési projektek"],
    goals: ["faanyag védelme", "kezelőanyag bevitele kontrollált folyamatban", "tartósság vagy felhasználhatóság javítása", "ipari kezelés standardizálása", "speciális termékigény kiszolgálása", "dokumentálhatóbb kezelési folyamat"],
  },
  process: {
    h2: "Hogyan épülhet fel egy vákuumimpregnálási rendszer?",
    intro: "A vákuumimpregnáló rendszer nem csak kamrából áll. A kezelőanyag tárolása, betöltése, visszanyerése, munkatér, rakodás, biztonság és technológiai ciklus ugyanúgy része a rendszernek.",
    steps: [
      { title: "Faanyag és kezelési cél tisztázása", text: "Fafaj, méret, mennyiség, végfelhasználás és elvárt kezelés meghatározása." },
      { title: "Kezelőanyag és technológiai követelmény", text: "A kezelőanyag tulajdonságai, előírásai és kompatibilitása meghatározzák a rendszer kialakítását." },
      { title: "Rakodás és kamrakialakítás", text: "A faanyag hossza, keresztmetszete, kötegelése és kezelési mennyisége alapján kell a kamrát és kiszolgálást méretezni." },
      { title: "Vákuumimpregnálási folyamat", text: "A vákuum, esetleges nyomás, ciklusidő és kezelési paraméterek a technológiától és anyagtól függnek." },
      { title: "Kezelőanyag-kezelés", text: "Tartály, visszanyerés, szűrés, leürítés és technológiai tisztaság kérdései." },
      { title: "Dokumentálás, üzemeltetés és support", text: "Ipari használatnál a kezelhetőség, karbantartás és támogatás kulcsfontosságú." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt vákuumimpregnálót választ?",
    intro: "A vákuumimpregnáló gép kiválasztása előtt tisztázni kell a faanyagot, kezelőanyagot, végfelhasználást és a kezelési követelményeket. Enélkül könnyű rossz technológiai irányba indulni.",
    factors: [
      { title: "Faanyag típusa és mérete", text: "Fafaj, hossz, keresztmetszet, kötegelés, darabszám és kezelési gyakoriság." },
      { title: "Kezelőanyag", text: "Milyen anyaggal történik a kezelés, milyen viszkozitással, követelménnyel és technológiai előírással?" },
      { title: "Kezelési cél", text: "Védelem, tartósság, speciális tulajdonság, ipari előírás vagy termékérték növelése?" },
      { title: "Mennyiség és ciklus", text: "Mekkora mennyiséget kell kezelni naponta, hetente vagy havonta?" },
      { title: "Technológiai fokozat", text: "Elég vákuumos kezelés, vagy nyomásos / kombinált ciklus is szükséges lehet?" },
      { title: "Üzemi környezet", text: "Vegyszerkezelés, munkavédelem, leürítés, tartályok, helyigény és kezelői rutin." },
      { title: "Szárítási kapcsolat", text: "Bizonyos esetekben a kezelés előtt vagy után faanyag-szárítási kérdések is felmerülnek." },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy vákuumimpregnálási projektben?",
    body: [
      "Az ECOTEQ nem abból indul ki, hogy mekkora kamra férne be a helyiségbe. Először azt nézzük meg, milyen faanyagot kell kezelni, milyen kezelőanyaggal, milyen végfelhasználásra, milyen mennyiségben és milyen üzemi követelmények mellett.",
      "A cél az, hogy a vákuumimpregnálás reális, működtethető és szakmailag védhető technológiai irány legyen.",
    ],
    points: [
      { title: "Kezelési feladat előminősítése", text: "Faanyag, kezelőanyag, mennyiség és végfelhasználás alapján indul a javaslat." },
      { title: "Technológiai irány", text: "Segítünk eldönteni, hogy vákuumos, nyomásos vagy kombinált irányt érdemes-e vizsgálni." },
      { title: "ISVE technológiai háttér", text: "Az ECOTEQ az ISVE vákuumtechnológiai háttérrel dolgozik ezen a területen." },
      { title: "Rendszerszemlélet", text: "Kamra, tartály, kezelőanyag-áram, rakodás, biztonság és support együtt számít." },
      { title: "Magyar szakértői kommunikáció", text: "Az előkészítés, ajánlatkérés és projektkövetés magyar szakmai támogatással történik." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "A vákuumimpregnálás a faipari vákuumtechnológiai rendszer része. Sok projektben szárítási, rakodási, anyagmozgatási vagy kiegészítő technológiai kérdések is felmerülnek.",
    links: [
      { label: "Vákuumszárítás", href: "/technologiak/vakuumszaritas/", description: "Ha a faanyag nedvességtartalma vagy szárítási folyamata is kulcskérdés." },
      { label: "Anyagmozgatás és rendszerelemek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha a faanyag mozgatása, rakodása, kiszolgálása vagy telepítése külön figyelmet igényel." },
    ],
    spoke: {
      label: "Részletes vákuumtechnológiai oldal megnyitása",
      href: "https://vakuumszarito.hu",
      description: "A faipari vákuumtechnológiai információk, vákuumszárítási és impregnálási irányok részletesebben a vakuumszarito.hu oldalon érhetők el.",
    },
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, reális-e a vákuumimpregnálási irány",
    body: "Nem kell kész gépspecifikációval érkeznie. Első körben azt kell látni, milyen faanyagot, milyen méretben, milyen kezelőanyaggal, milyen célra és milyen mennyiségben szeretne kezelni.",
    fields: ["fafaj", "jellemző méretek", "kezelendő mennyiség", "kezelőanyag típusa, ha ismert", "kezelési cél", "végfelhasználás", "kell-e vákuum, nyomás vagy kombinált ciklus", "telepítési hely", "van-e fotó, videó vagy meglévő technológiai leírás"],
  },
  faq: {
    h2: "Gyakori kérdések a vákuumimpregnálás kapcsán",
    items: [
      { q: "Mikor érdemes vákuumimpregnálásban gondolkodni?", a: "Akkor, ha a faanyag kezelését kontrolláltabb, ismételhetőbb és ipari folyamatként szeretné megoldani." },
      { q: "Milyen faanyag kezelhető?", a: "Ez fafajtól, mérettől, kezelőanyagtól és célfelhasználástól függ. Pontos választ előminősítés után lehet adni." },
      { q: "A kezelőanyag is része a rendszernek?", a: "A gép kiválasztásánál a kezelőanyag tulajdonságai és technológiai előírásai kulcskérdések. Ezeket külön tisztázni kell." },
      { q: "Vákuum vagy nyomás is kell?", a: "Ez a kezelési céltól és a faanyagtól függ. Bizonyos feladatoknál vákuum, más esetben nyomásos vagy kombinált folyamat merülhet fel." },
      { q: "Tudnak konkrét gépet ajánlani?", a: "Igen, de először a faanyagot, méretet, kezelőanyagot, célfelhasználást és mennyiséget kell tisztázni." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, hogy vákuumimpregnálás kell? Ez teljesen normális",
    body: [
      "A vákuumimpregnálásnál a jó döntés nem a kamramérettel kezdődik. Először azt kell tisztázni, milyen faanyagot, milyen kezelőanyaggal, milyen célra és milyen mennyiségben kell kezelni.",
      "Ha ezt leírja, segítünk eldönteni, hogy a vákuumimpregnálás reális irány-e, és milyen technológiai kérdéseket kell tovább vizsgálni.",
    ],
    secondaryCta: { label: "Kapcsolódó vákuumtechnológiák megtekintése", href: "https://vakuumszarito.hu" },
  },
};

const elszivasPorlevalasztas: TechnologyGateway = {
  slug: "elszivas-porlevalasztas",
  name: "Elszívás és porleválasztás",
  metaTitle: "Elszívás és porleválasztás faipari és ipari üzemeknek | ECOTEQ",
  metaDescription: "Elszívási és porleválasztási rendszerek faipari és ipari környezetben. Az ECOTEQ segít tisztázni, milyen elszívási, leválasztási és anyagmozgatási irány lehet reális az Ön üzemében.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Elszívás és porleválasztás",
    h1: "Elszívás és porleválasztás faipari és ipari üzemeknek",
    lead: "Az elszívás és porleválasztás akkor válik kritikus kérdéssé, amikor a por, forgács, technológiai levegő vagy mellékanyag már befolyásolja a munkakörnyezetet, gépkiszolgálást, üzemi rendet vagy további anyaghasznosítást. Az ECOTEQ segít eldönteni, milyen rendszerirány lehet reális az Ön üzemében.",
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
    microcopy: "Az elszívási projektet nem érdemes csak ventilátorral vagy szűrővel kezdeni. Először a gépeket, anyagot, porelszívási pontokat, légmennyiséget és anyagkezelési célt kell tisztázni.",
    trustPills: ["Faipari és ipari környezet", "Por, forgács és technológiai levegő", "AL-KO technológiai háttér", "Rendszerben gondolkodó ECOTEQ megközelítés"],
    image: "/ds/photos/service-installation.png",
    imageAlt: "Ipari elszívó és porleválasztó rendszer",
  },
  fit: {
    h2: "Mikor lehet jó megoldás az elszívás és porleválasztás?",
    intro: "Elszívási rendszer akkor merül fel, ha a por, forgács vagy technológiai levegő nem kezelhető megfelelően a jelenlegi megoldással. A feladat lehet munkakörnyezeti, gépkiszolgálási, anyaggyűjtési, üzembiztonsági vagy technológiai jellegű.",
    items: [
      { title: "Ha poros vagy forgácsos az üzemi környezet", text: "Faipari és ipari gépeknél az elszívás hiánya rontja a munkakörnyezetet és az üzemi rendet." },
      { title: "Ha több gépet kell közös rendszerre kötni", text: "Ilyenkor nem elég egyedi elszívókban gondolkodni. A hálózat, légmennyiség, szűrés és anyagkezelés együtt számít." },
      { title: "Ha a keletkező forgácsot vagy port tovább kell kezelni", text: "Az elszívott anyag mehet silóba, brikettálásra, gyűjtőbe vagy további anyagmozgatásra." },
      { title: "Ha a meglévő rendszer nem bírja a kapacitást", text: "Új gépek, bővülő termelés vagy módosított technológia esetén a régi elszívás szűk keresztmetszetté válhat." },
      { title: "Ha biztonsági vagy megfelelőségi kérdések is felmerülnek", text: "Por, robbanásvédelmi vagy munkavédelmi kérdéseknél külön szakági vizsgálat és szabványos tervezés szükséges lehet." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "Az elszívás és porleválasztás nem csak tisztasági kérdés. Hatással lehet a gépek működésére, a munkahelyi környezetre, az anyaggyűjtésre, az üzem átláthatóságára és bizonyos esetekben a biztonsági kockázatokra is.",
    cards: [
      { problem: "Poros, nehezen tisztán tartható üzem", why: "A por és forgács folyamatos takarítást, kellemetlen munkakörnyezetet és rendezetlen üzemi képet okozhat.", answer: "A megfelelően méretezett elszívás és leválasztás javíthatja az üzemi rendet és az anyagkezelést." },
      { problem: "Gépek nem megfelelő kiszolgálása", why: "Ha a gépek forgács- vagy porelszívása nem megfelelő, az akadályozhatja a stabil működést.", answer: "Az elszívási pontokat, légmennyiséget és hálózatot a gépekhez és technológiai folyamathoz kell igazítani." },
      { problem: "Elszívott anyag nincs jól kezelve", why: "A por és forgács összegyűlik, de nincs jól pufferelve, szállítva vagy hasznosítva.", answer: "A leválasztás, silózás, kihordás, brikettálás vagy anyagmozgatás együtt adhat működő rendszert." },
      { problem: "Bővülő termelés, régi rendszer", why: "Egy régi elszívórendszer nem biztos, hogy alkalmas új gépek vagy nagyobb terhelés kiszolgálására.", answer: "A meglévő rendszer felmérése után dönthető el, hogy bővítés, átalakítás vagy új rendszer szükséges." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "Az elszívási és porleválasztási feladatot a por típusa, mennyisége, szemcsemérete, gépi forrásai és a kezelési cél határozza meg. Faipari forgács, csiszolatpor és ipari por között nagy különbség lehet.",
    materials: ["faipari forgács", "csiszolatpor", "fűrészpor", "technológiai por", "apró mellékanyag", "szűrőpor", "könnyű ömlesztett anyagok", "gépekből származó elszívott anyag"],
    industries: ["faipar", "asztalosüzemek", "bútorgyártás", "nyílászárógyártás", "fűrészüzemek", "csomagolóipar", "ipari gyártás", "hulladék- és mellékanyag-kezelés"],
    goals: ["por és forgács elszívása", "tisztább munkakörnyezet", "gépkiszolgálás javítása", "anyaggyűjtés", "silózás", "brikettálás előtti gyűjtés", "porleválasztás", "levegőtechnikai rendszer korszerűsítése"],
  },
  process: {
    h2: "Hogyan épülhet fel egy elszívási és porleválasztási rendszer?",
    intro: "A jó elszívási rendszer nem egyetlen berendezésből áll. A gépoldali csatlakozások, csőhálózat, ventilátor, szűrő, leválasztás, kihordás, tárolás és vezérlés együtt határozza meg, hogy az üzem jól működik-e.",
    steps: [
      { title: "Elszívási pontok felmérése", text: "Meg kell nézni, mely gépekről, technológiai pontokról és munkaterületekről kell elszívni." },
      { title: "Légmennyiség és hálózat", text: "A csőhálózat, légsebesség, ellenállás és gépterhelés alapján kell rendszert tervezni." },
      { title: "Leválasztás és szűrés", text: "A szűrő vagy leválasztó kiválasztása a por típusától, mennyiségétől és üzemi követelményektől függ." },
      { title: "Anyaggyűjtés és kihordás", text: "Az elszívott anyag konténerbe, zsákba, silóba, brikettálóba vagy más rendszerbe kerülhet." },
      { title: "Vezérlés és biztonság", text: "Indítás, teljesítményszabályozás, érzékelés és bizonyos esetekben robbanásvédelmi kérdések is felmerülhetnek." },
      { title: "Kapcsolódó hasznosítás", text: "A leválasztott forgács vagy por további anyagáram része is lehet, például brikettálásnál." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt elszívási rendszert választ?",
    intro: "Az elszívási rendszer kiválasztása nem csak szűrőméret vagy ventilátorteljesítmény kérdése. A jó rendszer a gépekhez, porhoz, hálózathoz, anyagkezeléshez és biztonsági követelményekhez igazodik.",
    factors: [
      { title: "Gépek és elszívási pontok", text: "Mely gépeket kell kiszolgálni, egyszerre hány működik, milyen csatlakozási igényekkel?" },
      { title: "Anyag és por típusa", text: "Forgács, csiszolatpor, fűrészpor vagy más technológiai por? Más rendszerlogikát igényelhetnek." },
      { title: "Légmennyiség és csőhálózat", text: "A csővezeték, légsebesség és ellenállás meghatározza a rendszer működését." },
      { title: "Szűrés és leválasztás", text: "A szűrési igény, kibocsátási elvárás és karbantartás kulcskérdés." },
      { title: "Kihordás és tárolás", text: "Zsák, konténer, siló, brikettáló vagy más anyagmozgatási megoldás kell?" },
      { title: "Biztonsági és szabályozási kérdések", text: "Porrobbanás, ATEX, tűzvédelem vagy munkavédelmi kérdés esetén szakági tervezés és validált megoldás szükséges." },
      { title: "Bővíthetőség", text: "Lesz-e új gép, kapacitásnövekedés vagy technológiai átalakítás?" },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy elszívási vagy porleválasztási projektben?",
    body: [
      "Az ECOTEQ nem abból indul ki, hogy melyik szűrőt vagy ventilátort lehetne beépíteni. Először azt nézzük meg, milyen gépek, anyagok, porforrások és anyagkezelési célok vannak az üzemben.",
      "A cél az, hogy az elszívás ne különálló kiegészítő legyen, hanem a teljes technológiai anyagáram része.",
    ],
    points: [
      { title: "Feladat-alapú előminősítés", text: "Gépek, porforrások, anyagok, légmennyiségek és célok alapján indul a javaslat." },
      { title: "Rendszerszemlélet", text: "Elszívás, leválasztás, kihordás, silózás, brikettálás és anyagmozgatás együtt számít." },
      { title: "Gyártói háttér", text: "A feladathoz illő európai technológiai háttér és komponensek vizsgálata." },
      { title: "Magyar projektkommunikáció", text: "Az egyeztetés, ajánlat-előkészítés és projektkövetés magyar szakmai kapcsolattal történik." },
      { title: "Üzleti realitás", text: "A rendszernek nem csak műszakilag, hanem üzemeltetésben, karbantartásban és bővíthetőségben is működnie kell." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "Az elszívás és porleválasztás gyakran kapcsolódik brikettáláshoz, anyagmozgatáshoz, faipari hulladékkezeléshez vagy ipari daráláshoz. A leválasztott anyag sok esetben nem végpont, hanem további hasznosítás alapja.",
    links: [
      { label: "Brikettálás", href: "/technologiak/brikettalas/", description: "Ha az elszívott forgács vagy por alkalmas lehet tömörítésre." },
      { label: "Ipari darálás", href: "/technologiak/ipari-daralas/", description: "Ha nagyobb faipari vagy ipari hulladékot is kezelni kell az elszívott anyag mellett." },
      { label: "Anyagmozgatás és rendszerelemek", href: "/technologiak/anyagmozgas-rendszerelemek/", description: "Ha kihordás, silózás, csiga, szalag vagy adagolás is szükséges." },
    ],
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, milyen elszívási irány lehet reális",
    body: "Nem kell kész légtechnikai tervvel érkeznie. Első körben azt kell látni, milyen gépeket, milyen anyagot és milyen üzemi célt kell kiszolgálni.",
    fields: ["milyen gépekről kell elszívni", "hány gép működik egyszerre", "milyen anyag vagy por keletkezik", "van-e meglévő elszívás", "hová kerülne az elszívott anyag", "kell-e siló, konténer, brikettálás vagy más hasznosítás", "telepítési hely", "van-e fotó, videó, alaprajz vagy géplista"],
  },
  faq: {
    h2: "Gyakori kérdések az elszívás és porleválasztás kapcsán",
    items: [
      { q: "Elég egy nagyobb ventilátor?", a: "Nem biztos. A csőhálózat, gépcsatlakozások, légsebesség, szűrés és kihordás együtt határozza meg a rendszer működését." },
      { q: "Mitől függ a szűrő mérete?", a: "A légmennyiségtől, portípustól, terheléstől, üzemórától, szűrési követelménytől és karbantartási logikától." },
      { q: "Kell-e ATEX vagy robbanásvédelem?", a: "Ez az anyagtól, portól, koncentrációtól, üzemi körülményektől és szabályozási környezettől függ. Ilyen esetben külön szakági vizsgálat szükséges." },
      { q: "Hasznosítható az elszívott forgács?", a: "Sok esetben igen, például brikettálás vagy gyűjtés formájában, de az anyag tisztasága, nedvessége és frakciója döntő." },
      { q: "Tudnak konkrét rendszert ajánlani?", a: "Igen, de először a gépeket, porforrásokat, anyagáramot és meglévő infrastruktúrát kell tisztázni." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, milyen elszívási rendszer kell? Ez teljesen normális",
    body: [
      "Az elszívásnál a jó döntés nem a ventilátorral kezdődik. Először azt kell tisztázni, milyen gépekről, milyen port vagy forgácsot, milyen mennyiségben és milyen további anyagkezelési céllal kell elszívni.",
      "Ha ezt leírja, segítünk eldönteni, milyen rendszerirány lehet reális.",
    ],
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
  },
};

const anyagmozgasRendszerelemek: TechnologyGateway = {
  slug: "anyagmozgas-rendszerelemek",
  name: "Anyagmozgatás és rendszerelemek",
  metaTitle: "Anyagmozgatás és rendszerelemek ipari feldolgozó rendszerekhez | ECOTEQ",
  metaDescription: "Anyagmozgató, adagoló, kihordó, siló, mágnes, szeparátor és kiegészítő rendszerelemek ipari daráláshoz, brikettáláshoz, pelletáláshoz, szárításhoz és elszíváshoz. ECOTEQ rendszerintegráció.",
  hero: {
    eyebrow: "ECOTEQ technológiák · Anyagmozgatás és rendszerelemek",
    h1: "Anyagmozgatás és rendszerelemek ipari feldolgozó rendszerekhez",
    lead: "Egy ipari rendszer sokszor nem a főgépen bukik el, hanem azon, hogyan jut be az anyag, hogyan jön ki, hol pufferel, hogyan válik le belőle az idegenanyag, és mennyire stabil az anyagáram. Az ECOTEQ segít a daráló, szárító, brikettáló, pelletáló vagy elszívási rendszer köré működő anyagmozgatási és kiegészítő rendszert tervezni.",
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
    microcopy: "Nem kell pontos komponenslistával érkeznie. Elég, ha leírja, honnan hová kell mozgatni az anyagot, milyen mennyiségben, milyen formában és milyen fő technológia mellett.",
    trustPills: ["Főgéptől a teljes anyagáramig", "Szalag, csiga, siló, mágnes, szeparátor", "Darálás, brikettálás, pelletálás, szárítás, elszívás mellett", "Rendszerintegrációs ECOTEQ szemlélet"],
  },
  fit: {
    h2: "Mikor kell külön figyelni az anyagmozgatásra és rendszerelemekre?",
    intro: "Az anyagmozgatás nem „mellékes kiegészítő”. Ha az adagolás, kihordás, pufferelés vagy szeparálás rosszul van megoldva, a jó főgép sem fog stabilan működni. Ezért az ECOTEQ minden rendszerben az anyag teljes útját vizsgálja.",
    items: [
      { title: "Ha a főgépet nem lehet stabilan adagolni", text: "Daráló, szárító, brikettáló vagy pelletáló akkor működik jól, ha az anyag egyenletesen és kezelhető módon érkezik." },
      { title: "Ha a kimeneti anyag nincs jól kezelve", text: "A darált, szárított, brikettált, pelletált vagy leválasztott anyagot továbbítani, hűteni, tárolni vagy csomagolni kellhet." },
      { title: "Ha idegenanyag-leválasztásra van szükség", text: "Fém, csavar, pánt vagy más szennyeződés esetén mágnesre, szeparálásra vagy gépvédelmi megoldásra lehet szükség." },
      { title: "Ha pufferelni kell az anyagot", text: "A siló, tartály, konténer vagy köztes tárolás segíthet összehangolni a különböző kapacitású technológiai lépéseket." },
      { title: "Ha a rendszer több gépből áll", text: "Daráló + szárító + brikettáló vagy elszívás + siló + brikettáló esetén az anyagáram a rendszer gerince." },
    ],
  },
  problems: {
    h2: "Milyen üzemi problémára adhat választ?",
    intro: "Az anyagmozgatás és rendszerelemek célja, hogy a technológia ne csak papíron működjön, hanem a mindennapi üzemben is. Sokszor ez különbözteti meg a gépbeszerzést a valódi rendszertől.",
    cards: [
      { problem: "Egyenetlen adagolás", why: "Ha az anyag hol túl sok, hol túl kevés, a főgép kapacitása és működése instabillá válhat.", answer: "Adagoló, puffer, csiga, szalag vagy siló segíthet egyenletesebb anyagáramot kialakítani." },
      { problem: "Kihordási torlódás", why: "A feldolgozott anyag elakadása vagy rossz elvezetése leállást, takarítást és kezelői beavatkozást okozhat.", answer: "A kimeneti oldalt ugyanúgy méretezni kell, mint a főgépet." },
      { problem: "Idegenanyag-kockázat", why: "Fém, csavar, pánt vagy más szennyeződés károsíthatja a gépet vagy rontja a végterméket.", answer: "Mágnes, szeparátor vagy gépvédelmi megoldás kerülhet a rendszerbe." },
      { problem: "Széteső anyagáram több technológia között", why: "Ha a daráló, szárító, brikettáló, pelletáló vagy elszívási rendszer nincs jól összekötve, a teljes folyamat akadozhat.", answer: "Az anyag útját a bemenettől a végtermékig rendszerként kell megtervezni." },
    ],
  },
  materials: {
    h2: "Milyen anyagoknál és helyzetekben merül fel?",
    intro: "Az anyagmozgatás mindig az anyag fizikai tulajdonságaitól függ. Más megoldás kell porhoz, forgácshoz, aprítékhoz, briketthez, pellethez, raklapdarálékhoz vagy nedves biomasszához.",
    materials: ["faipari forgács", "fűrészpor", "apríték", "darált fa", "raklapdarálék", "biomassza", "szárított alapanyag", "brikett", "pellet", "por és szűrőpor", "műanyag darálék", "vegyes ipari mellékanyag"],
    industries: ["faipar", "biomassza-feldolgozás", "brikett- és pelletgyártás", "hulladékkezelés", "csomagolóipar", "műanyagipar", "ipari gyártás", "energetikai projektek"],
    goals: ["stabil adagolás", "kihordás", "pufferelés", "tárolás", "idegenanyag-leválasztás", "gépvédelmi megoldás", "technológiák összekötése", "végtermék-kezelés", "rendszerautomatizálás előkészítése"],
  },
  process: {
    h2: "Hogyan épülhet fel egy anyagmozgatási és rendszerelem-lánc?",
    intro: "A pontos rendszer attól függ, milyen anyagot kell mozgatni, milyen főtechnológia mellett, milyen távolságra, milyen szintkülönbséggel, milyen kapacitással és milyen automatizálási igénnyel.",
    steps: [
      { title: "Anyag fogadása", text: "Az anyag érkezhet gépből, konténerből, silóból, elszívórendszerből, szalagról vagy kézi betáplálásból." },
      { title: "Adagolás vagy pufferelés", text: "A technológiai lépések összehangolásához siló, adagoló, csiga, tartály vagy puffer szükséges lehet." },
      { title: "Szállítás", text: "Szalag, csiga, láncos szállító, pneumatikus rendszer vagy más anyagmozgató megoldás jöhet szóba." },
      { title: "Leválasztás vagy osztályozás", text: "Mágnes, szeparátor, rostálás vagy más kiegészítő elem védi a gépet és javíthatja a folyamatot." },
      { title: "Főtechnológiai kapcsolódás", text: "Daráló, szárító, brikettáló, pelletáló vagy elszívási rendszer kiszolgálása." },
      { title: "Kihordás, tárolás vagy csomagolás", text: "A végterméket kezelhető módon kell továbbítani, tárolni vagy csomagolni." },
    ],
  },
  decisionFactors: {
    h2: "Mire kell figyelni, mielőtt anyagmozgató rendszert választ?",
    intro: "Az anyagmozgatásnál a rossz döntés gyakori oka, hogy csak egy szalagot vagy csigát választanak, miközben az anyag viselkedése, a kapacitás, a szintkülönbség, a porzás vagy az automatizálás nincs tisztázva.",
    factors: [
      { title: "Anyag típusa és viselkedése", text: "Poros, tapadós, darabos, könnyű, nehéz, nedves, abrazív vagy változó anyagról van szó?" },
      { title: "Mennyiség és kapacitás", text: "Mennyit kell mozgatni óránként vagy naponta? Folyamatos vagy szakaszos üzem?" },
      { title: "Útvonal és szintkülönbség", text: "Honnan hová kell mozgatni az anyagot? Mekkora távolságra és milyen magasságkülönbséggel?" },
      { title: "Kapcsolódó gépek", text: "Daráló, szárító, brikettáló, pelletáló, elszívó vagy tárolórendszer kiszolgálása a feladat?" },
      { title: "Porzás és környezet", text: "Zárt vagy nyitott rendszer kell? Kell-e porleválasztás, burkolat vagy speciális tisztíthatóság?" },
      { title: "Idegenanyag és gépvédelem", text: "Szükség van-e mágnesre, szeparátorra, rostálásra vagy más védelemre?" },
      { title: "Automatizálás és vezérlés", text: "Kézi, félautomata vagy automata üzem? Kell-e szintérzékelés, frekvenciaváltás vagy gépek közti kommunikáció?" },
    ],
  },
  role: {
    h2: "Miben segít az ECOTEQ egy anyagmozgatási vagy rendszerelem-projektben?",
    body: [
      "Az ECOTEQ nem a főgépet és a kiegészítőket külön kezeli. Azt nézzük, hogyan jut be az anyag a rendszerbe, hogyan halad át rajta, hol kell pufferelni, mit kell leválasztani, és hogyan kezelhető a kimeneti anyag.",
      "A cél az, hogy az anyagáram ne utólagos kompromisszum legyen, hanem a rendszer egyik alapja.",
    ],
    points: [
      { title: "Anyagáram-felmérés", text: "Megnézzük, honnan hová, milyen mennyiségben és milyen állapotban kell mozgatni az anyagot." },
      { title: "Rendszerillesztés", text: "A szállítást, adagolást, pufferelést és kihordást a főtechnológiához igazítjuk." },
      { title: "Gépvédelem és szeparálás", text: "Idegenanyag-kockázat esetén mágnes, szeparátor vagy más védelem is vizsgálható." },
      { title: "Bővíthetőség", text: "A rendszert úgy érdemes gondolni, hogy későbbi kapacitásbővítés vagy technológiai kiegészítés is kezelhető legyen." },
      { title: "Magyar szakértői kommunikáció", text: "Az egyeztetés, ajánlat-előkészítés és projektkövetés magyar szakmai kapcsolattal történik." },
    ],
  },
  related: {
    h2: "Kapcsolódó technológiák és részletes szakmai oldalak",
    intro: "Az anyagmozgatás szinte minden ECOTEQ technológiai területhez kapcsolódik. A főgép akkor működik jól, ha az anyag előtte és utána is stabilan kezelhető.",
    links: [
      { label: "Ipari darálás", href: "/technologiak/ipari-daralas/", description: "Ha darabos vagy nagyméretű anyagot kell előkészíteni." },
      { label: "Brikettálás", href: "/technologiak/brikettalas/", description: "Ha a mellékanyagot tömöríteni szeretné, és stabil adagolásra, kihordásra vagy tárolásra van szükség." },
      { label: "Pelletálás", href: "/technologiak/pelletalas/", description: "Ha a pelletálási rendszerhez előkészítés, adagolás, hűtés vagy csomagolás kapcsolódik." },
      { label: "Biomassza-szárítás", href: "/technologiak/biomassza-szaritas/", description: "Ha a nedves anyagot szárítóba kell adagolni vagy onnan továbbvezetni." },
      { label: "Elszívás és porleválasztás", href: "/technologiak/elszivas-porlevalasztas/", description: "Ha a por vagy forgács légtechnikai úton kerül leválasztásra és továbbkezelésre." },
    ],
  },
  preQual: {
    h2: "Küldje el az alapadatokat, és segítünk eldönteni, milyen anyagmozgatási irány lehet reális",
    body: "Nem kell kész layouttal vagy komponenslistával érkeznie. Első körben azt kell látni, milyen anyagot, honnan hová, milyen mennyiségben és milyen főtechnológia mellett kell mozgatni.",
    fields: ["milyen anyagot kell mozgatni", "honnan hová kell eljuttatni", "mekkora mennyiséget kell kezelni", "folyamatos vagy szakaszos üzem", "milyen főgéphez kapcsolódik", "van-e szintkülönbség vagy helykorlát", "kell-e mágnes, szeparátor vagy puffer", "telepítési hely", "van-e fotó, videó, alaprajz vagy meglévő alaprajz"],
  },
  faq: {
    h2: "Gyakori kérdések az anyagmozgatás és rendszerelemek kapcsán",
    items: [
      { q: "Miért nem elég csak a főgépet kiválasztani?", a: "Mert a főgép akkor működik jól, ha az anyag stabilan érkezik, és a kimeneti oldalon is kezelhetően távozik." },
      { q: "Szalag vagy csiga kell?", a: "Ez az anyag típusától, mennyiségétől, útvonalától, szintkülönbségtől és porzási tulajdonságaitól függ." },
      { q: "Mikor kell mágnes vagy szeparátor?", a: "Ha az anyagban fém, csavar, pánt vagy más idegenanyag lehet, gépvédelmi vagy végtermékminőségi okból szükséges lehet." },
      { q: "Kell-e siló vagy puffer?", a: "Ha a technológiai lépések kapacitása eltér, vagy a rendszer folyamatosabb működést igényel, puffer vagy siló segíthet." },
      { q: "Tudnak komplett anyagáramot tervezni?", a: "Igen, az ECOTEQ feladata éppen az, hogy ne csak gépet, hanem működő rendszerlogikát vizsgáljon." },
    ],
  },
  finalCta: {
    h2: "Nem biztos benne, milyen anyagmozgatás vagy rendszerelem kell? Ez teljesen normális",
    body: [
      "Az anyagmozgatásnál a jó döntés nem azzal kezdődik, hogy szalagot vagy csigát választunk. Először azt kell tisztázni, milyen anyagot, honnan hová, milyen mennyiségben és milyen főtechnológia mellett kell mozgatni.",
      "Ha ezt leírja, segítünk eldönteni, milyen anyagáram-irány lehet reális.",
    ],
    secondaryCta: { label: "Kapcsolódó technológiák megtekintése", href: "/#technologiak" },
  },
};

export const TECHNOLOGY_GATEWAYS: Record<string, TechnologyGateway> = {
  'ipari-daralas': ipariDaralas,
  'brikettalas': brikettalas,
  'pelletalas': pelletalas,
  'biomassza-szaritas': biomasszaSzaritas,
  'vakuumszaritas': vakuumszaritas,
  'vakuumimpregnalas': vakuumimpregnalas,
  'elszivas-porlevalasztas': elszivasPorlevalasztas,
  'anyagmozgas-rendszerelemek': anyagmozgasRendszerelemek,
};

export const gatewaySlugs = () => Object.keys(TECHNOLOGY_GATEWAYS);
export const getGateway = (slug: string): TechnologyGateway | undefined => TECHNOLOGY_GATEWAYS[slug];
