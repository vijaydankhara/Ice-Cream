import React from "react";
import SliderHome from "../Components/SliderHome";
import spin from "../assets/asset4.svg";
import cup from "../assets/asset16.png";
import img17 from "../assets/asset17.jpeg";
import img18 from "../assets/asset18.jpeg";
import img19 from "../assets/asset19.jpeg";
import HomeProductCardMid from "../Components/Card";
import HomeSecondSlider from "../Components/HomeSecondSlider";
import IceCreamCard from "../Components/HomeCards";
import ArticleCard from "../Components/ArticleCard ";
import Footer from "../Components/Footer";
import Top from "../Components/Top";

const Home = () => {
  return (
    <>
      <Top />
      <SliderHome />
      <div className="container flex flex-col md:flex-row gap-10 md:gap-20 justify-around items-center h-auto md:h-[500px] p-4">
        <div>
          <div className="flex flex-col md:flex-row items-center w-full md:w-[400px]">
            <div className="text-red-600 font-bold font-serif text-[40px] md:text-[50px] mb-4 md:mb-0">
              <h1 className="font-Kalnia">
                Best Ice Cream Shops
              </h1>
            </div>
            <div className="ml-0 md:ml-4">
              <p className="font-medium font-sana-seriDm text-sm md:text-base text-gray-950">
                It's quite possible that we are living in the golden age of ice
                cream innovation. Old-school creameries are churning out vanilla
                bean masterpieces honed over generations, while new shops are
                tossing the term "chef"...
              </p>
              <a href="" className="underline hover:text-red-600 block mt-2">
                Read More
              </a>
            </div>
          </div>
          <h1 className="text-[20px] md:text-[30px] font-medium text-red-600 mt-4 md:mt-6">
            ----------------------------------------
          </h1>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[450px]">
            <div className="text-red-600 font-bold font-serif text-[40px] md:text-[50px] mb-4 md:mb-0">
              <h1 className="font-Kalnia items-center">
                Wave Artisan Shops
              </h1>
            </div>
            <div className="ml-0 md:ml-4">
              <p className="text-gray-950 font-medium font-sana-seriDm text-sm md:text-base sm:text-center sm:text-wrap">
                These ice cream shops represent everything that is well and
                good: new-wave artisan shops challenging the very notion of what
                should be placed on a cone (or stick, or between cookies),
                old-school parlors learning...
              </p>
              <a href="" className="underline hover:text-red-600 block mt-2">
                Read More
              </a>
              <div className="flex justify-end items-end w-[150px] md:w-[230px] mt-4 md:mt-0">
                <img
                  className="w-[40%] hidden sm:block"
                  src={cup}
                  alt="Not Found"
                />
              </div>
            </div>
          </div>
          <h1 className="text-[20px] md:text-[30px] font-medium text-red-600 mt-4 ">
            ----------------------------------------
          </h1>
        </div>
      </div>

      {/*  */}

      <div id="ScrollMenu" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full h-[500px]">
          <div className="overflow-hidden">
            <div
              className="bg-cover bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 h-full"
              style={{ backgroundImage: `url(${img18})` }}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] sm:text-[30px] font-bold text-white">
                  Hello
                </h1>
                <h1 className="text-[40px] sm:text-[30px] font-bold text-white">
                  SUMMER!
                </h1>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="bg-cover bg-no-repeat flex justify-around items-center overflow-hidden hover:scale-110 duration-1000 h-full"
              style={{ backgroundImage: `url(${img19})` }}
            >
              <div
                className="z-10 bg-cover flex h-[120px] w-[120px] sm:h-[100px] sm:w-[100px] justify-center items-center text-[25px] sm:text-[20px] text-white"
                style={{ backgroundImage: `url(${spin})` }}
              >
                -30%
              </div>
              <div className="opacity-0">hello</div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="bg-cover bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 h-full"
              style={{ backgroundImage: `url(${img17})` }}
            >
              <div className="flex flex-col justify-center">
                <h1 className="text-[40px] sm:text-[30px] font-bold text-white">
                  Creamy
                </h1>
                <h1 className="text-[40px] sm:text-[30px] font-bold text-white">
                  Enjoy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="title-block text-center font-Kalnia font-semibold text-[45px] text-[#000] mb-5">
        <h2>Best Ice Cream Shops</h2>
      </div>
      <HomeProductCardMid />
    

      <HomeSecondSlider />
      <IceCreamCard />

      <ArticleCard />

      <Footer />
    </>
  );
};

export default Home;
