/** Central site data — single source for nav, CTAs, contact and technologies. */

export const CONTACT = {
  company: 'ECOTEQ Kft.',
  email: 'sales@ecoteq.hu',
  phone: '+36 1 430-1556',
  phoneHref: 'tel:+3614301556',
  address: '1037 Budapest, Csillaghegyi út 19–21.',
} as const;

/** Social profiles (rail). Replace the placeholder URLs with the real ones. */
export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
] as const;

export const CTA = {
  primary: { label: 'Leírom, mit kell megoldani', href: '#ajanlatkeres' },
  secondary: { label: 'Megnézem a technológiákat', href: '#technologiak' },
  form: { label: 'Elküldöm az alapadatokat', href: '#ajanlatkeres' },
} as const;

/** Top sticky navigation (6 items). Megoldások + Technológiák open mega-menus. */
export type NavItem = { label: string; href?: string; mega?: 'solutions' | 'technologies' };
export const NAV: NavItem[] = [
  { label: 'Megoldások', mega: 'solutions' },
  { label: 'Technológiák', mega: 'technologies' },
  { label: 'Referenciák', href: '/referenciak/' },
  { label: 'Szerviz', href: '/szerviz-es-alkatresz/' },
  { label: 'Rólunk', href: '/rolunk/' },
  { label: 'Tudástár', href: '/tudastar/' },
];

/** "Megoldások" mega-menu — problem/operational-task based entries.
    Dedicated /megoldasok/[slug]/ pages come in a later phase; for now they deep-link
    into the homepage solutions section. */
export type Solution = { label: string; href: string; blurb: string; icon: string };
export const SOLUTIONS: Solution[] = [
  { label: 'Faipari hulladék kezelése', href: '/megoldasok/faipari-hulladek-kezelese/', blurb: 'Forgács, por, apríték és fahulladék rendezett kezelése.', icon: 'trees' },
  { label: 'Raklap és csomagolóanyag darálása', href: '/megoldasok/raklap-es-csomagoloanyag-daralasa/', blurb: 'Térfogatcsökkentés és anyag-előkészítés aprítással.', icon: 'package' },
  { label: 'Forgács, por és apríték hasznosítása', href: '/megoldasok/forgacs-por-apritek-hasznositasa/', blurb: 'Laza mellékanyagból kezelhető, értékesíthető termék.', icon: 'recycle' },
  { label: 'Nedves biomassza előkészítése', href: '/megoldasok/nedves-biomassza-elokeszitese/', blurb: 'Nedvességcsökkentés további feldolgozáshoz.', icon: 'droplets' },
  { label: 'Faanyag szárítása és kezelése', href: '/megoldasok/faanyag-szaritasa-es-kezelese/', blurb: 'Kontrollált vákuumszárítás és -impregnálás.', icon: 'thermometer' },
  { label: 'Ipari por és elszívási problémák', href: '/megoldasok/ipari-por-es-elszivasi-problemak/', blurb: 'Tisztább, biztonságosabb üzemi levegő.', icon: 'wind' },
  { label: 'Komplett anyagáram-rendszerek', href: '/megoldasok/komplett-anyagaram-rendszerek/', blurb: 'Adagolás, szállítás, leválasztás, tárolás egyben.', icon: 'route' },
];

export type Technology = {
  slug: string;
  name: string;
  /** Task-driven card title for the homepage technology gateway grid. */
  task: string;
  blurb: string;
  image?: string;
};

/** The 8 technology directions. `href` = /technologiak/[slug]/ (built in a later slice). */
export const TECHNOLOGIES: Technology[] = [
  {
    slug: 'ipari-daralas',
    name: 'Ipari darálás',
    task: 'Térfogatcsökkentés és anyag-előkészítés',
    blurb:
      'Fa, raklap, műanyag, csomagolóanyag vagy vegyes ipari hulladék térfogatcsökkentésére és további feldolgozásra való előkészítésére.',
    image: '/heroes/hero-ipari-daralas.jpg',
  },
  {
    slug: 'brikettalas',
    name: 'Brikettálás',
    task: 'Mellékanyagból tömör, értékesíthető brikett',
    blurb:
      'Forgács, por, apríték és más száraz mellékanyag tömörítése kezelhető, tárolható vagy értékesíthető briketté.',
    image: '/heroes/hero-brikettalas.jpg',
  },
  {
    slug: 'pelletalas',
    name: 'Pelletálás',
    task: 'Egységes pellet energetikára vagy értékesítésre',
    blurb:
      'Biomassza és faipari alapanyagok előkészítése és tömörítése egységes pellet formába, energetikai vagy értékesítési célra.',
    image: '/heroes/hero-pelletalas.jpg',
  },
  {
    slug: 'biomassza-szaritas',
    name: 'Biomassza-szárítás',
    task: 'Nedves anyag kezelhető állapotba hozása',
    blurb:
      'Nedves apríték, biomassza vagy mellékanyag nedvességtartalmának csökkentése további feldolgozáshoz vagy energetikai felhasználáshoz.',
    image: '/heroes/hero-biomassza-szaritas.jpg',
  },
  {
    slug: 'vakuumszaritas',
    name: 'Vákuumszárítás',
    task: 'Faanyag kontrollált, gyors szárítása',
    blurb:
      'Faanyag kontrollált, gyorsabb és kíméletesebb szárítása olyan üzemeknek, ahol a minőség és a ciklusidő is számít.',
    image: '/heroes/hero-vakuumszaritas.jpg',
  },
  {
    slug: 'vakuumimpregnalas',
    name: 'Vákuumimpregnálás',
    task: 'Faanyag védelme és ipari kezelése',
    blurb:
      'Faanyag védelme, kezelése és impregnálása ipari felhasználásra, kontrollált technológiai környezetben.',
    image: '/heroes/hero-vakuumimpregnalas.jpg',
  },
  {
    slug: 'elszivas-porlevalasztas',
    name: 'Elszívás és porleválasztás',
    task: 'Tisztább, biztonságosabb üzemi levegő',
    blurb:
      'Por, forgács és technológiai levegő kezelése faipari és ipari üzemekben, a tisztább és biztonságosabb működésért.',
    image: '/heroes/hero-elszivas.jpg',
  },
  {
    slug: 'anyagmozgas-rendszerelemek',
    name: 'Anyagmozgatás és rendszerelemek',
    task: 'Stabil anyagáram és rendszerelemek',
    blurb:
      'Felhordók, szállítószalagok, adagolók, mágnesek, szeparátorok és kiegészítő rendszerelemek a stabil anyagáramhoz.',
    image: '/heroes/hero-komplett.jpg',
  },
];

