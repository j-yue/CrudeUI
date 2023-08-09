import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  //additional styles to inject
  styles?: string;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
body {
  margin: 0;
  font-family: 'Zilla Slab', serif;
}

${(props) => props.styles}
`;
