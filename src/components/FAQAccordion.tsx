"use client";

import { useState } from "react";
import Image from "next/image";
import UpArrow from "@/../../public/assets/icon/UpArrow.png";
import DownArrow from "@/../../public/assets/icon/DownArrow.png";

const faqs = [
  {
    question: "What mobile app development services do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Feugiat et maecenas in morbi et. Tellus gravida netus cursus pellentesque neque.",
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer:
      "Yes, we offer app maintenance and support services to ensure your app runs smoothly post-launch.",
  },
  {
    question: "What makes Probits the best software company?",
    answer:
      "We provide reliable software solutions tailored to your business needs, with a strong focus on quality and customer satisfaction.",
  },
  {
    question: "What software development services do you offer?",
    answer:
      "We offer a variety of services including mobile app development, web app development, and custom software solutions.",
  },
  {
    question: "Do you assist with software integration and data migration?",
    answer:
      "Yes, we assist with seamless software integration and data migration services to ensure smooth transitions.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="2xl:max-w-6xl sm:max-w-5xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden border-[#85849E66]/40"
        >
          <button
            className={`w-full flex justify-between items-center p-4 transition-colors duration-300 font-gotham ${
              activeIndex === index
                ? "bg-blue-500/30 text-[#3571F0] font-bold"
                : "bg-gray-900 text-white"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${
                activeIndex === index ? "text-[#3571F0]" : "text-white"
              }`}
            >
              {faq.question}
            </span>
            <Image
              src={activeIndex === index ? UpArrow : DownArrow}
              alt={activeIndex === index ? "Up Arrow" : "Down Arrow"}
              className="w-5 h-5 object-contain"
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-gray-900 text-[#F5F5F7]/70 font-gotham font-normal text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
