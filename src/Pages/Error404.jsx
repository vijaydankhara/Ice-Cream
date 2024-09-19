import React from "react";
import Footer2 from "../Components/Footer2";

function Error404() {
  return (
    <div className="container">
      {/* Error 404 Template */}
      <section className="py-3 py-md-5 min-h-screen flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="flex justify-center items-center gap-2 mb-4">
                <span className="text-8xl sm:text-[150px] md:text-[200px] lg:text-[250px] font-bold">
                  404
                </span>
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2">
                Oops! That Page Can't Be Found.
              </h3>
              <p className="text-lg md:text-base mb-5">
                We're Really Sorry But We Can't Seem To Find The Page You Were
                Looking For.
              </p>
              <a
                className="btn bg-black hover:bg-red-600 duration-700 text-white rounded-full px-5 py-3"
                href="/"
                role="button"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

export default Error404;
