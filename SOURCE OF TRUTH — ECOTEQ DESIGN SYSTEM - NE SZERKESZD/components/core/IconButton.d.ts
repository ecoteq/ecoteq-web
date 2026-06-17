import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "solid" | "outline-light";
  size?: "sm" | "md" | "lg";
  /** Fully-rounded vs 8px radius. */
  pill?: boolean;
  /** Accessible label (aria-label + title). */
  label?: string;
}

/** Square icon-only button. Pass an icon node as children. */
export function IconButton(props: IconButtonProps): JSX.Element;
