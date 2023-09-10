<div align="center">
   <img src="https://raw.githubusercontent.com/j-yue/CrudeUI/main/crude.png" alt="Crude UI, React UI Kit with neobrutalist aesthetic.">
</div>

<h1 align="center">Crude UI</h1>

**Crude UI** is a wip implementation of the Crude Design System by Shaunak Anil Bhanarkar that features foundational components with a neubrutalist aesthetic. It uses styled-components to implement a theme system, grid system, responsive typography, text input with error handling, and other responsive components.

- [Crude Design System - Neubrutalism](https://www.figma.com/community/file/1239679378684173808) design system this UI Kit is based on, by Shaunak Anil Bhanarkar.
- [NPM page](https://www.npmjs.com/package/crude-ui)

## Installation

```bash
npm i crude-ui
```

## Using Components

```jsx
import { Heading } from "crude-ui";

function App() {
  return <Heading as="h1" variant={2} text="Hello World!" />;
}
```

## Theming

Crude UI comes with a wrapper for styled-component's ThemeProvider that passes a default theme based on the Crude Design System. Crude components need to be nested in a ThemeProvider component to be styled.

```jsx
import { ThemeProvider } from "crude-ui";

function App() {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

Design tokens can be accessed by importing the default theme

```jsx
import { defaultTheme } from "crude-ui";
```

The theme can also be accessed with styled-components

```jsx
import { styled } from "styled-components";

const ErrorMessage = styled.p`
  color: ${({ theme: { colors } }) => colors.error[0]};
`;
```

## Documentation

Wip storbook
