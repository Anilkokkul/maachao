import { MapPin } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-7 bg-orange-300 text-center">
        <h1 className="leading-7">
          Do order in <span className="text-red-600">01:00:00</span> and get
          order today
        </h1>
      </div>
      <div>
        <div className=" lg:h-96 flex-col lg:flex-row flex gap-5 p-10 overflow-hidden px-20">
          <img
            src="/cake-banner.jpg"
            className="rounded-3xl lg:min-w-[800px] object-cover object-top"
            alt="cake banner"
          />
          <img
            src="/cake-banner-2.jpg"
            className="rounded-3xl lg:min-w-[800px] object-cover object-top"
            alt="cake banner"
          />
        </div>
      </div>
      <div className="flex items-center  justify-center bg-gray-100 p-4">
        <div className="flex flex-col w-full md:w-max md:flex-row items-center gap-2 bg-white shadow-md p-4 rounded-md">
          <h1 className="text-xl font-extrabold mr-5">
            Quick <br /> Finder
          </h1>
          <div className="flex gap-1 items-center border border-gray-300 rounded-md px-1 py-1 focus:outline-none ">
            <MapPin className="text-gray-400 w-4" />
            <input
              type="text"
              placeholder="Enter Pincode"
              className=" py-1 px-3 focus:ring-none"
            />
          </div>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="love">Love</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="">Gift Type</option>
            <option value="flowers">Flowers</option>
            <option value="cakes">Cakes</option>
            <option value="chocolates">Chocolates</option>
          </select>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            Find Gifts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
