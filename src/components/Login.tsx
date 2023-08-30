import React from "react";
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";

const Login = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundImage imageUrl={"src/assets/login.jpg"} />
      <Header />
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="w-full md:w-3/12 bg-gradient-to-b from-transparent to-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
            <form className="w-full p-4 md:p-11 m-0">
              <h1 className="text-white mb-8 text-2xl md:text-4xl font-medium">
                Sign In
              </h1>
              <input
                type="text"
                placeholder="Email or phone number"
                className="p-2.5 mb-5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2.5 mb-12 w-full bg-neutral-700 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              <button className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700">
                Sign In
              </button>

              <div className="flex items-center justify-between mb-11 md:mb-16">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    className="bg-neutral-600 enabled:hover:border-gray-400"
                  />
                  <span className="text-neutral-500 pl-2 p-2">Remember Me</span>
                </div>

                <span className="text-neutral-500">Need Help ?</span>
              </div>
              <div className="text-neutral-500">
                <h1>
                  New to Netflix?{" "}
                  <span className="text-white"> Sign Up Now</span>{" "}
                </h1>
                <h3 className="text-sm">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <a href="" className="text-blue-600">
                    Learn More
                  </a>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
