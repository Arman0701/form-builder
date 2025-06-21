import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import "@styles/index.css";
import { Provider } from "react-redux";
import { store } from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
