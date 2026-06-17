import * as React from "react";

/**
 * Primary action button. The green pill is the signature "Ajánlat kérés" CTA.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = green capsule CTA; secondary = navy; ghost = text; outline-light = on dark bg. */
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  /** Fully-rounded capsule (default, the signature ECOTEQ shape) vs 8px radius. */
  pill?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
