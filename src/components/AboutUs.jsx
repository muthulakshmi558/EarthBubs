import React from "react";
import { FaLeaf, FaGlobeAmericas, FaHeart } from "react-icons/fa";
import { GiBabyBottle } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import logo from "../assets/images/logoabout.png"; // Adjust path

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-[Poppins]">
      {/* Breadcrumb */}
      <div className="text-sm text-black-600 mb-6">
        Home &gt; <span className="text-black font-semibold">About</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:w-1/3">
        <img src={logo} alt="EarthBubs Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
        <h1 className="text-2xl font-bold mt-4">EarthBubs</h1>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At EarthBubs, we believe that every baby deserves the safest, softest start in life.
            That’s why we’re dedicated to offering high quality, trusted baby products that combine
            comfort, care, and innovation all wrapped in love. Born from a parent's desire for gentle,
            safe, and natural baby essentials, our journey began with one goal: to make parenting a
            little easier, and a lot more joyful. From soft diapers and skin-loving care to smart
            strollers and feeding must haves, every product we offer is thoughtfully chosen and
            thoroughly tested for your baby’s well being. We’re more than just a store — we’re part of
            your parenting journey.
          </p>

          <h3 className="font-semibold mb-3">What Makes Us Different:</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-500" /> Natural, safe, and toxin–free ingredients
            </li>
            <li className="flex items-center gap-2">
              <MdVerifiedUser className="text-red-400" /> Pediatrician & dermatologist approved
            </li>
            <li className="flex items-center gap-2">
              <GiBabyBottle className="text-yellow-500" /> Designed with real parents in mind
            </li>
            <li className="flex items-center gap-2">
              <FaGlobeAmericas className="text-blue-500" /> Eco-conscious and cruelty–free practices
            </li>
            <li className="flex items-center gap-2">
              <FaHeart className="text-pink-500" /> 10,000+ happy families and growing!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
