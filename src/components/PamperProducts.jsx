// src/pages/PamperProducts.jsx

import React from 'react';

const products = [
  {
    name: 'Diaper Pants',
    price: 680,
    mrp: 800,
    image: '../src/assets/images/pamper1.png',
    rating: 4,
  },
  {
    name: "Super Cute's",
    price: 450,
    mrp: 500,
    image: '../src/assets/images/pamper1.png',
    rating: 4,
  },
  {
    name: 'Mee Premium',
    price: 700,
    mrp: 1044,
    image: '../src/assets/images/pamper1.png',
    rating: 5,
  },
];

const PamperProducts = () => {
  return (
    <div className="font-poppins p-6">
      {/* <nav className="text-gray-600 text-sm mb-6">
        Home &gt; Products &gt; <span className="font-semibold">Pamper’s</span>
      </nav> */}

      <div className="flex justify-end mb-4">
        <button className="text-sm border px-3 py-1 rounded-md">Filter ⏷</button>
        {/* Optional: dropdown items */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-lightblue rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div className="mb-2">
              <span className="bg-blueaccent text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <button className="bg-blueaccent text-white px-4 py-1 rounded-full text-sm font-medium">
                Buy
              </button>
            </div>
            <div className="flex items-center mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
            </div>
            <div className="mt-2 text-sm">
              <span className="line-through text-gray-500 mr-2">MRP ₹{product.mrp}</span>
              <span className="font-semibold text-black">Price ₹{product.price}.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PamperProducts;
