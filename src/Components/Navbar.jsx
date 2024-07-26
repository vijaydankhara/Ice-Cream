import React, { useState } from "react";
import Weblogo from "../assets/asset0.svg";
import { NavLink, Outlet } from "react-router-dom";
import IconBar from "./icone";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#fff] box-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between py-6" id="navbar">
            <div id="logo">
              <NavLink to="/">
                <img
                  src={Weblogo}
                  alt="Logo"
                  className=" h-32 w-32 logo md:h-8 md:w-auto  "
                  style={{ animation: "logo-spin 2s linear infinite" }}
                />
              </NavLink>
            </div>
            <div className="hidden md:flex space-x-16">
              <div className="relative">
                <button
                  onClick={() => toggleMenu("home")}
                  className="NavbatTxt "
                >
                  Home
                </button>
                {activeMenu === "home" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#ff6822] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home3
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home4
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home5
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home6
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home7
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home8
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleMenu("shop")}
                  className="NavbatTxt"
                >
                  Shop
                </button>
                {activeMenu === "shop" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/shop"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Shop1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Shop2
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleMenu("products")}
                  className="NavbatTxt"
                >
                  Products
                </button>
                {activeMenu === "products" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/product"
                        className="product"
                        onClick={() => toggleMenu(null)}
                      >
                        Product1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/product"
                        className="product"
                        onClick={() => toggleMenu(null)}
                      >
                        Product2
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleMenu("blog")}
                  className="NavbatTxt"
                >
                  Blog
                </button>
                {activeMenu === "blog" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/blog"
                        className="blog"
                        onClick={() => toggleMenu(null)}
                      >
                        Blog1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className="blog"
                        onClick={() => toggleMenu(null)}
                      >
                        Blog2
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleMenu("page")}
                  className="NavbatTxt"
                >
                  Page
                </button>
                {activeMenu === "page" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/page"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Page1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/page"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Page2
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
       
            <IconBar/>
            </div>

            <div className="md:hidden">
              <button onClick={() => toggleMenu("mobile")} className="text-white">
                ☰
              </button>
            </div>
          </div>

          {activeMenu === "mobile" && (
            <ul className="md:hidden bg-[#ff6828] text-white text-xl font-bold space-y-4 py-4 px-4">
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
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
