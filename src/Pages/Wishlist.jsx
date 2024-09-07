import React from "react";
import backgroundImage from "../assets/asset50.jpeg";
import { FaFacebookF, FaTwitter, FaShareAlt, FaEnvelope } from "react-icons/fa";
import Footer2 from "../Components/Footer2";
import Top from "../Components/Top";

const Wishlist = () => {
  return (
    <div className="">
    <Top/>
      <div className="relative w-full h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center text-white mt-28">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">Wishlist</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Wishlist</span>
            </p>
          </div>
        </div>
      </div>

      {/* Whishlist Sesction */}
      <div className="flex flex-col sm:flex-row my-12 sm:my-20 justify-between px-4 sm:px-5 space-y-8 sm:space-y-0">
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <p className="text-lg text-center sm:text-left">There Are No Products On The Wishlist!</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Share On:</span>
            <a href="https://www.facebook.com" className="text-blue-700">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-500">
              <FaShareAlt size={24} />
            </a>
            <a href="mailto:" className="text-red-600">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Wishlist Link:</span>
          <input
            type="text"
            value="https://wpbingosite.com/wordpress/jumystore"
            readOnly
            className="border rounded px-2 py-1 w-64"
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "https://wpbingosite.com/wordpress/jumystore"
              )
            }
            className="bg-black text-white rounded px-4 py-1 mt-2 sm:mt-0"
          >
            Copy
          </button>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Wishlist;
