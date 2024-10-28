import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatPeopleSaySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidths = (index:number) => {
    if (index === activeIndex) return 400;
    return 200;
  };

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current:number) => setActiveIndex(current),
  };

  const cardData = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
  ];

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            style={{ width: `${cardWidths(index)}px` }}
            className={`p-4 transition-transform duration-500 ${
              index === activeIndex ? "scale-110" : "scale-90"
            }`}
          >
            <div className="bg-gray-100 rounded-lg shadow-lg h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-800">
                {card.content}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatPeopleSaySlider;
