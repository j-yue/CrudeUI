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

*, *::before, *::after {
  box-sizing: border-box;
}

button {
  background-color: transparent;
  border: none;
  font: inherit;
  padding: 0;
}

${(props) => props.styles}
`;
