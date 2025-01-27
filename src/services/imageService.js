import axios from "axios";

// Upload Image
export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axios.post(
    "http://localhost:5001/images/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data; // Returns { imageUrl: "Cloudinary URL" }
};

// Fetch Images
export const fetchImages = async () => {
  const response = await axios.get("http://localhost:5001/images");
  return response.data; // Array of image URLs
};
