/* @ds-bundle: {"format":3,"namespace":"ECOTEQDesignSystem_fc88f8","components":[{"name":"ContactPill","sourcePath":"components/brand/ContactPill.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Overline","sourcePath":"components/brand/Overline.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/ContactPill.jsx":"f59aec1ca9d0","components/brand/Logo.jsx":"cace4ae254ae","components/brand/Overline.jsx":"15f1dff7f3e1","components/brand/SectionHeading.jsx":"1eda1e73c2b9","components/core/Badge.jsx":"540f4ba3c3ae","components/core/Button.jsx":"6add6e4af3c8","components/core/Card.jsx":"de8d59d218e1","components/core/IconButton.jsx":"9528211343cd","components/core/ProductCard.jsx":"bb55e5f34cdd","components/core/StatBlock.jsx":"77f563f5d46c","components/core/Tag.jsx":"fc7c833bc9b3","components/forms/Input.jsx":"bef4972b379d","components/forms/Select.jsx":"62cd47565761","ui_kits/brikettalo/BrikettaloSite.jsx":"74177c45cd92","ui_kits/dobszarito/DobszaritoSite.jsx":"dcd838bad532","ui_kits/iparidaralo/IparidaraloSite.jsx":"be7a80731d8b","ui_kits/pelletgyarto/PelletgyartoSite.jsx":"1277dc26a494","ui_kits/porlevalaszto/PorlevalasztoSite.jsx":"9e2e85255fb3","ui_kits/raklapdaralo/RaklapdaraloSite.jsx":"feaf1f7db927","ui_kits/vakuum/VakuumSite.jsx":"62811aa2b920","ui_kits/website/Site.jsx":"96e5a0cf334d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ECOTEQDesignSystem_fc88f8 = window.ECOTEQDesignSystem_fc88f8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ContactPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined contact chip (email / phone) — the signature rail pill.
 * On dark backgrounds it shows a translucent-white stroke + green icon,
 * and fills green on hover (per the DS interaction note).
 */
function ContactPill({
  icon,
  children,
  href,
  tone = "dark",
  // "dark" (on navy) | "light" (on white)
  style,
  ...rest
}) {
  const cls = "eco-contact-" + tone;
  const isDark = tone === "dark";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .eco-contact-${tone} {
          display:inline-flex; align-items:center; gap:9px;
          padding:9px 16px; border-radius:var(--radius-pill);
          font-size:13px; font-weight:600; text-decoration:none;
          letter-spacing:0.01em;
          border:1px solid ${isDark ? "rgba(255,255,255,0.45)" : "var(--color-border)"};
          background:transparent;
          color:${isDark ? "var(--ecoteq-white)" : "var(--ecoteq-navy)"};
          transition: background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard);
        }
        .eco-contact-${tone} .eco-contact-ic { color: var(--color-accent); display:inline-flex; width:16px; height:16px; transition: color var(--dur-base) var(--ease-standard); }
        .eco-contact-${tone}:hover { background: var(--color-accent); border-color: var(--color-accent); color:#fff; }
        .eco-contact-${tone}:hover .eco-contact-ic { color:#fff; }
      `), /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    style: style
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "eco-contact-ic"
  }, icon), children));
}
Object.assign(__ds_scope, { ContactPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContactPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ECOTEQ logo lockup — geometric mark + ExtraBold wordmark.
 * The mark is inline SVG (no asset path needed); color follows `tone`.
 */
function Logo({
  tone = "navy",
  // "navy" | "white" | "green" | "mono-white"
  size = 32,
  showWordmark = true,
  href,
  style,
  ...rest
}) {
  // Two-tone mark: bars in `primary`, accent dot in `accent`.
  const palette = {
    navy: {
      primary: "var(--ecoteq-navy)",
      accent: "var(--ecoteq-green)"
    },
    white: {
      primary: "var(--ecoteq-white)",
      accent: "var(--ecoteq-green)"
    },
    green: {
      primary: "var(--ecoteq-green)",
      accent: "var(--ecoteq-green)"
    },
    "mono-white": {
      primary: "var(--ecoteq-white)",
      accent: "var(--ecoteq-white)"
    }
  }[tone] || {
    primary: "var(--ecoteq-navy)",
    accent: "var(--ecoteq-green)"
  };
  const wordColor = tone === "white" || tone === "mono-white" ? "var(--ecoteq-white)" : "var(--ecoteq-navy)";
  const markW = size * (910.44 / 959.21); // preserve aspect ratio

  const mark = /*#__PURE__*/React.createElement("svg", {
    width: markW,
    height: size,
    viewBox: "0 0 910.44 959.21",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: palette.primary
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "88.03",
    cy: "478.31",
    rx: "89.21",
    ry: "86.82",
    transform: "translate(-311.4 200.85) rotate(-44.79)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M707.17,346.21l-380.94,377.87c-33.93,33.93-88.95,33.93-122.89,0h0c-33.93-33.93-33.93-88.95,0-122.89l380.94-377.87c33.93-33.93,88.95-33.93,122.89,0h0c33.93,33.93,33.93,88.95,0,122.89Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M701.74,720.19l-218.74,215.57c-35.04,32.8-90.03,30.98-122.82-4.06h0c-32.8-35.04-30.98-90.03,4.06-122.82l218.74-215.57c35.04-32.8,90.03-30.98,122.82,4.06h0c32.8,35.04,30.98,90.03-4.06,122.82Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M544.1,150.09l-217.83,216.48c-34.9,32.94-89.9,31.35-122.84-3.54h0c-32.94-34.9-31.35-89.9,3.54-122.84L424.81,23.7c34.9-32.94,89.9-31.35,122.84,3.54h0c32.94,34.9,31.35,89.9-3.54,122.84Z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: palette.accent
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "822.41",
    cy: "480.01",
    rx: "89.21",
    ry: "86.82",
    transform: "translate(-99.44 718.68) rotate(-44.79)"
  })));
  const inner = /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: Math.round(size * 0.42),
      ...style
    }
  }, rest), mark, showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: size * 0.86,
      letterSpacing: "var(--ls-wordmark)",
      color: wordColor,
      lineHeight: 1
    }
  }, "ECOTEQ"));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        textDecoration: "none",
        display: "inline-flex"
      }
    }, inner);
  }
  return inner;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Overline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** All-caps tracked label, optionally led by the signature short green rule. */
function Overline({
  children,
  rule = true,
  color = "var(--color-accent-text, var(--color-accent))",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--fs-xs)",
      fontWeight: 700,
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      borderRadius: "var(--radius-pill)",
      background: "currentColor",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Overline.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section heading block: overline + display heading + optional lead paragraph. */
function SectionHeading({
  overline,
  title,
  lead,
  align = "left",
  tone = "light",
  // "light" | "dark"
  as: Tag = "h2",
  style,
  ...rest
}) {
  const titleColor = tone === "dark" ? "var(--ecoteq-white)" : "var(--color-text)";
  const leadColor = tone === "dark" ? "rgba(255,255,255,0.78)" : "var(--color-text-secondary)";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: 640,
      ...style
    }
  }, rest), overline && /*#__PURE__*/React.createElement(__ds_scope.Overline, null, overline), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-heading)",
      color: titleColor
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-lg)",
      lineHeight: "var(--lh-body)",
      color: leadColor
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status badge (dot + label). Engineered from the status palette. */
function Badge({
  status = "success",
  children,
  style,
  ...rest
}) {
  const map = {
    success: {
      c: "var(--color-success)",
      bg: "var(--green-100)"
    },
    warning: {
      c: "var(--color-warning)",
      bg: "#faf0dd"
    },
    danger: {
      c: "var(--color-danger)",
      bg: "#f7e4e1"
    },
    info: {
      c: "var(--color-info)",
      bg: "#e6edf3"
    },
    neutral: {
      c: "var(--gray-700)",
      bg: "var(--gray-100)"
    }
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "4px 11px 4px 9px",
      borderRadius: "var(--radius-pill)",
      background: map.bg,
      color: map.c,
      fontSize: 12,
      fontWeight: 700,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "currentColor",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ECOTEQ button. Primary = green capsule CTA (the "Ajánlat kérés" shape).
 */
function Button({
  variant = "primary",
  // "primary" | "secondary" | "ghost" | "outline-light"
  size = "md",
  // "sm" | "md" | "lg"
  pill = true,
  iconLeft,
  iconRight,
  children,
  style,
  disabled,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13,
      gap: 7,
      icon: 16
    },
    md: {
      padding: "12px 24px",
      fontSize: 15,
      gap: 9,
      icon: 18
    },
    lg: {
      padding: "16px 32px",
      fontSize: 16,
      gap: 10,
      icon: 20
    }
  }[size];
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes.gap,
    padding: sizes.padding,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: sizes.fontSize,
    letterSpacing: "0.02em",
    lineHeight: 1,
    border: "1.5px solid transparent",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      boxShadow: "var(--shadow-accent)"
    },
    secondary: {
      background: "var(--ecoteq-navy)",
      color: "var(--ecoteq-white)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ecoteq-navy)"
    },
    "outline-light": {
      background: "transparent",
      color: "var(--ecoteq-white)",
      borderColor: "rgba(255,255,255,0.55)"
    }
  }[variant];
  const hoverClass = `eco-btn-${variant}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .${hoverClass}:not(:disabled):hover { ${variant === "primary" ? "background:var(--color-accent-hover);transform:translateY(-1px);" : variant === "secondary" ? "background:var(--navy-600);" : variant === "ghost" ? "background:var(--color-accent-tint);color:var(--color-accent-active);" : "background:var(--color-accent);border-color:var(--color-accent);"} }
        .${hoverClass}:not(:disabled):active { transform:translateY(0); ${variant === "primary" ? "background:var(--color-accent-active);" : ""} }
      `), /*#__PURE__*/React.createElement("button", _extends({
    className: hoverClass,
    style: {
      ...base,
      ...variants,
      ...style
    },
    disabled: disabled
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: sizes.icon,
      height: sizes.icon
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: sizes.icon,
      height: sizes.icon
    }
  }, iconRight)));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface card — soft navy-tinted shadow, hairline border, hover lift. */
function Card({
  interactive = false,
  padding = 24,
  children,
  style,
  ...rest
}) {
  const cls = "eco-card-" + (interactive ? "i" : "s");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .eco-card-i { transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard); cursor:pointer; }
        .eco-card-i:hover { box-shadow: var(--shadow-md); border-color: var(--color-border-strong); transform: translateY(-2px); }
      `), /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding,
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only button (rail toggles, close, nav). Square with rounded/pill radius. */
function IconButton({
  variant = "ghost",
  // "ghost" | "solid" | "outline-light"
  size = "md",
  // "sm" | "md" | "lg"
  pill = false,
  label,
  children,
  style,
  ...rest
}) {
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const ic = {
    sm: 16,
    md: 20,
    lg: 22
  }[size];
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--ecoteq-navy)",
      border: "1px solid transparent"
    },
    solid: {
      background: "var(--ecoteq-navy)",
      color: "var(--ecoteq-white)",
      border: "1px solid transparent"
    },
    "outline-light": {
      background: "transparent",
      color: "var(--ecoteq-white)",
      border: "1px solid rgba(255,255,255,0.45)"
    }
  }[variant];
  const cls = `eco-iconbtn-${variant}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .${cls}:hover { ${variant === "ghost" ? "background:var(--color-bg-subtle);" : variant === "solid" ? "background:var(--navy-600);" : "background:var(--color-accent);border-color:var(--color-accent);"} }
      `), /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: "pointer",
      transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...variants,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: ic,
      height: ic
    }
  }, children)));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big metric block — ExtraBold figure + label, with optional green accent rule. */
