import { styled } from "styled-components";
import Icon from "../Icon/Icon";
import {
  generateResponsiveStyles,
  fontStyleToCSS,
  typeGuard,
} from "../../utilities/styleHelpers";
import { Theme, genericFunction } from "../../types";
import React from "react";

export type variant = "primary" | "secondary" | "tertiary";
export type icon = React.ReactNode;
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
  children: React.ReactNode;
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
    elevation: { "2": _elevation },
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

  const shadowThin = typeGuard(_elevation, "small")["x"];
  const shadowThick = typeGuard(_elevation, "large")["x"];

  //form base CSS rules
  const mobileRules = `
    --padding: ${mobile};
    --color: ${colorDefault};
    --colorOutline: ${colorOutline};
    --borderWidth: ${borderThin};
    --shadow: ${shadowThin};
    ${"weight" in fontSmall ? fontStyleToCSS(fontSmall) : ""}
    letter-spacing: 0.05625rem;
    display: flex;
    gap: .5rem;
    position: relative;
    background-color: var(--color);
    border: var(--borderWidth) solid var(--colorOutline);
    box-shadow: var(--shadow) var(--shadow) 0px 0px var(--colorOutline);
    padding: var(--padding);

    &:focus::before, &:active::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      border: var(--borderWidth) solid var(--colorOutline);
    }

    &:hover {
      --color: ${colorEmphasis};
    }

    &:active {
      --color: ${colorEmphasis};
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
    --shadow: ${shadowThick};
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
  );
}
