import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "green" | "navy" | "subtle" | "outline-light";
  size?: "sm" | "md";
  /** All-caps + tracked (default) vs sentence case. */
  uppercase?: boolean;
  icon?: React.ReactNode;
}

/** Pill category tag / label — the green pill is the signature "LOREM IPSUM" badge. */
export function Tag(props: TagProps): JSX.Element;
