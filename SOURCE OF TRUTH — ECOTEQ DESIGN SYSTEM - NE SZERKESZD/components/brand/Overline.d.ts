import * as React from "react";

export interface OverlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the leading short rule. */
  rule?: boolean;
  /** Text/rule color (defaults to brand green). */
  color?: string;
}

/** Small all-caps tracked label with the signature green rule. */
export function Overline(props: OverlineProps): JSX.Element;
