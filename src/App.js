import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HomeDecor from "./pages/HomeDecor";
import Cart from "./pages/Cart";
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
          <Route path="/home-decor" element={<HomeDecor />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