function StatBlock({
  value,
  label,
  suffix,
  tone = "light",
  rule = true,
  align = "left",
  style,
  ...rest
}) {
  const valColor = tone === "dark" ? "var(--ecoteq-white)" : "var(--color-text)";
  const labelColor = tone === "dark" ? "rgba(255,255,255,0.7)" : "var(--color-text-secondary)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 4,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: valColor
    }
  }, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--color-accent)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill tag / category label. Green is the signature; navy & subtle variants too. */
function Tag({
  variant = "green",
  // "green" | "navy" | "subtle" | "outline-light"
  size = "md",
  // "sm" | "md"
  uppercase = true,
  icon,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "4px 11px",
      fontSize: 10
    },
    md: {
      padding: "6px 15px",
      fontSize: 11
    }
  }[size];
  const variants = {
    green: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)"
    },
    navy: {
      background: "var(--ecoteq-navy)",
      color: "#fff"
    },
    subtle: {
      background: "var(--color-accent-tint)",
      color: "var(--green-700)"
    },
    "outline-light": {
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-pill)",
      fontWeight: 700,
      letterSpacing: uppercase ? "var(--ls-overline)" : "0.02em",
      textTransform: uppercase ? "uppercase" : "none",
      ...sizes,
      ...variants,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 13,
      height: 13
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product card — photo with navy wash + category tag, title, short copy,
 * and a green "read more" affordance. Composes Tag.
 */
function ProductCard({
  image,
  category,
  title,
  description,
  cta = "Részletek",
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .eco-pcard { display:flex; flex-direction:column; background:var(--color-surface);
          border:1px solid var(--color-border); border-radius:var(--radius-lg); overflow:hidden;
          cursor:pointer; transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard); }
        .eco-pcard:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); border-color:var(--color-border-strong); }
        .eco-pcard:hover .eco-pcard-img { transform:scale(1.05); }
        .eco-pcard:hover .eco-pcard-cta { gap:12px; }
      `), /*#__PURE__*/React.createElement("div", _extends({
    className: "eco-pcard",
    onClick: onClick,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 180,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco-pcard-img",
    style: {
      position: "absolute",
      inset: 0,
      background: image ? `url(${image}) center/cover` : "repeating-linear-gradient(115deg,#3a4a5a 0 22px,#33424f 22px 44px)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy)"
    }
  }), category && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h4)",
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      color: "var(--color-text-secondary)",
      lineHeight: "var(--lh-snug)"
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    className: "eco-pcard-cta",
    style: {
      marginTop: 6,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--color-accent)",
      fontWeight: 700,
      fontSize: "var(--fs-sm)",
      transition: "gap var(--dur-base) var(--ease-standard)"
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, optional leading icon, hint/error. 8px radius, green focus. */
function Input({
  label,
  hint,
  error,
  icon,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? "in-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  const cls = "eco-input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: 600,
      color: "var(--ecoteq-navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--color-text-muted)",
      pointerEvents: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("style", null, `
          .${cls} { width:100%; box-sizing:border-box; font-family:var(--font-sans); font-size:15px;
            color:var(--ecoteq-navy); background:var(--color-surface);
            border:1px solid ${error ? "var(--color-danger)" : "var(--color-border)"};
            border-radius:var(--radius-md); padding:12px 14px;
            transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); }
          .${cls}::placeholder { color:var(--color-text-muted); }
          .${cls}:focus { outline:none; border-color:var(--color-accent); box-shadow:0 0 0 3px var(--color-accent-ring); }
        `), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: cls,
    style: icon ? {
      paddingLeft: 40
    } : undefined
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--color-danger)" : "var(--color-text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input — used by the product filters. */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  children,
  ...rest
}) {
  const selId = id || (label ? "sel-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  const cls = "eco-select";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: 600,
      color: "var(--ecoteq-navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
          .${cls} { width:100%; box-sizing:border-box; appearance:none; -webkit-appearance:none;
            font-family:var(--font-sans); font-size:15px; color:var(--ecoteq-navy);
            background:var(--color-surface); border:1px solid var(--color-border);
            border-radius:var(--radius-md); padding:12px 40px 12px 14px; cursor:pointer;
            transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); }
          .${cls}:focus { outline:none; border-color:var(--color-accent); box-shadow:0 0 0 3px var(--color-accent-ring); }
        `), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: cls
  }, rest), children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--color-text-secondary)",
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--color-text-secondary)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brikettalo/BrikettaloSite.jsx
try { (() => {
/* brikettalo.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Same component system as the ECOTEQ site; cobalt + safety-orange via
   data-brand="brikettalo". The dark toggle flips data-mode on <html>.
   Exposes <BrikettaloSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Flame = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
}));
const Gauge = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12 14 4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0"
}));
const Recycle = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14 16-3 3 3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.293 13.596 4.875 9.5 1.5 13.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* CFNielsen / Prodeco / RUF presses under the ECOTEQ brand */
const PRESSES = [{
  cat: "CFNielsen · mechanikus",
  title: "BP5510 MaxX",
  desc: "Nagy kapacitású mechanikus présgép ipari volumenhez — folyamatos, kiszámítható kimenet.",
  group: "Ipari",
  img: PHOTO + "briquetting-line.png",
  rate: "1 500 kg/h"
}, {
  cat: "CFNielsen · kompakt",
  title: "BP3200 Line",
  desc: "Kompakt ipari sor közepes üzemméretre, teljes automatizálással és csomagolással.",
  group: "Ipari",
  img: PHOTO + "briquetting-bpu.webp",
  rate: "800 kg/h"
}, {
  cat: "Prodeco · hidraulikus",
  title: "Eco-Press 75",
  desc: "Kisüzemi hidraulikus présgép asztalos- és faipari forgácshoz, gyors megtérüléssel.",
  group: "Kisüzemi",
  img: PHOTO + "briquetting-line.png",
  rate: "250 kg/h"
}, {
  cat: "RUF · hidraulikus",
  title: "RUF 400",
  desc: "Tömör, prémium brikett fém- és faiparhoz — kompakt lábnyom, halk üzem.",
  group: "Kisüzemi",
  img: PHOTO + "briquetting-bpu.webp",
  rate: "400 kg/h"
}];
const NAV = ["Főoldal", "Présgépek", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@brikettalo.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "brikettalo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}hero-briquette-plant.jpg) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Brikett\xE1l\xE1s \xB7 CFNielsen \xB7 Prodeco \xB7 RUF"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "A hullad\xE9kb\xF3l ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "t\xFCzel\u0151anyag")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "Ipari \xE9s kis\xFCzemi brikett\xE1l\xF3 rendszerek faipari forg\xE1csb\xF3l, mez\u0151gazdas\xE1gi mell\xE9kterm\xE9kb\u0151l \xE9s biomassz\xE1b\xF3l \u2014 Eur\xF3pa vezet\u0151 pr\xE9sgy\xE1rt\xF3it\xF3l, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal a tervez\xE9st\u0151l az \xFCzemeltet\xE9sig."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Pr\xE9sg\xE9p-katal\xF3gus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "1 500",
    suffix: "kg/h",
    label: "cs\xFAcskapacit\xE1s pr\xE9sg\xE9penk\xE9nt"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "3",
    label: "vezet\u0151 pr\xE9sgy\xE1rt\xF3 egy k\xE9zb\u0151l"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "90",
    suffix: "%",
    label: "t\xE9rfogatcs\xF6kkent\xE9s brikett\xE1l\xE1ssal"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "18",
    suffix: "h\xF3",
    label: "tipikus megt\xE9r\xFCl\xE9s"
  }));
}

