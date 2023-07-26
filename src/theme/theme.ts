import {
  amethyst,
  heliodor,
  onyx,
  alabaster,
  jasper,
  amber,
  emerald,
  carnelian,
  citrine,
  peridot,
  rhodochrosite,
} from "./design-tokens/colors";

import {
  headingSm,
  headingLg,
  titleSm,
  titleLg,
  substitleSm,
  subtitleLg,
  buttonSm,
  buttonLg,
  captionSm,
  captionLg,
} from "./design-tokens/typography";

import { borderSm, borderLg } from "./design-tokens/border";

import {
  surface,
  levelOneSm,
  levelOneLg,
  levelTwoSm,
  levelTwoLg,
  levelThreeSm,
  levelThreeLg,
} from "./design-tokens/elevation";

export const theme = {
  screens: {
    // mobile first
    // min width
    small: "390px",
    // breakpoint where components switch to larger stylers
    large: "1512px",
  },

  colors: {
    amethyst,
    heliodor,
    onyx,
    alabaster,
    jasper,
    amber,
    emerald,
    carnelian,
    citrine,
    peridot,
    rhodochrosite,
  },

  typography: {
    font: {
      primary: "Zilla Slab",
      primaryUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Zilla+Slab:wght@400;600;700&display=swap",
      generic: "serif",
    },
    heading: {
      small: headingSm,
      large: headingLg,
    },
    title: {
      small: titleSm,
      large: titleLg,
    },
    subtitle: {
      small: substitleSm,
      large: subtitleLg,
    },
    button: {
      small: buttonSm,
      large: buttonLg,
    },
    caption: {
      small: captionSm,
      large: captionLg,
    },
  },

  border: {
    // border thickness
    small: borderSm,
    large: borderLg,
  },

  elevation: {
    surface,
    1: {
      small: levelOneSm,
      large: levelOneLg,
    },
    2: {
      small: levelTwoSm,
      large: levelTwoLg,
    },
    3: {
      small: levelThreeSm,
      large: levelThreeLg,
    },
  },
};
