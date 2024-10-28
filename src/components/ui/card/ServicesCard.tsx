import ShineBorder from "@/components/magicui/shine-border";
import servviceIcon from "@/../../public/assets/icon/serviceIcon.png";
import Image from "next/image";
import { FC } from "react";

interface ServicesCardProps {
  header: string;
  description: string;
}

export const ServicesCard: FC<ServicesCardProps> = ({
  header,
  description,
}) => {
  return (
    <ShineBorder
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-0 bg-[#12151B66]/80 bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="flex flex-col gap-4 items-start justify-center py-4 px-2 cursor-pointer">
        <Image
          src={servviceIcon}
          alt="Service icon"
          width={40}
          height={40}
          className="object-contain"
        />

        <h2 className="font-gotham text-[#F5F5F7] font-bold text-xl w-52">
          {header || "Mobile App Development"}
        </h2>

        <p className="text-sm text-[#F5F5F7] font-gotham">
          {description ||
            "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement."}
        </p>
      </div>
    </ShineBorder>
  );
};
