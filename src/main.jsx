import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx"; // ✅ correct path now

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
