import { Search } from "lucide-react";
import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black text-gray-200 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-medium text-nowrap">
      <img
        src={Logo}
        alt="Website Logo"
        className="w-24 cursor-pointer brightness-125"
      />

      <ul className="hidden xl:flex gap-6">
        <li className="cursor-pointer hover:text-[#e50901]">Home</li>
        <li className="cursor-pointer hover:text-[#e50901]">TV Shows</li>
        <li className="cursor-pointer hover:text-[#e50901]">Movies </li>
        <li className="cursor-pointer hover:text-[#e50901]">Anime</li>
        <li className="cursor-pointer hover:text-[#e50901]">Games</li>
        <li className="cursor-pointer hover:text-[#e50901]">New & Popular</li>
        <li className="cursor-pointer hover:text-[#e50901]">Upcoming</li>
      </ul>

      <div className="flex items-center gap-4 relative">
        <div className="relative hidden md:inline-flex">
          <input
            type="text"
            className="bg-[#333333] hover:bg-[#444444] px-4 py-2 rounded-full min-w-72 pr-10 outline-none"
            placeholder="Search"
          />
          <Search className="absolute top-2 right-4 w-5 h-5" />
        </div>
        <button className="bg-[#e50914] hover:bg-[#ff000d] rounded-sm px-5 py-2 text-white cursor-pointer">
          Get AI Movie Picks
        </button>
        <button className="border-2 border-[#333333] rounded-sm px-4 py-2 cursor-pointer hover:bg-[#333333]">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
