import React from 'react';
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay';
import Introduction from '../../components/Introduction/Introduction';
import MovieDetail from '../MovieDetail/MovieDetail';
import Banner from '../../components/Banner/Banner';
import WaterBubble from '../../components/WaterBubble/WaterBubble';

function Home() {
  return (
    <div className="home">
      <Banner />
      <MovieDisplay />
      <MovieDetail />
      <Introduction />
      <WaterBubble />
    </div>
  );
}
export default Home;
