import React, { useState } from 'react';
import Weblogo from '../assets/asset0.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='bg-white outline-none border-none'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between py-6'>
            <div>
              <NavLink to='/'>
                <img src={Weblogo} alt='Logo' className='h-8 ml-5' />
              </NavLink>
            </div>
            <ul className='hidden md:flex text-white text-xl font-bold space-x-10'>
              <li>
                <NavLink to='/'><Dropdown>
                  <Dropdown.Toggle className='dropDownBtn' variant='secondary' id='dropdown-basic'>
                Home
                  

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Home 1</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 2</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 3</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 4</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 5</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 6</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 7</Dropdown.Item>
                    <Dropdown.Item href='#'>Home 8</Dropdown.Item>

                  </Dropdown.Menu>
                  </Dropdown.Toggle>
                </Dropdown> </NavLink>
              </li>
              <li>
                <NavLink to='/about'><Dropdown>
                  <Dropdown.Toggle className='dropDownBtn' variant='secondary' id='dropdown-basic'>
                About Us
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Action</Dropdown.Item>
                    <Dropdown.Item href='#'>Another action</Dropdown.Item>
                    <Dropdown.Item href='#'>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> 
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                <Dropdown>
                  <Dropdown.Toggle className='dropDownBtn' variant='secondary' id='dropdown-basic'>
                Contact Us
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Action</Dropdown.Item>
                    <Dropdown.Item href='#'>Another action</Dropdown.Item>
                    <Dropdown.Item href='#'>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> </NavLink>
              </li>
              <li>
                <NavLink to='/shop'>
                  <Dropdown>
                  <Dropdown.Toggle className='dropDownBtn' variant='secondary' id='dropdown-basic'>
                Shop
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>About Us</Dropdown.Item>
                    <Dropdown.Item href='#'>Contact</Dropdown.Item>
                    <Dropdown.Item href='#'>Faq</Dropdown.Item>
                    <Dropdown.Item href='#'>Faq 2</Dropdown.Item>
                    <Dropdown.Item href='#'>Page 404</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> 
                </NavLink>
              </li>
            </ul>
            <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-white'>
                ☰
              </button>
            </div>
          </div>
          {menuOpen && (
            <ul className='md:hidden bg-[#ff6828] text-white text-xl font-bold space-y-4 py-4 px-4'>
              <li>
                <NavLink to='/' onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' onClick={toggleMenu}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to='/shop' onClick={toggleMenu}>
                <Dropdown>
                  <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                Shop
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#'>Action</Dropdown.Item>
                    <Dropdown.Item href='#'>Another action</Dropdown.Item>
                    <Dropdown.Item href='#'>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> 
                </NavLink>
              </li>
              <li>
               
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
