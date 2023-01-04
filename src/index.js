import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import Counter from "./counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
