import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
);
