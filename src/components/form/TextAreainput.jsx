import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function TextAreainput ({register, name, type, placeholder}) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize font-bold" >{name}</Label>
      <Textarea
       {...register("name")} 
       rows={5}
       type={type} 
       placeholder={placeholder}/>
    </div>
  );
}

export default TextAreainput;
