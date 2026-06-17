import * as React from "react";

export interface ContactPillProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Leading icon node (e.g. Lucide Mail / Phone). */
  icon?: React.ReactNode;
  /** "dark" for the navy rail (default), "light" on white surfaces. */
  tone?: "dark" | "light";
}

/** Outlined contact chip (email / phone). Fills green on hover. */
export function ContactPill(props: ContactPillProps): JSX.Element;
