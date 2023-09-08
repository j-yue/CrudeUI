import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  //additional styles to inject
  styles?: string;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
body {
  margin: 0;
  font-family: ${({
    theme: {
      font: { primary, generic },
    },
  }) => `${primary}, ${generic}`};
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

input {
  font-family: inherit;
  border: none;
  border-radius: 0;
}

input:focus {
  outline: none;
}

p {
  margin: 0;
}

${(props) => props.styles}
`;
