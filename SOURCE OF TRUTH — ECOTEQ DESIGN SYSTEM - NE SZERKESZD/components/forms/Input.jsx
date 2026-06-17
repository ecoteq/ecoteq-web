import React from "react";

/** Text input with label, optional leading icon, hint/error. 8px radius, green focus. */
export function Input({
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
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--fs-sm)", fontWeight: 600, color: "var(--ecoteq-navy)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && (
          <span style={{ position: "absolute", left: 14, display: "inline-flex", width: 18, height: 18, color: "var(--color-text-muted)", pointerEvents: "none" }}>
            {icon}
          </span>
        )}
        <style>{`
          .${cls} { width:100%; box-sizing:border-box; font-family:var(--font-sans); font-size:15px;
            color:var(--ecoteq-navy); background:var(--color-surface);
            border:1px solid ${error ? "var(--color-danger)" : "var(--color-border)"};
            border-radius:var(--radius-md); padding:12px 14px;
            transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard); }
          .${cls}::placeholder { color:var(--color-text-muted); }
          .${cls}:focus { outline:none; border-color:var(--color-accent); box-shadow:0 0 0 3px var(--color-accent-ring); }
        `}</style>
        <input id={inputId} className={cls} style={icon ? { paddingLeft: 40 } : undefined} {...rest} />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--color-danger)" : "var(--color-text-secondary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
