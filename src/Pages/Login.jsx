import React, { useState } from 'react';
import backgroundImage from "../assets/asset50.jpeg";
import { FaUser } from 'react-icons/fa';
import Footer2 from '../Components/Footer2';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col text-center items-center text-white mt-28">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">My Account</h1>
            <p className="mt-2 text-sm sm:text-base">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">Home</a> 
              <span className="text-black mx-1">/</span>
              <span className="text-red-500">My Account</span>
            </p>
          </div>
        </div>
      </div>

      {/* Login and Register Forms */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 w-full px-6 md:px-10 lg:px-20 py-10">
        {/* Login Form */}
        <div className="p-6 bg-white border border-gray-300 w-full lg:w-1/2">
          <div className="flex justify-center text-2xl gap-2 underline">
            <FaUser />
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">Login</h2>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">
                Username Or Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {/* Password visibility icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="text-sm text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-sm font-bold text-blue-500 hover:text-blue-800">Lost Your Password?</a>
            </div>
            <button
              className="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-red-500 transition duration-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Register Form */}
        <div className="p-6 bg-white border border-gray-300 w-full lg:w-1/2">
          <div className="flex justify-center text-2xl gap-2 underline">
            <FaUser />
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">Register</h2>
          </div>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">Email Address <span className="text-red-500">*</span></label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                type="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">Password <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {/* Password visibility icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              className="w-full px-4 py-2 font-bold text-white bg-gray-400 rounded-full hover:bg-red-500 transition duration-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default Login;