/* ---------- Press grid ---------- */
function Presses({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Ipari", "Kisüzemi"];
  const shown = filter === "Összes" ? PRESSES : PRESSES.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Pr\xE9sg\xE9pek",
    title: "Pr\xE9sg\xE9p minden \xFCzemm\xE9rethez",
    lead: "A kis\xFCzemi hidraulikus pr\xE9sg\xE9pt\u0151l az ipari, teljesen automatiz\xE1lt sorokig \u2014 kateg\xF3ria szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\xDCzemm\xE9ret",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process / why briquette ---------- */
function Process() {
  const items = [{
    t: "Energiasűrűség",
    d: "A laza forgácsból tömör brikett lesz: akár 90%-kal kisebb térfogat, magasabb fűtőérték, tisztább égés.",
    ic: /*#__PURE__*/React.createElement(Flame, null)
  }, {
    t: "Mérnöki kiválasztás",
    d: "Anyag, nedvesség és volumen alapján méretezzük a présgépet — hogy valóban visszahozza az árát.",
    ic: /*#__PURE__*/React.createElement(Gauge, null)
  }, {
    t: "Körforgásos haszon",
    d: "A saját melléktermék lesz a tüzelőanyag vagy eladható termék — kevesebb hulladék, új bevétel.",
    ic: /*#__PURE__*/React.createElement(Recycle, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt brikett?",
    title: "A mell\xE9kterm\xE9kb\u0151l \xE9rt\xE9k",
    lead: "Nem csak pr\xE9sg\xE9pet sz\xE1ll\xEDtunk \u2014 v\xE9gigvissz\xFCk a projektet az anyagvizsg\xE1latt\xF3l az \xFCzemeltet\xE9sig."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t a brikett-projektj\xE9t",
    lead: "K\xFCldje el az alapanyagot \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl pr\xE9sg\xE9p-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@brikettalo.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Alapanyag",
    options: ["Faipari forgács", "Fűrészpor", "Szalma / mezőgazdasági", "Papír / karton", "Fém forgács"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Becs\xFClt volumen",
    placeholder: "pl. 500 kg/nap"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "brikettalo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ brikett\xE1l\xE1si \xFCzlet\xE1ga. Ipari \xE9s kis\xFCzemi pr\xE9sg\xE9pek magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "brikettalo.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "brikettalo.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@brikettalo.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 brikettalo.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,20,46,0.6)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl pr\xE9sg\xE9p-javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen alapanyaghoz?",
    options: ["Faipari forgács", "Fűrészpor", "Szalma / mezőgazdasági", "Papír / karton", "Fém forgács"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function BrikettaloSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("brikettalo-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("brikettalo-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Presses, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.BrikettaloSite = BrikettaloSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brikettalo/BrikettaloSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dobszarito/DobszaritoSite.jsx
try { (() => {
/* dobszarito.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Same component system; galvanized-steel + steam-teal via data-brand="dobszarito".
   Dark text on the teal accent; light mode uses a cool airy off-white canvas,
   dark mode the global dark layer. The toggle flips data-mode on <html>.
   Exposes <DobszaritoSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Droplet = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"
}));
const Timer = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M10 2h4M12 14l3-3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "14",
  r: "8"
}));
const Layers = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12.83 2.18 8.04 4.02a1 1 0 0 1 0 1.6l-8.04 4.02a1 1 0 0 1-.66 0L4.13 7.8a1 1 0 0 1 0-1.6l8.04-4.02a1 1 0 0 1 .66 0Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m2.5 12 9.17 4.59a1 1 0 0 0 .66 0L21.5 12M2.5 17l9.17 4.59a1 1 0 0 0 .66 0L21.5 17"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* Biomass drum & belt drying systems under the ECOTEQ brand */
const SYSTEMS = [{
  cat: "Forgódobos szárító",
  title: "DR-12",
  desc: "Robusztus dobszárító nedves faaprítékhoz és melléktermékhez — nagy áteresztés, stabil kimenet.",
  group: "Dobszárító",
  img: PHOTO + "biomass-belt-dryer.png",
  rate: "12 t/h"
}, {
  cat: "Forgódobos szárító",
  title: "DR-24",
  desc: "Nagy kapacitású dobszárító ipari volumenhez, hőhasznosítással és automatikus szabályzással.",
  group: "Dobszárító",
  img: PHOTO + "biomass-belt-dryer.png",
  rate: "24 t/h"
}, {
  cat: "Alacsony hőfokú szalagszárító",
  title: "BD-8",
  desc: "Szalagszárító hulladékhővel — kíméletes, alacsony hőfokú szárítás pellet- és brikett-alapanyaghoz.",
  group: "Szalagszárító",
  img: PHOTO + "biomass-belt-dryer.png",
  rate: "8 t/h"
}, {
  cat: "Alacsony hőfokú szalagszárító",
  title: "BD-16",
  desc: "Nagyobb felületű szalagszárító folyamatos üzemhez, egyenletes maradék-nedvességgel.",
  group: "Szalagszárító",
  img: PHOTO + "biomass-belt-dryer.png",
  rate: "16 t/h"
}];
const NAV = ["Főoldal", "Szárítók", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@dobszarito.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "dobszarito", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent-text)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent-text)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent-text)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}biomass-belt-dryer.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Biomassza-sz\xE1r\xEDt\xE1s"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "Sz\xE1razabb alapanyag, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "t\xF6bb energia")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "Forg\xF3dobos \xE9s alacsony h\u0151fok\xFA szalagsz\xE1r\xEDt\xF3k biomassz\xE1hoz, faapr\xEDt\xE9khoz \xE9s mell\xE9kterm\xE9khez \u2014 a sz\xE1raz, egyenletes alapanyag a pellet, a brikett \xE9s a hat\xE9kony t\xFCzel\xE9s felt\xE9tele, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Sz\xE1r\xEDt\xF3-katal\xF3gus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "24",
    suffix: "t/h",
    label: "cs\xFAcskapacit\xE1s sz\xE1r\xEDt\xF3nk\xE9nt"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "2",
    label: "sz\xE1r\xEDt\xF3-t\xEDpus \xFCzemm\xE9ret szerint"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "55",
    suffix: "\xB0C",
    label: "alacsony h\u0151fok\xFA szalagsz\xE1r\xEDt\xE1s"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "20",
    suffix: "%",
    label: "c\xE9l-marad\xE9knedvess\xE9g alatt"
  }));
}

/* ---------- System grid ---------- */
function Systems({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Dobszárító", "Szalagszárító"];
  const shown = filter === "Összes" ? SYSTEMS : SYSTEMS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Sz\xE1r\xEDt\xF3k",
    title: "Sz\xE1r\xEDt\xF3 minden biomassz\xE1hoz \xE9s volumenhez",
    lead: "A nagy \xE1tereszt\xE9s\u0171 forg\xF3dobos sz\xE1r\xEDt\xF3t\xF3l az alacsony h\u0151fok\xFA szalagsz\xE1r\xEDt\xF3ig \u2014 t\xEDpus szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Sz\xE1r\xEDt\xF3-t\xEDpus",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process ---------- */
function Process() {
  const items = [{
    t: "Egyenletes nedvesség",
    d: "A kontrollált szárítás stabil, alacsony maradék-nedvességet ad — ez a feltétele a jó brikettnek, pelletnek és a hatékony tüzelésnek.",
    ic: /*#__PURE__*/React.createElement(Droplet, null)
  }, {
    t: "Hulladékhő hasznosítása",
    d: "A szalagszárító alacsony hőfokon, akár füstgáz- vagy hulló hővel dolgozik — kisebb energiaköltség, jobb mérleg.",
    ic: /*#__PURE__*/React.createElement(Timer, null)
  }, {
    t: "Az értéklánc alapja",
    d: "A száraz alapanyag teszi lehetővé a brikettálást és pelletálást — a szárítás a feldolgozás kulcslépése.",
    ic: /*#__PURE__*/React.createElement(Layers, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt sz\xE1r\xEDt\xE1s?",
    title: "A feldolgoz\xE1s kulcsl\xE9p\xE9se",
    lead: "Nem csak sz\xE1r\xEDt\xF3t sz\xE1ll\xEDtunk \u2014 az alapanyaghoz m\xE9retezz\xFCk, be\xFCzemelj\xFCk \xE9s \xE9letcikluson \xE1t t\xE1mogatjuk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t a sz\xE1r\xEDt\xE1si feladat\xE1t",
    lead: "K\xFCldje el az alapanyagot, a bel\xE9p\u0151 nedvess\xE9get \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl sz\xE1r\xEDt\xF3-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@dobszarito.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Alapanyag",
    options: ["Faapríték", "Fűrészpor", "Mezőgazdasági melléktermék", "Szennyvíziszap", "Egyéb biomassza"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nedvess\xE9g / volumen",
    placeholder: "pl. 50% \u2192 15% \xB7 5 t/h"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "vakuumszarito.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "dobszarito", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ biomassza-sz\xE1r\xEDt\xE1si \xFCzlet\xE1ga. Forg\xF3dobos \xE9s szalagsz\xE1r\xEDt\xF3k magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "dobszarito.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "dobszarito.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@dobszarito.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 dobszarito.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(18,20,23,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl technol\xF3giai javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen anyaghoz?",
    options: ["Faapríték", "Fűrészpor", "Mezőgazdasági melléktermék", "Szennyvíziszap", "Egyéb biomassza"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function DobszaritoSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("dobszarito-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("dobszarito-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Systems, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.DobszaritoSite = DobszaritoSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dobszarito/DobszaritoSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/iparidaralo/IparidaraloSite.jsx
try { (() => {
/* iparidaralo.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Same component system as the ECOTEQ site; graphite + ISVE-red via
   data-brand="iparidaralo". The dark toggle flips data-mode on <html>.
   Exposes <IparidaraloSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Scissors = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.12 8.12 12 12M20 4 8.12 15.88M14.8 14.8 20 20M6 18a3 3 0 1 0 0 .01"
}));
const Gauge = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12 14 4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0"
}));
const Recycle = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14 16-3 3 3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.293 13.596 4.875 9.5 1.5 13.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* ISVE / AL-KO shredders under the ECOTEQ brand */
const SHREDDERS = [{
  cat: "ISVE · egytengelyes",
  title: "TR 1100",
  desc: "Egytengelyes ipari daráló raklaphoz, fahulladékhoz és vegyes anyaghoz — erős, tömör kivitel.",
  group: "Egytengelyes",
  img: PHOTO + "shredder.png",
  rate: "1 200 kg/h"
}, {
  cat: "ISVE · egytengelyes",
  title: "TR 1500 HD",
  desc: "Nagy átmérőjű rotor és erősített rosta nehéz, folyamatos ipari terheléshez.",
  group: "Egytengelyes",
  img: PHOTO + "shredder.png",
  rate: "2 000 kg/h"
}, {
  cat: "ISVE · négytengelyes",
  title: "QR 800",
  desc: "Négytengelyes aprító kontrollált, egyenletes szemcsemérethez — utófeldolgozásra kész.",
  group: "Négytengelyes",
  img: PHOTO + "shredder.png",
  rate: "900 kg/h"
}, {
  cat: "AL-KO · forgácsoló",
  title: "Power Chip 75",
  desc: "Kompakt forgácsoló asztalos- és faipari hulladékhoz, halk üzem, alacsony karbantartás.",
  group: "Forgácsoló",
  img: PHOTO + "shredder.png",
  rate: "400 kg/h"
}];
const NAV = ["Főoldal", "Darálók", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@iparidaralo.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "iparidaralo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}shredder.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Ipari dar\xE1l\xE1s \xB7 ISVE \xB7 AL-KO"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "Az apr\xEDt\xE1s ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "az els\u0151 l\xE9p\xE9s")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "Egy- \xE9s n\xE9gytengelyes ipari dar\xE1l\xF3k f\xE1hoz, raklaphoz, vegyes \xE9s neh\xE9z hullad\xE9khoz \u2014 olasz ISVE robusztuss\xE1g, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal a tervez\xE9st\u0151l a karbantart\xE1sig."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Dar\xE1l\xF3-katal\xF3gus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "2 000",
    suffix: "kg/h",
    label: "cs\xFAcskapacit\xE1s dar\xE1l\xF3nk\xE9nt"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "4",
    label: "rotor-konfigur\xE1ci\xF3 \xFCzemm\xE9ret szerint"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "15",
    suffix: "mm",
    label: "kontroll\xE1lt szemcsem\xE9ret"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "20",
    suffix: "\xE9v",
    label: "tervezett g\xE9plettartam"
  }));
}

/* ---------- Shredder grid ---------- */
function Shredders({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Egytengelyes", "Négytengelyes", "Forgácsoló"];
  const shown = filter === "Összes" ? SHREDDERS : SHREDDERS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Dar\xE1l\xF3k",
    title: "Dar\xE1l\xF3 minden anyaghoz \xE9s volumenhez",
    lead: "A kompakt forg\xE1csol\xF3t\xF3l a nagy teljes\xEDtm\xE9ny\u0171 ipari apr\xEDt\xF3ig \u2014 rotor-t\xEDpus szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Rotor-t\xEDpus",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process ---------- */
function Process() {
  const items = [{
    t: "Egyenletes szemcse",
    d: "A kontrollált aprítás stabil szemcseméretet ad — ez a feltétele a jó brikettnek, pelletnek vagy komposztnak.",
    ic: /*#__PURE__*/React.createElement(Scissors, null)
  }, {
    t: "Anyagra méretezve",
    d: "Rotor, kés és rosta az alapanyaghoz: fa, raklap, vegyes vagy nehéz hulladék — valós áteresztéssel.",
    ic: /*#__PURE__*/React.createElement(Gauge, null)
  }, {
    t: "Az értéklánc kezdete",
    d: "A darálás az első lépés: a feldolgozott anyag tüzelőanyag, alapanyag vagy eladható termék lesz.",
    ic: /*#__PURE__*/React.createElement(Recycle, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt apr\xEDt\xE1s?",
    title: "A feldolgoz\xE1s els\u0151 l\xE9p\xE9se",
    lead: "Nem csak dar\xE1l\xF3t sz\xE1ll\xEDtunk \u2014 m\xE9retezz\xFCk, be\xFCzemelj\xFCk \xE9s \xE9letcikluson \xE1t t\xE1mogatjuk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t az apr\xEDt\xE1si feladat\xE1t",
    lead: "K\xFCldje el az alapanyagot \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl dar\xE1l\xF3-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@iparidaralo.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Alapanyag",
    options: ["Fa / raklap", "Vegyes hulladék", "Műanyag", "Papír / karton", "Nehéz / fém"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Becs\xFClt volumen",
    placeholder: "pl. 1 tonna/nap"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "iparidaralo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ ipari dar\xE1l\xE1si \xFCzlet\xE1ga. Egy- \xE9s n\xE9gytengelyes apr\xEDt\xF3k magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "iparidaralo.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "iparidaralo.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@iparidaralo.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 iparidaralo.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(16,17,19,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl dar\xE1l\xF3-javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen anyaghoz?",
    options: ["Fa / raklap", "Vegyes hulladék", "Műanyag", "Papír / karton", "Nehéz / fém"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function IparidaraloSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("iparidaralo-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("iparidaralo-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Shredders, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.IparidaraloSite = IparidaraloSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/iparidaralo/IparidaraloSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pelletgyarto/PelletgyartoSite.jsx
try { (() => {
/* pelletgyarto.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Inherits the SAME design system as brikettalo.hu (cobalt + safety-orange) via
   data-brand="pelletgyarto". The dark toggle flips data-mode on <html>.
   Exposes <PelletgyartoSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Flame = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
}));
const Gauge = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12 14 4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0"
}));
const Recycle = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14 16-3 3 3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.293 13.596 4.875 9.5 1.5 13.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* Pellet mills + line equipment under the ECOTEQ brand */
const PRESSES = [{
  cat: "Gyűrűsmatricás · ipari",
  title: "PM-Ring 90",
  desc: "Gyűrűsmatricás pelletáló nagy volumenű faipari és biomassza pelletgyártáshoz — folyamatos, kiszámítható kimenet.",
  group: "Ipari",
  img: PHOTO + "pelletizing-line.png",
  rate: "1 200 kg/h"
}, {
  cat: "Gyűrűsmatricás · kompakt",
  title: "PM-Ring 45",
  desc: "Kompakt gyűrűsmatricás sor közepes üzemméretre, hűtővel és csomagolással.",
  group: "Ipari",
  img: PHOTO + "pelletizing-line.png",
  rate: "600 kg/h"
}, {
  cat: "Síkmatricás · kisüzemi",
  title: "FlatPress 30",
  desc: "Síkmatricás pelletáló kisüzemi és gazdasági pelletgyártáshoz, gyors megtérüléssel.",
  group: "Kisüzemi",
  img: PHOTO + "pelletizing-line.png",
  rate: "300 kg/h"
}, {
  cat: "Pellet-hűtő & rosta",
  title: "CoolSift 2.0",
  desc: "Ellenáramú pellet-hűtő és rosta a kemény, pormentes, kész pellethez.",
  group: "Kiegészítő",
  img: PHOTO + "pelletizing-line.png",
  rate: "—"
}];
const NAV = ["Főoldal", "Pelletálók", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@pelletgyarto.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "pelletgyarto", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}pelletizing-line.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Pellet\xE1l\xE1s \xB7 biomassza & fa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "A biomassz\xE1b\xF3l ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "pr\xE9mium pellet")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "S\xEDk- \xE9s gy\u0171r\u0171smatric\xE1s pellet\xE1l\xF3k faipari forg\xE1csb\xF3l, f\u0171r\xE9szporb\xF3l \xE9s mez\u0151gazdas\xE1gi mell\xE9kterm\xE9kb\u0151l \u2014 kis\xFCzemit\u0151l az ipari sorig, h\u0171t\xE9ssel \xE9s csomagol\xE1ssal, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Pellet\xE1l\xF3-katal\xF3gus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "1 200",
    suffix: "kg/h",
    label: "cs\xFAcskapacit\xE1s pellet\xE1l\xF3nk\xE9nt"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "2",
    label: "matrica-t\xEDpus \xFCzemm\xE9ret szerint"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "6",
    suffix: "mm",
    label: "szabv\xE1nyos pellet-\xE1tm\xE9r\u0151"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "18",
    suffix: "h\xF3",
    label: "tipikus megt\xE9r\xFCl\xE9s"
  }));
}

/* ---------- Press grid ---------- */
function Presses({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Ipari", "Kisüzemi", "Kiegészítő"];
  const shown = filter === "Összes" ? PRESSES : PRESSES.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Pellet\xE1l\xF3k",
    title: "Pellet\xE1l\xF3 minden \xFCzemm\xE9rethez",
    lead: "A s\xEDkmatric\xE1s kis\xFCzemi g\xE9pt\u0151l az ipari gy\u0171r\u0171smatric\xE1s sorig \u2014 kateg\xF3ria szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\xDCzemm\xE9ret",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process / why briquette ---------- */
function Process() {
  const items = [{
    t: "Kemény, pormentes pellet",
    d: "A kondicionálás és a helyes matrica stabil, tömör pelletet ad — magas fűtőérték, kevés töredék.",
    ic: /*#__PURE__*/React.createElement(Flame, null)
  }, {
    t: "Mérnöki kiválasztás",
    d: "Anyag, nedvesség és volumen alapján méretezzük a pelletálót és a matricát — hogy valóban visszahozza az árát.",
    ic: /*#__PURE__*/React.createElement(Gauge, null)
  }, {
    t: "Körforgásos haszon",
    d: "A saját melléktermék lesz a tüzelőanyag vagy eladható termék — kevesebb hulladék, új bevétel.",
    ic: /*#__PURE__*/React.createElement(Recycle, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt pellet?",
    title: "A mell\xE9kterm\xE9kb\u0151l \xE9rt\xE9k",
    lead: "Nem csak pellet\xE1l\xF3t sz\xE1ll\xEDtunk \u2014 v\xE9gigvissz\xFCk a projektet az anyagvizsg\xE1latt\xF3l az \xFCzemeltet\xE9sig."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t a pellet-projektj\xE9t",
    lead: "K\xFCldje el az alapanyagot \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl pellet\xE1l\xF3-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@pelletgyarto.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Alapanyag",
    options: ["Faipari forgács", "Fűrészpor", "Szalma / mezőgazdasági", "Papír / karton", "Fém forgács"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Becs\xFClt volumen",
    placeholder: "pl. 500 kg/nap"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "pelletgyarto.hu", "dobszarito.hu", "vakuumszarito.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "pelletgyarto", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ pellet\xE1l\xE1si \xFCzlet\xE1ga. S\xEDk- \xE9s gy\u0171r\u0171smatric\xE1s pellet\xE1l\xF3k magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "pelletgyarto.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "pelletgyarto.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@pelletgyarto.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 pelletgyarto.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,20,46,0.6)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl pellet\xE1l\xF3-javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen alapanyaghoz?",
    options: ["Faipari forgács", "Fűrészpor", "Szalma / mezőgazdasági", "Papír / karton", "Fém forgács"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function PelletgyartoSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("pelletgyarto-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("pelletgyarto-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Presses, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.PelletgyartoSite = PelletgyartoSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pelletgyarto/PelletgyartoSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/porlevalaszto/PorlevalasztoSite.jsx
try { (() => {
/* porlevalaszto.hu — ECOTEQ sub-brand website UI kit (light + dark).
   AL-KO Extraction Technology line, modeled on AL-KO's white-led, red-accent,
   energy-efficiency identity — rendered in the ECOTEQ system via
   data-brand="porlevalaszto". White CTA label on the AL-KO red; light mode is a
   crisp cool-white canvas, dark mode the global dark layer. Toggle flips data-mode.
   Exposes <PorlevalasztoSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Wind = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2M9.8 4.4A2 2 0 1 1 11 8H2"
}));
const Leaf = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6"
}));
const Filter = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* AL-KO Extraction Technology line under the ECOTEQ brand */
const SYSTEMS = [{
  cat: "AL-KO · mobil",
  title: "Mobil-Jet 75",
  desc: "Mobil egygépes forgács- és porelszívó asztalos- és famegmunkáló gépekhez — gyors telepítés, halk üzem.",
  group: "Mobil",
  img: PHOTO + "service-installation.png",
  rate: "3 000 m³/h"
}, {
  cat: "AL-KO · központi",
  title: "Power-Unit C",
  desc: "Központi elszívó rendszer teljes üzemcsarnokhoz — frekvenciaváltós ventilátor, energiahatékony üzem.",
  group: "Központi",
  img: PHOTO + "service-installation.png",
  rate: "18 000 m³/h"
}, {
  cat: "AL-KO · szűrő",
  title: "Jet-Filter P",
  desc: "Patronos visszafúvó szűrő automatikus tisztítással — tiszta visszalevegő, alacsony nyomásveszteség.",
  group: "Szűrő",
  img: PHOTO + "service-installation.png",
  rate: "99,9% ↑"
}, {
  cat: "AL-KO · hasznosítás",
  title: "Chip-Silo S",
  desc: "Siló és adagoló a leválasztott forgácsnak — brikett-, pellet- vagy tüzelőanyag-alapanyagként.",
  group: "Hasznosítás",
  img: PHOTO + "service-installation.png",
  rate: "—"
}];
const NAV = ["Főoldal", "Rendszerek", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@porlevalaszto.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "porlevalaszto", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent-text)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent-text)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent-text)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero (white-led: photo + solid red panel — AL-KO signature) ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg)",
      padding: "36px 40px 12px"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.alko-hero-cta:hover{background:var(--color-bg-subtle);} .alko-hero-cta:active{transform:translateY(1px);}`), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 480,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--color-border)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 340,
      background: `url(${PHOTO}service-installation.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-accent)",
      padding: "56px 52px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "#fff",
    style: {
      marginBottom: 16
    }
  }, "AL-KO Extraction Technology"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 52,
      lineHeight: 1.03,
      letterSpacing: "-0.02em",
      margin: 0,
      fontWeight: 800
    }
  }, "Tiszta leveg\u0151, hat\xE9kony \xFCzem"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.92)",
      fontSize: 18,
      lineHeight: 1.55,
      marginTop: 18,
      marginBottom: 30,
      maxWidth: 460
    }
  }, "AL-KO por- \xE9s forg\xE1cselsz\xEDv\xF3 technol\xF3gia fa- \xE9s f\xE9mmegmunk\xE1l\xE1shoz \u2014 mobil g\xE9pt\u0151l a k\xF6zponti rendszerig, energiahat\xE9kony, \u201EMade in Germany\u201D min\u0151s\xE9gben."), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    className: "alko-hero-cta",
    style: {
      alignSelf: "flex-start",
      background: "#fff",
      color: "var(--color-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "15px 30px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 16,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      transition: "background var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s ", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(ArrowRight, null))))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-feature-deep, var(--color-surface-dark))",
      padding: "36px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "18 000",
    suffix: "m\xB3/h",
    label: "k\xF6zponti rendszer l\xE9gteljes\xEDtm\xE9ny"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "35",
    suffix: "\xE9v",
    label: "AL-KO elsz\xEDv\xE1stechnikai tapasztalat"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "99,9",
    suffix: "%",
    label: "por-lev\xE1laszt\xE1si hat\xE9konys\xE1g"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "40",
    suffix: "%",
    label: "energia-megtakar\xEDt\xE1s h\u0151visszanyer\xE9ssel"
  }));
}

/* ---------- System grid ---------- */
function Systems({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Mobil", "Központi", "Szűrő", "Hasznosítás"];
  const shown = filter === "Összes" ? SYSTEMS : SYSTEMS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Rendszerek",
    title: "Elsz\xEDv\xE1s minden \xFCzemhez \xE9s g\xE9phez",
    lead: "A mobil egyg\xE9pes elsz\xEDv\xF3t\xF3l a k\xF6zponti rendszerig, sz\u0171r\u0151vel \xE9s forg\xE1cs-hasznos\xEDt\xE1ssal \u2014 funkci\xF3 szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Rendszert\xEDpus",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process ---------- */
function Process() {
  const items = [{
    t: "Tiszta, biztonságos levegő",
    d: "A hatékony elszívás eltávolítja a port és forgácsot a forrásnál — egészséges munkakörnyezet, robbanás- és tűzvédelem.",
    ic: /*#__PURE__*/React.createElement(Wind, null)
  }, {
    t: "Energiahatékony",
    d: "Frekvenciaváltós ventilátor és hővisszanyerés: a levegőt nem fűtjük az utcára — jelentősen kisebb energiaszámla.",
    ic: /*#__PURE__*/React.createElement(Leaf, null)
  }, {
    t: "Hasznosítható melléktermék",
    d: "A leválasztott forgács nem hulladék: brikett- vagy pellet-alapanyag, akár saját tüzelőanyag.",
    ic: /*#__PURE__*/React.createElement(Filter, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt elsz\xEDv\xE1s?",
    title: "Tiszta \xFCzem, kisebb energia",
    lead: "Nem csak elsz\xEDv\xF3t sz\xE1ll\xEDtunk \u2014 a csarnokra \xE9s a g\xE9pekre m\xE9retezz\xFCk, be\xFCzemelj\xFCk \xE9s \xE9letcikluson \xE1t t\xE1mogatjuk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact (light, white-led) ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t az elsz\xEDv\xE1si feladat\xE1t",
    lead: "K\xFCldje el a g\xE9peket, a csarnok m\xE9ret\xE9t \xE9s a por t\xEDpus\xE1t \u2014 24 \xF3r\xE1n bel\xFCl rendszer-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    tone: "light",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@porlevalaszto.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    tone: "light",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    tone: "light",
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Por forr\xE1sa",
    options: ["Faipari gép", "Fémmegmunkálás", "CNC / megmunkáló", "Csiszolás", "Egyéb"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Csarnok / g\xE9psz\xE1m",
    placeholder: "pl. 1 200 m\xB2 \xB7 12 g\xE9p"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "vakuumszarito.hu", "dobszarito.hu", "porlevalaszto.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "porlevalaszto", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ elsz\xEDv\xE1stechnikai \xFCzlet\xE1ga \u2014 AL-KO Extraction Technology. Por- \xE9s forg\xE1cselsz\xEDv\xF3 rendszerek magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "porlevalaszto.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "porlevalaszto.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@porlevalaszto.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 porlevalaszto.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(18,20,23,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl rendszer-javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Por forr\xE1sa",
    options: ["Faipari gép", "Fémmegmunkálás", "CNC / megmunkáló", "Csiszolás", "Egyéb"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function PorlevalasztoSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("porlevalaszto-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("porlevalaszto-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Systems, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.PorlevalasztoSite = PorlevalasztoSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/porlevalaszto/PorlevalasztoSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/raklapdaralo/RaklapdaraloSite.jsx
try { (() => {
/* raklapdaralo.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Shares the SAME design system as iparidaralo.hu (graphite + ISVE-red) via
   data-brand="raklapdaralo". The dark toggle flips data-mode on <html>.
   Exposes <RaklapdaraloSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Scissors = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.12 8.12 12 12M20 4 8.12 15.88M14.8 14.8 20 20M6 18a3 3 0 1 0 0 .01"
}));
const Gauge = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12 14 4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0"
}));
const Recycle = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14 16-3 3 3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.293 13.596 4.875 9.5 1.5 13.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* ISVE / AL-KO shredders under the ECOTEQ brand */
const SHREDDERS = [{
  cat: "ISVE · egytengelyes",
  title: "PalleX 1100",
  desc: "Egytengelyes daráló egész raklapokhoz — szegezett, vegyes faanyagot is megbírja, tömör kivitel.",
  group: "Egytengelyes",
  img: PHOTO + "shredder.png",
  rate: "1 200 kg/h"
}, {
  cat: "ISVE · egytengelyes",
  title: "PalleX 1500 HD",
  desc: "Nagy átmérőjű rotor és erősített rosta nagy volumenű, folyamatos raklap-feldolgozáshoz.",
  group: "Egytengelyes",
  img: PHOTO + "shredder.png",
  rate: "2 000 kg/h"
}, {
  cat: "Mágneses szeparátor",
  title: "FerroSep 60",
  desc: "Szalag fölötti mágnes a szegek és fém elemek kivonására — tiszta, fémmentes faapríték.",
  group: "Szeparálás",
  img: PHOTO + "shredder.png",
  rate: "—"
}, {
  cat: "utóaprító",
  title: "ReFine 800",
  desc: "Második fokozatú aprító egyenletes szemcséhez — brikett- és pellet-kész alapanyag.",
  group: "Utóaprító",
  img: PHOTO + "shredder.png",
  rate: "900 kg/h"
}];
const NAV = ["Főoldal", "Gépek", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@raklapdaralo.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "raklapdaralo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}shredder.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Raklapdar\xE1l\xE1s \xB7 ISVE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "A raklapb\xF3l ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "tiszta alapanyag")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "Egytengelyes dar\xE1l\xF3k eg\xE9sz, szegezett raklapokhoz \u2014 integr\xE1lt m\xE1gneses f\xE9mlev\xE1laszt\xE1ssal tiszta, f\xE9mmentes faapr\xEDt\xE9k a brikett-, pellet- \xE9s t\xFCzel\u0151anyag-gy\xE1rt\xE1shoz, olasz ISVE robusztuss\xE1ggal \xE9s magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "G\xE9p-katal\xF3gus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "2 000",
    suffix: "kg/h",
    label: "cs\xFAcskapacit\xE1s g\xE9penk\xE9nt"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "100",
    suffix: "%",
    label: "szeg- \xE9s f\xE9mlev\xE1laszt\xE1s"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "15",
    suffix: "mm",
    label: "kontroll\xE1lt v\xE9gszemcse"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "20",
    suffix: "\xE9v",
    label: "tervezett g\xE9plettartam"
  }));
}

/* ---------- Shredder grid ---------- */
function Shredders({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Egytengelyes", "Szeparálás", "Utóaprító"];
  const shown = filter === "Összes" ? SHREDDERS : SHREDDERS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "G\xE9pek",
    title: "Teljes raklap-feldolgoz\xF3 sor",
    lead: "A raklapdar\xE1l\xF3t\xF3l a m\xE1gneses f\xE9mlev\xE1laszt\xE1son \xE1t az ut\xF3apr\xEDt\xF3ig \u2014 funkci\xF3 szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "G\xE9pt\xEDpus",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process ---------- */
function Process() {
  const items = [{
    t: "Szeg- és fémmentes",
    d: "Az integrált mágneses szeparátor kivonja a szegeket és fém elemeket — tiszta faapríték, védett kések.",
    ic: /*#__PURE__*/React.createElement(Scissors, null)
  }, {
    t: "Egész raklapra méretezve",
    d: "Rotor, kés és rosta a szegezett, kemény raklaphoz — EUR és egyedi raklap, valós áteresztéssel.",
    ic: /*#__PURE__*/React.createElement(Gauge, null)
  }, {
    t: "Az értéklánc kezdete",
    d: "A tiszta apríték tüzelőanyag, brikett- vagy pellet-alapanyag, esetleg eladható termék lesz.",
    ic: /*#__PURE__*/React.createElement(Recycle, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt raklapdar\xE1l\xE1s?",
    title: "A raklapb\xF3l \xE9rt\xE9k",
    lead: "Nem csak g\xE9pet sz\xE1ll\xEDtunk \u2014 a teljes sort m\xE9retezz\xFCk, be\xFCzemelj\xFCk \xE9s \xE9letcikluson \xE1t t\xE1mogatjuk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t az apr\xEDt\xE1si feladat\xE1t",
    lead: "K\xFCldje el az alapanyagot \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl dar\xE1l\xF3-javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@raklapdaralo.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Alapanyag",
    options: ["EUR raklap", "Egyedi raklap", "Láda / rekesz", "Vegyes fahulladék", "Egyéb"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Becs\xFClt volumen",
    placeholder: "pl. 200 raklap/nap"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "raklapdaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "raklapdaralo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ raklap-feldolgoz\xE1si \xFCzlet\xE1ga. Egytengelyes raklapdar\xE1l\xF3k \xE9s f\xE9mlev\xE1laszt\xE1s magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "raklapdaralo.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "raklapdaralo.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@raklapdaralo.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 raklapdaralo.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(16,17,19,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl g\xE9p-javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen alapanyaghoz?",
    options: ["EUR raklap", "Egyedi raklap", "Láda / rekesz", "Vegyes fahulladék", "Egyéb"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function RaklapdaraloSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("raklapdaralo-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("raklapdaralo-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Shredders, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.RaklapdaraloSite = RaklapdaraloSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/raklapdaralo/RaklapdaraloSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vakuum/VakuumSite.jsx
try { (() => {
/* vakuumszarito.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Same component system; charcoal-slate + golden-amber via data-brand="vakuum".
   Dark text on the amber accent; light mode uses a warm cream canvas, dark mode
   the global dark layer. The toggle flips data-mode on <html>.
   Exposes <VakuumSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Droplet = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"
}));
const Timer = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M10 2h4M12 14l3-3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "14",
  r: "8"
}));
const Layers = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "m12.83 2.18 8.04 4.02a1 1 0 0 1 0 1.6l-8.04 4.02a1 1 0 0 1-.66 0L4.13 7.8a1 1 0 0 1 0-1.6l8.04-4.02a1 1 0 0 1 .66 0Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m2.5 12 9.17 4.59a1 1 0 0 0 .66 0L21.5 12M2.5 17l9.17 4.59a1 1 0 0 0 .66 0L21.5 17"
}));
const Sun = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
}));
const Moon = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const PHOTO = "../../assets/photos/";

/* ISVE wood-vacuum systems under the ECOTEQ brand */
const SYSTEMS = [{
  cat: "ISVE · vákuumszárító",
  title: "K-Vac 8",
  desc: "Faipari vákuumszárító kamra keményfához — gyors, kíméletes, repedésmentes szárítás.",
  group: "Szárítás",
  img: PHOTO + "vacuum-kiln.png",
  rate: "8 m³ töltet"
}, {
  cat: "ISVE · vákuumszárító",
  title: "K-Vac 14",
  desc: "Nagyobb töltetű kamra üzemi volumenhez, precíz nedvesség- és hőmérséklet-szabályzással.",
  group: "Szárítás",
  img: PHOTO + "vacuum-kiln.png",
  rate: "14 m³ töltet"
}, {
  cat: "ISVE · impregnáló",
  title: "Impreg-V",
  desc: "Vákuum-impregnáló a mélyebb, egyenletesebb védőszer-bevitelhez — hosszabb élettartam.",
  group: "Impregnálás",
  img: PHOTO + "vacuum-kiln.png",
  rate: "6 m³ kád"
}, {
  cat: "ISVE · gőzölő",
  title: "Steam-V",
  desc: "Gőzölő berendezés a szín- és feszültség-kiegyenlítéshez szárítás előtt.",
  group: "Gőzölés",
  img: PHOTO + "vacuum-kiln.png",
  rate: "10 m³ kamra"
}];
const NAV = ["Főoldal", "Berendezések", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--color-surface-dark)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@vakuumszarito.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote,
  mode,
  toggleMode
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--color-header-bg, rgba(255,255,255,0.92))",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 32px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: mode === "dark" ? "white" : "navy",
    size: 26,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, "vakuumszarito", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent-text)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 14
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 13px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent-text)" : "var(--color-text)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      right: 13,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent-text)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMode,
    "aria-label": "T\xE9ma v\xE1lt\xE1sa",
    title: mode === "dark" ? "Világos téma" : "Sötét téma",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, mode === "dark" ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url(${PHOTO}vacuum-kiln.png) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 840
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Faipari v\xE1kuumtechnol\xF3gia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "Gyorsabb sz\xE1r\xEDt\xE1s, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "jobb min\u0151s\xE9g")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 640,
      marginTop: 18
    }
  }, "Faipari v\xE1kuumsz\xE1r\xEDt\xF3, impregn\xE1l\xF3 \xE9s g\u0151z\xF6l\u0151 berendez\xE9sek olasz ISVE technol\xF3gi\xE1val \u2014 k\xEDm\xE9letes, reped\xE9smentes sz\xE1r\xEDt\xE1s a hagyom\xE1nyos kamr\xE1k t\xF6red\xE9k idej\xE9ben, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Technol\xF3giai adatlap"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "14",
    suffix: "m\xB3",
    label: "legnagyobb kamra-t\xF6ltet"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "3\xD7",
    label: "gyorsabb a hagyom\xE1nyos sz\xE1r\xEDt\xE1sn\xE1l"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "45",
    suffix: "\xB0C",
    label: "k\xEDm\xE9letes, alacsony sz\xE1r\xEDt\xE1si h\u0151"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "20",
    suffix: "\xE9v",
    label: "tervezett g\xE9plettartam"
  }));
}

/* ---------- System grid ---------- */
function Systems({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Szárítás", "Impregnálás", "Gőzölés"];
  const shown = filter === "Összes" ? SYSTEMS : SYSTEMS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Berendez\xE9sek",
    title: "V\xE1kuumtechnol\xF3gia a teljes faipari folyamatra",
    lead: "Sz\xE1r\xEDt\xE1s, impregn\xE1l\xE1s \xE9s g\u0151z\xF6l\xE9s \u2014 egy m\xE9rn\xF6ki rendszerben, technol\xF3gia szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Technol\xF3gia",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: p.rate + " · részletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Process ---------- */
function Process() {
  const items = [{
    t: "Kíméletes szárítás",
    d: "A vákuum csökkenti a víz forráspontját: alacsonyabb hőn, gyorsabban szárít — kevesebb repedés, vetemedés, színhiba.",
    ic: /*#__PURE__*/React.createElement(Droplet, null)
  }, {
    t: "Töredék idő",
    d: "A hagyományos kamrák heteihez képest napok: gyorsabb átfutás, kisebb készletlekötés, jobb cashflow.",
    ic: /*#__PURE__*/React.createElement(Timer, null)
  }, {
    t: "Egy folyamat, egy partner",
    d: "Szárítás, impregnálás és gőzölés egy mérnöki kézből — méretezés, beüzemelés és szerviz az életcikluson át.",
    ic: /*#__PURE__*/React.createElement(Layers, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Mi\xE9rt v\xE1kuum?",
    title: "K\xEDm\xE9letesebb, gyorsabb, kisz\xE1m\xEDthat\xF3bb",
    lead: "Nem csak berendez\xE9st sz\xE1ll\xEDtunk \u2014 a faanyaghoz m\xE9retezz\xFCk, be\xFCzemelj\xFCk \xE9s \xE9letcikluson \xE1t t\xE1mogatjuk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-text)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t a sz\xE1r\xEDt\xE1si feladat\xE1t",
    lead: "K\xFCldje el a fafajt, a vastags\xE1got \xE9s a k\xEDv\xE1nt volument \u2014 24 \xF3r\xE1n bel\xFCl technol\xF3giai javaslattal \xE9s \xE1r-becsl\xE9ssel jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@vakuumszarito.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Fafaj",
    options: ["Tölgy", "Bükk", "Fenyő", "Kőris", "Egyéb keményfa"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Vastags\xE1g / volumen",
    placeholder: "pl. 50 mm \xB7 8 m\xB3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "vakuumszarito.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-feature-deep, var(--navy-900))",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "#fff"
    }
  }, "vakuumszarito", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, ".hu"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Az ECOTEQ faipari v\xE1kuumtechnol\xF3giai \xFCzlet\xE1ga. Sz\xE1r\xEDt\xE1s, impregn\xE1l\xE1s \xE9s g\u0151z\xF6l\xE9s magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "ECOTEQ alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0",
      color: s === "vakuumszarito.hu" ? "var(--color-accent)" : "inherit",
      fontWeight: s === "vakuumszarito.hu" ? 700 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@vakuumszarito.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2026 ECOTEQ Kft. \u2014 vakuumszarito.hu \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(18,20,23,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--color-text)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--color-text)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl technol\xF3giai javaslattal jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen technol\xF3gi\xE1hoz?",
    options: ["Vákuumszárítás", "Impregnálás", "Gőzölés"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function VakuumSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try {
      return localStorage.getItem("vakuum-mode") || "light";
    } catch (e) {
      return "light";
    }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem("vakuum-mode", mode);
    } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode(m => m === "dark" ? "light" : "dark");
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote,
    mode: mode,
    toggleMode: toggleMode
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Systems, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.VakuumSite = VakuumSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vakuum/VakuumSite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
/* ECOTEQ website UI kit — composed from the design-system bundle.
   Exposes <EcoteqSite/> on window. Icons are inline (Lucide paths). */

const NS = window.ECOTEQDesignSystem_fc88f8;
const {
  Logo,
  Button,
  IconButton,
  Tag,
  Badge,
  Card,
  ProductCard,
  StatBlock,
  Overline,
  SectionHeading,
  ContactPill,
  Input,
  Select
} = NS;

/* ---------- inline Lucide icons (no fragments — this Babel build rejects <>) ---------- */
const Ico = ({
  children
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Mail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const Phone = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
}));
const ArrowRight = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const X = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18"
}));
const MapPin = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Download = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15V3"
}));
const Check = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Cog = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
}));

/* industrial placeholder photo (no stock per brand rule) */
function photo(a, b) {
  return {
    background: "repeating-linear-gradient(118deg, " + a + " 0 26px, " + b + " 26px 52px)"
  };
}
const PHOTO = "../../assets/photos/";
const PRODUCTS = [{
  cat: "Ipari darálás",
  title: "ECO-Shred 400",
  desc: "Nagy áteresztőképességű ipari daráló kemény és vegyes hulladékhoz.",
  group: "Darálás",
  img: PHOTO + "shredder.png"
}, {
  cat: "Brikettálás",
  title: "BriQ-Line 90",
  desc: "CFNielsen technológia — kompakt, megtérülő brikettáló rendszer.",
  group: "Brikettálás",
  img: PHOTO + "briquetting-line.png"
}, {
  cat: "Biomassza szárítás",
  title: "DryFlow DS-12",
  desc: "Energiahatékony szalagos szárító biomasszához és melléktermékhez.",
  group: "Szárítás",
  img: PHOTO + "biomass-belt-dryer.png"
}, {
  cat: "Pelletálás",
  title: "PelletPro 2.0",
  desc: "Kisüzemi és ipari pelletgyártó sor, kiszámítható kimenettel.",
  group: "Pelletálás",
  img: PHOTO + "pelletizing-line.png"
}, {
  cat: "Vákuumtechnológia",
  title: "VacDry VT-8",
  desc: "Faipari vákuumszárító — gyors, kíméletes, minőségmegtartó.",
  group: "Szárítás",
  img: PHOTO + "vacuum-kiln.png"
}, {
  cat: "Szerviz",
  title: "ECOTEQ Care",
  desc: "Gyártófüggetlen szerviz, alkatrész és távfelügyelet — egész életcikluson át.",
  group: "Szerviz",
  img: PHOTO + "service-installation.png"
}];
const NAV = ["Főoldal", "Gépek", "Megoldások", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail (fixed) ---------- */
function Rail({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "var(--sidebar-w)",
      background: "var(--ecoteq-navy)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      zIndex: 40,
      borderRight: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 34,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onQuote,
    style: {
      marginTop: 36,
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--color-accent)",
      color: "#fff",
      border: "none",
      borderRadius: "var(--radius-pill)",
      padding: "20px 11px",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "var(--shadow-accent)",
      transition: "background var(--dur-base)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-accent-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--color-accent)"
  }, "Aj\xE1nlat k\xE9r\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "info@ecoteq.hu",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mail, null))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "+36 00 000 000",
    style: railIconStyle,
    className: "rail-ic"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Phone, null)))));
}
const railIconStyle = {
  width: 40,
  height: 40,
  borderRadius: "var(--radius-pill)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-accent)",
  transition: "all var(--dur-base)"
};

/* ---------- Top header ---------- */
function Header({
  active,
  setActive,
  onQuote
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 40px",
      height: 72
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "navy",
    size: 26,
    href: "#"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 18
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setActive(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--color-accent)" : "var(--ecoteq-navy)",
      position: "relative"
    }
  }, n, active === n && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      right: 14,
      bottom: 2,
      height: 3,
      borderRadius: 99,
      background: "var(--color-accent)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"));
}

/* ---------- Hero ---------- */
function Hero({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 560,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "url(../../assets/photos/hero-briquette-plant.jpg) center/cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-navy-side)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 64px 72px",
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "K\xF6rforg\xE1sos gazdas\xE1g \xB7 2024"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      margin: "20px 0 0",
      fontWeight: 800
    }
  }, "A k\xF6rforg\xE1sos gazdas\xE1g ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)"
    }
  }, "m\u0171szaki partnere")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.82)",
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 620,
      marginTop: 18
    }
  }, "Ipari hullad\xE9khasznos\xEDt\xF3 technol\xF3gi\xE1k a projekt\xF6tlett\u0151l a megval\xF3s\xEDt\xE1sig \u2014 dar\xE1l\xE1s, brikett\xE1l\xE1s, pellet\xE1l\xE1s \xE9s sz\xE1r\xEDt\xE1s, m\xE9rn\xF6ki garanci\xE1val \xE9s kisz\xE1m\xEDthat\xF3 megt\xE9r\xFCl\xE9ssel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote
  }, "Aj\xE1nlatot k\xE9rek"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Download, null)
  }, "Prospektus"))));
}

