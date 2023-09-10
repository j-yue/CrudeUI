import { styled } from "styled-components";
import { ReactNode } from "react";
import Icon from "../Icon/Icon";
import BorderShadow from "../BorderShadow/BorderShadow";
import {
  generateResponsiveStyles,
  fontStyleToCSS,
  typeGuard,
} from "../../utilities/styleHelpers";
import { Theme, genericFunction } from "../../types";

export type variant = "primary" | "secondary" | "tertiary";
export type icon = ReactNode;
export type size = "sm" | "md" | "lg";

//did not implement 'loading' state
interface ButtonProps {
  /** button size */
  size?: size;
  /** icon position */
  iconPosition?: "none" | "leading" | "trailing";
  /** pass icon as child */
  icon?: icon;
  /** button state */
  state?: "default" | "disabled";
  /** variant color */
  variant?: variant;
  /** onClick event handler */
  handleClick?: genericFunction;
  /** text to render */
  children: ReactNode;
}

interface StyledButtonProps {
  size: size;
  $variant: variant;
}

const padding = {
  sm: {
    mobile: ".5rem 1.5rem",
    desktop: "1rem 2rem",
  },
  md: {
    mobile: "1rem 2rem",
    desktop: "1.5rem 4rem",
  },
  lg: {
    mobile: "1.5rem 4rem",
    desktop: "2rem 6rem",
  },
};

const generateStyleRules = (size: size, variant: variant, theme: Theme) => {
  //extract needed values from theme
  const {
    colors,
    border: { small },
    typography: { button },
    screens,
  } = theme;
  const { mobile, desktop } = padding[size];
  const colorTheme = colors[variant];
  const colorDefault =
    variant === "tertiary" ? colorTheme[100] : colorTheme[50];
  const colorEmphasis =
    variant === "tertiary" ? colorTheme[80] : colorTheme[30];
  const colorOutline = colors.outline[0];
  const { small: fontSmall, large: fontLarge } = button;

  const borderThin = typeGuard(small, "default");
  const borderThick = typeGuard(small, "emphasis");

  //form base CSS rules
  const mobileRules = `
    --padding: ${mobile};
    --color: ${colorDefault};
    --colorOutline: ${colorOutline};
    --borderWidth: ${borderThin};
    ${"weight" in fontSmall ? fontStyleToCSS(fontSmall) : ""}
    letter-spacing: 0.05625rem;
    display: flex;
    gap: .5rem;
    background-color: var(--color);
    padding: var(--padding);
    border: var(--borderWidth) solid var(--colorOutline);

    &:hover {
      --color: ${colorEmphasis};
      cursor: pointer;
    }

    &:active {
      --color: ${colorEmphasis};
      --borderWidth: ${borderThick};
    }

    &:disabled {
      --color: ${colors.tertiary[0]};
      cursor: not-allowed;
    }

    &:disabled::before {
      border: none;
    }
  `;

  //values that change on larger screen
  const desktopRules = `
    --padding: ${desktop};
    --borderWidth: ${borderThick};
    ${"weight" in fontLarge ? fontStyleToCSS(fontLarge) : ""}
    letter-spacing: 0.075rem;
  `;

  return generateResponsiveStyles(mobileRules, desktopRules, screens.large);
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ size, $variant, theme }) => {
    return generateStyleRules(size, $variant, theme);
  }}
`;

export default function Button({
  size = "sm",
  iconPosition = "none",
  icon = null,
  state = "default",
  variant = "primary",
  handleClick = () => console.log("button pressed"),
  children = "button",
}: ButtonProps) {
  const ButtonIcon = () => <Icon>{icon}</Icon>;
  return (
    <BorderShadow elevation={2} thickness="default">
      <StyledButton
        size={size}
        $variant={variant}
        onClick={handleClick}
        disabled={state === "disabled"}
      >
        {iconPosition === "leading" && <ButtonIcon />}
        {state === "default" && children}
        {iconPosition === "trailing" && <ButtonIcon />}
      </StyledButton>
    </BorderShadow>
  );
}
