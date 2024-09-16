import React from "react";

const Pagination = () => {
  return (
    <div className="px-4 mt-5">
      <ul className="flex justify-center space-x-2 mb-10" role="tablist">
        {[...Array(8)].map((_, index) => (
          <li
            key={index}
            className={`${
              index === 0 ? "bg-blue-500" : "bg-gray-400"
            } w-3 h-3 rounded-full`}
            role="presentation"
          >
            <button
              type="button"
              role="tab"
              id={`slick-slide-control0${index}`}
              aria-controls={`slick-slide0${index}`}
              aria-label={`${index + 1} of 8`}
              className="w-full h-full flex items-center justify-center rounded-full focus:outline-none"
              aria-selected={index === 0 ? "true" : "false"}
              tabIndex={index === 0 ? "0" : "-1"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
