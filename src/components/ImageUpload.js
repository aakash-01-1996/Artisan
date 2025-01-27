import React, { useState } from "react";
import { uploadImage, fetchImages } from "../services/imageService";

function ImageUpload() {
  const [image, setImage] = useState(null); // Stores the selected file
  const [uploadedImage, setUploadedImage] = useState(null); // Stores the uploaded image URL
  const [gallery, setGallery] = useState([]); // Stores all uploaded images
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle file selection
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await uploadImage(image);
      setUploadedImage(response.imageUrl); // Set the uploaded image URL
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch gallery images
  const loadGallery = async () => {
    try {
      const images = await fetchImages();
      setGallery(images);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Upload and View Images</h1>

      {/* File Input and Upload Button */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleUpload}
          disabled={isLoading}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {isLoading ? "Uploading..." : "Upload Image"}
        </button>
      </div>

      {/* Display Uploaded Image */}
      {uploadedImage && (
        <div className="my-4">
          <h2 className="text-xl font-semibold">Uploaded Image:</h2>
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-64 h-64 object-cover mt-2 rounded shadow"
          />
        </div>
      )}

      {/* Gallery Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Gallery:</h2>
        <button
          onClick={loadGallery}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
        >
          Load Gallery
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded ${index}`}
              className="w-full h-40 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
