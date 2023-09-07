import { styled } from "styled-components";

interface WrapperProps {
  /** width in number of columns */
  $width: number;
}

/**
 * width of column = 100% width - [(num columns * column width) + gutter * (num columns - 1)]
 */
const Wrapper = styled.div<WrapperProps>`
  --columnNum: ${({ $width }) => $width};
  --width: calc(var(--columnNum) * var(--columnWidth));
  --gutterAdjustment: calc(var(--gutter) * calc(var(--columnNum) - 1));
  --adjustedWidth: calc(var(--width) + var(--gutterAdjustment));
  flex-basis: var(--adjustedWidth);
`;

interface ColumnProps {
  /** width in number of columns */
  width?: number;
  /** chilren */
  children: React.ReactNode;
}

export default function Column({ width = 1, children }: ColumnProps) {
  return <Wrapper $width={width}>{children}</Wrapper>;
}