/* ---------- Stats strip ---------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ecoteq-navy)",
      padding: "40px 64px",
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "15",
    suffix: "+",
    label: "\xE9v m\xE9rn\xF6ki tapasztalat"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "5",
    label: "vezet\u0151 eur\xF3pai gy\xE1rt\xF3 partner"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "98",
    suffix: "%",
    label: "szerviz-el\xE9rhet\u0151s\xE9g"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "20",
    suffix: "\xE9v",
    label: "tervezett \xFCzemid\u0151"
  }));
}

/* ---------- Product grid ---------- */
function Products({
  onQuote
}) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Darálás", "Brikettálás", "Szárítás", "Pelletálás", "Szerviz"];
  const shown = filter === "Összes" ? PRODUCTS : PRODUCTS.filter(p => p.group === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "G\xE9pk\xEDn\xE1lat",
    title: "G\xE9pek, amelyeket magunknak is betenn\xE9nk",
    lead: "Eur\xF3pa legjobb technol\xF3gi\xE1i, magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal. Sz\u0171rj\xF6n kateg\xF3ria szerint."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Kateg\xF3ria",
    value: filter,
    onChange: e => setFilter(e.target.value),
    options: groups
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 24
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    category: p.cat,
    title: p.title,
    description: p.desc,
    cta: "R\xE9szletek",
    image: p.img,
    onClick: onQuote,
    style: {}
  }))));
}

