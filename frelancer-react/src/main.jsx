import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./normalize.css"

const root = createRoot(document.getElementById("root"));

import App from "./componentes/app";


root.render(
    <App />
);
