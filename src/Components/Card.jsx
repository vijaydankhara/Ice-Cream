import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import assets20 from "../assets/asset20.webp";
import assets21 from "../assets/asset21.webp";
import assets24 from "../assets/asset24.webp";
import assets25 from "../assets/asset25.webp";
import assets28 from "../assets/asset28.webp";
import assets29 from "../assets/asset29.webp";
import assets30 from "../assets/asset30.webp";
import assets31 from "../assets/asset31.webp";
import assets32 from "../assets/asset32.webp";
import assets33 from "../assets/asset33.jpeg";
import assets34 from "../assets/asset34.webp";
import assets35 from "../assets/asset35.jpeg";
import assets66 from "../assets/asset66.webp";
import assets67 from "../assets/asset67.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeProductCardMid = ({
  title,
  price,
  reviews,
  rating,
  image1,
  image2,
  soldOut,
}) => {
  const [image, setImage] = useState(image1);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setImage(image2);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setImage(image1);
    setVisible(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="relative w-96 flex flex-col items-center justify-center">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Card.Img src={image} alt={title} />
          {visible && (
            <div className="flex flex-col gap-2 absolute top-2 right-2 z-10 items-center">
              <div className="relative group">
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

          {soldOut && (
            <div className="absolute top-[30%] left-[35%] items-center bg-white px-3 p-0.5 rounded-full text-center py-1">
              Sold Out
            </div>
          )}
        </div>

        <Card.Body>
          <Card.Title className="mt-3">{title}</Card.Title>
          <Card.Text>
            <div className="flex items-center">
              <div className="flex text-red-500">
                {[...Array(rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <div className="ml-2 text-sm">{reviews} Reviews</div>
            </div>
            <strong>{price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const HomeProductList = () => {
  const products = [
    {
      title: "Blackout Chocolate Cake",
      price: "$12.00",
      reviews: 2,
      rating: 5,
      image1: assets34,
      image2: assets35,
      soldOut: true,
    },
    {
      title: "Dark Chocolate Fudge",
      price: "$15.00",
      reviews: 4,
      rating: 4,
      image1: assets24,
      image2: assets25,
      soldOut: false,
    },
    {
      title: "Vanilla Caramel Cake",
      price: "$10.00",
      reviews: 5,
      rating: 3,
      image1: assets20,
      image2: assets21,
      soldOut: false,
    },
    {
      title: "Strawberry Shortcake",
      price: "$8.00",
      reviews: 3,
      rating: 4,
      image1: assets28,
      image2: assets29,
      soldOut: true,
    },
    {
      title: "Strawberry Shortcake",
      price: "$8.00",
      reviews: 3,
      rating: 4,
      image1: assets32,
      image2: assets33,
      soldOut: true,
    },
    {
      title: "Strawberry Shortcake",
      price: "$8.00",
      reviews: 3,
      rating: 4,
      image1: assets30,
      image2: assets30,
      soldOut: true,
    },
    {
      title: "Strawberry Shortcake",
      price: "$8.00",
      reviews: 3,
      rating: 4,
      image1: assets31,
      image2: assets31,
      soldOut: true,
    },
    {
      title: "Strawberry Shortcake",
      price: "$8.00",
      reviews: 3,
      rating: 4,
      image1: assets66,
      image2: assets67,
      soldOut: true,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <HomeProductCardMid
          key={index}
          title={product.title}
          price={product.price}
          reviews={product.reviews}
          rating={product.rating}
          image1={product.image1}
          image2={product.image2}
          soldOut={product.soldOut}
        />
      ))}
    </Slider>
  );
};

export default HomeProductList;
