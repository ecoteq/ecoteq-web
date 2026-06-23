/** Site-wide configuration flags. */

/**
 * Keep the site OUT of search indexes until ECOTEQ explicitly green-lights launch.
 * While false: every page emits `<meta name="robots" content="noindex, nofollow">`
 * and `public/robots.txt` disallows all crawling. Flip to `true` (and update
 * robots.txt) only on the user's go-ahead.
 */
export const ALLOW_INDEXING = true;

export const SITE_NAME = 'ECOTEQ';
export const SITE_URL = 'https://ecoteq.hu';

/**
 * GA4 Measurement ID (public — appears in page source). Loaded with Google
 * Consent Mode v2: analytics stays denied until the visitor accepts the cookie
 * banner. Empty string disables analytics entirely.
 */
export const GA_ID = 'G-3QGMK9EDLN';
