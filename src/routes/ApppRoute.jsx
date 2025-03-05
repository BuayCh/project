import Layout from "@/Layouts/Layout";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ProtectRoute from "./ProtectRoute";
import { Route, Routes } from "react-router";
import HomeUser from "@/pages/user/HomeUser";
import Contact from "@/pages/Contact";
import Albums from "@/pages/Albums";
import LayoutUser from "@/Layouts/LayoutUser";
import Logout from "@/components/form/Logout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="albums" element={<Albums />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private */}
        <Route
          path="user"
          element={<ProtectRoute el={<LayoutUser />} allows={["USER", "ADMIN"]} />}
        >
          <Route index element={<HomeUser />} />
          <Route path="logout" element={<Logout />} />
          
        </Route>

        <Route
          path="admin"
          element={<ProtectRoute el={<LayoutAdmin />} allows={["ADMIN"]} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
