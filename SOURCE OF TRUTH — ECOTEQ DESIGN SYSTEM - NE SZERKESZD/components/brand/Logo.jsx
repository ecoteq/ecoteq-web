import React from "react";

/**
 * ECOTEQ logo lockup — geometric mark + ExtraBold wordmark.
 * The mark is inline SVG (no asset path needed); color follows `tone`.
 */
export function Logo({
  tone = "navy",        // "navy" | "white" | "green" | "mono-white"
  size = 32,
  showWordmark = true,
  href,
  style,
  ...rest
}) {
  // Two-tone mark: bars in `primary`, accent dot in `accent`.
  const palette = {
    navy:         { primary: "var(--ecoteq-navy)",  accent: "var(--ecoteq-green)" },
    white:        { primary: "var(--ecoteq-white)", accent: "var(--ecoteq-green)" },
    green:        { primary: "var(--ecoteq-green)", accent: "var(--ecoteq-green)" },
    "mono-white": { primary: "var(--ecoteq-white)", accent: "var(--ecoteq-white)" },
  }[tone] || { primary: "var(--ecoteq-navy)", accent: "var(--ecoteq-green)" };

  const wordColor = (tone === "white" || tone === "mono-white") ? "var(--ecoteq-white)" : "var(--ecoteq-navy)";
  const markW = size * (910.44 / 959.21); // preserve aspect ratio

  const mark = (
    <svg width={markW} height={size} viewBox="0 0 910.44 959.21" aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <g fill={palette.primary}>
        <ellipse cx="88.03" cy="478.31" rx="89.21" ry="86.82" transform="translate(-311.4 200.85) rotate(-44.79)" />
        <path d="M707.17,346.21l-380.94,377.87c-33.93,33.93-88.95,33.93-122.89,0h0c-33.93-33.93-33.93-88.95,0-122.89l380.94-377.87c33.93-33.93,88.95-33.93,122.89,0h0c33.93,33.93,33.93,88.95,0,122.89Z" />
        <path d="M701.74,720.19l-218.74,215.57c-35.04,32.8-90.03,30.98-122.82-4.06h0c-32.8-35.04-30.98-90.03,4.06-122.82l218.74-215.57c35.04-32.8,90.03-30.98,122.82,4.06h0c32.8,35.04,30.98,90.03-4.06,122.82Z" />
        <path d="M544.1,150.09l-217.83,216.48c-34.9,32.94-89.9,31.35-122.84-3.54h0c-32.94-34.9-31.35-89.9,3.54-122.84L424.81,23.7c34.9-32.94,89.9-31.35,122.84,3.54h0c32.94,34.9,31.35,89.9-3.54,122.84Z" />
      </g>
      <g fill={palette.accent}>
        <ellipse cx="822.41" cy="480.01" rx="89.21" ry="86.82" transform="translate(-99.44 718.68) rotate(-44.79)" />
      </g>
    </svg>
  );

  const inner = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: Math.round(size * 0.42),
        ...style,
      }}
      {...rest}
    >
      {mark}
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: size * 0.86,
            letterSpacing: "var(--ls-wordmark)",
            color: wordColor,
            lineHeight: 1,
          }}
        >
          ECOTEQ
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none", display: "inline-flex" }}>
        {inner}
      </a>
    );
  }
  return inner;
}
