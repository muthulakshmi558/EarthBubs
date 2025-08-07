// OrderComplete.jsx
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from '@react-hook/window-size';

const OrderComplete = () => {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // stop after 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-[Poppins] bg-white px-4">
      {/* Breadcrumb */}
      <div className="w-full max-w-6xl text-sm text-black mt-6 mb-4">
        <p>
          <span className="font-semibold">Home</span> &gt;{" "}
          <span className="font-semibold">Add to Cart</span> &gt;{" "}
          <span className="font-semibold">Payments</span> &gt;{" "}
          <span className="font-semibold text-gray-800">Order Complete</span>
        </p>
      </div>

      {/* Confetti Animation */}
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Image + Confirmation */}
      <div className="text-center mt-4">
        <img
          src="./src/assets/images/order.png" // Make sure the image is in public folder
          alt="Order Complete"
          className="mx-auto w-64 md:w-80 lg:w-96 animate-pulse"
        />
        <p className="mt-6 text-md md:text-lg text-gray-700 font-medium">
          Order ID: <span className="text-black font-semibold">OCD1232</span>
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a4b] mt-2">
          Your Order Is Completed!
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-500">
          Thank you for your order! Your order is being processed and will be completed within 3–6 hours.
          You will receive an email confirmation when your order is completed.
        </p>
      </div>
    </div>
  );
};

export default OrderComplete;
