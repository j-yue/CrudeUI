import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { theme as defaultTheme, Theme } from "../../theme/theme";

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
  /** general css styles to add */
  styles?: string;
}

export const CrudeTheme = defaultTheme;

export function ThemeProvider({
  theme = defaultTheme,
  children,
  styles,
}: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle styles={styles} />
      {children}
    </StyledThemeProvider>
  );
}
