import { createGlobalStyle } from "styled-components";

interface IGlobalStyle {
  // string representation of theme that is ready to be injected as css variables
  themeStr: string;
}

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
:root {
 ${(props) => props.themeStr}
`;
