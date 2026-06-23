/**
 * Megvalósult ECOTEQ ipari referenciák — a /referenciak szűrhető falához.
 *
 * Forrás: `project docs/referenciák/` (2014 + 2022 referencia-PDF). A személyes adat
 * (kapcsolattartó, telefon, cím) SZÁNDÉKOSAN eltávolítva — csak cégnév + géptípus +
 * technológia + (ahol volt) város + év. A felhasználó kifejezetten engedélyezte a
 * cégnevek nyilvános megjelenítését (2026-06-23).
 *
 * A kapacitások/mennyiségek 2014/2022-es adatból származnak — mai érvényességük
 * időnként ellenőrzendő, de valós, dokumentált értékek (nem becslés).
 */

export type RefCategory =
  | 'brikettalas'
  | 'ipari-daralas'
  | 'pelletalas'
  | 'elszivas'
  | 'szaritas'
  | 'komplett';

export const CATEGORY_LABELS: Record<RefCategory, string> = {
  komplett: 'Komplett rendszer',
  brikettalas: 'Brikettálás',
  'ipari-daralas': 'Ipari darálás',
  pelletalas: 'Pelletálás, granulálás',
  elszivas: 'Elszívás, porleválasztás',
  szaritas: 'Szárítás',
};

/** A falon megjelenő szűrősorrend. */
export const CATEGORY_ORDER: RefCategory[] = [
  'komplett',
  'brikettalas',
  'ipari-daralas',
  'pelletalas',
  'elszivas',
  'szaritas',
];

export interface Reference {
  company: string;
  /** Ismert, márkaérték-hordozó név (a falon kiemelve). */
  marquee?: boolean;
  city?: string;
  year?: number;
  cats: RefCategory[];
  /** Tényszerű gép-/rendszerösszefoglaló, marketingmentes. */
  machines: string;
}

