import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import PrivateRoutes from "./utilities/PrivateRoute.jsx";
import AdminHome from "./pages/admin/Home.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminAbout from "./pages/admin/AdminAbout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AdminProjects" element={<AdminProjects />} />
          <Route path="/AdminAbout" element={<AdminAbout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
