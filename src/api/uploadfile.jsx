import axios from "axios";

export const uploadImage = async (token, form) => {
  return await axios.post("http://localhost:8000/api/images", 
  {image : form}, 
  {
    headers: {
      Authirization: `Bearer ${token}`,
    },
  });
};

