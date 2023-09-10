import { ReactNode } from "react";
import { styled } from "styled-components";

interface GridProps {
  children: ReactNode;
  /** column count for layout; 12 for 12 column layout */
  columnCount: number;
  /** left and right padding */
  paddingX: string;
  /** top and bottom padding */
  paddingY: string;
  /** gap between rows*/
  gutterRow: string;
  /** gap between columns */
  gutterColumn: string;
}

interface StyledGridProps {
  $columnCount: number;
  $paddingX: string;
  $paddingY: string;
  /** gap between rows*/
  $gutterRow: string;
  /** gap between columns */
  $gutterColumn: string;
}

const StyledGrid = styled.div<StyledGridProps>`
  ${({ $columnCount, $paddingX, $paddingY, $gutterRow, $gutterColumn }) => {
    return `
      --columnCount: ${$columnCount};
      --paddingX: ${$paddingX}; 
      --paddingY: ${$paddingY}; 
      padding: ${$paddingY} ${$paddingX};
      display: grid;
      grid-template-columns: repeat(var(--columnCount), 1fr);
      gap: var(--gutter);
      column-gap: ${$gutterColumn};
      row-gap: ${$gutterRow};
    `;
  }}
`;

export default function Grid({
  columnCount = 4,
  paddingX = "1rem",
  paddingY = "1rem",
  gutterColumn = "1rem",
  gutterRow = "1rem",
  children,
}: GridProps) {
  return (
    <StyledGrid
      $columnCount={columnCount}
      $paddingX={paddingX}
      $paddingY={paddingY}
      $gutterColumn={gutterColumn}
      $gutterRow={gutterRow}
    >
      {children}
    </StyledGrid>
  );
}
