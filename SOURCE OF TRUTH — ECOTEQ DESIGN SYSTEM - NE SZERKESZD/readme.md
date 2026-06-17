# ECOTEQ Design System

The brand & UI system for **ECOTEQ Kft.** — a Hungarian specialist engineering
company that designs and distributes industrial waste-recovery technology:
industrial shredders/grinders, biomass drying systems, small- and industrial-scale
briquetting and pelletising lines, and woodworking vacuum technology (vacuum
drying, impregnation, steaming). B2B, expert, systems-integrator.

ECOTEQ represents leading world manufacturers (CFNielsen AS, Prodeco srl,
RP Engineering, ISVE srl, AL-KO GmbH) — but the job of this system is to build the
**ECOTEQ brand**, not the supplier brands. The promise: *expert engineering support
from the project idea through to commissioning, service and ROI.*

> "Azokat a gépeket ajánljuk, amiket a saját üzemünkbe is betennénk." —
> *We only recommend machines we'd install in our own plant.*

## Sources
- `uploads/01_Ecoteq Brand Messaging Guideline v1.pdf` — brand strategy, messaging
  per audience, tone of voice, brand architecture, visual identity (2024).
- `uploads/ecoteq-ds.pdf` — the implemented design system / website mockups
  (colors, type weights, logo behaviour, hero layouts). **This is the source of
  truth for the visual tokens.** Extracted hero mockups live in `uploads/dsimg-*.png`.

The two documents disagree slightly on the palette. The 2024 messaging guide listed
a broader, slightly different set (a brighter lime, light-blue, orange). The later
implemented DS narrowed it to the navy + green + neutral-gray set used here — that
implemented set wins.

## Sub-brands
ECOTEQ is the master brand. Product micro-sites — `iparidaralo.hu` (shredding),
`brikettalo.hu` (briquetting), `dobszarito.hu` (drying), `vakuum` (vacuum),
`pelletgyartogep.hu` (pelletising) — are sub-brands that reuse this **exact** visual
system; only the **brand core (primary + accent), the two ramps and the accent/overlay
tints** change. Typography, spacing, radii, shadows and every component are inherited
unchanged.

**Architecture.** Each theme lives in `tokens/themes/<name>.css` as a single
`[data-brand="<name>"]` scope and overrides only the brand-core tokens
(`--ecoteq-navy`, `--ecoteq-green`), the navy/green ramps, the accent-tinted ring +
shadow, and the photo overlays. Every semantic alias resolves *through* the brand
core, so the whole system re-skins with no component changes. **Apply** by setting
`data-brand="<name>"` on a wrapper (e.g. `<html>` or a section).

Two cross-cutting tokens support the harder sub-brands:
- **`--color-accent-text`** — the accent used as TEXT / RULE / LINK, separate from
  the accent FILL. Defaults to `var(--color-accent)` (no visual change), but a brand
  can deepen it for contrast (vakuum's amber is invisible on its cream canvas, so its
  overlines/links use `#8f6410`). `a`, `.eco-overline`, `.eco-rule` and the `Overline`
  component all read it. Because `:root` resolves it once, each brand light scope
  re-declares `--color-accent-text: var(--color-accent)` to re-bind it to its own accent.
