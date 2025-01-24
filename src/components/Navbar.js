import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";

function Navbar() {
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("You have been logged out.");
      setShowDropdown(false);
      navigate("/"); // Redirect to HomePage
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

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
        <Link to="/home-decor" className="hover:cursor-pointer">
          Home Decor
        </Link>
        <Link to="/kitchen-ware" className="hover:cursor-pointer">
          Kitchen Ware
        </Link>
      </div>

      {/* Right Section: Profile Icon and Cart */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span>Hi, {user.name.split(" ")[0]}</span>
            </div>
            {showDropdown && (
              <div className="absolute top-full right-0 bg-white text-black p-4 rounded shadow-lg mt-2">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaUserCircle className="text-2xl cursor-pointer" />
          </Link>
        )}
        <Link to="/cart" className="hover:cursor-pointer">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
