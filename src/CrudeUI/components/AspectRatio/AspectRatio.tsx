import { styled } from "styled-components";
//aspect ratio is expressed as x:y or width:height
//although the design system has defined ratios of 3/2 4/3 1/1 3/4 2/3, it doesn't make sense not to make is modular
type Ratio = {
  width: number;
  height: number;
};

type AspectRatioProps = {
  ratio: Ratio;
  src: string; //img src
  alt?: string; //img alt
};

type StyledImgProps = {
  src: string;
  alt?: string;
};

type StyledImgContainerProps = {
  $ratio: Ratio;
};

const StyledImg = styled.img<StyledImgProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledImgContainer = styled.div<StyledImgContainerProps>`
  position: relative;
  padding-top: ${({ $ratio: { width, height } }) => (100 * height) / width}%;
`;

//use padding-top hack described by Ahmad Shadeed - https://ishadeed.com/article/css-aspect-ratio/
export default function AspectRatio({
  ratio = { width: 1, height: 1 },
  src = "",
  alt = "",
}: AspectRatioProps) {
  return (
    <StyledImgContainer $ratio={ratio}>
      <StyledImg src={src} alt={alt} />
    </StyledImgContainer>
  );
}
