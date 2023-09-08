import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

import {
  generateResponsiveFontStyles,
  getDesktopBreakpoint,
  typeGuard,
} from "../../utilities/styleHelpers";

type TextType = "title" | "subtitle" | "caption";
type EmphasisLevel = "high" | "regular";

interface StyledTextProps {
  /** appearance */
  type?: TextType;
  /** variant */
  $emphasis?: EmphasisLevel;
}

interface TextProps {
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

export default function Text({
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
