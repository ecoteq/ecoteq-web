import * as React from "react";

/**
 * Product / machine card — photo (navy wash) + category tag + title + lead.
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL; falls back to a neutral industrial placeholder. */
  image?: string;
  /** Category pill shown on the image. */
  category?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Read-more affordance label. */
  cta?: React.ReactNode;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
