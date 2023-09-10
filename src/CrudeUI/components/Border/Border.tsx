import { styled } from "styled-components";
import { ReactNode } from "react";
import {
  typeGuard,
  generateResponsiveStyles,
} from "../../utilities/styleHelpers";

export type Thickness = "default" | "emphasis";

interface StyledBorderProps {
  $thickness: Thickness;
}

interface BorderProps {
  thickness: Thickness;
  children: ReactNode;
}

const StyledBorder = styled.div<StyledBorderProps>`
  ${({
    theme: {
      colors: { outline },
      border,
      screens,
    },
    $thickness,
  }) => {
    const mobileRules = `
      --border-width: ${typeGuard(border.small, $thickness)};
      display: inline-block;
      border: var(--border-width) solid ${outline[0]};
    `;

    const desktopRules = `
      --border-width: ${typeGuard(border.large, $thickness)};
    `;

    return generateResponsiveStyles(mobileRules, desktopRules, screens.large);
  }}
`;

export default function Border({ thickness, children }: BorderProps) {
  return <StyledBorder $thickness={thickness}>{children}</StyledBorder>;
}
