import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import LayoutAdmin from "../Layouts/LayoutAdmin";
import Manage from "../pages/admin/Manage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/admin/Dashboard";
import Layout from "../Layouts/Layout";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Publice */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* Private */}
      <Route path="admin" element={<LayoutAdmin />}>
        
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
