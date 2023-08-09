//font weight, font size, line height
// export type FontStyle = [weight: number, size: string, height: string];
export type FontStyle = {
  weight: number;
  size: string;
  height: string;
};

// headings have levels 1-6, most other types have 2 emphasis levels
export type HeadingScale = "1" | "2" | "3" | "4" | "5" | "6";
export type ContentScale = "high" | "regular";

export type Heading = {
  [Scale in HeadingScale]: FontStyle;
};

export type Content = {
  [Scale in ContentScale]: FontStyle;
};

export const headingSm: Heading = {
  1: {
    weight: 700,
    size: "3rem",
    height: "3.75rem",
  },
  2: {
    weight: 700,
    size: "2.5rem",
    height: "3rem",
  },
  3: {
    weight: 600,
    size: "2.25rem",
    height: "2.75rem",
  },
  4: {
    weight: 600,
    size: "2rem",
    height: "2.5rem",
  },
  5: {
    weight: 600,
    size: "1.75rem",
    height: "2.25rem",
  },
  6: {
    weight: 600,
    size: "1.5rem",
    height: "2rem",
  },
};

export const headingLg: Heading = {
  1: {
    weight: 700,
    size: "5rem",
    height: "6rem",
  },
  2: {
    weight: 700,
    size: "4.25rem",
    height: "5.25rem",
  },
  3: {
    weight: 600,
    size: "3.75rem",
    height: "4.5rem",
  },
  4: {
    weight: 600,
    size: "3.25rem",
    height: "4rem",
  },
  5: {
    weight: 600,
    size: "2.75rem",
    height: "3.25rem",
  },
  6: {
    weight: 600,
    size: "2.25rem",
    height: "2.75rem",
  },
};

export const titleSm: Content = {
  high: { weight: 600, size: "1.25rem", height: "1.75rem" },
  regular: { weight: 400, size: "1.25rem", height: "1.75rem" },
};

export const titleLg: Content = {
  high: { weight: 600, size: "1.75rem", height: "2.25rem" },
  regular: { weight: 400, size: "1.75rem", height: "2.25rem" },
};

export const substitleSm: Content = {
  high: { weight: 600, size: "1.125rem", height: "1.5rem" },
  regular: { weight: 400, size: "1.125rem", height: "1.5rem" },
};

export const subtitleLg: Content = {
  high: { weight: 600, size: "1.5rem", height: "2rem" },
  regular: { weight: 400, size: "1.5rem", height: "2rem" },
};

export const buttonSm: FontStyle = {
  weight: 700,
  size: "1.125rem",
  height: "1.5rem",
};

export const buttonLg: FontStyle = {
  weight: 700,
  size: "1.5rem",
  height: "2rem",
};

export const captionSm: Content = {
  high: { weight: 600, size: "1rem", height: "1.25rem" },
  regular: { weight: 400, size: "1rem", height: "1.25rem" },
};
export const captionLg: Content = {
  high: { weight: 600, size: "1.25rem", height: "1.5rem" },
  regular: { weight: 400, size: "1.25rem", height: "1.5rem" },
};

export type Font = {
  /** name of primary font */
  primary: string;
  /** name of genric fallback font */
  generic: string;
};
