import React from "react";
import Image from "next/image";
import crossIcon from "../../../../public/assets/icon/crossIcon.svg";
import circleIcon from "../../../../public/assets/icon/circle.svg";

const PackagesCard1 = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#3571F01A] via-[#3571F005] to-[#3571F00F] w-[380px] rounded-xl overflow-hidden mx-auto backdrop-blur-2xl backdrop-brightness-150 backdrop-opacity-30 border border-[#85849E66]/40 outline-[#7474804D]/30">
        <div className="p-[40px]">
          <div className="flex justify-between pb-3 items-center">
            <Image
              src={crossIcon}
              //   width={40}
              //   height={40}
              alt="circle Icon"
              className="object-contain"
            />
            <Image
              src={circleIcon}
              height={32}
              width={32}
              alt="cross Icon"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-primary font-gotham font-medium text-[20px]">
              Mobile Development <br />
              Solutions
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
        </div>
      </div>
    </div>
  );
};

export default PackagesCard1;
