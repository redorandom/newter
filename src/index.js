import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
