import { CrudeUI } from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";

function App() {
  const { AspectRatio, Heading, Text, ThemeProvider } = CrudeUI;
  return (
    <ThemeProvider>
      <main>
        <Heading />
        <Text />
        <AspectRatio
          ratio={{ width: 16, height: 9 }}
          src={placeholder}
          alt="placeholder image"
        />
      </main>
    </ThemeProvider>
  );
}

export default App;
