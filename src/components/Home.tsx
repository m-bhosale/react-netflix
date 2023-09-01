import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "./Header";

function Home() {
  const user = useSelector((state: RootState) => state.userDetail);
  console.log("user in home state", user);

  return (
    <div className="bg-black">
      <Header />
    </div>
  );
}

export default Home;
