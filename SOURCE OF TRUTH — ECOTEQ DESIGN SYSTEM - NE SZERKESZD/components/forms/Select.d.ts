import * as React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Option list (strings or {value,label}); or pass <option> children. */
  options?: (string | SelectOption)[];
}

/** Styled native select — matches Input; used in product filters. */
export function Select(props: SelectProps): JSX.Element;
