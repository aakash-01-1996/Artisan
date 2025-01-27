import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import confetti from "canvas-confetti"; // Add confetti for celebration

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [activeTab, setActiveTab] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Group items by category
  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Get only categories with products
  const categories = Object.keys(groupedCart).filter(
    (category) => groupedCart[category].length > 0
  );

  // Set the active tab to the first category with products
  useEffect(() => {
    if (!activeTab && categories.length > 0) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  const handleSubmitOrder = () => {
    // Combine all cart items into a single order summary
    const orderSummary = cart
      .map((item) => `${item.name} (x${item.quantity})`)
      .join(", ");

    // Email details (adjust email address as needed)
    const emailBody = `Order Details:\n\n${orderSummary}\n\nThank you for your order!`;
    const mailToLink = `mailto:your-email@example.com?subject=New Order&body=${encodeURIComponent(
      emailBody
    )}`;

    // Simulate sending an email
    window.location.href = mailToLink;

    // Show confetti and success message
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setOrderSuccess(true);

    // Clear the cart after submission
    clearCart();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {categories.length === 0 ? (
        <p>Your cart is empty. Let's explore.</p>
      ) : (
        <>
          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 ${
                  activeTab === category
                    ? "border-b-2 border-blue-500 font-bold"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeTab && groupedCart[activeTab] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {groupedCart[activeTab].map((item) => (
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
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
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

          {/* Submit Order Button */}
          <div className="text-center">
            <button
              onClick={handleSubmitOrder}
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
            >
              Submit Your Order
            </button>
          </div>

          {/* Success Message */}
          {orderSuccess && (
            <div className="mt-4 text-center text-green-500 font-bold">
              Thank you! Our team will get back to you in 2-3 working days.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
