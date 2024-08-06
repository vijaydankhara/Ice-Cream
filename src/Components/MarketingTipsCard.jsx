import React from 'react';
import img1 from '../assets/asset47.jpeg'

const MarketingTipsCard = () => {
  return (
    <div className="relative w-80 h-96 overflow-hidden my-5">
      <img
        // src={img1}
        alt="Creative Marketing Tips For Ice Cream Shops"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-2 flex flex-col justify-end bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 text-red-800">
          <span className=" text-black px-2 py-1 rounded-md mb-2 inline-block">Business Tips</span>
          <div className="font-bold text-xl mb-2">June 20, 2024</div>
          <h2 className="text-2xl font-bold">Creative Marketing Tips For Ice Cream Shops</h2>
        </div>
      </div>
    </div>
  );
};

export default MarketingTipsCard;
