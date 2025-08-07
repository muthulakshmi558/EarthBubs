import React from "react";

// 🔹 Replace with your actual images
import icon1 from "../assets/images/trust1.png";
import icon2 from "../assets/images/trust2.png";
import icon3 from "../assets/images/trust3.png";
import icon4 from "../assets/images/trust4.png";
import icon5 from "../assets/images/trust5.png";

const trustData = [
  {
    img: icon1,
    title: "Dermatologist Approved",
    desc: "Every product is tested and safe for even the most sensitive baby skin.",
  },
  {
    img: icon2,
    title: "Natural & Non-Toxic Ingredients",
    desc: "We use only gentle, plant based formulas free from harsh chemicals.",
  },
  {
    img: icon3,
    title: "Loved by Thousands of Parents",
    desc: "Real reviews, real results trusted by families across the country.",
  },
  {
    img: icon4,
    title: "Eco-Friendly Promise",
    desc: "From biodegradable packaging to cruelty-free manufacturing, we care for the planet as much as your baby.",
  },
  {
    img: icon5,
    title: "Fast & Reliable Shipping",
    desc: "We deliver your baby’s essentials swiftly and safely because every moment counts.",
  },
];

const WhyParentsTrustUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-[Poppins]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Why Parents Trust Us</h2>
        <p className="text-gray-600">Designed with Love. Backed by Science.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {trustData.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#B0E4F4] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
          >
            {/* Top Image */}
            <div className="mb-4 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Blue Inner Box */}
            <div className="bg-[#B0E4F4] rounded-lg px-4 py-3 shadow-md mx-auto  max-w-[450px]">
              <h3 className="font-semibold text-black mb-1 text-sm lg:text-base">{item.title}</h3>
              <p className="text-gray-700 text-xs lg:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyParentsTrustUs;
