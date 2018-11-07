import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="container">
      <h1 className>Welcome to Nest.</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