/** Technology-specific placeholder examples for the pre-qualification form, shown
    when the visitor arrives from a technology page (?tech=slug). Grounded in each
    technology's real materials/goals — illustrative prompts, never claims. */
export type FormHints = { anyag?: string; cel?: string; mennyiseg?: string };
export const FORM_HINTS: Record<string, FormHints> = {
  'ipari-daralas': {
    anyag: 'raklap, láda, faipari hulladék, fólia',
    cel: 'térfogatcsökkentés, homogénebb frakció, brikettálás előkészítése',
    mennyiseg: '2 t/nap',
  },
  'brikettalas': {
    anyag: 'faipari forgács, fűrészpor, csiszolatpor, apríték',
    cel: 'saját fűtőanyag, értékesíthető brikett, forgács rendezett kezelése',
    mennyiseg: '500 kg/nap',
  },
  'pelletalas': {
    anyag: 'fűrészpor, finom apríték, szárított biomassza',
    cel: 'pellet saját felhasználásra, értékesíthető pellet, biomassza egységesítése',
    mennyiseg: '1 t/óra',
  },
  'biomassza-szaritas': {
    anyag: 'faapríték, fűrészpor, aprított biomassza, energianövény',
    cel: 'nedvességcsökkentés, brikettálás vagy pelletálás előkészítése',
    mennyiseg: '5 t/nap, kb. 30% nedvesség',
  },
  'vakuumszaritas': {
    anyag: 'tölgy, bükk, kőris, dió',
    cel: 'saját szárítókapacitás kiépítése, bővítése, selejtcsökkentés',
    mennyiseg: '10–20 m³ / ciklus',
  },
  'vakuumimpregnalas': {
    anyag: 'fűrészáru, kültéri faanyag, szerkezeti faanyag',
    cel: 'faanyag védelme, tartósság javítása, ipari kezelés standardizálása',
    mennyiseg: '5–10 m³ / sarzs',
  },
  'elszivas-porlevalasztas': {
    anyag: 'faipari forgács, csiszolatpor, fűrészpor, technológiai por',
    cel: 'tisztább munkakörnyezet, gépkiszolgálás, brikettálás előtti gyűjtés',
    mennyiseg: '4–6 gép elszívása',
  },
  'anyagmozgas-rendszerelemek': {
    anyag: 'forgács, apríték, darált fa, brikett, pellet',
    cel: 'stabil adagolás, kihordás, pufferelés, technológiák összekötése',
    mennyiseg: '2 t/óra kihordás',
  },
};

/** Related spoke domains — deep, dedicated technology sites the HUB routes to.
    Only link these where a real dedicated site exists (per nav architecture 03). */
export type Spoke = { label: string; href: string; note: string };
export const SPOKES: Spoke[] = [
  { label: 'iparidaralo.hu', href: 'https://iparidaralo.hu', note: 'Ipari darálás' },
  { label: 'brikettalo.hu', href: 'https://brikettalo.hu', note: 'Brikettálás' },
  { label: 'vakuumszarito.hu', href: 'https://vakuumszarito.hu', note: 'Vákuumszárítás' },
  { label: 'raklapdaralo.hu', href: 'https://raklapdaralo.hu', note: 'Raklapdarálás' },
];

/** Canonical pre-qualification funnel page. */
export const AJANLATKERES = '/ajanlatkeres/';

/** Quote/pre-qualification path; a technology key and source can be passed through. */
export const quoteHref = (tech?: string, source?: string) => {
  const q = new URLSearchParams();
  if (tech) q.set('tech', tech);
  if (source) q.set('source', source);
  const qs = q.toString();
  return qs ? `${AJANLATKERES}?${qs}` : AJANLATKERES;
};
