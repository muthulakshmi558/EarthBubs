import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainImage from "../assets/images/checkoutmain.png";
import thumb2 from "../assets/images/check2.png";
import thumb3 from "../assets/images/check3.png";
import thumb4 from "../assets/images/check4.png";

const Checkout = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(2);
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const product = {
    title: "New Born Pampers Active Baby Diapers, Small, 22 Count & Pampers Baby Dry Diapers",
    price: 700,
    originalPrice: 1044,
    colours: ["#00B4D8", "#F06292", "#8E44AD"],
    size: "Free Size",
    image: mainImage,
    thumbnails: [mainImage, thumb2, thumb3, thumb4],
  };

const handleBuyNow = () => {
  const existing = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingIndex = existing.findIndex(item => item.title === product.title);

  if (existingIndex !== -1) {
    existing[existingIndex].quantity += quantity;
  } else {
    existing.push({ ...product, quantity });
  }

  localStorage.setItem("cartItems", JSON.stringify(existing));
  navigate("/cart");
};

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8 font-poppins">
      {/* Left Side - Thumbnails and Main Image */}
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
        <div className="flex lg:flex-col gap-4">
          {product.thumbnails.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-20 h-20 rounded-lg cursor-pointer border"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center w-full bg-[#C6F1FC] rounded-lg p-6">
          <img src={selectedImage} alt="Main" className="max-h-[300px] object-contain" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <div className="flex items-center gap-2 text-yellow-500">
          ⭐⭐⭐⭐⭐ <span className="text-sm text-gray-600">(18 Reviews)</span>
          <span className="text-green-600 ml-2">In Stock</span>
        </div>
        <p className="text-gray-700 text-sm">
          Give your baby the gentle care they deserve with EarthBubs Premium Baby Pampers, designed for comfort, dryness, and leak protection.
        </p>

        <div className="flex items-center gap-2">
          <strong>Colours:</strong>
          {product.colours.map((color, idx) => (
            <div key={idx} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>

        <p><strong>Size:</strong> {product.size}</p>

        <div className="space-x-3 text-lg font-semibold">
          <span className="line-through text-gray-500">₹{product.originalPrice}.00</span>
          <span className="text-black">Sale Price ₹{product.price}.00</span>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center gap-4">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-2 py-1 bg-gray-200 rounded">-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-[#00B4D8] text-white py-2 rounded hover:bg-[#0094b0] transition"
        >
          Buy Now
        </button>

        {/* Delivery & Return */}
        <div className="mt-4 space-y-2 text-sm">
          <p>🚚 <strong>Free Delivery</strong> — Enter your postal code for availability.</p>
          <p>🔁 <strong>Return Delivery:</strong> Free 7 Days Returns. <a className="underline" href="#">Details</a></p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
