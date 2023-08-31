import { CrudeUI } from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";
import add from "./public/icons/add.svg";
import search from "./public/icons/search.svg";
function App() {
  const { ThemeProvider, AspectRatio, Heading, Text, Icon } = CrudeUI;
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
        <Icon src={add} size="md" />
        <Icon src={add} size="sm" />
        <Icon src={search} size="md" />
        <Icon src={search} size="sm" />
      </main>
    </ThemeProvider>
  );
}

export default App;
