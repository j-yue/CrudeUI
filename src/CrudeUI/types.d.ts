import { Theme } from "./theme/theme";
//button types
import { variant, icon, size } from "./components/Button";

//types from shadow and border components
import { Elevation } from "./components/Shadow/Shadow";
import { Thickness } from "./components/Border/Border";

//type for a function with unknown arguments and unknown return
type genericFunction = (...args: unknown[]) => unknown;

export { Theme, variant, icon, size, Elevation, Thickness, genericFunction };
