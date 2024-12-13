import {
  Bell,
  ChevronDown,
  Filter,
  MapPin,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 bg-gray-50">
      <div className=" flex justify-between ">
        <div className="flex items-center gap-1">
          <img
            src="/unknown.jpg"
            alt="user"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div>
            <p>Deliver To</p>
            <div className="flex items-center gap-1">
              <MapPin className=" w-4" />
              <p>My Home</p>
              <ChevronDown className="w-5" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Bell />
          <ShoppingCart />
        </div>
      </div>
      <div className="flex items-center px-4 w-full mt-5 gap-1 py-1 border border-gray-300 rounded-lg bg-white shadow-sm">
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
  );
};

export default Navbar;
