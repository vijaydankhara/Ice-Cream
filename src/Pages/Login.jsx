import React from 'react'
import backgroundImage from "../assets/asset50.jpeg";
import { FaUser, FaArrowUp, FaEye } from 'react-icons/fa';
import Footer2 from '../Components/Footer2';

const Login = () => {
  return (
      <div className="mt-24">
      <div className="relative w-full h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center text-white mt-28">
            <h1 className="text-4xl font-bold text-black">My Account</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">My Account</span>
            </p>
          </div>
        </div>
      </div>

{/* Login Forms */}
<div className='flex'>
  <div className="max-w-md mx-auto p-8 space-y-6 border rounded-lg shadow-md">
      <div className="flex items-center space-x-2 text-lg font-bold">
        <FaUser />
        <span>Login</span>
      </div>
      <hr className="border-t-2 border-black w-full" />
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username Or Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
            <FaEye className="absolute top-2.5 right-3 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-black border-gray-300 rounded" />
            <span className="ml-2 text-sm text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-sm text-gray-700">Lost Your Password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
        >
          LOGIN
        </button>
      </form>
    </div>

    {/*  */}
    <div className="max-w-md mx-auto p-8 space-y-6 border rounded-lg shadow-md">
      <div className="flex items-center space-x-2 text-lg font-bold">
        <FaArrowUp />
        <span>Register</span>
      </div>
      <hr className="border-t-2 border-black w-full" />
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
            <FaEye className="absolute top-2.5 right-3 cursor-pointer" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-gray-500 rounded-md cursor-not-allowed"
          disabled
        >
          REGISTER
        </button>
      </form>
    </div>
</div>


    </div>
  )
}

export default Login
