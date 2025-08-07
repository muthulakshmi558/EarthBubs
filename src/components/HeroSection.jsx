import React from 'react';
import babyImage from '../assets/images/baby1.png'; // 🧸 Your baby image path
import bgImage from '../assets/images/home-bg.png'; // 🌈 Your background image

const HeroSection = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
            Gentle Care for Growing Joy
          </h1>
          <p className="text-lg text-white md:pr-10 drop-shadow-sm">
            Premium baby care products crafted with love, purity, and the softest materials –
            because your baby deserves the best.
          </p>
        </div>

        {/* Right Baby Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={babyImage}
            alt="Sleeping Baby"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
