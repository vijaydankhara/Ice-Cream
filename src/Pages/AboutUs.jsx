import React from "react";
import backgroundImage from "../assets/asset50.jpeg";
import iceCreamImage1 from "../assets/asset64.jpg";
import iceCreamImage2 from "../assets/asset65.jpg";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import avtar1 from "../assets/avatar1.jpg";
import avtar2 from "../assets/avatar2.jpg";
import avtar3 from "../assets/avatar3.jpg";
import avtar4 from "../assets/avatar4.jpg";
import ArticleCard from "../Components/ArticleCard ";
import Footer2 from "../Components/Footer2";
import Top from "../Components/Top";
import NumberCounter from "../Components/NumberCounter";

// Stat Section Data
const stats = [
  { value: "115+", label: "Branch Shop", mark: "~~" },
  { value: "85+", label: "Staffs", mark: "~~" },
  { value: "120+", label: "Flavor Variants", mark: "~~" },
  { value: "90%", label: "Positive Review" },
];

function AboutUs() {
  return (
    <div>
      <Top />
      <div className="relative w-full h-[420px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center mt-36">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-black">About Us</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">About Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Manufacture 1 */}
      <div className="flex flex-col md:flex-row items-center my-5 py-10 px-5 md:px-10 lg:px-20 gap-4 md:gap-10">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-2xl font-semibold mb-2" id="sweet">
            Sweet Escape
          </h2>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            id="manufacture"
          >
            Manufacture
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            Once the ingredients have cooled enough, it's time to pour them into
            molds and freeze in a brine bath. After that, the ice cream sticks
            are dried and packaged in the freezer in square boxes. From here,
            this cool ice cream is ready to be delivered to visitors...
          </p>
          <button className="bg-red-600 hover:bg-black text-white px-6 py-3 rounded-full flex items-center duration-300">
            View More <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={iceCreamImage1}
            alt="Ice Cream"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Number Counter */}
      <NumberCounter />

      {/* Manufacture 2 */}
      <div className="flex flex-col md:flex-row items-center my-5 py-10 px-5 md:px-10 lg:px-20 gap-4 md:gap-10">
        <div className="w-full md:w-1/2 overflow-hidden">
          <img
            src={iceCreamImage2}
            alt="Ice Cream"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-2xl font-semibold mb-2" id="sweet">
            Frozen Joy
          </h2>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            id="manufacture"
          >
            History Begin
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            On hot summer days like today, in addition to a glass of cool
            beverage, a glass of ice cream can also help relieve some of the
            heat. Ice cream is popular not only among children but also loved by
            many people of many different ages…
          </p>
          <button className="bg-red-600 hover:bg-black text-white px-6 py-3 rounded-full flex items-center duration-300">
            View More <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

       {/* Testimonial Section */}
       <div className="text-center py-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-red-600 text-3xl font-serif" id="sweet">Testimonial</h2>
        <h1 className="text-black text-4xl md:text-5xl font-serif mt-2" id="manufacture">Ice Cream Shop</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-5 py-10">
        {/* 1st card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar1} alt="Anana" />
          </div>
          <h3 className="text-xl font-bold">Anana</h3>
          <p className="text-gray-600">Photographer</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “I absolutely love this place! The variety of flavors is impressive, and each scoop is packed with deliciousness....”
          </p>
        </div>
        {/* 2nd card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar2} alt="Ana Smith" />
          </div>
          <h3 className="text-xl font-bold">Ana Smith</h3>
          <p className="text-gray-600">CEO & Founder</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.”
          </p>
        </div>
        {/* 3rd card */}
        <div className="flex flex-col text-center bg-[#faf2e7] shadow-md max-w-xs p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img className="w-24 h-24 rounded-full border-2 border-white" src={avtar3} alt="Linda" />
          </div>
          <h3 className="text-xl font-bold">Linda</h3>
          <p className="text-gray-600">Designer</p>
          <p className="text-gray-700 mt-2 font-semibold">
            “I have never been disappointed, either for myself or as gifts, the pieces are lovely, reasonably priced, and shipped quickly.”
          </p>
        </div>
      </div>

      {/* Final Section */}
      <div className="text-center py-10 px-5 md:px-10 lg:px-20">
        <p className="text-red-600 text-3xl">Our News</p>
        <p className="text-black text-4xl md:text-5xl mt-2">Testiest Updates</p>
      </div>



      <ArticleCard />

      <Footer2 />
    </div>
  );
}

export default AboutUs;
