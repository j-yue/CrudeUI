//icon is aspect ratio image with 1:1 dimensions
//default is that it is a decorative icon, so empty alt
import { styled } from "styled-components";

type IconSizes = "sm" | "md";

interface IconProps {
  /** size of icon */
  size: IconSizes;
  /** image or svg to be used as icon */
  children: React.ReactNode;
}

type ImgContainerProps = {
  size: IconSizes;
};

const IconContainer = styled.span<ImgContainerProps>`
  ${({ size }) => {
    const width = size === "sm" ? "1.5rem" : "2rem";
    return `
      color: inherit;
      display: inline-block;
      width: ${width};
      height: ${width};
    `;
  }}
`;

export default function Icon({ size = "sm", children }: IconProps) {
  return <IconContainer size={size}>{children}</IconContainer>;
}
