//icon is aspect ratio image with 1:1 dimensions
//default is that it is a decorative icon, so empty alt
import { styled } from "styled-components";
import { ReactNode } from "react";
import { responsiveWrapper } from "../../utilities/styleHelpers";

interface IconProps {
  /** image or svg to be used as icon */
  children: ReactNode;
}

const setIconDimensions = (size: number) =>
  `width: ${size}rem;\nheight: ${size}rem;`;

const IconContainer = styled.span`
  ${({ theme }) => {
    return `
      color: inherit;
      display: inline-block;
      ${setIconDimensions(1.5)}
      ${responsiveWrapper(theme.screens.large, setIconDimensions(2))}
    `;
  }}
`;

export default function Icon({ children }: IconProps) {
  return <IconContainer>{children}</IconContainer>;
}
