---
name: ecoteq-design
description: Use this skill to generate well-branded interfaces and assets for ECOTEQ, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full brand guide: company context, content/voice rules, visual foundations, iconography, caveats.
- `styles.css` — the one stylesheet consumers link; `@import`s everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (self-hosted Fustat), `base.css`, `themes/` (sub-brand `[data-brand]` overrides).
- `assets/` — logo marks (white / navy / green) + webfonts.
- `components/` — React primitives (brand / core / forms). Bundle exposes them on
  `window.ECOTEQDesignSystem_fc88f8`.
- `ui_kits/website/` — interactive recreation of the ECOTEQ marketing site.
- `guidelines/` — foundation specimen cards.

## Essentials
- **Colors:** navy `#1c3449` + green `#43ad4d` on a neutral gray scale. Green is the
  single accent — use it sparingly (CTAs, active states, the short accent rule).
- **Type:** Fustat (brand font) across the full weight range; display = ExtraBold, very tight.
- **Signature motifs:** green capsule (pill) CTAs & chips, the short green accent rule,
  the fixed navy left brand rail, industrial photos under a navy overlay.
- **Voice:** Hungarian-first, formal "Ön", engineer-to-decision-maker, ROI-driven,
  no emoji, no stock photography. Recurring CTA: "Ajánlatot kérek".
- **Sub-brands:** set `data-brand="brikettalo"` on a wrapper to re-skin the whole
  system to cobalt + safety-orange (only colors change). Themes live in
  `tokens/themes/`; add new ones by copying `brikettalo.css`.
