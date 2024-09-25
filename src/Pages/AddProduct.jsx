import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    productImage: '',
    discount: '',
    price: '',
    slashPrice: '',
    category: '',
    size: '',
    color: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'productImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/colorful-summer-treat-melting-ice-cream-generative-ai_188544-12424.jpg?t=st=1727289171~exp=1727289771~hmac=5595aff7c0ed336d7d3026ce4e357ecb0a71c8f67bf685c75d9169707d32f4ce')",
      }}
    >
      <form
        className="w-full max-w-md bg-[#73d7a5] shadow-lg rounded-lg px-6 pt-6 pb-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold font-serif mb-4 text-center text-[#000]">Product Form</h2>

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Product Image</label>
          <input
            type="file"
            name="productImage"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Discount & Category  */}
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Discount</label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Price & Slash Price */}
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Slash Price</label>
            <input
              type="number"
              name="slashPrice"
              value={formData.slashPrice}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Size & Color (Dropdowns) */}
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Color</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Color</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Brick">Brick</option>
              <option value="Green">Green</option>
              <option value="Pink">Pink</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
