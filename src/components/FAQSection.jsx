import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Are your products safe for newborns?",
    answer:
      "Yes, all our products are dermatologically tested and made with gentle, non-toxic ingredients that are safe for newborns and sensitive skin.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3-5 business days, depending on your location. We also offer express shipping options.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 15-day return or exchange policy for unopened and unused products in their original packaging.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, UPI, net banking, and popular wallets for your convenience.",
  },
  {
    question: "Are your skincare products organic or natural?",
    answer:
      "Yes, our skincare range is made with organic and natural ingredients, free from harmful chemicals.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via email, live chat on our website, or call our toll-free number between 9 AM and 6 PM IST.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-medium text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center font-semibold text-black-500 mb-8">
        We’re Here to Help – Every Step of the Way
      </p>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#00B4D8] pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              {openIndex === index ? (
                <FiChevronUp className="text-[#00B4D8]" />
              ) : (
                <FiChevronDown className="text-[#00B4D8]" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
