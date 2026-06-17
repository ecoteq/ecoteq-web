/** Content model for the technology gateway pages (/technologiak/[slug]/). */

export type Cta = { label: string; href: string };
export type RelatedLink = { label: string; href: string; description?: string };

export type TechnologyGateway = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    secondaryCta?: Cta;
    microcopy: string;
    trustPills: string[];
    image?: string;
    imageAlt?: string;
  };
  fit: { h2: string; intro: string; items: { title: string; text: string }[] };
  problems: { h2: string; intro: string; cards: { problem: string; why: string; answer: string }[] };
  materials: { h2: string; intro: string; materials: string[]; industries: string[]; goals: string[] };
  process: { h2: string; intro: string; steps: { title: string; text: string }[] };
  decisionFactors: { h2: string; intro: string; factors: { title: string; text: string }[] };
  role: { h2: string; body: string[]; points: { title: string; text: string }[] };
  related: { h2: string; intro: string; links: RelatedLink[]; spoke?: RelatedLink };
  preQual: { h2: string; body: string; fields: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  finalCta: { h2: string; body: string[]; secondaryCta?: Cta };
};

const ipariDaralas: TechnologyGateway = {
  slug: 'ipari-daralas',
  name: 'Ipari darálás',
  metaTitle: 'Ipari darálási rendszerek hulladék és mellékanyag előkészítésére | ECOTEQ',
  metaDescription:
    'Ipari darálás fa, raklap, műanyag, biomassza és vegyes ipari hulladék előkészítésére. Az ECOTEQ segít kiválasztani a reális darálási technológiai irányt, rendszerfelépítést és következő lépést.',
  hero: {
    eyebrow: 'ECOTEQ technológiai kapu · Ipari darálás',
    h1: 'Ipari darálás hulladék és mellékanyag előkészítésére',
    lead: 'Az ipari darálás akkor jó irány, ha a nagyméretű, nehezen kezelhető vagy változó összetételű anyagból kisebb, rendezettebb és továbbfeldolgozásra alkalmas frakciót kell készíteni. Az ECOTEQ abban segít, hogy ne csak darálót válasszon, hanem az anyaghoz, mennyiséghez és célhoz illő technológiai irányt.',
    secondaryCta: { label: 'Részletes ipari daráló oldal', href: 'https://iparidaralo.hu' },
    microcopy: 'Nem kell pontos géptípussal érkeznie. Elég, ha leírja az anyagot, a mennyiséget, a kívánt frakciót és a célt.',
    trustPills: [
      'Anyagalapú előminősítés',
      'Darálótól a komplett anyagáramig',
      'Fa, raklap, műanyag, biomassza és ipari hulladék',
      'Kapcsolódó spoke: iparidaralo.hu',
    ],
    image: '/ds/photos/shredder-ms40120-hero.jpg',
    imageAlt: 'Ipari daráló gép működés közben',
  },
  fit: {
    h2: 'Mikor lehet jó irány az ipari darálás?',
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

export const TECHNOLOGY_GATEWAYS: Record<string, TechnologyGateway> = {
  'ipari-daralas': ipariDaralas,
};

export const gatewaySlugs = () => Object.keys(TECHNOLOGY_GATEWAYS);
export const getGateway = (slug: string): TechnologyGateway | undefined => TECHNOLOGY_GATEWAYS[slug];
