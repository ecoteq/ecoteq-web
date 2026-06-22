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

/** Reconciled CTA system (replaces "Technológiai irányt/javaslatot kérek"). */
export const CTA = {
  primary: { label: 'Leírom, mit kell megoldani', href: '#ajanlatkeres' },
  secondary: { label: 'Megnézem a technológiákat', href: '#technologiak' },
  form: { label: 'Elküldöm az alapadatokat', href: '#ajanlatkeres' },
  // Probléma-tudatos szint (Megoldások oldalak) elsődleges CTA-ja.
  uncertain: { label: 'Nem tudom, mi kell — segítsenek választani', href: '#ajanlatkeres' },
} as const;
