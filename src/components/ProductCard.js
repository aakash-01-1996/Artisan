import React from 'react';
import { useCart } from '../contexts/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded shadow-lg p-4 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;