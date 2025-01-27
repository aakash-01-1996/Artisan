const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/products.json");

// Helper to read/write JSON file
const readProducts = () => JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

const writeProducts = (products) =>
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));

// GET all products
// GET all products without the price field
router.get("/", (req, res) => {
  const products = readProducts();
  const productsWithoutPrice = products.map(({ id, name, image }) => ({
    id,
    name,
    image,
  }));
  res.json(productsWithoutPrice);
});

// POST a new product
router.post("/", (req, res) => {
  const products = readProducts();
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

// PUT (update) a product
router.put("/:id", (req, res) => {
  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === +req.params.id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products[productIndex] = { ...products[productIndex], ...req.body };
  writeProducts(products);
  res.json(products[productIndex]);
});

// DELETE a product
router.delete("/:id", (req, res) => {
  const products = readProducts();
  const filteredProducts = products.filter((p) => p.id !== +req.params.id);
  writeProducts(filteredProducts);
  res.json({ message: "Product deleted successfully" });
});

module.exports = router;
