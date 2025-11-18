import React from "react";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import Introduction from "../../components/Introduction/Introduction";
import MovieDetail from "../MovieDetail/MovieDetail";

function Home() {
  return (
    <div className="home">
      <Introduction />
      <MovieDisplay />
      <MovieDetail />
    </div>
  );
}
export default Home;
