import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";

const GetInTouch = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center p-4 border-2 border-red-600">
      <div className="w-full h-[480px] border-2 border-red-800 px-5">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold font-serif mb-4">Get In Touch</h2>
          <div className="grid gap-1 text-lg font-serif">
            <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
            <p>(02) 6188 8062</p>
            <p>Jumysicecream@Gmail.Com</p>
          </div>
          <div className="mt-9 font-serif">
            <p>Open Hours:</p>
            <p>Contact Our Customer Happiness Team</p>
            <p>Monday-Friday 9am-5pm</p>
          </div>

            <p className="font-semibold font-mono text-xl my-2">Follow us:</p>
          <div className="flex ">
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
            <FaFacebook/>
            </a>
         
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaTwitter/>
            </a>

            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaYoutube/>
            </a>
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <FaInstagram/>
            </a>
            <a
              href="#"
              className="text-[#000] hover:text-[#ff0000] mx-2 text-3xl"
            >
             <BiLogoBehance/>
            </a>
            

          </div>
        </div>
      </div>

      <div className=" w-full h-[480px] border-2 border-green-600">
        <form className="w-full ">
          <div className="flex w-full">
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                placeholder="Your Name *"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="email"
                placeholder="Your Email *"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-full"
              type="text"
              placeholder="Number Phone *"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-2xl"
              placeholder="Comment or Message *"
              rows="7"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="px-10 py-3 bg-[#ff0000] hover:bg-[#000] text-[#fff]  duration-500 font-bold rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
