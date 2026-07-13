import React from "react";
import ReactDOM from "react-dom/client";
import Outlook from "./components/outlook/Outlook.jsx"
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Outlook/>
  </BrowserRouter>,
);
