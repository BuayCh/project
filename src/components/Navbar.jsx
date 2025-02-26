import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav>
      <div className="flex flex-col items-center sm:justify-between py-4 px-8 sm:flex-row gap-4">
        <Logo />
        <h1>Searchbar</h1>
        <h1>Profile</h1>
      </div>
    </nav>
  );
}

export default Navbar;
