import React, { useState } from "react"; // Import React and useState
import PropTypes from "prop-types"; // Optional: If you want to add prop type validation

function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="border rounded shadow relative p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-6">This is a beautiful handcrafted item.</p>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
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
      </div>
    </div>
  );
}

// Optional: Add PropTypes for type checking
ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
