import React from "react";
import FooterlogoWhite from "../assets/asset48.svg";
import { BiLogoBehance } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans-serif">
            Sign up for our newsletter!
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base lg:text-lg">
            Be the first to know about new flavors and more
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="custom-search font-Kalnia w-full sm:max-w-md lg:max-w-lg flex">
            <input
              type="text"
              className="custom-search-input py-2 sm:py-3 flex-grow rounded-l-md"
              placeholder="Your Email..."
            />
            <button
              className="custom-search-button font-Kalnia bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:py-3 rounded-r-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="pt-16 md:pt-32 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-5 text-center md:text-left">
            <img
              id="logo"
              className="w-20 md:w-24 mb-4 md:mb-0"
              src={FooterlogoWhite}
              alt="Logo"
            />
            <p className="text-sm sm:text-base">
              &copy; 2024 – Jumys. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a className="text-xl sm:text-2xl cursor-pointer">
              <FaFacebook />
            </a>
            <a className="text-xl sm:text-2xl cursor-pointer">
              <FaUser />
            </a>
            <a className="text-xl sm:text-2xl cursor-pointer">
              <FaYoutube />
            </a>
            <a className="text-xl sm:text-2xl cursor-pointer">
              <FaInstagram />
            </a>
            <a className="text-xl sm:text-2xl cursor-pointer">
              <BiLogoBehance />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;