import React from "react";
import { Overline } from "./Overline.jsx";

/** Section heading block: overline + display heading + optional lead paragraph. */
export function SectionHeading({
  overline,
  title,
  lead,
  align = "left",
  tone = "light",       // "light" | "dark"
  as: Tag = "h2",
  style,
  ...rest
}) {
  const titleColor = tone === "dark" ? "var(--ecoteq-white)" : "var(--color-text)";
  const leadColor = tone === "dark" ? "rgba(255,255,255,0.78)" : "var(--color-text-secondary)";
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        maxWidth: 640,
        ...style,
      }}
      {...rest}
    >
      {overline && <Overline>{overline}</Overline>}
      <Tag
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "var(--fs-h2)",
          lineHeight: "var(--lh-heading)",
          letterSpacing: "var(--ls-heading)",
          color: titleColor,
        }}
      >
        {title}
      </Tag>
      {lead && (
        <p style={{ margin: 0, fontSize: "var(--fs-lg)", lineHeight: "var(--lh-body)", color: leadColor }}>
          {lead}
        </p>
      )}
    </header>
  );
}
