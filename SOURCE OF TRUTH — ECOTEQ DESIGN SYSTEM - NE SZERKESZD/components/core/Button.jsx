import React from "react";

/**
 * ECOTEQ button. Primary = green capsule CTA (the "Ajánlat kérés" shape).
 */
export function Button({
  variant = "primary",   // "primary" | "secondary" | "ghost" | "outline-light"
  size = "md",           // "sm" | "md" | "lg"
  pill = true,
  iconLeft,
  iconRight,
  children,
  style,
  disabled,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13, gap: 7, icon: 16 },
    md: { padding: "12px 24px", fontSize: 15, gap: 9, icon: 18 },
    lg: { padding: "16px 32px", fontSize: 16, gap: 10, icon: 20 },
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
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      boxShadow: "var(--shadow-accent)",
    },
    secondary: {
      background: "var(--ecoteq-navy)",
      color: "var(--ecoteq-white)",
    },
    ghost: {
      background: "transparent",
      color: "var(--ecoteq-navy)",
    },
    "outline-light": {
      background: "transparent",
      color: "var(--ecoteq-white)",
      borderColor: "rgba(255,255,255,0.55)",
    },
  }[variant];

  const hoverClass = `eco-btn-${variant}`;

  return (
    <>
      <style>{`
        .${hoverClass}:not(:disabled):hover { ${
          variant === "primary"
            ? "background:var(--color-accent-hover);transform:translateY(-1px);"
            : variant === "secondary"
            ? "background:var(--navy-600);"
            : variant === "ghost"
            ? "background:var(--color-accent-tint);color:var(--color-accent-active);"
            : "background:var(--color-accent);border-color:var(--color-accent);"
        } }
        .${hoverClass}:not(:disabled):active { transform:translateY(0); ${
          variant === "primary" ? "background:var(--color-accent-active);" : ""
        } }
      `}</style>
      <button className={hoverClass} style={{ ...base, ...variants, ...style }} disabled={disabled} {...rest}>
        {iconLeft && <span style={{ display: "inline-flex", width: sizes.icon, height: sizes.icon }}>{iconLeft}</span>}
        {children}
        {iconRight && <span style={{ display: "inline-flex", width: sizes.icon, height: sizes.icon }}>{iconRight}</span>}
      </button>
    </>
  );
}
