import React from "react";
import SliderHome from "../Components/SliderHome";
import spin from "../assets/asset4.svg";
import cup from "../assets/asset16.png";
import img17 from "../assets/asset17.jpeg";
import img18 from "../assets/asset18.jpeg";
import img19 from "../assets/asset19.jpeg";
import HomeProductCardMid from "../Components/Card";
import Pagination from "../Components/Pagination";
import HomeSecondSlider from "../Components/HomeSecondSlider";
import IceCreamCard from "../Components/HomeCards";
import ArticleCard from "../Components/ArticleCard ";
import Footer from "../Components/Footer";
import Top from "../Components/Top";

const Home = () => {
  return (
    <>
    <Top/>
      <SliderHome />
      <div className="flex gap-20 justify-around items-center h-[500px]">
        <div>
          <div className="flex items-center w-[400px]">
            <div className="text-red-600 font-bold font-serif text-[50px]">
              <h1 className="">
                Best <br /> Ice <br /> Cream <br /> Shops
              </h1>
            </div>
            <div>
              <p className="font-medium">
                it's Quite Possible That We Are Living In The Golden Age Of Ice
                Cream Innovation. Old School Creameris Are Churing out Vannila
                Bean maasterPrice Honed Over Generation While New Shops Are
                Tossing The Term "Chef"{" "}
              </p>
              <a href="" className="underline hover:text-red-600">
                Read More{" "}
              </a>
            </div>
          </div>
          <h1 className="text-[30px] font-medium text-red-600">
            ----------------------------------
          </h1>
        </div>

        <div>
          <div className="flex items-center justify-center w-[450px] ">
            <div className=" text-red-600 font-bold font-serif text-[50px]">
              <h1 className="">
                Wave <br /> Artisan <br /> Shops
              </h1>
            </div>
            <div className="">
              <p className="font-medium">
                These Ice Cream Shops Represent Everything That Is Well And
                Good: New-Wave Artisan Shops Challenging The Very Notion Of What
                Should Be Placed On A Cone (Or Stick, Or Between Cookies),
                Old-School Parlors Learning…{" "}
              </p>
              <a href="" className="underline hover:text-red-600">
                Read More
              </a>
              <div className="flex justify-end items-end w-[230px]">
                <img className="" src={cup} alt="Not Found" />
              </div>
            </div>
          </div>
          <h1 className="text-[30px] font-medium text-red-600">
            -----------------------------------
          </h1>
        </div>
      </div>

      {/*  */}

      <div id="ScrollMenu" className="w-full">
        <div className="flex w-full h-[350px]">
          <div className="overflow-hidden w-1/3">
            <div
              className="bg-cover bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 h-full"
              style={{ backgroundImage: `url(${img18})` }}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="jus text-[40px] font-bold text-white">Hello</h1>
                <h1 className="text-[40px] font-bold text-white">SUMMER!</h1>
              </div>
            </div>
          </div>

          <div className="overflow-hidden w-1/3 h-[350px]">
            <div
              className="bg-cover bg-no-repeat flex justify-around items-center overflow-hidden hover:scale-110 duration-1000 h-full"
              style={{ backgroundImage: `url(${img19})` }}
            >
              <div
                className="z-10 bg-cover flex h-[120px] w-[120px] justify-center items-center text-[25px] text-white"
                style={{ backgroundImage: `url(${spin})` }}
              >
                -30%
              </div>
              <div className="opacity-0">hello</div>
            </div>
          </div>

          <div className="overflow-hidden w-1/3 h-[350px]">
            <div
              className="bg-cover bg- h-full bg-no-repeat flex justify-center overflow-hidden hover:scale-110 duration-1000 "
              style={{ backgroundImage: `url(${img17})` }}
            >
              <div className="flex flex-col justify-center">
                <h1 className="text-[40px] font-bold text-white">Creamy</h1>
                <h1 className="text-[40px] font-bold text-white">Enjoy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div class="title-block text-center font-Kalnia font-semibold text-[45px] text-[#000] mb-5">
        <h2>Best Ice Cream Shops</h2>
      </div>
      <HomeProductCardMid />
      <Pagination />
      <HomeSecondSlider />
      <IceCreamCard />

 
      <ArticleCard />

      <Footer />
    </>
  );
};

export default Home;
