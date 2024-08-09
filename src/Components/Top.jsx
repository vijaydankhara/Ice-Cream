import React, { useState, useEffect } from "react";

const Top = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-[#ff0000] text-white  px-3 py-3 font-Kalnia rounded-lg shadow-lg hover:bg-blue-700 transition-opacity duration-300 ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
      >
        Top
      </button>
    </div>
  );
};

export default Top;
