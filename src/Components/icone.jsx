import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Login from "../Pages/Login";

const IconBars = () => {
  return (
    <div className="flex items-center space-x-6 mr-5">
      <div className="relative" id="icon1">
        <FontAwesomeIcon icon={faSearch} className="iconeNav" />
      </div>

      <NavLink to="/login" className="relative" id="icon1">
        <FontAwesomeIcon icon={faRightToBracket} className="iconeNav" />
      </NavLink>

     

      <div className="relative" id="icon1">
        <FontAwesomeIcon icon={faHeart} className="iconeNav" />
        <span className="icone"></span>
      </div>
      <div className="relative">
        <FontAwesomeIcon icon={faShoppingBasket} className="iconeNav" />
        <span className="icone"></span>
      </div>
    </div>
  );
};

export default IconBars;
