const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary"); // Import Cloudinary config

const router = express.Router();

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "artisan-uploads", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // Restrict allowed formats
  },
});

const upload = multer({ storage });

// POST: Upload an image to Cloudinary
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.status(201).json({ imageUrl: req.file.path }); // Return the Cloudinary URL
});

// GET: Fetch all images from the Cloudinary folder
router.get("/", async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression("folder:artisan-uploads") // Replace with your folder name
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    const imageUrls = resources.map((file) => file.secure_url);
    res.status(200).json(imageUrls);
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ message: "Failed to fetch images" });
  }
});

module.exports = router;
