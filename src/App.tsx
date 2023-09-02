import { CrudeUI } from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";
import AddIcon from "./CrudeUI/components/Icon/SvgIcons/AddIcon";
function App() {
  const { ThemeProvider, AspectRatio, Heading, Text, Icon, Link, Button } =
    CrudeUI;

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

        <br />
        <Button
          size="sm"
          iconPosition="none"
          state="default"
          variant="primary"
          handleClick={() => console.log("you clicked button 1")}
        >
          el button
        </Button>

        <Button
          size="lg"
          iconPosition="trailing"
          state="default"
          variant="secondary"
          icon={<AddIcon />}
          handleClick={() => console.log("you clicked button 2")}
        >
          el button
        </Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
