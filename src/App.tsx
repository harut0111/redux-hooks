import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
