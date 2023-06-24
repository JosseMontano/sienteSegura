import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./login";
import Register from "./register";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />

        <Route path="*" element={<p>Page no found</p>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
