import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "success" | "warning" | "danger" | "info" | "neutral";
}

/** Status badge — colored dot + label, tinted background. */
export function Badge(props: BadgeProps): JSX.Element;
