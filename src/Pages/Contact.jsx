import React from "react";
import backgroundImage from "../assets/asset50.jpeg";
import Map from "../Components/Map";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import Footer2 from "../Components/Footer2";
import Top from "../Components/Top";

function Contact() {
  return (
    <div>
      <Top />

      {/* Background Image Section */}
      <div className="relative w-full h-[300px] md:h-[430px] sm:w-full">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-black">Contact</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Contact</span>
            </p>
          </div>
        </div>
      </div>

      {/* Map Component */}
      <Map />

      {/* Get Information Section */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-center p-4 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 h-auto px-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Get In Touch
            </h2>
            <div className="grid gap-2 text-base md:text-lg font-serif">
              <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
              <p>(02) 6188 8062</p>
              <p>Jumysicecream@Gmail.Com</p>
            </div>
            <div className="mt-6 font-serif">
              <p>Open Hours:</p>
              <p>Contact Our Customer Happiness Team</p>
              <p>Monday-Friday 9am-5pm</p>
            </div>

            <p className="font-semibold font-mono text-xl mt-4">Follow us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000] text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#000] hover:text-[#ff0000] text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#000] hover:text-[#ff0000] text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-[#000] hover:text-[#ff0000] text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#000] hover:text-[#ff0000] text-2xl">
                <BiLogoBehance />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 h-auto">
          <form className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="email"
                placeholder="Your Email *"
              />
            </div>
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                placeholder="Number Phone *"
              />
            </div>
            <div>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-2xl"
                placeholder="Comment or Message *"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button className="px-8 py-3 bg-[#ff0000] hover:bg-[#000] text-white duration-700 font-bold rounded-full w-full md:w-auto">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default Contact;
