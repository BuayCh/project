import NavUser from "@/components/user/NavUser";
import React from "react";
import { Outlet } from "react-router";

function LayoutUser() {
  return (
      <main className="container ">
       <NavUser />
        <hr />
        <Outlet />
      </main>
  );
}

export default LayoutUser;
