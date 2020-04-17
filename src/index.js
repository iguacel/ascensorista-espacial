import React from "react";
import ReactDOM from "react-dom";
import "./styles/entry.css";
import App from "./App";

class RasterGridElement extends HTMLElement { }
class RasterCellElement extends HTMLElement { }
window.customElements.define("r-grid", RasterGridElement, { extends: "div" });
window.customElements.define("r-cell", RasterCellElement, { extends: "div" });

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
