import React from "react";
import "./App.css";
import Count from "./components/Count";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
      </header>
    </div>
  );
}

export default App;
