import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation";
import {
  Section_landing,
  Section_photos,
  Section_buttons,
  Section_forms,
  Section_achievements,
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
      <Section_achievements title="Test" fetchUrl="users/random_user" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
