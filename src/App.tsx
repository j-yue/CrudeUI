import { CrudeUI } from "./CrudeUI";

function App() {
  const { Heading, Text, ThemeProvider } = CrudeUI;

  return (
    <ThemeProvider>
      <main>
        <Heading />
        <Text />
      </main>
    </ThemeProvider>
  );
}

export default App;
