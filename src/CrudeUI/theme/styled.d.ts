import {} from "styled-components";
import { Theme } from "../types";

/**
 * Followed Ashok Raju's example at: https://dev.to/rajuashok/create-styled-d-ts-to-make-typescript-work-with-styled-components-5dk4
 * to get rid of compilation error
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
