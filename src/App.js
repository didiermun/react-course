import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Check from "./check";
import Login from "./components/login/Login";

function App() {
  const image = "hello.jpg";
  return (
    <div className="App">
      {/* <Home image />
      <Check image />
       */}
      <Login />
    </div>
  );
}

export default App;
