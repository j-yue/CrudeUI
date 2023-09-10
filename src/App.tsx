import {
  ThemeProvider,
  AspectRatio,
  Heading,
  Text,
  Icon,
  Link,
  Button,
  Fab,
  Input,
  Grid,
  Cell,
} from "./CrudeUI";
import placeholder from "./public/images/placeholder.png";
import AddIcon from "./CrudeUI/components/Icon/SvgIcons/AddIcon";
import CloseIcon from "./CrudeUI/components/Icon/SvgIcons/CloseIcon";
import MailIcon from "./CrudeUI/components/Icon/SvgIcons/MailIcon";

function App() {
  const gridDimensions = [
    [1, 11],
    [2, 10],
    [3, 9],
    [4, 8],
    [5, 7],
    [6, 6],
    [7, 5],
    [8, 4],
    [9, 3],
    [10, 2],
    [11, 1],
  ];

  const rand = () => 100 + Math.ceil(Math.random() * 100);
  const cells = () =>
    gridDimensions.map((pair) => {
      return (
        <Cell key={pair[0]} columnSpan={1}>
          <div
            style={{
              width: rand() + "px",
              height: rand() + "px",
            }}
          >
            {pair[0]}
          </div>
        </Cell>
      );
    });
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
        <Fab icon={<CloseIcon />} handleClick={() => console.log("fab")} />
        <Button>Default props on button</Button>
        <Input
          label="email"
          leadingIcon={<MailIcon />}
          message="Helper text that can extend up to a maximum of 2 lines"
          error="Error text that can extend up to a maximum of 2 lines"
          placeholder="Placeholder"
          triggerError={(_value) => _value == "email"}
        />

        <Grid>{cells()}</Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
