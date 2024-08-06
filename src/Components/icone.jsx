import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const IconBars = () => {
  return (
    <div className="flex items-center space-x-6 mr-5">
      <div className="relative" id="icon1">
        <FontAwesomeIcon icon={faSearch} className="iconeNav" />
      </div>
      <div className="relative" id="icon1">
        <FontAwesomeIcon icon={faUser} className="iconeNav" />
      </div>
      <div className="relative" id="icon1">
        <FontAwesomeIcon icon={faHeart} className="iconeNav" />
        <span className="icone"></span>
      </div>
      <div className="relative">
        <FontAwesomeIcon icon={faShoppingCart} className="iconeNav" />
        <span className="icone"></span>
      </div>
    </div>
  );
};

export default IconBars;
