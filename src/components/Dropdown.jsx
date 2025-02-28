import React from "react";
import { AlignLeft } from "lucide-react";
import UserIcon from "./UserIcon";
import { links } from "../utils/links";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import Register from "../pages/auth/Register";

function Dropdown() {
  return (
    <div className="dropdown dropdown-bottom ">
      <button className="btn">
        <AlignLeft />
        <UserIcon />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow"
      >
        {links.map((Item, index) => {
          return (
            <li key={index}>
              <Link to={Item.href}>{Item.label}</Link>
            </li>
          );
        })}
        <li>
          <SignedOut>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </SignedOut>
        </li>
        <li>
          <SignUpButton mode="modal">
            <button>Register</button>
          </SignUpButton>
        </li>

        <SignedIn>
          <li>
            {/* <UserButton /> */}
            <SignOutButton />
          </li>
        </SignedIn>
      </ul>
    </div>
  );
}

export default Dropdown;
