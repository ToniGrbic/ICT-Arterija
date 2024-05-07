import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RegistrationProvider } from "./providers/RegistrationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </React.StrictMode>
);
