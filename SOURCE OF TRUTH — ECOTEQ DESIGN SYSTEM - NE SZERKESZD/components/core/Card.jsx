import React from "react";

/** Generic surface card — soft navy-tinted shadow, hairline border, hover lift. */
export function Card({ interactive = false, padding = 24, children, style, ...rest }) {
  const cls = "eco-card-" + (interactive ? "i" : "s");
  return (
    <>
      <style>{`
        .eco-card-i { transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard); cursor:pointer; }
        .eco-card-i:hover { box-shadow: var(--shadow-md); border-color: var(--color-border-strong); transform: translateY(-2px); }
      `}</style>
      <div
        className={cls}
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-sm)",
          padding,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}