export const references: Reference[] = [
  // — Komplett, kulcsrakész rendszerek (integrátor-erő) —
  {
    company: 'NEW ENERGY Kft.',
    marquee: true,
    city: 'Dunaharaszti',
    cats: ['komplett', 'brikettalas', 'szaritas'],
    machines:
      'Komplett brikettgyártó üzem (max. 1800–2000 kg/h), raklap-faapríték dobszárítóval (1,2 t/h) a brikettáló gépsorhoz',
  },
  {
    company: 'Diósjenő Község Önkormányzata',
    marquee: true,
    city: 'Diósjenő',
    year: 2021,
    cats: ['komplett', 'brikettalas', 'ipari-daralas', 'szaritas', 'elszivas'],
    machines:
      'Komplett biomassza brikettáló kisüzem: egytengelyes daráló, D3PL dobszárító, kalapácsos daráló, elszívás-porleválasztás, HB E80V hidraulikus brikettáló, zsákos csomagoló',
  },
  {
    company: 'Dunaszentbenedek Önkormányzat',
    marquee: true,
    city: 'Dunaszentbenedek',
    cats: ['komplett', 'pelletalas', 'ipari-daralas'],
    machines: 'Komplett pelletgyártó gépsor: daráló, szállítórendszer, pelletáló prés, légtechnika',
  },
  {
    company: 'Felsőtárkány Önkormányzat',
    city: 'Felsőtárkány',
    year: 2018,
    cats: ['komplett', 'brikettalas', 'szaritas', 'elszivas'],
    machines:
      'Kisüzemi hidraulikus brikettáló gépsor saját közterületi faapríték brikettálására: HB E55 brikettáló, FLR100 biomassza-szárító, kalapácsos daráló, elszívás-porleválasztás (TENDIX Kft. kivitelezésében)',
  },
  {
    company: 'Vassurány Önkormányzat',
    city: 'Vassurány',
    cats: ['komplett', 'brikettalas'],
    machines: 'Kisüzemi brikettáló gépsor saját közterületi faapríték feldolgozására',
  },
  {
    company: 'Gelénes Önkormányzat',
    city: 'Gelénes',
    cats: ['komplett', 'brikettalas'],
    machines: 'Kisüzemi brikettáló gépsor szállítása',
  },
  {
    company: 'Apátfalva Önkormányzat',
    city: 'Apátfalva',
    cats: ['komplett', 'brikettalas'],
    machines: 'Kisüzemi brikettáló gépsor szállítása',
  },
  {
    company: 'Magyar Máltai Szeretetszolgálat',
    marquee: true,
    cats: ['komplett', 'brikettalas'],
    machines: 'Kisüzemi brikettáló gépsor szállítása',
  },
  {
    company: 'ERFO Közhasznú Nonprofit Kft.',
    cats: ['komplett', 'brikettalas'],
    machines: 'Kisüzemi brikettáló gépsor szállítása',
  },

  // — Brikettálás —
  {
    company: 'Jákófa Kft.',
    marquee: true,
    city: 'Bakonyjákó',
    cats: ['brikettalas'],
    machines: 'CF Nielsen BPU 3200 mechanikus brikettáló (600 kg/h) + BP500A hidraulikus brikettáló (500 kg/h)',
  },
  {
    company: 'K és B Bioenergia Kft.',
    city: 'Szombathely',
    cats: ['brikettalas', 'szaritas'],
    machines:
      'Nagyüzemi CF Nielsen BPU 3200 és BPU 6510HD mechanikus brikettáló gépsor, BS350 brikettfűrésszel és csomagolósorral, automata dobszárító rendszer faapríték-hőgenerátorral',
  },
  {
    company: 'Bay Zoltán Közalapítvány',
    marquee: true,
    city: 'Miskolctapolca',
    cats: ['brikettalas'],
    machines: 'E60 ECO hidraulikus brikettáló',
  },
  { company: 'Ragacs Kft.', city: 'Vámosmikola', cats: ['brikettalas'], machines: 'E70 hidraulikus brikettáló' },
  {
    company: 'Parkland-Garden Kft.',
    marquee: true,
    city: 'Szeged',
    cats: ['brikettalas'],
    machines: 'E70 ECO hidraulikus brikettáló',
  },
  {
    company: 'Soltvadkert Város Önkormányzata',
    marquee: true,
    city: 'Soltvadkert',
    cats: ['brikettalas'],
    machines: 'E70 ECO hidraulikus brikettáló — szárított szennyvíziszap brikettálása (speciális, nem fa alapanyag; a Veolia/Ercsi iszappelletálással rokon alkalmazás)',
  },
  { company: 'Gergely Gellért', city: 'Kismányok', cats: ['brikettalas'], machines: 'Nano E60 ECO hidraulikus brikettáló' },
  {
    company: 'Profikomp Zrt.',
    marquee: true,
    city: 'Gödöllő',
    cats: ['brikettalas'],
    machines: 'Nano E60 hidraulikus brikettáló',
  },
  { company: 'Zeus Mada Bt.', city: 'Nyírmada', cats: ['brikettalas'], machines: 'E70 ECO hidraulikus brikettáló' },
  {
    company: 'Friedrich Böhringer',
    city: 'Fehértó',
    cats: ['brikettalas', 'ipari-daralas'],
    machines: 'E70 ECO hidraulikus brikettáló + KT 46/40 D kéttengelyes daráló',
  },
  {
    company: 'Géczi Viktor ev.',
    city: 'Buják',
    year: 2021,
    cats: ['brikettalas'],
    machines: 'HB E55 hidraulikus brikettáló',
  },
  {
    company: 'Óhíd Község Önkormányzata',
    city: 'Óhíd',
    year: 2019,
    cats: ['brikettalas'],
    machines: 'HB E55 hidraulikus brikettáló — kisüzemi brikettálógép szállítása',
  },
  {
    company: 'Debreceni Egyetem — Karcagi Kutató Intézet',
    marquee: true,
    city: 'Karcag',
    cats: ['brikettalas'],
    machines: 'E70 hidraulikus brikettáló + WLA 41 folyadékhűtő',
  },
  {
    company: 'Hordó- és Fatermékgyártó Kkt.',
    city: 'Bátorliget',
    cats: ['brikettalas'],
    machines: 'Brikettáló gép — hordó- és fatermékgyártás donga- és forgácshulladékának hasznosítására',
  },

  // — Ipari darálás / aprítás —
  {
    company: 'Coloplast Hungary Kft.',
    marquee: true,
    cats: ['ipari-daralas'],
    machines:
      '3 db négytengelyes daráló gépsor konténer emelő-ürítő berendezéssel, gyártási hulladék előkészítéséhez',
  },
  {
    company: 'Richter Gedeon Nyrt.',
    marquee: true,
    cats: ['ipari-daralas'],
    machines: 'NT 60/80S négytengelyes és MS2260 egytengelyes darálórendszer',
  },
  {
    company: 'BorsodChem Zrt.',
    marquee: true,
    city: 'Kazincbarcika',
    cats: ['ipari-daralas'],
    machines: 'NT 40/80 S daráló',
  },
  {
    company: 'Ferrit Kft. (TKI)',
    marquee: true,
    cats: ['ipari-daralas'],
    machines: 'KT 46/40 D inline kéttengelyes daráló, gumiabroncs-pirolízis technológiába építve',
  },
  {
    company: 'Carbon Composites Kft.',
    marquee: true,
    city: 'Pécsely',
    cats: ['ipari-daralas'],
    machines: 'ET M 22 60 daráló',
  },
  { company: 'Probio Zrt.', marquee: true, city: 'Balatonfüred', cats: ['ipari-daralas'], machines: 'ET M 22 60 daráló' },
  {
    company: 'Sovereign s.r.o.',
    marquee: true,
    city: 'Okoč (SK)',
    cats: ['ipari-daralas'],
    machines: 'COMBI 60/80S-GR500 darálórendszer',
  },
  { company: 'Holecz István ev.', city: 'Medgyesegyháza', cats: ['ipari-daralas'], machines: 'ET M 22 60 daráló' },
  {
    company: 'Codex Értékpapírnyomda Zrt.',
    marquee: true,
    city: 'Budakeszi',
    cats: ['ipari-daralas', 'elszivas', 'brikettalas'],
    machines: 'M2 daráló, RAFQ 40 kalapácsos őrlő, elszívás-porleválasztás, E80 hidraulikus brikettáló, zsákos csomagoló, NT 50/80 D daráló',
  },
  {
    company: 'Ketéce Kft.',
    city: 'Mátészalka',
    cats: ['ipari-daralas', 'elszivas', 'brikettalas'],
    machines: 'RAFQ 40 kalapácsos őrlő, elszívás-porleválasztás, E60 S brikettáló, automatikus zsákos csomagoló',
  },
  {
    company: 'Nyír-Flop Holding Kft.',
    marquee: true,
    city: 'Nyíregyháza',
    cats: ['ipari-daralas', 'elszivas', 'brikettalas'],
    machines: 'E80 hidraulikus brikettáló, ET M 22 60 és kalapácsos daráló, elszívás-porleválasztás, zsákos csomagoló, brikett-törő és hűtőcső',
  },
  {
    company: 'Marostech Ipari és Szolgáltató Kft.',
    marquee: true,
    city: 'Makó',
    year: 2020,
    cats: ['ipari-daralas', 'brikettalas'],
    machines: 'ET M 22 60 daráló + E60 hidraulikus brikettáló',
  },

  // — Pelletálás / granulálás —
  {
    company: 'Swedwood Sopron Bútor Kft. (IKEA)',
    marquee: true,
    city: 'Sopron',
    cats: ['pelletalas'],
    machines: 'GR 360ML granulátorok és szállítópályák',
  },
  {
    company: 'Inno-Comp Kft.',
    marquee: true,
    city: 'Tiszaújváros',
    cats: ['pelletalas', 'elszivas'],
    machines: 'GR 360 ML granulátor, elszívás-porleválasztással',
  },
  {
    company: 'BAT — Pécsi Dohánygyár Kft.',
    marquee: true,
    city: 'Pécs',
    cats: ['pelletalas', 'elszivas'],
    machines: 'GR 360 ML granulátor, elszívás-porleválasztással',
  },
  {
    company: 'Építőipari, Faipari Szakképző Iskola',
    city: 'Kaposvár',
    cats: ['pelletalas', 'brikettalas'],
    machines: 'GR 240 ML granulátor + Nano E55 hidraulikus brikettáló',
  },

  // — Szárítás (biomassza / faapríték / iszap) —
  {
    company: 'Veolia Zrt. — Ercsi szennyvíztelep',
    marquee: true,
    city: 'Ercsi',
    cats: ['komplett', 'pelletalas', 'szaritas'],
    machines: 'Kisüzemi szennyvíziszap-pelletáló gépsor, biomassza-szárítóval',
  },
  {
    company: 'Food For Future',
    marquee: true,
    city: 'Chile',
    cats: ['szaritas'],
    machines: 'Automata dobszárító rovarfehérje-feldolgozó üzemhez (nemzetközi szállítás)',
  },
  {
    company: 'Nyírmada Önkormányzat',
    city: 'Nyírmada',
    cats: ['komplett', 'brikettalas', 'szaritas'],
    machines: 'Kisüzemi brikettáló gépsor gyümölcsösből származó faaprítékhoz, fűrészporszárítóval',
  },

  // — Feltöltött kiemelt referenciák (a főoldali karusszelből) —
  {
    company: 'Hilti Kft.',
    marquee: true,
    city: 'Kecskemét',
    cats: ['ipari-daralas'],
    machines:
      'Daráló a márkavédelmi okból megsemmisítendő, selejtezett termékekhez: a nagyméretű gépházakat és koffereket is egyben befogadja, egyedi adagológarat akadályozza a kemény műanyag kipattogását, a darálék átlátszó oldalfalú gyűjtőkocsiba hull (követhető folyamat)',
  },
  {
    company: 'AWF Kft.',
    marquee: true,
    city: 'Sárvár',
    cats: ['ipari-daralas'],
    machines:
      'Négytengelyes daráló hidraulikus leszorítóval, egyedi magas tartószerkezeten, széles szállítószalaggal és emelő-ürítővel a tömörítő konténerbe — merev, üvegszálas autókárpit-gyártási hulladékhoz (a szállítási költség kb. ötödére csökkent)',
  },
  {
    company: 'Faragó Kft.',
    marquee: true,
    city: 'Kakucs',
    cats: ['ipari-daralas', 'elszivas'],
    machines:
      'Nagykapacitású négytengelyes darálórendszer olajjal-vegyszerrel szennyezett műanyag hulladékhoz (fémketreces IBC tartályok, kannák), vaskiválasztással (mágneses keresztszalag) és kihordószalaggal',
  },
  {
    company: 'Biztonsági papírtermék gyártó üzem',
    marquee: true,
    cats: ['ipari-daralas', 'elszivas', 'brikettalas'],
    machines:
      'Zárt láncú daráló-brikettáló rendszer biztonsági papírtermék gyártási mellékterméhez: szállítószalagos beadagolás, darálás, elszívás-leválasztás (ciklon, cellás adagoló, porszűrő), hidraulikus brikettálás bővített silóval (a megrendelő kérésére anonim)',
  },
];

