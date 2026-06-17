import * as React from "react";

/**
 * Overline + display heading + lead, the standard ECOTEQ section opener.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Eyebrow label rendered as an Overline. */
  overline?: React.ReactNode;
  /** Main heading text. */
  title: React.ReactNode;
  /** Optional lead paragraph under the title. */
  lead?: React.ReactNode;
  align?: "left" | "center";
  /** Color mode — "dark" for navy/photo backgrounds. */
  tone?: "light" | "dark";
  /** Heading element to render. */
  as?: keyof JSX.IntrinsicElements;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
