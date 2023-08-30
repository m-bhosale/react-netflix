import React from "react";
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";
import SignInSignUp from "./SignInSignUp";

const SignIn = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundImage imageUrl={"src/assets/login.jpg"} />
      <Header />
      <SignInSignUp signInOrUp={'Sign In'} signIn={true} signUp={false}/>
    </div>
  );
};

export default SignIn;
