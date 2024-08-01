import React from "react";

const Pagination = () => {
  return (
    <div>
      <ul className="flex justify-center space-x-2 mb-10" role="tablist">
        {[...Array(8)].map((_, index) => (
          <li
            key={index}
            className={`${
              index === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-full`}
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              id={`slick-slide-control0${index}`}
              aria-controls={`slick-slide0${index}`}
              aria-label={`${index + 1} of 8`}
              className="w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
              aria-selected={index === 0 ? "true" : "false"}
              tabIndex={index === 0 ? "0" : "-1"}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
