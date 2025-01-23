import React from "react";
import { useCart } from "../contexts/CartContext";
import axios from "axios";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = async () => {
    const response = await axios.post("http://localhost:5000/send-email", {
      cart,
    });
    alert(response.data.message);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex justify-between items-center">
                <span>
                  {item.name} - ${item.price}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mt-6"
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
