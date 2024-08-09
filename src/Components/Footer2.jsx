import React from "react";
import { BiLogoBehance } from "react-icons/bi";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaArrowRight, FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

function Footer2() {
  return (
    <MDBFooter
      bgColor="black"
      className="text-center text-lg-start text-muted pt-16"
    >
      <section className="pb-5">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol className="mx-auto mb-4">
              <h6 className="text-white font-serif text-xl fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                our newsletter
              </h6>
              <p className="text-white text-lg ">
                Product announcements, promotions, and more!
              </p>
              <div className="">
              <input type="email" id="email" name="email" placeholder="Your Email" className="border-none w-[70%] mt-5 rounded-full placeholder:pl-4 py-3  " />

    </div>
              <div className="bg-[#e10914] hover:bg-gray-50 text-gray-50 hover:text-gray-950 flex justify-center items-center text-3xl text-center w-14  h-14 rounded-full mt-4">
                <FaArrowRight />
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="FooterTitle ">Information</h6>
              <ul className="">
                <li className="footerServiceMenu ">Help Center</li>
                <li className="footerServiceMenu">Shipping</li>
                <li className="footerServiceMenu">Returns</li>
                <li className="footerServiceMenu">Policies</li>
                <li className="footerServiceMenu">Gift Cards</li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="FooterTitle">Shop</h6>
              <ul className="">
                <li className="footerServiceMenu">All Flavors</li>
                <li className="footerServiceMenu">Collections</li>
                <li className="footerServiceMenu">Pint Club</li>
                <li className="footerServiceMenu">Merch</li>
                <li className="footerServiceMenu">Corporate Gifts</li>
              </ul>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="FooterTitle">About Us</h6>
              <ul className="">
                <li className="footerServiceMenu">Our story</li>
                <li className="footerServiceMenu">Contact</li>
                <li className="footerServiceMenu">Affiliate Program</li>
                <li className="footerServiceMenu">Referral Program</li>
                <li className="footerServiceMenu">Careers</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className=" border border-[#fbfafa] opacity-15"></div>
      <div className="pt-1  md:mt-0 flex justify-between items-center px-3">
        <div className="flex left-0 space-x-5 items-center py-7">
          <div className="mb-1 ">
            <p className="text-base text-white text-center sm:text-left">
              &copy; 2024 – Jumys. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 text-white">
          <a className="text-2xl cursor-pointer"><FaFacebook/></a>
          <a className="text-2xl cursor-pointer"><FaUser/></a>
          <a className="text-2xl cursor-pointer"><FaYoutube/></a>
          <a className="text-2xl cursor-pointer"><FaInstagram/></a>
          <a className="text-2xl cursor-pointer"><BiLogoBehance/></a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer2;
