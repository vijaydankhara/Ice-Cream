import React, { useState } from "react";
import Weblogo from "../assets/asset0.svg";
import { NavLink, Outlet } from "react-router-dom";
import { FaTimes, FaUser, FaChevronRight } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#fff] w-full h-28 flex justify-around items-center z-50 sticky top-0">
        <div className="container">
          <div className="flex items-center justify-between ml-5">
            <div className="" id="toggelmenuTop">
              <button
                onClick={() => toggleMenu("mobile")}
                className="text-gray-950"
              >
                ☰
              </button>
            </div>
            <NavLink to="/" className="flex items-center rtl:space-x-reverse">
              <img
                id="logo"
                className="size-24"
                src={Weblogo}
                alt="Not Found"
              />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      {activeMenu === "mobile" && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white text-black z-50 shadow-lg">
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <span className="text-xl font-semibold">Menu</span>
            <button
              onClick={() => toggleMenu(null)}
              className="text-gray-600 text-3xl"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-6 text-lg font-medium py-8 px-4">
            <li className="flex justify-between items-center">
              <NavLink to="/" onClick={() => toggleMenu(null)}>
                Home
              </NavLink>
              <FaChevronRight />
            </li>
            <li className="flex justify-between items-center">
              <NavLink to="/shop" onClick={() => toggleMenu(null)}>
                Shop
              </NavLink>
              <FaChevronRight />
            </li>
            <li className="flex justify-between items-center">
              <NavLink to="/product" onClick={() => toggleMenu(null)}>
                Products
              </NavLink>
              <FaChevronRight />
            </li>
            <li className="flex justify-between items-center">
              <NavLink to="/blog" onClick={() => toggleMenu(null)}>
                Blog
              </NavLink>
              <FaChevronRight />
            </li>
            <li className="flex justify-between items-center">
              <NavLink to="/page" onClick={() => toggleMenu(null)}>
                Page
              </NavLink>
              <FaChevronRight />
            </li>
          </ul>

          {/* Login/Register Button */}
          <div className="absolute bottom-0 w-full py-4 bg-black text-white flex justify-center">
            <NavLink
              to="/login"
              className="flex items-center space-x-2"
              onClick={() => toggleMenu(null)}
            >
              <FaUser />
              <span>Login or Register</span>
            </NavLink>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Navbar;
