/** Central site data — single source for nav, CTAs, contact and technologies. */

export const CONTACT = {
  company: 'ECOTEQ Kft.',
  email: 'info@ecoteq.hu',
  phone: '+36 1 430-1556',
  phoneHref: 'tel:+3614301556',
  address: '1037 Budapest, Csillaghegyi út 19–21.',
} as const;

export const CTA = {
  primary: { label: 'Technológiai irányt kérek', href: '#ajanlatkeres' },
  secondary: { label: 'Megnézem a megoldásokat', href: '#technologiak' },
  form: { label: 'Elküldöm a projekt adatait', href: '#ajanlatkeres' },
} as const;

/** Top sticky navigation (7 items). Anchors resolve to homepage sections for now;
    Szerviz/Rólunk get dedicated pages in a later phase. */
export const NAV = [
  { label: 'Megoldások', href: '#megoldasok' },
  { label: 'Technológiák', href: '#technologiak' },
  { label: 'Referenciák', href: '#referenciak' },
  { label: 'Szerviz és alkatrész', href: '#szerviz' },
  { label: 'Rólunk', href: '#miert-ecoteq' },
  { label: 'Tudástár', href: '#tudastar' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
] as const;

export type Technology = {
  slug: string;
  name: string;
  blurb: string;
  image?: string;
};

/** The 8 technology directions. `href` = /technologiak/[slug]/ (built in a later slice). */
export const TECHNOLOGIES: Technology[] = [
  {
    slug: 'ipari-daralas',
    name: 'Ipari darálás',
    blurb:
      'Fa, raklap, műanyag, csomagolóanyag vagy vegyes ipari hulladék térfogatcsökkentésére és további feldolgozásra való előkészítésére.',
    image: '/ds/photos/shredder.png',
  },
  {
    slug: 'brikettalas',
    name: 'Brikettálás',
    blurb:
      'Forgács, por, apríték és más száraz mellékanyag tömörítése kezelhető, tárolható vagy értékesíthető briketté.',
    image: '/ds/photos/briquetting-line.png',
  },
  {
    slug: 'pelletalas',
    name: 'Pelletálás',
    blurb:
      'Biomassza és faipari alapanyagok előkészítése és tömörítése egységes pellet formába, energetikai vagy értékesítési célra.',
    image: '/ds/photos/pelletizing-line.png',
  },
  {
    slug: 'biomassza-szaritas',
    name: 'Biomassza-szárítás',
    blurb:
      'Nedves apríték, biomassza vagy mellékanyag nedvességtartalmának csökkentése további feldolgozáshoz vagy energetikai felhasználáshoz.',
    image: '/ds/photos/biomass-belt-dryer.png',
  },
  {
    slug: 'vakuumszaritas',
    name: 'Vákuumszárítás',
    blurb:
      'Faanyag kontrollált, gyorsabb és kíméletesebb szárítása olyan üzemeknek, ahol a minőség és a ciklusidő is számít.',
    image: '/ds/photos/vacuum-kiln.png',
  },
  {
    slug: 'vakuumimpregnalas',
    name: 'Vákuumimpregnálás',
    blurb:
      'Faanyag védelme, kezelése és impregnálása ipari felhasználásra, kontrollált technológiai környezetben.',
    image: '/ds/photos/vacuum-kiln.png',
  },
  {
    slug: 'elszivas-porlevalasztas',
    name: 'Elszívás és porleválasztás',
    blurb:
      'Por, forgács és technológiai levegő kezelése faipari és ipari üzemekben, a tisztább és biztonságosabb működésért.',
    image: '/ds/photos/service-installation.png',
  },
  {
    slug: 'anyagmozgas-rendszerelemek',
    name: 'Anyagmozgatás és rendszerelemek',
    blurb:
      'Felhordók, szállítószalagok, adagolók, mágnesek, szeparátorok és kiegészítő rendszerelemek a stabil anyagáramhoz.',
  },
];

/** Quote/pre-qualification path; a technology key can be passed through. */
export const quoteHref = (tech?: string) =>
  tech ? `#ajanlatkeres?tech=${tech}` : '#ajanlatkeres';
