import { styled } from "styled-components";

interface RowProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: var(--gutter);
  width: 100%;
`;

export default function Row({ children }: RowProps) {
  return <Wrapper>{children}</Wrapper>;
}
