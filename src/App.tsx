import "./App.scss";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="app-container">
      <Input placeholder="Search..." leftIcon="🔍" size="lg" />
      <Input placeholder="Search..." rightIcon="🔍" size="md" />
    </div>
  );
}

export default App;
