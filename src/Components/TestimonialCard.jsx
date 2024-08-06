import React from "react";
import avtar1 from "../assets/avatar1.jpg";
import avtar2 from "../assets/avatar2.jpg";
import avtar3 from "../assets/avatar3.jpg";
import avtar4 from "../assets/avatar4.jpg";

const TestimonialCard = () => {
  return (
    <div className="flex justify-center space-x-6 mx-5">
    
      {/* 1st card */}
      <div className="flex flex-col  items-center p-6 bg-[#faf2e7] rounded-lg shadow-md max-w-md">
        <div className="flex justify-center  items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar1}
              alt="Anana"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Anana</h3>
            <p className="text-gray-600">Photographer</p>
          </div>
        </div>
        <p className="text-center text-gray-800">
          “I absolutely love this place! The variety of flavors is impressive,
          and each scoop is packed with deliciousness....
        </p>
      </div>
      {/* 2nd card */}
      <div className="flex flex-col items-center p-6 bg-[#faf2e7] rounded-lg shadow-md max-w-md">
        <div className="flex justify-center items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar2}
              alt="Ana Smith"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Ana Smith</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
        </div>
        <p className="text-center text-gray-800">
          “A great company to buy from. Excellent quality products at good
          value. Delivery is efficient and quick.”
        </p>
      </div>
      {/* 3rd card */}
      <div className="flex flex-col items-center p-6 bg-[#faf2e7] rounded-lg shadow-md max-w-md">
        <div className="flex justify-center items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar3}
              alt="Jane Smith"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Linda</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
        <p className="text-center text-gray-800">
          “ I have never been disappointed, either for myself or as gifts, the
          pieces are lovely, reasonably...
        </p>
      </div>

      {/* 4th card
      <div className="flex flex-col items-center p-6 bg-[#faf2e7] rounded-lg shadow-md max-w-md">
        <div className="flex justify-center items-center gap-x-6 mb-4">
          <div>
            <img
              className="w-28 h-28 rounded-full  outline outline-white"
              src={avtar4}
              alt="Robeson"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Robeson</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
        <p className="text-center text-gray-700">
        “ I have never been disappointed, either for myself or as gifts, the pieces are lovely, reasonably...
        </p>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
