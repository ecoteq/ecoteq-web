import React from "react";

/** Pill tag / category label. Green is the signature; navy & subtle variants too. */
export function Tag({
  variant = "green",     // "green" | "navy" | "subtle" | "outline-light"
  size = "md",           // "sm" | "md"
  uppercase = true,
  icon,
  children,
  style,
  ...rest
}) {
  const sizes = { sm: { padding: "4px 11px", fontSize: 10 }, md: { padding: "6px 15px", fontSize: 11 } }[size];
  const variants = {
    green: { background: "var(--color-accent)", color: "var(--color-on-accent)" },
    navy: { background: "var(--ecoteq-navy)", color: "#fff" },
    subtle: { background: "var(--color-accent-tint)", color: "var(--green-700)" },
    "outline-light": { background: "rgba(255,255,255,0.08)", color: "#fff", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)" },
  }[variant];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        borderRadius: "var(--radius-pill)",
        fontWeight: 700,
        letterSpacing: uppercase ? "var(--ls-overline)" : "0.02em",
        textTransform: uppercase ? "uppercase" : "none",
        ...sizes, ...variants, ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex", width: 13, height: 13 }}>{icon}</span>}
      {children}
    </span>
  );
}
