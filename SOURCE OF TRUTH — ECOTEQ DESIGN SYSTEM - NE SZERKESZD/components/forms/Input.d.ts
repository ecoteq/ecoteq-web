import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message; turns the field red and overrides hint. */
  error?: React.ReactNode;
  /** Leading icon node. */
  icon?: React.ReactNode;
}

/** Labelled text input with green focus ring. */
export function Input(props: InputProps): JSX.Element;
