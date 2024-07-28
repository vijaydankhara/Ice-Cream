import React from "react";
import LoginImg from "../assets/asset49.jpeg";

function SignIn() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex  px-4  sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                id="logo"
                className="h-full w-full rounded-md object-cover object-top"
                src={LoginImg}
                alt="Not Found"
              />
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl absolute left-10  inset-96 font-serif">
                Sign in
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              
              
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                    
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        className="flex h-10 w-full border border-gray-300 bg-transparent px-3 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 rounded-full"
                        type="text"
                        placeholder="Name*"
                      />
                    </div>
                  </div>
                  <div>
                    
                    <div className="mt-2">
                      <input
                        id="password"
                        className="flex h-10 w-full rounded-full border border-gray-300 bg-transparent px-3 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password*"
                      />
                    </div>
                    <div className="flex items-center justify-between float-start my-3  ">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900 "
                      >
                    
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black  hover:text-red-600 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Sign in
                      
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 text-center">
                  Don't have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 underline hover:underline"
                >
                Sign up
                </a>
              </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
