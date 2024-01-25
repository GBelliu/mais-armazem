import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
