import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Forminputs({register, name, type, placeholder}) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize font-bold" >{name}</Label>
      <Input
       {...register("name")} 
       type={type} 
       placeholder={placeholder}/>
    </div>
  );
}

export default Forminputs;
