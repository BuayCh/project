import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <div className="flex flex-col items-center sm:justify-between py-4 px-8 sm:flex-row gap-4">
        <Logo />
     <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
