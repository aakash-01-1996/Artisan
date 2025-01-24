import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import HomeDecor from "./pages/HomeDecor";
import KitchenWare from "./pages/KitchenWare";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home-decor" element={<HomeDecor />} />
          <Route path="/kitchen-ware" element={<KitchenWare />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
