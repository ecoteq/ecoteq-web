/** v2 (reconciled v1.1) site data for the /v2/ comparison namespace.
 *  Re-exports everything from site.ts; overrides only the CTA labels (QA 2.1 §16 + locked).
 *  NAV is already 6 items in site.ts (Kapcsolat not in top nav), so it is re-exported as-is. */
export {
  CONTACT,
  SOCIAL,
  NAV,
  SOLUTIONS,
  TECHNOLOGIES,
  FORM_HINTS,
  SPOKES,
  AJANLATKERES,
  quoteHref,
} from './site';
export type { NavItem, Solution, Technology, FormHints, Spoke } from './site';

/** Egyetlen forrás a cégadatra (P0-05). Alapítás: 2008. Teljes gyártói kör 11
 *  (ezt a "10+" címke kommunikálja); a site-on csak a 6 magpartnert nevezzük meg,
 *  mert ezekhez van validált szakterület. A maradék 4 (Lumago, Cormall, Pettini,
 *  Italsime) a "10+"-ban benne van, de szakterületük még validálandó. */
export const COMPANY = {
  foundingYear: 2008,
  partnerCountLabel: '10+',
  corePartners: [
    { name: 'ISVE',           focus: 'ipari darálás, aprítás és vákuumtechnológia' },
    { name: 'CF Nielsen',     focus: 'mechanikus brikettálás' },
    { name: 'Prodeco',        focus: 'hidraulikus brikettálás' },
    { name: 'Nova Pellet',    focus: 'pelletálás' },
    { name: 'RP Engineering', focus: 'szárítás, silók és anyagmozgatás' },
    { name: 'AL-KO',          focus: 'elszívás és porleválasztás' },
  ],
} as const;

/** Reconciled CTA system (replaces "Technológiai irányt/javaslatot kérek"). */
export const CTA = {
  primary: { label: 'Leírom, mit kell megoldani', href: '#ajanlatkeres' },
  secondary: { label: 'Megnézem a technológiákat', href: '#technologiak' },
  form: { label: 'Elküldöm az alapadatokat', href: '#ajanlatkeres' },
  // Probléma-tudatos szint (Megoldások oldalak) elsődleges CTA-ja.
  uncertain: { label: 'Nem tudom, mi kell — segítsenek választani', href: '#ajanlatkeres' },
} as const;
