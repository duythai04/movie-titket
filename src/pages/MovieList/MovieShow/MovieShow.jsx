import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieShow.scss'

const MovieShow = ({ movies, selectedDate }) => {
  const showingMovies = movies.filter(m => m.is_showing);

  return (
    <div className="movie-grid">
      {showingMovies.map((movie) => (
        <MovieCard key={movie.movie_id} movie={movie} selectedDate={selectedDate} />
      ))}
    </div>
  );
};

export default MovieShow;