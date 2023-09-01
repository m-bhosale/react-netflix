import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "./Header";
import useFetch from "../hooks/useFetch";
import { addNowPlayingMovies } from "../store/movieSlice";

function Home() {
  const user = useSelector((state: RootState) => state.userDetail);

  const data = useFetch("/movie/now_playing");
  console.log("movie data",data);
  
  return (
    <div className="bg-black">
      <Header />
    </div>
  );
}

export default Home;
