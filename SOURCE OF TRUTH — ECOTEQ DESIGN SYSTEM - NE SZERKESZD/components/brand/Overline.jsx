import React from "react";

/** All-caps tracked label, optionally led by the signature short green rule. */
export function Overline({ children, rule = true, color = "var(--color-accent-text, var(--color-accent))", style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: "var(--fs-xs)",
        fontWeight: 700,
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color,
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span
          style={{
            width: 28,
            height: 3,
            borderRadius: "var(--radius-pill)",
            background: "currentColor",
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
