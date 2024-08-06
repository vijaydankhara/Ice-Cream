import React from 'react'
import backgroundImage from '../assets/asset50.jpeg';

const ContactSlider = () => {
  return (
    <div>
        <div className="relative w-full h-[450px]">
      <img src={backgroundImage} alt="About Us Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold text-black">Contact</h1>
          <p className="mt-2">
            <a href="#" className="text-[#000] hover:text-[#ff0000]">Home</a> <span className='text-black'>/</span><span className="text-red-500">Contact</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactSlider
