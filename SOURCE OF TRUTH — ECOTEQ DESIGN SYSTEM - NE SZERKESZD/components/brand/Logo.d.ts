import * as React from "react";

/**
 * ECOTEQ logo lockup.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Mark color. Use "white" on navy/photo backgrounds, "mono-white" on green. */
  tone?: "navy" | "white" | "green" | "mono-white";
  /** Mark size in px; wordmark scales from it. */
  size?: number;
  /** Show the ECOTEQ wordmark beside the mark. */
  showWordmark?: boolean;
  /** Render as a link. */
  href?: string;
}

export function Logo(props: LogoProps): JSX.Element;
