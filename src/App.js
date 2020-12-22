import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Check from "./check";

function App() {
  const image = "hello.jpg";
  return (
    <div className="App">
      <Home image />
      <Check image />
    </div>
  );
}

export default App;
