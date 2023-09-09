import { styled } from "styled-components";
import {
  typeGuard,
  generateResponsiveStyles,
} from "../../utilities/styleHelpers";

export type Elevation = 0 | 1 | 2 | 3;

interface StyledShadowProps {
  $elevation: Elevation;
}

interface ShadowProps {
  elevation: Elevation;
  children: React.ReactNode;
}

const StyledShadow = styled.div<StyledShadowProps>`
  ${({
    theme: {
      colors: { outline },
      elevation,
      screens,
    },
    $elevation,
  }) => {
    const { x, y } = typeGuard(elevation[$elevation], "small");

    const mobileRules = `
      --x-offset: ${x};
      --y-offset: ${y};
      display: inline-block;
      box-shadow: var(--x-offset) var(--y-offset) 0 0 ${outline[0]};
    `;

    const { x: xDesktop, y: yDesktop } = typeGuard(
      elevation[$elevation],
      "large"
    );
    const desktopRules = `
      --x-offset: ${xDesktop};
      --y-offset: ${yDesktop};
    `;

    return generateResponsiveStyles(mobileRules, desktopRules, screens.large);
  }}
`;

export default function Shadow({ elevation, children }: ShadowProps) {
  return <StyledShadow $elevation={elevation}>{children}</StyledShadow>;
}