/* ---------- Solutions ---------- */
function Solutions() {
  const items = [{
    t: "Projekt-előkészítés",
    d: "Már a tervezésnél bekapcsolódunk, hogy a rendszer illeszkedjen — tervezhetően, üzemeltethetően.",
    ic: /*#__PURE__*/React.createElement(Cog, null)
  }, {
    t: "Mérnöki kiválasztás",
    d: "Műszaki és gazdaságossági szempontok együtt: melyik gép hozza vissza valóban az árát.",
    ic: /*#__PURE__*/React.createElement(Check, null)
  }, {
    t: "Szerviz & támogatás",
    d: "Gyártófüggetlen szerviz, alkatrész és távfelügyelet az egész életciklus alatt.",
    ic: /*#__PURE__*/React.createElement(Phone, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-subtle)",
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    style: {
      margin: "0 auto 40px"
    },
    overline: "Megold\xE1sok",
    title: "Az \xF6tlett\u0151l a megval\xF3s\xEDt\xE1sig",
    lead: "Nem csak g\xE9peket sz\xE1ll\xEDtunk \u2014 egy\xFCtt gondolkodunk \xE9s val\xF3di ROI-t biztos\xEDtunk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.t,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: "inline-flex"
    }
  }, it.ic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--ecoteq-navy)"
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, it.d))))));
}

