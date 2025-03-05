import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { resizeFile } from "@/utils/resizeimage";
import { uploadImage } from "@/api/uploadfile";
import { useAuth } from "@clerk/clerk-react";


function FormUploadImage({setValue}) {
   const{getToken}= useAuth()
  const hdlOnChange = async (e) => {
    const token = await getToken()
    console.log(token)
      const file = e.target.files[0];
    if (!file) return;
    try {
      const resizedImage = await resizeFile(file);
      const res = await uploadImage(token,resizedImage);
      console.log(res.data.result);
      setValue('image', res.data.result)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div>
        <Input type="file" onChange={hdlOnChange} />
      </div>
    </div>
  );
}

export default FormUploadImage;
