import React from "react";

export default function Navigation() {
  const clickhandler = () => {
    alert("hello world");
  };
  const clickhandler2 = (name) => {
    alert(name);
  };
  const data = "Neil";
  return (
    <div className="navbar">
      <div className="navbar-content">
        <li>text</li>
        {/* as ref or as inline func */}
        <button type="button" onClick={clickhandler}>
          Pass by reference
        </button>
        <button type="button" onClick={() => alert("Inline function")}>
          Inline Function
        </button>
        <button
          type="button"
          onClick={() => {
            clickhandler2(data);
          }}>
          Invoke data once clicked
        </button>
      </div>
    </div>
  );
}
