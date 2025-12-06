import React from "react";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import Introduction from "../../components/Introduction/Introduction";
import MovieDetail from "../MovieDetail/MovieDetail";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div className="home">
      <Banner/>
      <MovieDisplay />
      <MovieDetail />
      <Introduction />
    </div>
  );
}
export default Home;
