import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/firebase-context.tsx";
import { FontSizeProvider } from "./context/font-size-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <FirebaseProvider>
        <FontSizeProvider>
          <App />
        </FontSizeProvider>
      </FirebaseProvider>
    </React.StrictMode>
  </BrowserRouter>
);
