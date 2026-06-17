import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover lift + pointer for clickable cards. */
  interactive?: boolean;
  /** Inner padding in px. */
  padding?: number;
}

/** Generic white surface card with cool navy-tinted shadow. */
export function Card(props: CardProps): JSX.Element;
