import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import { useSelector } from "react-redux";
import NotFound from "../customers/pages/NotFound/NotFound";
import AdminRouters from "./AdminRouters";

const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <>
      <Routes>
        <Route path="/super-admin/*" element={<SuperAdmin />} />
        <Route path="/admin/restaurant/*" element={<AdminRouters />} />
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
};

export default Routers;
