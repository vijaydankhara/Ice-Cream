import React from 'react';

const BlogCard = (props) => {
  return (
    <>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] pb-3 overflow-hidden'>
        {/* Category Tag */}
        <div className='absolute w-32 sm:w-36 rounded-3xl mt-2 ml-2 h-8 sm:h-10 bg-white flex justify-center items-center hover:bg-red-600 hover:duration-500 hover:text-white'>
          <a href="">Business Tips</a>
        </div>

        {/* Image */}
        <img className='w-full h-[200px] sm:h-[250px] md:h-[350px] object-cover' src={props.img} alt="not found" />

        {/* Overlay Text and Button */}
        <div className='slide-top w-full drop-shadow-2xl px-5 sm:px-9 -mt-[100px] sm:-mt-[150px] relative bottom-10'>
          <p className='text-white text-[14px] sm:text-[16px] md:text-[20px] -mt-2 sm:-mt-4'>June 20, 2024</p>
          <p className='text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-2'>{props.text}</p>
          <button className='bg-black hover:bg-red-600 text-white w-28 sm:w-32 h-10 sm:h-11 rounded-full mt-3'>
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
