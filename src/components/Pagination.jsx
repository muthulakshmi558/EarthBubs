import React from "react";

const Pagination = () => {
  return (
    <>
    <div className="flex justify-center mt-6 font-[Poppins]">
      <div className="flex items-center gap-4 border border-gray-300 rounded-md px-4 py-2 shadow-sm">
        
        {/* Left Arrow */}
        <button className="text-[#00B4D8] text-lg hover:scale-110 transition">
          &lt;
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5, 6, 7, ].map((num) => (
          <button
            key={num}
            className={`px-2 py-1 rounded-full ${
              num === 1
                ? "bg-[#00B4D8] text-white font-bold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}

        {/* Right Arrow */}
        <button className="text-[#00B4D8] text-lg hover:scale-110 transition">
          &gt;
        </button>
      </div>
    </div>
    <br></br>
    </>
  );
};

export default Pagination;
