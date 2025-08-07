import React from "react";
import { Link } from "react-router-dom";

import { FiArrowUpRight } from "react-icons/fi";

// 🔹 Replace with your actual image imports
import diaperImg from "../assets/images/featuredproduct1.png";
import dressImg from "../assets/images/featuredproduct5.png";
import soapImg from "../assets/images/featuredproduct3.png";
import strollerImg from "../assets/images/featuredproduct4.png";

const categories = [
  { name: "Diapers & Pampers", image: diaperImg, slug: "pampers" },
  { name: "Baby Dress", image: dressImg, slug: "girls-fashion" },
  { name: "Baby Soap", image: soapImg, slug: "soap" },
  { name: "Baby Stroller & Prams", image: strollerImg, slug: "stroller" },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-[Poppins]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
        <p className="text-gray-600">Everything Your Baby Needs</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{categories.map((cat, idx) => (
  <Link to={`/products/${cat.slug}`} key={idx}>
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#B0E4F4] hover:shadow-lg transition-shadow duration-300">
      <div className="p-3">
        <img src={cat.image} alt={cat.name} className="w-full h-60 object-contain rounded-lg" />
      </div>

      <div className="relative">
        <div
          className="px-4 py-3 flex items-center justify-between text-gray-800 font-semibold"
          style={{
            backgroundColor: "#B0E4F4",
            clipPath: "path('M0,0 H85% Q100%,0 100%,20 Q100%,100% 80%,100% H0 Z')",
          }}
        >
          <span>{cat.name}</span>
        </div>

        <button className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#B0E4F4] p-2 rounded-full border border-[#B0E4F4] shadow hover:bg-[#9ed9ee] transition">
          <FiArrowUpRight className="text-black" />
        </button>
      </div>
    </div>
  </Link>
))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
