import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const CaseStudyCarousel = ({ cardData }:{cardData:any}) => {
  return (
    <div className="relative w-full max-w-[90%] mx-auto h-full">
      <Slider {...settings}>
        {cardData.map((card:any) => (
          <div key={card.id} className="px-4">
            <div
              className={`rounded-xl border border-gray-700/80 bg-[#12151BCC]/80 shadow-xl flex flex-col justify-between items-center transition-all duration-300`}
            >
              <Image
                src={card.image}
                alt={`${card.title} image`}
                className="object-contain p-4"
              />
              <div className="bg-black/45 p-4 flex flex-1 flex-col justify-between">
                <div className="text-start">
                  <h1 className="text-primary text-2xl font-gotham font-semibold leading-10">
                    {card.title}
                  </h1>
                  <p className="text-primary/70 text-base font-normal font-gotham">
                    {card.description}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/40 outline-none bg-transparent text-white hover:text-white/50 flex items-center justify-start space-x-2 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <MoveRight color="white" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CaseStudyCarousel;
