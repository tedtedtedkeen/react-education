import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { DataProvider } from "./store/DataProvider";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);