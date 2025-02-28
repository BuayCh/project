import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav>
      <div className="flex flex-col items-center sm:justify-between py-4 px-8 sm:flex-row gap-4">
        <Logo />
        <Searchbar />
        <Dropdown />
      </div>
    </nav>
  );
}

export default Navbar;
