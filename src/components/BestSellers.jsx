import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// 🔹 Replace with your product images
import prod1 from "../assets/images/bestseller1.png";
import prod2 from "../assets/images/bestseller4.png";
import prod3 from "../assets/images/girlsfashion5.png";

const products = [
  {
    name: "wipes",
    img: prod1,
    oldPrice: "₹1444.00",
    price: "₹1299.00",
    rating: 5,
  },
  {
    name: "Mama Miel Baby",
    img: prod2,
    oldPrice: "₹1444.00",
    price: "₹1299.00",
    rating: 5,
  },
  {
    name: "Zibuyu",
    img: prod3,
    oldPrice: "₹1444.00",
    price: "₹1299.00",
    rating: 5,
  },
];

const BestSellers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-[Poppins]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
        <p className="text-gray-600">Our Most Loved Products</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative border border-[#B0E4F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            {/* NEW Label */}
            <div className="absolute bg-[#00B4D8] text-white text-xs px-3 py-1 rounded-br-lg rounded-tl-2xl font-medium top-0 left-0">
              NEW
            </div>

            {/* Image */}
            <div className="flex justify-center items-center p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full max-w-[220px] h-[180px] object-contain"
              />
            </div>

            {/* Bottom Blue Section */}
            <div className="bg-[#B0E4F4] px-4 pt-3 pb-4 rounded-tl-[20px] flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-lg">{product.name}</h3>
                <Link to="/products/girls-fashion">
                  <button className="bg-[#00B4D8] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Buy
                  </button>
                </Link>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {[...Array(product.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Prices */}
              <div className="mt-1">
                <span className="text-gray-500 line-through mr-2 text-sm">
                  MRP {product.oldPrice}
                </span>
                <span className="font-semibold text-black">
                  Price {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 2 ? "bg-[#00B4D8]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