- **Global dark layer** (`tokens/dark.css`, imported LAST) — a brand-agnostic
  `[data-mode="dark"]` that supplies a default cool-slate dark canvas + flipped
  text/borders for the master brand and any sub-brand without a bespoke dark canvas
  (vakuum). Sub-brands that want their own dark canvas (brikettalo's CF-Nielsen grey,
  iparidaralo's ISVE machine-steel) declare it under
  `[data-brand="x"][data-mode="dark"]` (specificity 0,2,0), which beats the global layer.

```html
<html data-brand="brikettalo"> … </html>   <!-- cobalt + safety-orange -->
```

| `data-brand` | Primary | Accent | on-accent | Status |
|---|---|---|---|---|
| *(none)* — **ECOTEQ** master | navy `#1c3449` | green `#43ad4d` | white | built |
| **brikettalo** | cobalt `#003a85` | safety-orange `#f5862b` | white | **built** — theme + light/dark site |
| **iparidaralo** | graphite `#2b2f33` | ISVE-red `#d71a20` | white | **built** — theme + light/dark site |
| **raklapdaralo** | *(shares iparidaralo's theme)* | ISVE-red `#d71a20` | white | **built** — same DS as iparidaralo + own site |
| **vakuum** | charcoal-slate `#1c1f22` | golden-amber `#f9be37` | **dark** `#1c1f22` | **built** — theme + cream-light/dark site |
| **dobszarito** | galvanized-steel `#313f45` | steam-teal `#12a8a3` | **dark** `#0c2b2c` | **built** — theme + cool-light/dark site |
| **pelletgyarto** | *(inherits brikettalo's theme)* | safety-orange `#f5862b` | dark `#1c3449` | **built** — same DS as brikettalo + own site |
| **porlevalaszto** | anthracite `#1e2227` | AL-KO red `#e3001b` | white | **built** — AL-KO Extraction line · white-led (photo + red-panel hero) + dark |

Sub-brand surfaces re-skin via `data-brand` **and** support `data-mode="dark"`
(composed: `[data-brand="x"][data-mode="dark"]`). Built micro-site UI kits:
`ui_kits/brikettalo/` and `ui_kits/iparidaralo/` — each a full light/dark site with
a theme toggle. Sub-brand logo assets (recolored mark) live in `assets/themes/<name>/`.

---

## CONTENT FUNDAMENTALS — how ECOTEQ writes

**Language:** Hungarian first (full diacritics — á é í ó ö ő ú ü ű — are
non-negotiable; the typeface ships the latin-ext subset for this reason). English
copy follows the same rules.

**Voice:** engineer-to-decision-maker. Four blended registers, always together:
1. **Engineering precision & rationality** — claims are backed by technical and
   economic reasoning, never marketing fluff. *"Minden, amit ajánlunk, a műszaki és
   gazdaságossági szempontokat együttesen vizsgálva optimális megoldást nyújt."*
2. **Friendly, partnerlike, direct** — *"Nem vagyunk távoli, elérhetetlen márka —
   bármikor elérhet, gyorsan, személyesen reagálunk."*
3. **Honest, future-oriented, educational** — *"Nem ígérünk lehetetlent — azt
   mondjuk, ami tényleg megtérül és húsz év múlva is működni fog."*
4. **Positive, problem-solving** — *"Minden ügyfélprojektre úgy tekintünk, mintha
   az a sajátunk lenne."*

**Person:** "mi" (we) for ECOTEQ, "Ön"/"Önök" (formal you) for the customer. Formal
register — this is B2B capital-equipment, not consumer. Confident but never boastful.

**Casing:** Headlines and the primary CTA often go **ALL CAPS** ("AJÁNLAT KÉRÉS")
for an engineered, signage-like feel. Body is sentence case. Overlines/labels are
all-caps with wide tracking.

**Numbers & proof:** lead with ROI, payback, throughput, service availability —
concrete, calculable figures. Offer downloadable spec sheets and a payback/output
**calculator**. Never vague superlatives.

**The recurring CTA** is *"Ajánlatot kérek"* / *"Ajánlat kérés"* (Request a quote),
always present and always green.

**No emoji.** This is a serious industrial-engineering brand. Iconography is
line-based and functional, never decorative.

**Imagery rule (explicit in the brand guide):** *never use stock photography* — only
real industrial, own-plant or carefully selected machine photography. Big machines,
engineering detail, high contrast.

---

## VISUAL FOUNDATIONS

**Palette.** Two brand colors on a neutral gray scale:
- **ECOTEQ Navy `#1c3449`** — the dominant brand color. Dark surfaces, the fixed
  left brand rail, hero overlays, headings on light backgrounds.
- **ECOTEQ Green `#43ad4d`** — the single accent. CTAs, active nav, the short accent
  rule, tag/pill labels, logo-mark highlight. Used sparingly for maximum punch.
- Neutrals: white `#ffffff`, light surface `#eeeded`, border `#d9d9d9`, secondary
  text `#4d4d4f`. That's the whole everyday kit. Status colors are engineered from
  the palette (green = success; amber/red/navy for warning/danger/info).

**Typography.** A single sans — **Fustat** (the brand font) — across the full weight
range (ExtraLight 200 → ExtraBold 800), self-hosted as a variable woff2 with the
latin-ext subset for Hungarian glyphs (ő ű).
Display/hero text is **ExtraBold, very tight** (`letter-spacing: -0.02em`,
`line-height: ~1.0`) and frequently set huge over photography. Body is Regular/Light
at a comfortable 1.6 line-height. The `ECOTEQ` wordmark is ExtraBold, all-caps, with
`+0.06em` tracking. *(Substitution note below.)*

**Logo.** The official ECOTEQ pictogram (supplied by the client as `CSAK LOGO.svg`):
three diagonal rounded capsule bars with two flanking dots — a primary dot (top-left)
and the **accent dot (bottom-right)**, reading as flow / circular motion / the circular
economy — set beside the all-caps ExtraBold wordmark. The mark is two-tone: bars in the
primary color, the accent dot in the accent color. On light backgrounds: navy bars +
green accent dot; on navy/photo: white bars + green accent dot; `mono-white` and mono
green variants exist for edge cases. **Sub-brands keep this exact geometry and only
shift the two colors.** Ships as `assets/logo-mark-{navy,white,green,mono-white}.svg`
and as inline SVG in the `Logo` component.

**Backgrounds & imagery.** Two modes: (1) clean white / light-gray `#eeeded`
engineered surfaces; (2) full-bleed industrial photography under a **navy overlay**
(`--overlay-navy`, top-transparent → navy-bottom, or a left-to-right navy side wash)
so white display text stays legible. No gradients-for-decoration, no purple/blue
tech-gradients — only the functional navy photo wash. Imagery vibe: cool, slightly
desaturated, high-contrast industrial; real machines and engineering detail.

**The signature elements:**
- **Capsule (pill) shapes** — the primary CTA, contact chips (email/phone), and
  category tags are all fully-rounded pills (`--radius-pill`). This is the most
  recognizable UI motif.
- **Short green accent rule** — a 40×4px rounded green bar used to mark active nav
  items and to lead section overlines.
- **Fixed left brand rail** — on the website, a narrow navy vertical rail
  (`--sidebar-w`) carries the logo, the vertical green "AJÁNLAT KÉRÉS" CTA, and
  outlined contact pills.

**Corner radii.** Cards & inputs gently rounded (8–14px); CTAs and chips fully
pill; images 14px when contained, 0 when full-bleed.

**Borders.** 1px `#d9d9d9` hairlines on light surfaces; outlined pills on dark
surfaces use a 1px translucent-white / green stroke.

**Shadows.** Restrained and cool — navy-tinted, never gray/black. Cards get a soft
`--shadow-sm/md`; the green CTA gets a colored `--shadow-accent` lift. No harsh
drop shadows, no neumorphism.

**Hover / press.**
- CTA (green): hover → slightly darker green (`--green-600`) + subtle lift; press →
  darkest green (`--green-700`), no scale. Outlined contact pills on navy: hover →
  fill green / text white (per DS note "akkor vált át … ha rámegy valaki").
- Nav items: hover → green text; active → green text + the short green rule.
- Logos shown muted gain their full color on hover (DS note).
- Cards: hover → lift to `--shadow-md`, border darkens slightly.

**Motion.** Quiet and precise. Short (120–200ms) ease-out transitions on color,
shadow and small translate. No bounces, no infinite decorative loops. Respect
`prefers-reduced-motion`.

**Transparency / blur.** Used only functionally: the navy photo overlay, and
translucent-white strokes on dark pills. No frosted-glass-everywhere.

**Layout.** 8px grid, 1200px max content width, generous "breathing" whitespace
("lélegző, mérnöki" — breathing, engineered). The fixed left rail is the one
persistent chrome element on the marketing site.

---

## ICONOGRAPHY
No icon assets were supplied in the source files. ECOTEQ's UI uses simple,
**functional line icons** (envelope, phone, arrow, download, filter, chevron) — seen
as thin strokes inside the outlined contact pills in the DS mockups. To match that
weight and style, this system uses **Lucide** (https://lucide.dev) — open-source,
~1.75px stroke, rounded caps — loaded from CDN. This is a **substitution / best-match**
(see CAVEATS); swap to the brand's own set if one exists. **No emoji, no unicode
glyphs as icons.** Icons are monochrome, inherit `currentColor`, and are sized in
16/20/24px steps. The logo mark is the only "illustrative" vector and lives in
`assets/`.

---

## VISUAL ASSETS (`assets/`)
- `logo-mark-navy.svg`, `logo-mark-white.svg`, `logo-mark-green.svg`,
  `logo-mark-mono-white.svg` — the official geometric mark (from the client's
  `CSAK LOGO.svg`), colored for each background.
- `fonts/fustat-{latin,ext}.woff2` — self-hosted Fustat variable font (axis 200–800,
  latin + latin-ext).
- `photos/` — **real ECOTEQ machine & installation photography** supplied by the
  client: `hero-briquette-plant.jpg` (hero), `shredder.png`, `briquetting-line.png`,
  `biomass-belt-dryer.png`, `pelletizing-line.png`, `vacuum-kiln.png`,
  `service-installation.png`. These replace the earlier placeholders and are wired
  into the website UI kit (hero + product grid). More source images sit in `uploads/`.

---

## INDEX / manifest
Root:
- `styles.css` — global entry (imports only). **Consumers link this.**
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — logo marks + webfonts.
- `guidelines/` — foundation specimen cards (the Design System tab).
- `components/` — reusable React UI primitives (see below).
- `ui_kits/website/` — full-screen recreation of the ECOTEQ marketing site.
- `slides/` — branded presentation slide templates.
- `SKILL.md` — Agent-Skills wrapper.

**Components** (`components/`): Button, IconButton, ContactPill, Tag, Card,
ProductCard, Input, Select, Badge, Overline, SectionHeading, Logo, StatBlock —
grouped under `core/`, `forms/`, `brand/`. See each `*.prompt.md`.

**UI kit:** `ui_kits/website/index.html` — interactive ECOTEQ website
(hero, product grid, solutions, contact) built from the components.

---

## CAVEATS
1. **Font confirmed: Fustat.** Self-hosted as a variable woff2 (weight axis 200–800,
   latin + latin-ext for Hungarian). Loaded from Google Fonts' webfont binaries.
2. **Logo is the official pictogram** supplied by the client (`CSAK LOGO.svg`),
   recolored to the brand (navy bars + green accent dot). Geometry is locked and
   stable; sub-brands change only the two colors.
3. **Icons substituted** with Lucide (closest match to the thin line icons in the
   mockup). Swap if ECOTEQ has a defined set.
4. **Real photography is now in** (`assets/photos/`) — supplied by the client and wired
   into the website UI kit. A few card shots are product renders on light backgrounds;
   under the navy photo-wash they read fine, but full-scene install photos are the
   preferred treatment for hero/full-bleed use.
