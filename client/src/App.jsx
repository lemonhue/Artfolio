import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import PrivateRoutes from "./utilities/PrivateRoute.jsx";
import AdminHome from "./pagegs/admin/Home.jsx";
import AdminProjects from "./pagegs/admin/Projects.jsx";
import AdminAbout from "./pagegs/admin/About.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
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
