import React from "react";

const testimonials = [
  {
    name: "Rahul S.",
    location: "Bangalore, India",
    text: "We love the stroller – lightweight, easy to fold, and super smooth on roads. Perfect for city walks. The quality feels premium, and my daughter is always comfy in it.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya M.",
    location: "Chennai, India",
    text: "The EarthBubs diapers are amazing! My baby sleeps through the night without any leaks or rashes. I’ve tried many brands, but this one is truly gentle and reliable.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Anika R.",
    location: "Mumbai, India",
    text: "I ordered the baby Soap kit and I’m blown away. The lotion and wash are so gentle, and the natural fragrance is lovely. No irritation at all – just soft, healthy skin.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Customer Testimonials</h2>
      <p className="text-gray-500 mb-10">Parent Favorites, Baby Approved</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative p-[3px] rounded-2xl border-2 border-sky-300"
            style={{
              clipPath:
                "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)", // custom shape
            }}
          >
            <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-white shadow"
              />
              <h3 className="font-semibold">
                {t.name} – {t.location}
              </h3>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed text-center">
                "{t.text}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {[1, 2, 3, 4, 5].map((dot, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 2 ? "bg-[#00B4D8]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
