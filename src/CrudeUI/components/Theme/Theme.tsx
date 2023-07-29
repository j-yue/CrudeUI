import { GlobalStyle } from "./GlobalStyle.js";
import flattenTheme from "../../utilities/flattenTheme";
import { theme as defaultTheme } from "../../../theme/theme";

interface ThemeProps {
  theme?: object;
  children?: React.ReactNode;
}

function createThemeStr(theme: object): string {
  const flatTheme = flattenTheme(theme);
  const flatThemeArr = Object.keys(flatTheme).map(
    (key) => `--${key}: ${flatTheme[key]};`
  );

  const flatThemeStr = flatThemeArr.reduce(
    (acc = "", currentValue) => acc + currentValue
  );

  return flatThemeStr;
}

// create css variables from a theme object that is accessible to all children in lieu of using themeprovider/prop drilling
export default function Theme({ theme = defaultTheme, children }: ThemeProps) {
  const flatThemeStr = createThemeStr(theme);
  return (
    <>
      <GlobalStyle themeStr={flatThemeStr} />
      {children}
    </>
  );
}
