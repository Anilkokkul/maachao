import { LogIn } from "lucide-react";
import React from "react";

const Hero = () => {
  const categories = [
    { icon: "🔥", label: "Trending" },
    { icon: "🍰", label: "Cakes" },
    { icon: "🎀", label: "Decoration" },
    { icon: "🎁", label: "Gifts" },
    { icon: "🧑‍🎤", label: "Hire MUA" },
    { icon: "🎥", label: "Video Grapher" },
    { icon: "📷", label: "Photo Grapher" },
    { icon: "🔲", label: "View All" },
  ];
  return (
    <div>
      <div className="p-5 flex gap-2 h-48 overflow-scroll">
        <img src="/cake-banner.jpg" className="rounded-3xl" alt="cake-banner" />
        <img
          src="/cake-banner-2.jpg"
          className="rounded-3xl"
          alt="cake-banner"
        />
        <img src="/cake-banner.jpg" className="rounded-3xl" alt="cake-banner" />
        <img
          src="/cake-banner-2.jpg"
          className="rounded-3xl"
          alt="cake-banner"
        />
        <img src="/cake-banner.jpg" className="rounded-3xl" alt="cake-banner" />
        <img
          src="/cake-banner-2.jpg"
          className="rounded-3xl"
          alt="cake-banner"
        />
        <img src="/cake-banner.jpg" className="rounded-3xl" alt="cake-banner" />
        <img
          src="/cake-banner-2.jpg"
          className="rounded-3xl"
          alt="cake-banner"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 p-5 mb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow-md p-4 hover:shadow-lg"
          >
            <div className="text-4xl">{category.icon}</div>
            <p className="text-sm text-gray-700 mt-2">{category.label}</p>
          </div>
        ))}
      </div>
      <div className="p-5">
        <div className="flex justify-between px-2">
          <h1>Trending</h1>
          <p className="flex items-center gap-1">
            view All
            <LogIn />
          </p>
        </div>
        <div className="flex overflow-scroll items-center gap-4 py-5">
          {[1, 2, 3, 4].map((index) => (
            <div className="shadow-lg border rounded-3xl p-2">
              <img
                src="/cake.jpg"
                alt="cake-image"
                className="rounded-2xl  min-w-28 h-24 object-cover object-bottom"
              />
              <h1 className="text-[10px] font-bold mt-2">
                Exclusive Chocolate Cake
              </h1>
              <p className="text-sm font-extrabold">Rs.500</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
