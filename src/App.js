import React from "react";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/zeeshan-akhter/vervebridge-weather-app/">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.github.com/zeeshan-akhter">
          Zeeshan Akhter
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
