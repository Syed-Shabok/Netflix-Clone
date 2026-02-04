import React from "react";
import HeroBg from "../assets/heroBg.png";
import { BookmarkIcon, PlayIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-white relative">
      <img
        src={HeroBg}
        alt="Hero Image"
        className="w-full rounded-2xl h-120 object-center object-cover"
      />

      <div className="flex gap-2 md:gap-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
        <button className="flex gap-1 justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
          <BookmarkIcon className="w-4 h-5 md:w-5 md:h-5" /> Save for Later
        </button>
        <button className="flex gap-1 justify-center items-center bg-[#e50914] hover:bg-[#ff000d] text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base">
          <PlayIcon className="w-4 h-5 md:w-5 md:h-5" /> Watch Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
