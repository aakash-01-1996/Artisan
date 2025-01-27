require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const productRoutes = require("./routes/products");
const imageRoutes = require("./routes/images");

// Routes
app.use("/products", productRoutes);
app.use("/images", imageRoutes);

// Email endpoint for orders
app.post("/send-email", (req, res) => {
  const { cart } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "aakashambodkar@icloud.com", // Replace with the owner's email
    subject: "New Order",
    text: `You have a new order: \n${cart
      .map((item) => `${item.name} - $${item.price}`)
      .join("\n")}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Order email sent successfully" });
    }
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
