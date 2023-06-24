import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Formu from "./Formu";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Formu2 from "./Formu2";
import Formu3 from "./Formu3";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/Formu"} element={<Formu />} />
        <Route path={"/Formu2"} element={<Formu2 />} />
        <Route path={"/Formu3"} element={<Formu3 />} />
        <Route path={"/login"} element={<App />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
