import React from "react";

/** Small status badge (dot + label). Engineered from the status palette. */
export function Badge({ status = "success", children, style, ...rest }) {
  const map = {
    success: { c: "var(--color-success)", bg: "var(--green-100)" },
    warning: { c: "var(--color-warning)", bg: "#faf0dd" },
    danger:  { c: "var(--color-danger)",  bg: "#f7e4e1" },
    info:    { c: "var(--color-info)",     bg: "#e6edf3" },
    neutral: { c: "var(--gray-700)",       bg: "var(--gray-100)" },
  }[status];
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: "4px 11px 4px 9px",
        borderRadius: "var(--radius-pill)",
        background: map.bg, color: map.c,
        fontSize: 12, fontWeight: 700,
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor", flex: "none" }} />
      {children}
    </span>
  );
}
