import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@styles/index.css";
import { Providers } from "./components/ui/Providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
