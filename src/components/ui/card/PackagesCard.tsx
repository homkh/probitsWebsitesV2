import Image from "next/image";
import { FC } from "react";

interface PackagesCardProps {
  title: string;
  price: number | string;
  crossIcon: string;
  circleIcon: string;
}

const PackagesCard: FC<PackagesCardProps> = ({
  title,
  price,
  crossIcon,
  circleIcon,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#3571F01A]/10 via-[#3571F005]/2 to-[#3571F00F]/6 w-[380px] backdrop-blur-2xl border backdrop-brightness-150 backdrop-opacity-30 border-[#85849E66]/40 outline-[#7474804D]/30 rounded-xl shadow-md p-6">
      <div className="flex flex-col justify-start gap-5 h-full">
        <div className="flex justify-between items-center">
          <Image
            src={circleIcon}
            width={40}
            height={40}
            alt="circle Icon"
            className="object-contain"
          />
          <Image
            src={crossIcon}
            width={32}
            height={32}
            alt="cross Icon"
            className="object-contain"
          />
        </div>
        <div className="w-52">
          <p className="text-primary font-gotham font-medium text-[20px]">
            {title}
          </p>
        </div>
        <div className="flex items-end gap-2">
          <h1 className="text-primary font-gotham font-medium text-[48px]">
            ${price}
          </h1>
          <span className="text-[#ffffff9f] font-gotham font-normal text-[20px]">
            Starting
          </span>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
