import {
  Bell,
  ChevronDown,
  Filter,
  Heart,
  MapPin,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 flex lg:flex-row flex-col gap-5 justify-between items-center px-16 border-b">
      <div className="flex items-center gap-1">
        <img src="/favicon.png" alt="icon" className=" h-10 w-10" />
        <span className="font-extrabold"> maachao</span>
      </div>
      <div className="flex gap-2 md:flex-row flex-col items-center justify-start">
        <div className="flex items-center px-4 w-96 gap-1 py-2 border border-gray-300 rounded-lg bg-white shadow-sm">
          <MapPin className="text-gray-400 w-4" />
          <span className="text-gray-700 text-sm flex-grow">
            Athwa Gate, Surat
          </span>
          <ChevronDown className="text-gray-400" />
        </div>
        <div className="flex items-center px-4 w-96 gap-1 py-1 border border-gray-300 rounded-lg bg-white shadow-sm">
          <Search className="text-gray-400" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-full py-1 px-1 border-none focus:border-none "
            placeholder="Search here..."
          />{" "}
          |
          <Filter className="text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <h1 className="flex items-center gap-1 border-r px-1 border-black font-bold">
          My Account <ChevronDown className="text-gray-400" />
        </h1>
        <div className="flex items-center gap-2 px-2">
          <Heart />
          <Bell />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
