import React from "react";

const Delivery = () => {
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
    <>
      <div className="flex lg:flex-row flex-col lg:h-96 justify-center py-10 gap-10">
        <img
          src="delivery-banner.jpg"
          className="rounded-3xl"
          alt="delivery "
        />
        <img
          src="delivery-banner-2.jpg"
          className="rounded-3xl"
          alt="delivery "
        />
      </div>
      <div className="grid grid-cols-8 gap-4 px-20 mb-10">
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
    </>
  );
};

export default Delivery;
