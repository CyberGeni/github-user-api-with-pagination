import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ErrorBoundary FallbackComponent={Error}>
        <App />
      </ErrorBoundary>
  </React.StrictMode>
)
