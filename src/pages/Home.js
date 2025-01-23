import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-2">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 text-center">
        <h1 className="text-4xl font-serif">
          One stop solution for all carefully curated earthenware.
        </h1>
      </div>

      {/* Scrolling Gray Placeholder Images */}
      <div className="mt-4 overflow-hidden relative">
        <div
          className="flex animate-scroll whitespace-nowrap hover:animate-slow-scroll"
          style={{ animation: "scroll 35s linear infinite" }}
        >
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 1</span>
          </div>
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 2</span>
          </div>
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 3</span>
          </div>
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 4</span>
          </div>
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 5</span>
          </div>
          <div className="bg-gray-300 w-96 h-48 mx-2 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Placeholder 6</span>
          </div>
        </div>
        {/* <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes slow-scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .hover:animate-slow-scroll:hover {
            animation: slow-scroll 40s linear infinite;
          }
          `}
        </style> */}
      </div>

      {/* First Section: Text Left, Image Right */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-6 px-2">
        {/* Left Section: Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Created with love and care in India.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            All items are made with love, using the potter’s wheel or
            traditional techniques.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Timeless style.</li>
            <li>Earthy, organic feel.</li>
            <li>Enduring quality.</li>
            <li>Unique, one-of-a-kind pieces.</li>
          </ul>
        </div>

        {/* Right Section: Gray Image Placeholder */}
        <div className="lg:w-1/2">
          <div className="bg-gray-300 w-full h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Image Placeholder</span>
          </div>
        </div>
      </div>

      {/* Second Section: Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 mt-10 px-2">
        {/* Left Section: Gray Image Placeholder */}

        {/* Right Section: Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Timeless Elegance for Your Home.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our products bring a touch of sophistication to any space, combining
            traditional craftsmanship with modern design.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Perfect for any occasion.</li>
            <li>Handcrafted by skilled artisans.</li>
            <li>Designed to last a lifetime.</li>
            <li>Inspired by nature's beauty.</li>
          </ul>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-gray-300 w-full h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Image Placeholder</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">Sample Product 1</div>
          <div className="p-4 border rounded shadow">Sample Product 2</div>
          <div className="p-4 border rounded shadow">Sample Product 3</div>
          <div className="p-4 border rounded shadow">Sample Product 4</div>
          <div className="p-4 border rounded shadow">Sample Product 5</div>
          <div className="p-4 border rounded shadow">Sample Product 6</div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 text-white py-2 mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between px-8">
          <div className="text-sm"> 🇮🇳 Made in India</div>
          <div className="text-sm text-center sm:text-base">
            Artisan: Handcrafted with Love 🌱
          </div>
          <div className="text-sm sm:text-base">
            © {new Date().getFullYear()} Artisan |{" "}
            <Link to="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
