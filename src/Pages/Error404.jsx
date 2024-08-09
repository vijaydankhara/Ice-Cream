import React from 'react';
import Footer2 from '../Components/Footer2';

function Error404() {
  return (
    <div>
      {/* Error 404 Template */}
      <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span className="display-1 fw-bold text-[300px]">404</span>
                </h2>
                <h3 className="h2 mb-2 text-4xl md:text-5xl max-sm:text-3xl font-serif">
                  Oops! That Page Can't Be Found.
                </h3>
                <p className="mb-5 text-lg md:text-base">
                  We're Really Sorry But We Can't Seem To Find The Page You Were Looking For.
                </p>
                <a className="btn bsb-btn-5xl text-white bg-[#000000] hover:bg-[#e10914]  duration-700 rounded-pill px-5 py-3 m-0" href="/" role="button">
                  Back to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer2/>
    </div>
  );
}

export default Error404;
