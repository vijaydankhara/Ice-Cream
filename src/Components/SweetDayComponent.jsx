import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faTruck, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const SweetDayComponent = () => {
  return (
    <div class="bg-[url('./assets/asset52.jpeg')] bg-cover">
    <div className="flex flex-col items-center justify-center bg- p-8 ">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold mb-4">Make Every Day A Sweet Day</h1>
        <p className="text-lg text-gray-600 mb-8">
          But Incorporating Liquor Into Ice Cream Seems Like Nothing When You Consider How Inventive...
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faSnowflake} className="text-red-500" />
            <span className="text-xl">Guaranteed Frozen Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faTruck} className="text-red-500" />
            <span className="text-xl">Flat-Rate Shipping Nationwide</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBoxOpen} className="text-red-500" />
            <span className="text-xl">Instagram-Worthy Unboxing</span>
          </div>
        </div>
        <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-lg hover:bg-gray-200">
          View More
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <img src="path/to/red-donut.png" alt="Red Donut Ice Cream" className="w-40 h-40 mx-4" />
        <img src="path/to/green-donut.png" alt="Green Donut Ice Cream" className="w-40 h-40 mx-4" />
      </div>
    </div>
    </div>
  );
};

export default SweetDayComponent;
