import React from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert(`Welcome, ${result.user.displayName}!`);
    } catch (error) {
      console.error("Google login error:", error.message);
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
      alert(`Welcome back, ${result.user.email}!`);
    } catch (error) {
      console.error("Email login error:", error.message);
      alert("Login failed. Please check your credentials.");
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
