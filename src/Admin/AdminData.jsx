import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AdminData = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Fetch data using axios
  useEffect(() => {
    const GetAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:1111/api/admin/get-All-Product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product Get All data:", error);
      }
    };

    GetAllProducts();
  }, []);

  if (!Array.isArray(products)) {
    console.error("Products is undefined array.");
    return null;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      {/* Add Product Button */}
      <div className="flex justify-end mb-4">
        <NavLink to={"/addproduct"}>
          <button className="bg-[#1a34f7] hover:bg-[#ff6c28] duration-1000 text-white px-4 py-2 rounded">
            Add Product
          </button>
        </NavLink>
      </div>

      {/* Product Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Slash Price</th>
            <th className="border px-4 py-2">Discount</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Size</th>
            <th className="border px-4 py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">
                <img
                  src={product.productImage}
                  className="w-16 h-16"
              
                />
              </td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">${product.slashPrice}</td>
              <td className="border px-4 py-2">{product.discount}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.size.join(", ")}</td>
              <td className="border px-4 py-2">{product.color.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white hover:bg-orange-500"
                  : "bg-gray-200 hover:bg-orange-500"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AdminData;
