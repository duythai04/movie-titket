import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieShow.scss';

const MovieShow = ({ movies = [], selectedDate }) => {
  console.log('DataMovies', movies);
  const showingMovies = movies;

  return (
    <div className="movie-grid">
      {showingMovies.map((movie) => (
        <MovieCard key={movie.movie_id} movie={movie} selectedDate={selectedDate} />
      ))}
    </div>
  );
};

export default MovieShow;
