import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(0); // Reset quantity after adding to cart
    } else {
      alert("Please select a quantity to add to cart.");
    }
  };

  return (
    <div className="border rounded shadow relative p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-bold text-center mb-4">{product.name}</h2>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={decrement}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            onClick={increment}
            className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
