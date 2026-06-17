import React from "react";

/**
 * Outlined contact chip (email / phone) — the signature rail pill.
 * On dark backgrounds it shows a translucent-white stroke + green icon,
 * and fills green on hover (per the DS interaction note).
 */
export function ContactPill({
  icon,
  children,
  href,
  tone = "dark",        // "dark" (on navy) | "light" (on white)
  style,
  ...rest
}) {
  const cls = "eco-contact-" + tone;
  const isDark = tone === "dark";
  return (
    <>
      <style>{`
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
      `}</style>
      <a className={cls} href={href} style={style} {...rest}>
        {icon && <span className="eco-contact-ic">{icon}</span>}
        {children}
      </a>
    </>
  );
}
