import React from "react";

/** Big metric block — ExtraBold figure + label, with optional green accent rule. */
export function StatBlock({ value, label, suffix, tone = "light", rule = true, align = "left", style, ...rest }) {
  const valColor = tone === "dark" ? "var(--ecoteq-white)" : "var(--color-text)";
  const labelColor = tone === "dark" ? "rgba(255,255,255,0.7)" : "var(--color-text-secondary)";
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", gap: 8,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align, ...style,
      }}
      {...rest}
    >
      {rule && <span style={{ width: 32, height: 4, borderRadius: "var(--radius-pill)", background: "var(--color-accent)" }} />}
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 44, letterSpacing: "-0.02em", color: valColor }}>{value}</span>
        {suffix && <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--color-accent)" }}>{suffix}</span>}
      </div>
      <span style={{ fontSize: "var(--fs-sm)", color: labelColor }}>{label}</span>
    </div>
  );
}
