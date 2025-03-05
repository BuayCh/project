import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Forminputs({register, name, type, placeholder, errors}) {

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize font-bold" >{name}</Label>
      <Input
       {...register(name)} 
       type={type} 
       placeholder={placeholder}
       className={`${errors[name] && "border-red-500"}`}
       />
       {errors[name]  && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
      }
    </div>
  );
}

export default Forminputs;
