import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { stroller } from "../data/Stroller";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer"


const StrollerPage = () => {
  const [priceFilter, setPriceFilter] = useState("all");
const navigate = useNavigate();
  // ✅ Filter logic
  const filtered = stroller.filter((p) => {
    if (priceFilter === "all") return true;
    if (priceFilter === "0-500") return p.price <= 500;
    if (priceFilter === "500-1000") return p.price > 500 && p.price <= 1000;
    if (priceFilter === "1000+") return p.price > 1000;
    return true;
  });
 const handleBuyNow = (product) => {
  const existing = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingIndex = existing.findIndex(item => item.title === product.title);

  if (existingIndex !== -1) {
    existing[existingIndex].quantity += 1; // Default increment by 1
  } else {
existing.push({
  ...product,
  title: product.name, // ✅ ensure 'title' is stored
  quantity: 1,
});  }

  localStorage.setItem("cartItems", JSON.stringify(existing));
  navigate("/cart");
};
  return (
    <>
    <Navbar />
    <section className="max-w-7xl mx-auto px-4 py-10 font-[Poppins]">
      {/* Breadcrumb */}
      <div className="text-sm font-bold text-black-400 mb-6">
        Home &gt; Products &gt; <span className="font-semibold">Stroller</span>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#E3F8FF] p-4 rounded-lg mb-8 shadow">
        <h2 className="text-lg font-bold">Filter Products</h2>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-[#00B4D8] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
        >
          <option value="all">All Prices</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000+">₹1000+</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="relative border border-[#B0E4F4] rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* NEW Badge */}
            {product.isNew && (
              <span className="absolute top-0 left-0 bg-[#00B4D8] text-black px-3 py-1 text-sm font-semibold rounded-br-lg">
                NEW
              </span>
            )}

            {/* Image Section */}
            <div className="flex justify-center items-center bg-white p-4 h-52">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Curved Bottom Section */}
            {/* Curved Bottom Section */}
<div className="relative">
  {/* Curved Bottom Section */}
  <div
    className="bg-[#B0E4F4] p-5"
    style={{
      clipPath: "polygon(0 0, 60% 0, 100% 50%, 100% 100%, 0 100%)"
    }}
  >
    <h3 className="font-bold text-lg mb-1">{product.name}</h3>

    {/* Stars */}
    <div className="text-yellow-600 mb-1 font-bold">
      {"★".repeat(product.rating)}
      {"☆".repeat(5 - product.rating)}
    </div>

    {/* Price */}
    <div className="mb-2">
      <span className="font-bold text-gray-500 line-through mr-2">
        MRP ₹{product.mrp}
      </span>
      <span className="font-bold">Price ₹{product.price}</span>
    </div>
  </div>

  {/* Buy Button OUTSIDE clipPath */}
  <button 
  onClick={() => handleBuyNow(product)}
  className="absolute font-bold top-0 right-2 bg-[#00B4D8] text-black px-4 py-1 rounded-full shadow-lg hover:bg-[#009bbd] transition">
    Buy
  </button>
</div>


          </div>
        ))}
      </div>
    </section>
    <Pagination />
    <Footer />
    </>
  );
};

export default StrollerPage;
