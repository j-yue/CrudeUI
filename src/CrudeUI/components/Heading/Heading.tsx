import { styled } from "styled-components";
import {
  generateResponsiveFontStyles,
  getDesktopBreakpoint,
} from "../../utilities/styleHelpers";
import { Theme } from "../../types";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface StyledHeadingProps {
  /** heading appearance */
  $variant?: HeadingLevel;
}

export interface HeadingProps {
  /** heading element that will be rendered */
  as?: HeadingTag;
  /** text to render */
  text?: string;
  /** heading appearance */
  variant?: HeadingLevel;
}

const generateStyleRules = (variant: HeadingLevel, theme: Theme) => {
  const { small, large } = theme.typography.heading;

  if ("1" in small && "1" in large) {
    return generateResponsiveFontStyles(
      small[variant],
      large[variant],
      getDesktopBreakpoint(theme)
    );
  }
};

const StyledHeading = styled.div<StyledHeadingProps>`
  ${({ $variant = 1, theme }) => generateStyleRules($variant, theme)}
`;

export function Heading({
  as = "h1",
  variant = 1,
  text = "Heading 1",
}: HeadingProps) {
  const Tag = as;
  return (
    <Tag style={{ margin: 0 }}>
      <StyledHeading $variant={variant}>{text}</StyledHeading>
    </Tag>
  );
}
