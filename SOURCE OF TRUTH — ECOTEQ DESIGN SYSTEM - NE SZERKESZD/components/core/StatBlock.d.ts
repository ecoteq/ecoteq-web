import * as React from "react";

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big figure, e.g. "98" or "15". */
  value: React.ReactNode;
  /** Caption under the figure. */
  label: React.ReactNode;
  /** Accent unit shown beside the value, e.g. "%" or "+". */
  suffix?: React.ReactNode;
  tone?: "light" | "dark";
  rule?: boolean;
  align?: "left" | "center";
}

/** Headline metric — ExtraBold figure + label, green accent rule. */
export function StatBlock(props: StatBlockProps): JSX.Element;
