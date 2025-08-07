import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";


// 🔹 Replace with your actual images
import strollerImg from "../assets/images/trending1.png";
import soapImg from "../assets/images/trending2.png";
import dressImg from "../assets/images/trending3.png";

const products = [
  {
    title: "Baby Stroller",
    desc: "Explore the world in comfort with our smooth and stylish baby stroller...",
    img: strollerImg,
    reverse: false,
    link: "/products/stroller",
  },
  {
    title: "Gentle Baby Soap",
    desc: "Crafted with natural, plant-based ingredients to keep your baby’s skin soft...",
    img: soapImg,
    reverse: true,
    link: "/products/soap",
  },
  {
    title: "Adorable Baby Dress",
    desc: "Dress your baby in comfort and cuteness with our premium cotton outfits...",
    img: dressImg,
    reverse: false,
    link: "/products/pampers",
  },
];

const TrendingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-[Poppins]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Products</h2>
        <p className="text-gray-600 text-lg">Parent Favorites, Baby Approved</p>
      </div>

      {/* Product Blocks */}
      <div className="space-y-16">
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              product.reverse ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`overflow-hidden ${
                product.reverse ? "rounded-tr-[50px]" : "rounded-tl-[50px]"
              }  flex justify-center`}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full max-w-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center md:mt-[-40px]">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {product.desc}
              </p>
              <Link to={product.link}>
                <button className="flex items-center gap-2 bg-[#B0E4F4] text-black px-4 py-2 rounded-full font-medium text-base hover:bg-[#9dd7e8] transition">
                  Buy Now <FiArrowUpRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
