//icon is aspect ratio image with 1:1 dimensions
//default is that it is a decorative icon, so empty alt
import { styled } from "styled-components";
import AspectRatio from "../AspectRatio/AspectRatio";

type IconSizes = "sm" | "md";

export interface IconProps {
  /** url of image */
  src: string;
  /** alt for image, leave empty if decorative */
  alt?: string;
  /** size of icon */
  size: IconSizes;
}

type ImgContainerProps = {
  size: IconSizes;
};

const IconContainer = styled.span<ImgContainerProps>`
  ${({ size }) => {
    const width = size === "sm" ? "1.5rem" : "2rem";
    return `
      display: inline-block;
      width: ${width};
      height: ${width};
    `;
  }}
`;

export default function Icon({ src, alt = "", size = "sm" }: IconProps) {
  return (
    <IconContainer size={size}>
      <AspectRatio ratio={{ width: 1, height: 1 }} src={src} alt={alt} />
    </IconContainer>
  );
}
