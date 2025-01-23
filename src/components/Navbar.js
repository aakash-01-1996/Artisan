import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const { cart } = useCart();
  const [showHomeDecorDropdown, setShowHomeDecorDropdown] = useState(false);
  const [showKitchenWareDropdown, setShowKitchenWareDropdown] = useState(false);

  const homeDecorProducts = [
    { id: 1, name: "Wall Art" },
    { id: 2, name: "Vases" },
    { id: 3, name: "Table Lamps" },
  ];

  const kitchenWareProducts = [
    { id: 4, name: "Plates" },
    { id: 5, name: "Bowls" },
    { id: 6, name: "Mugs" },
  ];

  return (
    <nav className="bg-zinc-600 p-4 text-white flex items-center justify-between">
      {/* Left Section: Logo and Name */}
      <div className="flex items-center space-x-6">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </Link>
        <Link to="/" className="text-2xl font-serif hover:cursor-pointer">
          Artisan
        </Link>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex space-x-8">
        <div className="relative">
          <Link
            to="/home-decor"
            className="hover:cursor-pointer"
            onMouseEnter={() => setShowHomeDecorDropdown(true)}
            onMouseLeave={() => setShowHomeDecorDropdown(false)}
          >
            Home Decor
          </Link>
          {showHomeDecorDropdown && (
            <div className="absolute top-8 left-0 bg-white text-black shadow-lg p-4 rounded">
              {homeDecorProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="block hover:bg-gray-200 p-2"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Link
            to="/kitchen-ware"
            className="hover:cursor-pointer"
            onMouseEnter={() => setShowKitchenWareDropdown(true)}
            onMouseLeave={() => setShowKitchenWareDropdown(false)}
          >
            Kitchen Ware
          </Link>
          {showKitchenWareDropdown && (
            <div className="absolute top-8 left-0 bg-white text-black shadow-lg p-4 rounded">
              {kitchenWareProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="block hover:bg-gray-200 p-2"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Profile Icon and Cart */}
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <FaUserCircle className="text-2xl cursor-pointer" />
        </Link>
        <Link to="/cart" className="hover:cursor-pointer">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
