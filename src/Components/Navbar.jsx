import React, { useState } from "react";
import Weblogo from "../assets/asset0.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom"; // Added useNavigate
import IconBar from "./icone";
import "./Navbar.css";
import { FaGripVertical, FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate(); // Initializing useNavigate

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#fff] w-full h-28 flex justify-around items-center z-50  sticky top-0">
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
            <button
              className="flex items-center rtl:space-x-reverse"
              onClick={() => navigate("/")} // Navigate to home
            >
              <img
                id="logo"
                className="size-24"
                src={Weblogo}
                alt="Not Found"
              />
            </button>
            <div className="hidden md:flex space-x-16" id="toggle">
              <div
                className="relative"
                onMouseEnter={() => toggleMenu("home")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt" onClick={() => navigate("/")}>
                  Home
                </button>
              </div>

              {/* Shop, Products, Blog, and Page menus stay unchanged */}
              <div
                className="relative"
                onMouseEnter={() => toggleMenu("shop")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Shop &#11163;</button>
                {activeMenu === "shop" && (
                  <ul className="absolute left-0  w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/shopList"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Shop List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("products")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button
                  className="NavbatTxt"
                  onClick={() => navigate("/product")}
                >
                  Products
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("blog")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt" onClick={() => navigate("/blog")}>
                  Blog
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("blog")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt" onClick={() => navigate("/addproduct")}>
                  AddProducts
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("page")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Page &#11163;</button>
                {activeMenu === "page" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/aboutUs"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq2"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Faq 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/page404"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Page 404
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <IconBar />
            </div>
          </div>

          {activeMenu === "mobile" && (
            <ul
              id="toggelmenuTop"
              className=" bg-[#ffffff] text-black text-xl font-bold space-y-4 py-4 px-4 w-full"
            >
              <li>
                <NavLink to="/" onClick={() => toggleMenu(null)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" onClick={() => toggleMenu(null)}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" onClick={() => toggleMenu(null)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => toggleMenu(null)}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/page" onClick={() => toggleMenu(null)}>
                  Page
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div
          className="w-full justify-evenly flex fixed bg-white h-16 bottom-0"
          id="toggelHiden"
        >
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaGripVertical />
            Shop
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaUser />
            Account
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaSearch />
            Search
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaHeart />
            Wishlist
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
