/** Site-wide configuration flags. */

/**
 * Keep the site OUT of search indexes until ECOTEQ explicitly green-lights launch.
 * While false: every page emits `<meta name="robots" content="noindex, nofollow">`
 * and `public/robots.txt` disallows all crawling. Flip to `true` (and update
 * robots.txt) only on the user's go-ahead.
 */
export const ALLOW_INDEXING = false;

export const SITE_NAME = 'ECOTEQ';
export const SITE_URL = 'https://ecoteq.hu';
