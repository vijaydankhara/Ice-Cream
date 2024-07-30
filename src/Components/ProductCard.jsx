import React, { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import {FaEye,} from 'react-icons/fa';
import PaymentMethodImg from '../assets/paymentMethod.png'

const ProductCard = () => {
  const [activeImage, setActiveImage] = useState(
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20.webp"
  );

  const images = [
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-1.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-2.webp",
    "https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2022/08/product-20-3.webp",
  ];

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="mb-6 flex items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Product gallery"
                      src={activeImage}
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-4 ">
                    <button onClick={() => setActiveImage(images[Math.max(images.indexOf(activeImage) - 1, 0)])}>
                      <ChevronLeft className="text-white" />
                    </button>
                    <button onClick={() => setActiveImage(images[Math.min(images.indexOf(activeImage) + 1, images.length - 1)])}>
                      <ChevronRight className="text-white" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 xl:flex-col">
                  {images.map((image, index) => (
                    <div
                      key={image}
                      className={`border-border-base mr-4 flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ${
                        activeImage === image ? "border-black " : ""
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img
                        alt={`Product ${index}`}
                        src={image}
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 m-2 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg pb-1 font-serif font-semibold md:text-xl xl:text-2xl">
                  Cold Brew with Coconut Cream
                </h2>
                <p className=" text-2xl font-semibold font-serif">$12.00</p>
              </div>
              <div className="mb-4">
              <div className="flex text-lg ">
              <FaEye/>
                <p className="ml-2 text-base text-gray-500 mb-4 inline-block">37 People Are Viewing This Right Now</p>
                </div>
                <p className="text-gray-600 mb-4">Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.</p>
                <div className="flex items-center mb-4 rounded-full border gap-2">
                  <button 
                    className="px-2 py-1 " 
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button 
                    className="px-2 py-1 " 
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                  <button className="flex-1 bg-[#000] text-white ml-2 rounded-full py-3 hover:bg-[#ff0000]">Add to cart</button>
                </div>
              </div>
             
              <div className="flex space-x-4 mb-4">
                
                <button className="flex-1 border py-3 rounded-full text-[#000] hover:text-[#fff] bg-[#fff] hover:bg-[#ff0000]">Buy Now</button>
              </div>
              <div className="mb-4 bg-[#cfd2d4] p-4">
                <div className="flex space-x-2 mt-2">
                
                  <img src={PaymentMethodImg} alt="payment method" />
                  
                </div>
                <p className="text-[#000] text-center mt-2">Guaranteed Checkout</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">Free Worldwide Shipping On All Orders Over $100</p>
                <p className="text-gray-600">Delivers In: 3-7 Working Days <a href="#" className="text-gray-950 cursor-pointer underline hover:text-[#ff0000]">Shipping & Return</a></p>
              </div>
              <div className="text-gray-400 flex">
                Categories:
                 <div className="space-x-2 ">
                <span className="text-gray-950 hover:text-[#ff0000] cursor-pointer ">Chocolate</span>
                <span className="text-gray-950 hover:text-[#ff0000] cursor-pointer ">Milkshakes</span>
                <span className="text-gray-950 hover:text-[#ff0000] cursor-pointer ">Strawberry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
