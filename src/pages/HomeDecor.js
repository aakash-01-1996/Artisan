import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function HomeDecor() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // Page state to load more data

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      setTimeout(() => {
        // Simulating API call to fetch products for the current page
        const newProducts = [
          {
            id: page * 1,
            name: `Handcrafted Vase ${page}`,
            image: "/vase.jpg",
          },
          { id: page * 2, name: `Wall Art ${page}`, image: "/wall-art.jpg" },
          {
            id: page * 3,
            name: `Table Lamp ${page}`,
            image: "/table-lamp.jpg",
          },
        ];
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setIsLoading(false);
      }, 1500);
    };

    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    // Check if the user scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Home Decor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isLoading && <div className="text-center mt-4">Loading more...</div>}
    </div>
  );
}

export default HomeDecor;
