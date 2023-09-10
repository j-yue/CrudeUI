import { ReactNode } from "react";
import { styled } from "styled-components";

interface CellProps {
  children: ReactNode;
  /** column span - width in columns cell should be, defaults to 1 */
  columnSpan?: number;
}

interface StyledCellProps {
  /** column span - width in columns cell should be */
  $columnSpan?: number;
}

const StyledCell = styled.div<StyledCellProps>`
  ${({ $columnSpan }) => `grid-column: span ${$columnSpan};`}
`;

export default function Cell({ children, columnSpan }: CellProps) {
  return <StyledCell $columnSpan={columnSpan}>{children}</StyledCell>;
}
