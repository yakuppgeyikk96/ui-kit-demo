import "./App.scss";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="app-container">
      <h1>UI Kit Demo - Button Component</h1>

      {/* Button test */}
      <div className="button-test">
        <h2>Button Component Test</h2>

        <Button variant="secondary" onClick={() => console.log("clicked")}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