/* ---------- Contact ---------- */
function Contact({
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ecoteq-navy)",
      padding: "72px 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    overline: "Kapcsolat",
    title: "Besz\xE9lj\xFCk \xE1t a projektj\xE9t",
    lead: "Szem\xE9lyes m\xE9rn\xF6ki t\xE1mogat\xE1s, gyors v\xE1lasz, \xE1tl\xE1that\xF3 \xE1rak. \xCDrjon, \xE9s 24 \xF3r\xE1n bel\xFCl jelentkez\xFCnk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    href: "#"
  }, "info@ecoteq.hu"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    href: "#"
  }, "+36 00 000 000"), /*#__PURE__*/React.createElement(ContactPill, {
    icon: /*#__PURE__*/React.createElement(MapPin, null),
    href: "#"
  }, "Magyarorsz\xE1g"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xE9g",
    placeholder: "C\xE9gn\xE9v"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\xC9rdekl\u0151d\xE9s",
    options: ["Darálás", "Brikettálás", "Szárítás", "Pelletálás", "Szerviz"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\xDCzenet",
    placeholder: "R\xF6viden a projektr\u0151l\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: onQuote,
    style: {
      width: "100%"
    }
  }, "Aj\xE1nlatot k\xE9rek")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "rgba(255,255,255,0.7)",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "white",
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "A k\xF6rforg\xE1sos gazdas\xE1g m\u0171szaki partnere. Ipari hullad\xE9khasznos\xEDt\xF3 technol\xF3gi\xE1k magyar m\xE9rn\xF6ki t\xE1mogat\xE1ssal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Alm\xE1rk\xE1k"), subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, s))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Kapcsolat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "info@ecoteq.hu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: "4px 0"
    }
  }, "+36 00 000 000")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "28px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13
    }
  }, "\xA9 2024 ECOTEQ Kft. \u2014 Minden jog fenntartva."));
}

