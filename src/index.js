import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import {
  Section_landing,
  Section_photos,
  Section_buttons,
  Section_forms,
} from "./components/sections";
import "./css/style.css";

function App() {
  return (
    <div>
      <Navigation />
      <Section_landing />
      <Section_photos />
      <Section_buttons />
      <Section_forms />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
