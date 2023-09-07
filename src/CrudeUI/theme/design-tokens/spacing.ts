export interface Spacing {
  /** smallest space in design system */
  smallestUnit: string;
  /** base spacing unit */
  baseUnit: string;
  /** margin used for grid system */
  margin: string;
}

export const spacing: Spacing = {
  smallestUnit: ".25rem",
  baseUnit: ".5rem",
  margin: "4rem",
};
