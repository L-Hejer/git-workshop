import logo from "./logo.svg";
import "./App.css";
import { Comp3 } from "./Components/Comp3";
import Comp1 from "./Components/Comp1";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Comp3 />
      <Comp1 />
    </div>
  );
}

export default App;
