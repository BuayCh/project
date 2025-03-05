import React from "react";
import Logo from "../Logo";
import Searchbar from "../Searchbar";
import DropdownUser from "./DropdownUser";

function NavUser() {
  return (
    <nav>
      <div className="flex flex-col items-center sm:justify-between py-4  sm:flex-row gap-4">
        <Logo />
        <Searchbar />
        
        <DropdownUser />
      </div>
    </nav>
  );
}

export default NavUser;
