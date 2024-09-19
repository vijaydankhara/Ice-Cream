import React from 'react';
import CountUp from 'react-countup';

function NumberCounter() {
  const NumberCounterItem = ({ end, label, isPercentage }) => {
    return (
      <div className="text-center mx-4 md:mx-8 mb-8 md:mb-0">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold">
          <CountUp className="font-Kalnia text-5xl md:text-6xl" end={end} duration={2.5} />
          {isPercentage ? '%' : '+'}
        </h2>
        <p className="text-black text-base md:text-lg mt-2">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-pink-100 py-10 md:py-20">
      <div className="flex flex-wrap justify-center gap-y-6">
        <NumberCounterItem end={115} label="Branch Shop" />
        <span className="text-red-600 text-3xl md:text-4xl mx-2 md:mx-4 font-Kalnia">~~</span>
        <NumberCounterItem end={85} label="Staffs" />
        <span className="text-red-600 text-3xl md:text-4xl mx-2 md:mx-4 font-Kalnia">~~</span>
        <NumberCounterItem end={120} label="Flavor Variants" />
        <span className="text-red-600 text-3xl md:text-4xl mx-2 md:mx-4 font-Kalnia">~~</span>
        <NumberCounterItem end={90} label="Positive Review" isPercentage={true} />
      </div>
    </div>
  );
}

export default NumberCounter;
