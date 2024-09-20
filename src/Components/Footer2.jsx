import React from "react";
import { BiLogoBehance } from "react-icons/bi";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaArrowRight, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

function HomeFooter() {
  return (
    <MDBFooter bgColor="black" className="text-lg-start text-muted">
      <section className="pb-5 text-white">
        <MDBContainer className="px-4 sm:px-6 lg:px-8 pt-14">
          <MDBRow className="flex flex-col md:flex-row justify-between">
            {/* Newsletter Section */}
            <MDBCol md="6" lg="4" className="py-7 mb-4">
              <h6 className="text-white font-serif text-xl md:text-2xl lg:text-3xl fw-bold mb-4">
                Our Newsletter
              </h6>
              <p className="text-gray-500 text-base md:text-lg mb-4">
                Product Announcements, Promotions, And More!
              </p>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email..."
                  className="bg-black text-white placeholder-gray-400 border-b-2 border-gray-500 h-12 w-full px-3 focus:outline-none"
                />
                <button className="absolute right-0 top-0 mt-1 bg-[#e10914] hover:bg-gray-700 text-white flex justify-center items-center text-xl w-12 h-12 rounded-full transition duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </MDBCol>

            {/* Information Section */}
       
            <MDBCol md="2" lg="2" className="mb-4">
              <h6 className="FooterTitle">Information</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">Help Center</a></li>
                <li><a href="#" className="hover:text-red-600">Shipping</a></li>
                <li><a href="#" className="hover:text-red-600">Returns</a></li>
                <li><a href="#" className="hover:text-red-600">Policies</a></li>
                <li><a href="#" className="hover:text-red-600">Gift Cards</a></li>
              </ul>
            </MDBCol>

            {/* Shop Section */}
            <MDBCol md="2" lg="2" className="mb-4">
              <h6 className="FooterTitle">Shop</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">All Flavors</a></li>
                <li><a href="#" className="hover:text-red-600">Collections</a></li>
                <li><a href="#" className="hover:text-red-600">Pint Club</a></li>
                <li><a href="#" className="hover:text-red-600">Merch</a></li>
                <li><a href="#" className="hover:text-red-600">Corporate Gifts</a></li>
              </ul>
            </MDBCol>
           
            {/* About Us Section */}
            <MDBCol md="6" lg="3">
              <h6 className="FooterTitle">About Us</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">Our Story</a></li>
                <li><a href="#" className="hover:text-red-600">Contact</a></li>
                <li><a href="#" className="hover:text-red-600">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-red-600">Referral Program</a></li>
                <li><a href="#" className="hover:text-red-600">Careers</a></li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="border border-[#fbfafa] opacity-15"></div>
      
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-base text-white mb-4 md:mb-0">
          &copy; 2024 - Jumys. All Rights Reserved.
        </div>
        <div className="flex space-x-4 text-white text-2xl">
          <a href="#" className="hover:text-red-600"><FaFacebook /></a>
          <a href="#" className="hover:text-red-600"><FaUser /></a>
          <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          <a href="#" className="hover:text-red-600"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600"><BiLogoBehance /></a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default HomeFooter;
