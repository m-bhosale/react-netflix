import React from "react";
import { Link } from "react-router-dom";

function SignInSignUp({ signInOrUp, signIn ,signUp }) {
  

  return (
    <div>
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="w-full md:w-3/12 bg-gradient-to-b from-transparent to-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-md w-full md:w-[30rem] lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem]">
            <form className="w-full p-4 md:p-11 m-0">
              <h1 className="text-white mb-8 text-2xl md:text-4xl font-medium ">
                {signInOrUp}
              </h1>
              {signUp &&  <input
                type="text"
                placeholder="Username"
                className="p-2.5 mb-5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
              />}
              <input
                type="text"
                placeholder="Email or phone number"
                className="p-2.5 mb-5 bg-neutral-700 w-full rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2.5 mb-12 w-full bg-neutral-700 rounded focus:outline-none focus:ring focus:border-blue-400 text-cyan-50"
              />
              <button className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700">
                {signInOrUp}
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
              {(signIn || signUp ) && (
                <div className="text-neutral-500 mb-4 ">
                  <h1>
                    {signIn ? 'New to Netflix ' : 'Existing User '}
                    <Link to={signIn ? '/signUp' : '/signIn'} className="text-white">
                    <span className="text-white p-2  " > {signIn ? ' Sign Up' : ' Sign In'}</span>{" "}
                    </Link>
                  </h1>
                  <h3 className="text-sm mt-2">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <a href="" className="text-blue-600">
                      Learn More
                    </a>
                  </h3>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
