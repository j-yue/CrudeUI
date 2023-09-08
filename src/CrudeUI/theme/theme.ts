import { Breakpoint, screens } from "./design-tokens/screens";

import {
  amethyst,
  heliodor,
  alabaster,
  onyx,
  jasper,
  amber,
  emerald,
  carnelian,
  citrine,
  peridot,
  rhodochrosite,
  Color,
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
  Heading,
  Content,
  Font,
  FontStyle,
} from "./design-tokens/typography";

import { borderSm, borderLg, Border } from "./design-tokens/border";

import {
  surface,
  levelOneSm,
  levelOneLg,
  levelTwoSm,
  levelTwoLg,
  levelThreeSm,
  levelThreeLg,
  Elevation,
} from "./design-tokens/elevation";

import { Spacing, spacing } from "./design-tokens/spacing";

type ResponsiveScreens = "small" | "large";

type ResponsiveType = {
  [screen in ResponsiveScreens]:
    | Heading
    | Content
    | FontStyle
    | Border
    | Elevation;
};

type Typography = {
  heading: ResponsiveType;
  title: ResponsiveType;
  subtitle: ResponsiveType;
  button: ResponsiveType;
  caption: ResponsiveType;
};

interface ResponsiveElevationStyle {
  small: Elevation;
  large: Elevation;
}

const colorList = {
  amethyst,
  heliodor,
  alabaster,
  onyx,
  jasper,
  amber,
  emerald,
  carnelian,
  citrine,
  peridot,
  rhodochrosite,
};

type ColorList = {
  [index: string]: Color;
};

export interface Theme {
  screens: Breakpoint;
  spacing: Spacing;
  colors: Record<string, Color>;
  colorList: ColorList;
  font: Font;
  typography: Typography;
  border: ResponsiveType;
  elevation: Record<number, Elevation | ResponsiveElevationStyle>;
}

export const theme: Theme = {
  screens: screens,

  spacing: spacing,

  colors: {
    primary: amethyst,
    secondary: heliodor,
    tertiary: alabaster,
    outline: onyx,
    error: jasper,
  },

  colorList: colorList,

  font: {
    primary: "Zilla Slab",
    generic: "serif",
  },

  typography: {
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
    0: surface,
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
