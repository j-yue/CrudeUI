import { CrudeUI } from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";
import AddIcon from "./CrudeUI/components/Icon/SvgIcons/AddIcon";
function App() {
  const { ThemeProvider, AspectRatio, Heading, Text, Icon, Link } = CrudeUI;

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

        <Link trailingIcon href="/" text="El Link">
          <Icon>
            <AddIcon />
          </Icon>
        </Link>
      </main>
    </ThemeProvider>
  );
}

export default App;