/* ---------- Quote modal ---------- */
function QuoteModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,32,48,0.6)",
      backdropFilter: "blur(3px)",
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      width: 520,
      maxWidth: "100%",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      color: "var(--ecoteq-navy)"
    }
  }, "Aj\xE1nlatk\xE9r\xE9s"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Bez\xE1r\xE1s",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-accent-tint)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Check, null))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      color: "var(--ecoteq-navy)"
    }
  }, "K\xF6sz\xF6nj\xFCk!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-secondary)"
    }
  }, "24 \xF3r\xE1n bel\xFCl szem\xE9lyesen jelentkez\xFCnk."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Bez\xE1r\xE1s"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xE9v",
    placeholder: "Az \xD6n neve"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    icon: /*#__PURE__*/React.createElement(Phone, null),
    placeholder: "+36"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    icon: /*#__PURE__*/React.createElement(Mail, null),
    type: "email",
    placeholder: "nev@ceg.hu"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Milyen rendszer \xE9rdekli?",
    options: ["Darálás", "Brikettálás", "Szárítás", "Pelletálás", "Szerviz"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    style: {
      width: "100%"
    },
    onClick: () => setSent(true)
  }, "Elk\xFCld\xF6m"))))));
}

/* ---------- Root ---------- */
function EcoteqSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const onQuote = () => setQuote(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:#fff;}`), /*#__PURE__*/React.createElement(Rail, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "var(--sidebar-w)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    setActive: setActive,
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Products, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Solutions, null), /*#__PURE__*/React.createElement(Contact, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(QuoteModal, {
    open: quote,
    onClose: () => setQuote(false)
  }));
}
window.EcoteqSite = EcoteqSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactPill = __ds_scope.ContactPill;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
