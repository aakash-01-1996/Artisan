import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-200 py-4 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Left: Logo */}
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">Logo </span>
          </div>

          {/* Middle: Navigation and Search */}
          <div className="flex flex-1 items-center justify-between mx-4">
            <nav className="flex space-x-4 text-md font-medium">
              <a href="#" className="hover:text-gray-700 hover:underline hover:font-bold">
                Shop by Interests
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline hover:font-bold ">
                Explore
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline hover:font-bold">
                Collections
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline hover:font-bold">
                Shop by Trends
              </a>
            </nav>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Looking for something?"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>

          {/* Right: Camera and Pizza Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            📸 + 🍕
          </button>
        </div>
      </header>

      {/* Image Section */}
      <div className="w-full h-[500px] bg-gray-100 flex justify-center items-center">
        <img
          src="https://via.placeholder.com/1200x300?text=Promotional+Banner&bg=gray" // Replace with your image path
          alt="Promotional Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid Section */}
      <main className="flex-grow bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 px-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-[500px] bg-white shadow-md rounded-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/500?text=Item+${index + 1}`} // Replace with actual image URLs
                alt={`Item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-200 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <p className="text-sm text-gray-600">Copyright © 2024</p>
          <p className="text-sm text-gray-600 hover:underline">
            Artisan: From Heart to Home
          </p>
          <input
            type="email"
            placeholder="tejas@gmail.com"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
