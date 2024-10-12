import React from "react";
import ReactDOM from "react-dom/client"; // Make sure the 'DOM' is in uppercase
import WrappedApp from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <WrappedApp />
    </React.StrictMode>
  );