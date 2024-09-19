import React from "react";
import Footer2 from "../Components/Footer2";
import BlogCard from "../Components/BlogCard";
import backgroundImage from "../assets/asset50.jpeg";
import img1 from "../assets/asset1.jpeg";
import img2 from "../assets/asset2.jpeg";
import img3 from "../assets/asset3.jpeg";
// import img4 from "../assets/asset47.jpeg";
import Top from "../Components/Top";

function Blog() {
  return (
    <div className="container">
      <Top />

      <div className="relative w-full h-[450px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-[390px] object-cover"
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

      <div className="w-full flex flex-wrap justify-center gap-y-10 sm:gap-x-5 md:gap-x-10 my-5">
        <BlogCard img={img1} text="Top Ice Cream Flavors to Sell This Year" />
        <BlogCard img={img2} text="The Art of Crafting Gourmet Ice Cream" />
        <BlogCard img={img3} text="Ice Cream Trends That Drive More Sales" />
        {/* <BlogCard img={img4} text = "Creative Marketing Tips for Ice Cream Shops"/> */}
      </div>

      <br />
      <Footer2 />
    </div>
  );
}

export default Blog;
