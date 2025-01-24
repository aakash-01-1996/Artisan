import React from "react";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleIncrement = (productId) => {
    const product = cart.find((item) => item.id === productId);
    updateQuantity(productId, product.quantity + 1);
  };

  const handleDecrement = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded shadow p-4 flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-bold text-center mb-4">
                {item.name}
              </h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
