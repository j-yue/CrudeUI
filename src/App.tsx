import {
  ThemeProvider,
  Grid,
  Cell,
  Heading,
  CrudeTheme,
  Button,
  Text,
} from "./CrudeUI";

const bgColor = CrudeTheme.colorList.citrine[100];

export default function App() {
  return (
    <>
      <ThemeProvider styles={`body {background-color: ${bgColor}};`}>
        <Grid columnCount={2}>
          <Cell columnSpan={2}>
            <Heading as="h1" variant={1} text="Crude UI" />
          </Cell>
          <Cell columnSpan={2}>
            <Text
              type="subtitle"
              text="Crude UI is an implementation of the Crude Design System by Shaunak Anil Bhanarkar that features foundational components with a neubrutalist aesthetic. It uses styled-components to implement a theme system, grid system, responsive typography, text input with error handling, and other responsive components."
            />
          </Cell>
          <Cell columnSpan={1}>
            <Button variant="primary">Primary</Button>
          </Cell>
          <Cell columnSpan={1}>
            <Button variant="secondary">Secondary</Button>
          </Cell>
        </Grid>
      </ThemeProvider>
    </>
  );
}
