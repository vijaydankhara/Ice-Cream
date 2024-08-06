import React from "react";
import backgroundImage from '../assets/asset50.jpeg';
import MarketingTipsCard from "../Components/MarketingTipsCard";
import Footer2 from "../Components/Footer2";

function Blog() {
  return (
    <div>
      {/* 1st */}
      <div className="relative w-full h-[450px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-black"> Business Tips</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Business Tips</span>
            </p>
          </div>
        </div>
      </div>

<MarketingTipsCard/>
      <Footer2 />
    </div>
  );
}

export default Blog;
