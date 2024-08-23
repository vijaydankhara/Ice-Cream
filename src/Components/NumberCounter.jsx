import React from 'react';
import CountUp from 'react-countup';


function NumberCounter() {
  const NumberCounter = ({ end, label,isPercentage }) => {
    return (
      <div className="text-center mx-8">
        <h2 className="text-red-600 text-4xl font-bold">
          <CountUp className='font-Kalnia text-6xl' end={end} duration={2.5} />
          {isPercentage ? '%' : '+'}
        </h2>
        <p className="text-black text-lg mt-2">{label}</p>
      </div>
    );
  };
  

  return (
    <div className="bg-pink-100 py-20">
      <div className="flex justify-center">
        <NumberCounter end={115} label="Branch Shop" className="font-sana-seriDm" />
        <span className="text-red-600 text-4xl mx-4 font-Kalnia">~~</span>
        <NumberCounter end={85} label="Staffs" className="font-sana-seriDm" />
        <span className="text-red-600  text-4xl mx-4 font-Kalnia">~~</span>
        <NumberCounter end={120} label="Flavor Variants" className="font-sana-seriDm" />
        <span className="text-red-600 text-4xl mx-4 font-Kalnia">~~</span>
        <NumberCounter end={90}  label="Positive Review" isPercentage = {true}  className="font-sana-seriDm" />
      </div>
    </div>
  );
}

export default NumberCounter;