import React from "react";
import { AlignLeft } from "lucide-react";
import UserIcon from "./UserIcon";
import { dropdownLink } from "../utils/links";
import { Link } from "react-router";
import Logout from "./form/Logout";


function Dropdown() {
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
        {dropdownLink.map((Item, index) => {
          return (
            <li key={index}>
              <Link to={Item.href}>{Item.label}{Item.icon}</Link>
            </li>
          );
        })}
        

          
      </ul>
    </div>
  );
}

export default Dropdown;
