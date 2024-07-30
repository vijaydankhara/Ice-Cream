import React, { useState } from 'react';

const ProductItem = () => {
  const [selectedImage, setSelectedImage] = useState('https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2019/04/product-14-5-600x600.webp');

  const images = [
    'https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2019/04/product-14-5-600x600.webp',
    'https://wpbingosite.com/wordpress/jumys/wp-content/uploads/2019/04/product-14-1-600x600.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col w-full md:w-1/3">
        <img src={selectedImage} alt="Darkest Chocolate" className="w-full h-auto rounded-lg mb-4" />
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 rounded-lg cursor-pointer ${selectedImage === image ? 'border-2 border-black' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 md:ml-8">
        <h2 className="text-2xl font-bold mb-2">Darkest Chocolate</h2>
        <p className="text-xl font-semibold text-gray-800 mb-4">$13.00</p>
        <p className="text-gray-600 mb-4">Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.</p>
        <div className="flex items-center space-x-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full">-</button>
          <span>1</span>
          <button className="px-4 py-2 bg-gray-200 rounded-full">+</button>
        </div>
        <button className="px-6 py-2 bg-black text-white rounded-full mb-4">Add to cart</button>
        <button className="px-6 py-2 bg-white border border-black text-black rounded-full mb-4">Buy Now</button>
        <div className="flex space-x-4 mb-4">
          <button className="flex items-center">
            <span className="material-icons">favorite_border</span>
            <span className="ml-2">Add to wishlist</span>
          </button>
          <button className="flex items-center">
            <span className="material-icons">compare_arrows</span>
            <span className="ml-2">Compare</span>
          </button>
          <button className="flex items-center">
            <span className="material-icons">share</span>
            <span className="ml-2">Share</span>
          </button>
        </div>
        <p className="text-gray-600">Free Worldwide Shipping On All Orders Over $100</p>
        <p className="text-gray-600">Delivers In 3-7 Working Days</p>
      </div>
    </div>
  );
};

export default ProductItem;
