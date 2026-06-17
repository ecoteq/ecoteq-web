import React from "react";

/** Native select styled to match Input — used by the product filters. */
export function Select({ label, hint, options = [], id, style, children, ...rest }) {
  const selId = id || (label ? "sel-" + String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  const cls = "eco-select";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: "var(--fs-sm)", fontWeight: 600, color: "var(--ecoteq-navy)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <style>{`
          .${cls} { width:100%; box-sizing:border-box; appearance:none; -webkit-appearance:none;
            font-family:var(--font-sans); font-size:15px; color:var(--ecoteq-navy);
            background:var(--color-surface); border:1px solid var(--color-border);
            border-radius:var(--radius-md); padding:12px 40px 12px 14px; cursor:pointer;
            transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); }
          .${cls}:focus { outline:none; border-color:var(--color-accent); box-shadow:0 0 0 3px var(--color-accent-ring); }
        `}</style>
        <select id={selId} className={cls} {...rest}>
          {children || options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-text-secondary)", fontSize: 12 }}>▾</span>
      </div>
      {hint && <span style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-secondary)" }}>{hint}</span>}
    </div>
  );
}
