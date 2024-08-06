import React from 'react';

const stats = [
  { value: '115+', label: 'Branch Shop', mark:'~~' },
  { value: '85+', label: 'Staffs', mark:'~~' },
  { value: '120+', label: 'Flavor Variants', mark:'~~' },
  { value: '90%', label: 'Positive Review',}
];

const StatsSection = () => {
  return (
    <div className="bg-[#fff6f3] py-12">
      <div className="container mx-auto flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-5xl font-bold text-red-600  font-Kalnia">{stat.value}</h2>
            {/* <h1 className="text-red-600 text-5xl">{stat.mark}</h1> */}
            <p className="text-black font-medium font-sana-seriDm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
