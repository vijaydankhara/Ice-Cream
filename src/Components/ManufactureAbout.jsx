import React from 'react';
import iceCreamImage from '../assets/asset64.jpg';
import { ArrowBigRight, ArrowRight } from 'lucide-react';

const Manufacture = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-10 px-5 md:px-20">
      <div className="md:w-1/2">
        <h2 className="text-red-500 text-2xl font-semibold mb-2">Sweet Escape</h2>
        <h1 className="text-5xl font-bold mb-4">Manufacture</h1>
        <p className="text-gray-500 text-lg mb-6">
          Once The Ingredients Have Cooled Enough, It’s Time To Pour Them Into Molds And Freeze In A Brine Bath. After That, The Ice Cream Sticks Are Dried And Packaged In The Freezer In Square Boxes. From Here, This Cool Ice Cream Is Ready To Be Delivered To Visitors...
        </p>
        <button className="bg-[#ff0000] hover:bg-[#000] text-white px-8 py-3 rounded-full flex items-center">
          View More <span className="ml-2"> <ArrowRight/></span>
        </button>
       
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <img src={iceCreamImage} alt="Ice Cream" className="w-full h-auto ManufactureImg" />
      </div>
    </div>
  );
};

export default Manufacture;
