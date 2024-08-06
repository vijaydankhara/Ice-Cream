import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import assets34 from "../assets/asset34.webp";
import assets35 from "../assets/asset35.jpeg";

const HomeProductCardMid = () => {
  const [image, setImage] = useState(assets34);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setImage(assets35);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setImage(assets34);
    setVisible(false);
  };

  return (
    <Card className="ml-11 relative w-72">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Card.Img src={image} alt="Darkest Chocolate" />
        {visible && (
          <div className="flex flex-col gap-2 absolute top-2 right-2 z-10 ">
            <div className="relative group ">
              <span className="tooltip">Add to cart</span>
              <Button className="HomeProductCardMid">
                <FaShoppingCart />
              </Button>
            </div>

            <div className="relative group">
              <Button className="HomeProductCardMid">
                <FaSearch />
              </Button>
              <span className="tooltip">Quick View</span>
            </div>

            <div className="relative group">
              <Button className="HomeProductCardMid">
                <FaHeart />
              </Button>
              <span className="tooltip">Wishlist</span>
            </div>

            <div className="relative group">
              <Button className="HomeProductCardMid">
                <FaShareAlt />
              </Button>
              <span className="tooltip">Share</span>
            </div>
          </div>
        )}

        <div className="absolute top-[30%] left-[35%] items-center bg-white px-3 p-0.5 rounded-full text-center py-1">
          Sold Out
        </div>
      </div>

      <Card.Body>
        <Card.Title className="mt-3">Blackout Chocolate Cake</Card.Title>
        <Card.Text>
          <div className="flex items-center">
            <div className="flex text-red-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className="ml-2 text-sm">2 Reviews</div>
          </div>
          <strong>$12.00</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HomeProductCardMid;
