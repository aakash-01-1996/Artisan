import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../contexts/CartContext";

function HomeDecor() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Handcrafted Vase",
          image: "/vase.jpg",
          category: "Home Decor",
        },
        {
          id: 2,
          name: "Wall Art",
          image: "/wall-art.jpg",
          category: "Home Decor",
        },
        {
          id: 3,
          name: "Table Lamp",
          image: "/table-lamp.jpg",
          category: "Home Decor",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Discover Our Home Decor
      </h1>

      {/* Banner Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        {/* Left Section: Banner Image */}
        <div className="lg:w-1/2">
          <img
            src="/home-decor-banner.jpg" // Replace with your actual banner image URL
            alt="Home Decor Banner"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Connected to Nature</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our home decor collection is crafted with love and care, inspired by
            the beauty of the earth. Each piece brings warmth, elegance, and a
            touch of nature into your home.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Eco-friendly materials</li>
            <li>Handcrafted by skilled artisans</li>
            <li>Unique and timeless designs</li>
            <li>Perfect for every corner of your home</li>
          </ul>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeDecor;
