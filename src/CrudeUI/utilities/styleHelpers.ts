//helper functions to generate styles for styled components based on theme
import { FontStyle } from "../theme/design-tokens/typography";
import { Theme } from "../types";

function getBreakpoint(theme: Theme, breakpoint: string) {
  return theme.screens[breakpoint];
}

export function getDesktopBreakpoint(theme: Theme) {
  return getBreakpoint(theme, "large");
}

export function responsiveWrapper(minWidth: string, innerString: string) {
  return `@media (min-width: ${minWidth}) {\n\t${innerString};\n}`;
}

export function generateResponsiveStyles(
  mobileRules: string,
  desktopRules: string,
  minWidth: string
) {
  return `${mobileRules}\n${responsiveWrapper(minWidth, desktopRules)}`;
}

export function fontStyleToCSS(fontStyle: FontStyle) {
  const { weight, size, height } = fontStyle;
  return [
    `font-weight: ${weight};`,
    `font-size: ${size};`,
    `line-height: ${height};`,
  ].join(`\n`);
}

export function generateResponsiveFontStyles(
  mobileFont: FontStyle,
  desktopFont: FontStyle,
  minWidth: string
) {
  return generateResponsiveStyles(
    fontStyleToCSS(mobileFont),
    fontStyleToCSS(desktopFont),
    minWidth
  );
}

export function typeGuard(obj: object, property: string) {
  return obj[property as keyof typeof obj];
}
