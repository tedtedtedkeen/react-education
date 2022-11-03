import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.scss";
import { DataProvider } from "./store/DataProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);