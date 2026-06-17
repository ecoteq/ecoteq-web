import React from "react";
import { Tag } from "./Tag.jsx";

/**
 * Product card — photo with navy wash + category tag, title, short copy,
 * and a green "read more" affordance. Composes Tag.
 */
export function ProductCard({
  image,
  category,
  title,
  description,
  cta = "Részletek",
  onClick,
  style,
  ...rest
}) {
  return (
    <>
      <style>{`
        .eco-pcard { display:flex; flex-direction:column; background:var(--color-surface);
          border:1px solid var(--color-border); border-radius:var(--radius-lg); overflow:hidden;
          cursor:pointer; transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard); }
        .eco-pcard:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); border-color:var(--color-border-strong); }
        .eco-pcard:hover .eco-pcard-img { transform:scale(1.05); }
        .eco-pcard:hover .eco-pcard-cta { gap:12px; }
      `}</style>
      <div className="eco-pcard" onClick={onClick} style={style} {...rest}>
        <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
          <div
            className="eco-pcard-img"
            style={{
              position: "absolute", inset: 0,
              background: image ? `url(${image}) center/cover` : "repeating-linear-gradient(115deg,#3a4a5a 0 22px,#33424f 22px 44px)",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "var(--overlay-navy)" }} />
          {category && <div style={{ position: "absolute", left: 16, bottom: 16 }}><Tag>{category}</Tag></div>}
        </div>
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: "var(--fs-h4)", fontWeight: 700, color: "var(--color-text)" }}>{title}</h3>
          {description && <p style={{ margin: 0, fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--lh-snug)" }}>{description}</p>}
          <span className="eco-pcard-cta" style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-accent)", fontWeight: 700, fontSize: "var(--fs-sm)", transition: "gap var(--dur-base) var(--ease-standard)" }}>
            {cta} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </>
  );
}
