import { CrudeUI } from "./CrudeUI";

function App() {
  const { Button, Fab, Theme } = CrudeUI;

  return (
    <Theme>
      <main>
        <h1>Crude UI</h1>
        <Button />
        <Fab />
      </main>
    </Theme>
  );
}

export default App;
