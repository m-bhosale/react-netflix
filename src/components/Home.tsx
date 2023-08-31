import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Home() {
  const user = useSelector((state: RootState) => state.userDetail);
  console.log("user in home state", user);

  return <div>Hello You are in Home Page</div>;
}

export default Home;
