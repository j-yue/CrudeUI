export type Breakpoint = {
  // min width breakpoint
  [key: string]: string;
};

export const screens: Breakpoint = {
  // mobile first
  // min width
  small: "390px",
  // breakpoint where components switch to larger stylers
  large: "1512px",
};
