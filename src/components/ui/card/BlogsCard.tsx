import { FC, ReactNode } from "react";
import Image from "next/image";

interface CardData {
  image: string;
  category: string;
  title: string | ReactNode;
  onClick?: () => void; 
}

const BlogsCard: FC<CardData> = ({ image, category, title, onClick }) => {
  return (
    <div
      className="relative w-full h-[396px] shadow-lg border border-gray-700 rounded-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer"
      onClick={onClick} 
      role="button"   
      tabIndex={0} 
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
        <Image
          src={image}
          alt="blog image"
          layout="fill"
          className="object-cover cursor-pointer"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-80" />

      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end gap-2">
        <div>
          <span className="inline-flex px-4 py-1 rounded-lg text-sm font-medium border border-white outline-none bg-transparent hover:bg-blue-700 text-white transition-all duration-300">
            {category}
          </span>
        </div>
        <h2 className="font-medium text-2xl text-[#F5F5F7] hover:underline hover:text-slate-300 hover:underline-offset-2 hover:decoration-1 transition-all ease-in-out duration-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BlogsCard;
