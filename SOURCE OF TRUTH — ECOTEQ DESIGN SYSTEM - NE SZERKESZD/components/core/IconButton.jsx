import React from "react";

/** Icon-only button (rail toggles, close, nav). Square with rounded/pill radius. */
export function IconButton({
  variant = "ghost",     // "ghost" | "solid" | "outline-light"
  size = "md",           // "sm" | "md" | "lg"
  pill = false,
  label,
  children,
  style,
  ...rest
}) {
  const dim = { sm: 32, md: 40, lg: 48 }[size];
  const ic = { sm: 16, md: 20, lg: 22 }[size];

  const variants = {
    ghost: { background: "transparent", color: "var(--ecoteq-navy)", border: "1px solid transparent" },
    solid: { background: "var(--ecoteq-navy)", color: "var(--ecoteq-white)", border: "1px solid transparent" },
    "outline-light": { background: "transparent", color: "var(--ecoteq-white)", border: "1px solid rgba(255,255,255,0.45)" },
  }[variant];

  const cls = `eco-iconbtn-${variant}`;
  return (
    <>
      <style>{`
        .${cls}:hover { ${
          variant === "ghost" ? "background:var(--color-bg-subtle);"
          : variant === "solid" ? "background:var(--navy-600);"
          : "background:var(--color-accent);border-color:var(--color-accent);"
        } }
      `}</style>
      <button
        className={cls}
        aria-label={label}
        title={label}
        style={{
          width: dim, height: dim,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
          cursor: "pointer",
          transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
          ...variants, ...style,
        }}
        {...rest}
      >
        <span style={{ display: "inline-flex", width: ic, height: ic }}>{children}</span>
      </button>
    </>
  );
}
