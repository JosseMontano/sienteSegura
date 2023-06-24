import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Formu from "./Formu";
import Login from "./login";
import Register from "./register";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Contactos from "./contactos";
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
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/contactos"} element={<Contactos />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
