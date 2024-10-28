import React from "react";
import Image from "next/image";
import crossIcon from "../../../../public/assets/icon/crossIcon.svg";
import circleIcon from "../../../../public/assets/icon/circle.svg";
import thickIcon from "@/../public/assets/icon/thickIcon.png";

interface CardItem {
  icon?: any;
  items: string;
}

const PackagesCard2: React.FC = () => {
  const cardData: CardItem[] = [
    { icon: thickIcon, items: "Product Design (UX & UI)" },
    { icon: thickIcon, items: "Architecture System/Design" },
    { icon: thickIcon, items: "1st version App Development" },
    { icon: thickIcon, items: "Notifications (emails, push notifications)" },
    { icon: thickIcon, items: "Testing" },
    { icon: thickIcon, items: "Upload to AppStore/Google Play" },
  ];

  const handleButtonClick = (): void => {
    alert("Button clicked View Packages!");
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#3571F01A] via-[#3571F005] to-[#3571F00F] w-[380px] rounded-xl overflow-hidden mx-auto backdrop-blur-2xl backdrop-brightness-150 backdrop-opacity-30 border border-[#85849E66]/40 outline-[#7474804D]/30 h-auto">
        <div className="p-[40px] flex flex-1 flex-col gap-3">
          <div className="flex justify-between items-center">
            <Image
              src={circleIcon}
              height={32}
              width={32}
              alt="circle Icon"
              className="object-contain"
            />
            <Image
              src={crossIcon}
              alt="cross Icon"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-primary font-gotham font-medium text-[20px]">
              Mobile App Development
            </p>
          </div>
          <div className="flex items-end gap-2">
            <h1 className="text-primary font-gotham font-medium text-[48px]">
              $20
            </h1>
            <span className="text-[#ffffff9f] font-gotham font-normal text-[20px]">
              Starting
            </span>
          </div>
          <div className="border-t border-[#FFFFFF29]/15 my-4"></div>
          <div className="bg-transparent w-auto flex flex-1 flex-col gap-4 items-start">
            <div className="text-base text-primary font-gotham font-medium">
              What you will get
            </div>
            <div className="flex flex-col gap-4">
              {cardData.map((item, index) => (
                <div
                  className="flex gap-2 items-center justify-start"
                  key={index}
                >
                  <Image src={item.icon} alt="Thick Icon" />
                  <p className="font-gotham text-sm font-normal text-[#FFFFFFCC]/80">
                    {item.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="px-4 py-3 rounded-[4px] text-white text-sm tracking-wider font-medium outline-none bg-gradient-to-t to-[#3571F0]/100 from-[#2865E5]/100 hover:bg-blue-800 active:bg-blue-700"
          >
            View Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard2;
