import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Error}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
