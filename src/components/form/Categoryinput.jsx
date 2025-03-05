import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { categories } from "@/utils/category";

function Categoryinput({ name, register, setValue }) {
  return (
    <div className="mb-2">
      <Label className="capitalize">{name}</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Please select catagory" />
        </SelectTrigger>

        <SelectContent>
            
        {categories.map((item) => {
          return <SelectItem 
          key={item.label}
          value={item.label}>
            <span className="flex">
                <item.icon/>
                {item.label}
            </span>

          </SelectItem>;
        })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Categoryinput;