/** A főoldali karusszelben szereplő referenciák — pontosan ebben a sorrendben elöl. */
const FEATURED_ORDER = [
  'K és B Bioenergia Kft.',
  'Hilti Kft.',
  'AWF Kft.',
  'Richter Gedeon Nyrt.',
  'Diósjenő Község Önkormányzata',
  'Faragó Kft.',
  'Biztonsági papírtermék gyártó üzem',
  'Food For Future',
];

/** Közismertségi / márkaismertségi sorrend a többi kiemelt (marquee) referenciához. */
const BRAND_RANK = [
  'BAT', 'IKEA', 'Swedwood', 'Veolia', 'BorsodChem', 'Coloplast', 'Inno-Comp',
  'Carbon Composites', 'Ferrit', 'Probio', 'Marostech', 'Nyír-Flop', 'NEW ENERGY',
  'Debreceni Egyetem', 'Bay Zoltán', 'Profikomp', 'Parkland', 'Soltvadkert',
  'Magyar Máltai', 'Codex', 'Jákófa', 'Sovereign',
];

const featuredIdx = (r: Reference) => FEATURED_ORDER.indexOf(r.company);
const brandIdx = (r: Reference) => {
  const i = BRAND_RANK.findIndex((b) => r.company.includes(b));
  return i === -1 ? BRAND_RANK.length : i;
};

/** Sorrend: a főoldali 7 elöl (karusszel-sorrend), utána a többi márkaismertség
 *  szerint (marquee előbb), végül a maradék az eredeti sorrendben. */
export const referencesSorted: Reference[] = [...references].sort((a, b) => {
  const fa = featuredIdx(a);
  const fb = featuredIdx(b);
  if (fa !== -1 || fb !== -1) {
    if (fa === -1) return 1;
    if (fb === -1) return -1;
    return fa - fb;
  }
  if (a.marquee !== b.marquee) return a.marquee ? -1 : 1;
  if (a.marquee && b.marquee) return brandIdx(a) - brandIdx(b);
  return 0;
});

export const REFERENCE_COUNT = references.length;
