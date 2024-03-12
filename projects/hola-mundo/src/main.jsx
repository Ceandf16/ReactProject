import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
/*  Nombre de los components
PascalCase -> Atributos
camelCase  -> Component
snake_case
kebab-case
*/

root.render(<App />);
