import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();
  const isContactPage = location.pathname === "/contact-us";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
      {/* Left Half: Contact Us */}
      <div className="pr-4">
        <h1 className="text-3xl font-serif font-bold mb-6">Contact Us</h1>
        <p className="mb-4 text-gray-700">
          If you have any questions, feel free to reach out using the form
          below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 h-28"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:block w-px bg-black absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

      {/* Right Half: About Us */}
      <div className="pl-4">
        <h1 className="text-3xl font-serif font-bold mb-6">About Us</h1>
        <p className="mb-4 text-gray-700">
          At Artisan, we pride ourselves on creating handcrafted earthenware and
          home decor pieces that bring warmth and elegance to your living space.
        </p>
        <p className="mb-4 text-gray-700">
          Every product is made with love, reflecting the rich tradition and
          craftsmanship of India. We believe in sustainable practices and strive
          to provide you with timeless pieces that are both beautiful and
          functional.
        </p>
        <p className="mb-4 text-gray-700">
          Thank you for supporting our journey of celebrating artistry and
          culture. Feel free to explore our collection and make your home a
          little more special with Artisan.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="mb-4 text-gray-700">
          Co-Founder: Tejas Muralidharan
          <br></br>
          Contact: +91 1234-56789
          <br></br>
          Email: tejas@email.com
          <br></br>
          LinkedIn:
        </p>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full h-px bg-black mt-8 lg:hidden"></div>
    </div>
  );
}

export default ContactUs;
