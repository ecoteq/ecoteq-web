# ECOTEQ Website — UI kit

Interactive recreation of the ECOTEQ marketing site, composed entirely from the
design-system components (`window.ECOTEQDesignSystem_fc88f8`).

## Run
Open `index.html`. It loads `../../styles.css` + `../../_ds_bundle.js`, then mounts
`<EcoteqSite/>` from `Site.jsx`.

## Surfaces
- **Fixed left brand rail** — navy, logo mark + the vertical green "Ajánlat kérés"
  CTA + outlined contact icons (the signature ECOTEQ chrome).
- **Header** — wordmark + horizontal nav with the green active-underline + primary CTA.
- **Hero** — full-bleed industrial photo under the navy side-wash, huge ExtraBold
  display heading, green category tag, dual CTAs.
- **Stats strip** (navy) · **Product grid** with a working category filter ·
  **Solutions** cards · **Contact** section with form on navy · **Footer** with sub-brands.
- **Quote modal** — "Ajánlatkérés" form with a success state (wired interaction).

## Interactions
Nav active state, product category filter, and the quote modal (open → fill → submit
→ success) are all live. Other links are cosmetic.

## Notes
- Photography is **real ECOTEQ machine & installation photography** (`assets/photos/`),
  supplied by the client. The hero uses the briquette-plant wide shot; each product
  card maps to its category photo.
- Icons are inline Lucide paths.
