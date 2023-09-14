import { styled } from "styled-components";
import { Theme } from "../../types";

import {
  generateResponsiveFontStyles,
  getDesktopBreakpoint,
  typeGuard,
} from "../../utilities/styleHelpers";

export type TextType = "title" | "subtitle" | "caption";
export type EmphasisLevel = "high" | "regular";

export interface StyledTextProps {
  /** appearance */
  type?: TextType;
  /** variant */
  $emphasis?: EmphasisLevel;
}

export interface TextProps {
  /** appearance */
  type?: TextType;
  /** variant */
  emphasis?: EmphasisLevel;
  /** text to render */
  text?: string;
}

const generateStyles = (
  theme: Theme,
  type: TextType,
  emphasis: EmphasisLevel
) => {
  const { small, large } = theme.typography[type];
  return generateResponsiveFontStyles(
    typeGuard(small, emphasis),
    typeGuard(large, emphasis),
    getDesktopBreakpoint(theme)
  );
};

const StyledText = styled.p<StyledTextProps>`
  ${({ type = "subtitle", $emphasis = "regular", theme }) =>
    generateStyles(theme, type, $emphasis)}
`;

export function Text({
  type = "subtitle",
  emphasis = "regular",
  text = "Regular subtitle text",
}: TextProps) {
  return (
    <StyledText type={type} $emphasis={emphasis}>
      {text}
    </StyledText>
  );
}
