import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../contexts/CartContext";

function KitchenWare() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 4,
          name: "Ceramic Plate",
          image: "/plate.jpg",
          category: "Kitchen Ware",
        },
        {
          id: 5,
          name: "Clay Mug",
          image: "/mug.jpg",
          category: "Kitchen Ware",
        },
        {
          id: 6,
          name: "Earthen Bowl",
          image: "/bowl.jpg",
          category: "Kitchen Ware",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Explore Our Kitchen Ware
      </h1>

      {/* Banner Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 mb-12">
        {/* Right Section: Banner Image */}
        <div className="lg:w-1/2">
          <img
            src="/kitchen-ware-banner.jpg" // Replace with your actual banner image URL
            alt="Kitchen Ware Banner"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">
            Sustainably Crafted for Your Kitchen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our kitchen ware is designed with the environment in mind, using
            natural materials to create products that are both beautiful and
            functional. Bring a touch of the earth into your culinary creations.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Made from eco-friendly clay</li>
            <li>Durable and timeless designs</li>
            <li>Perfect for every meal</li>
            <li>Handcrafted by local artisans</li>
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

export default KitchenWare;
