import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

function Navbar() {
  const { cart } = useCart();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and SignUp
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
    <nav className="bg-gray-900 font-serif p-4 text-white flex items-center justify-between">
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
      <div className=" flex space-x-8">
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
          <div
            onClick={() => setShowModal(true)} // Open modal
            className="cursor-pointer"
          >
            <FaUserCircle className="text-2xl" />
          </div>
        )}
        <Link to="/cart" className="hover:cursor-pointer">
          Cart ({cart.length})
        </Link>
      </div>

      {/* Login/SignUp Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)} // Close modal
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {isLogin ? (
              <div>
                <LoginPage />
                <p className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  <span
                    onClick={() => setIsLogin(false)} // Switch to SignUp
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <SignUpPage />
                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLogin(true)} // Switch to Login
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    Log In
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
