import { CrudeUI } from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";
import SearchIcon from "./CrudeUI/components/Icon/SvgIcons/SearchIcon";

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
        <Icon size="md">
          <SearchIcon />
        </Icon>
      </main>
    </ThemeProvider>
  );
}

export default App;
