import { styled } from "styled-components";

//component sets up css variables from props that Column uses to calculate width and margin

interface GridProps {
  /** number of columns in grid, defaults to 4 */
  columnCount?: number;
  /** padding-left/right value, defaults to 4rem */
  paddingX?: string;
  /** padding-top/bottom value, defaults to 4rem */
  paddingY?: string;
  /** desired gutter size in CSS units, defaults to .5rem */
  gutter?: string;
  /** children */
  children: React.ReactNode;
}

interface WrapperProps {
  $paddingX: string;
  $paddingY: string;
  $gutter: string;
  $columnCount: number;
}

//gap will add the gutter between rows
//variables gutter and columnWidth will be used to calculate column width in column component
const Wrapper = styled.div<WrapperProps>`
  --padding-x: ${({ $paddingX }) => $paddingX};
  --padding-y: ${({ $paddingY }) => $paddingY};
  --gutter: ${({ $gutter }) => $gutter};
  --columnCount: ${({ $columnCount }) => $columnCount};
  --gutterCount: calc(var(--columnCount) - 1);
  --totalGutter: calc(var(--gutterCount) * var(--gutter));
  --remainingWidth: calc(100% - var(--totalGutter));
  --columnWidth: calc(var(--remainingWidth) / var(--columnCount));
  display: flex;
  flex-flow: row wrap;
  padding: var(--padding-y) var(--padding-x);
  gap: var(--gutter);
  width: 100%;
`;

export default function Grid({
  columnCount = 4,
  paddingX = "4rem",
  paddingY = "4rem",
  gutter = ".5rem",
  children,
}: GridProps) {
  return (
    <Wrapper
      $paddingX={paddingX}
      $paddingY={paddingY}
      $gutter={gutter}
      $columnCount={columnCount}
    >
      {children}
    </Wrapper>
  );
}
