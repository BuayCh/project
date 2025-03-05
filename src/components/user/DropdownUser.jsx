import { dropdownUser } from "@/utils/links";
import { AlignLeft, UserIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Logout from "../form/Logout";


function DropdownUser() {
  return (
    <div className="dropdown dropdown-bottom ">
      <button className="btn">
        <AlignLeft />
        <UserIcon />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
      >
        {dropdownUser.map((Item, index) => {
          return (
            <li key={index}>
              <Link to={Item.href}>{Item.label}{Item.icon}</Link>
            </li>
            
          );
        })}
        
          <li>
            <Logout />
          </li>
          
      </ul>
    </div>
  );
}

export default DropdownUser;
