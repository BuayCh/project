import { SignOutButton } from "@clerk/clerk-react";
import React from "react";
import "react-hook-toast/dist/style.css";
import { toast } from "react-toastify";

function SignOutLink() {
  const hdlLogout = () => {
    return toast.error('Logout Success')
  };
  return (
    <div>
      <SignOutButton  redirectUrl='/'>
        <button onClick={hdlLogout}>Logout</button>
      </SignOutButton>
    </div>
  );
}

export default SignOutLink;
