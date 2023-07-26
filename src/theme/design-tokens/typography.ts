//font weight, font size, line height
type FontStyle = [weight: number, size: string, height: string];

// headings have levels 1-6, most other types have 2 emphasis levels
type HeadingScale = "1" | "2" | "3" | "4" | "5" | "6";
type ContentScale = "high" | "regular";

type Heading = {
  [Scale in HeadingScale]: FontStyle;
};

type Content = {
  [Scale in ContentScale]: FontStyle;
};

export const headingSm: Heading = {
  1: [700, "3rem", "3.75rem"],
  2: [700, "2.5rem", "3rem"],
  3: [600, "2.25rem", "2.75rem"],
  4: [600, "2rem", "2.5rem"],
  5: [600, "1.75rem", "2.25rem"],
  6: [600, "1.5rem", "2rem"],
};

export const headingLg: Heading = {
  1: [700, "5rem", "6rem"],
  2: [700, "4.25rem", "5.25rem"],
  3: [600, "3.75rem", "4.5rem"],
  4: [600, "3.25rem", "4rem"],
  5: [600, "2.75rem", "3.25rem"],
  6: [600, "2.25rem", "2.75rem"],
};

export const titleSm: Content = {
  high: [600, "1.25rem", "1.75rem"],
  regular: [400, "1.25rem", "1.75rem"],
};

export const titleLg: Content = {
  high: [600, "1.75rem", "2.25rem"],
  regular: [400, "1.75rem", "2.25rem"],
};

export const substitleSm: Content = {
  high: [600, "1.125rem", "1.5rem"],
  regular: [400, "1.125rem", "1.5rem"],
};

export const subtitleLg: Content = {
  high: [600, "1.5rem", "2rem"],
  regular: [400, "1.5rem", "2rem"],
};

export const buttonSm: FontStyle = [700, "1.125rem", "1.5rem"];

export const buttonLg: FontStyle = [700, "1.5rem", "2rem"];

export const captionSm: Content = {
  high: [600, "1rem", "1.25rem"],
  regular: [400, "1rem", "1.25rem"],
};
export const captionLg: Content = {
  high: [600, "1.25rem", "1.5rem"],
  regular: [400, "1.25rem", "1.5rem"],
};
