import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user); // For debugging
      alert(`Welcome, ${result.user.displayName || "User"}!`);
      navigate("/"); // Redirect to HomePage
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Failed to log in with Google. Please try again.");
    }
  };

  const handleEmailLogin = async () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Info:", result.user); // For debugging
      alert(`Welcome back, ${result.user.email || "User"}!`);
      navigate("/"); // Redirect to HomePage
    } catch (error) {
      console.error("Email login error:", error.message);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md text-center border border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 mb-4"
        >
          Login with Google
        </button>
        <button
          onClick={handleEmailLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login with Email
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
