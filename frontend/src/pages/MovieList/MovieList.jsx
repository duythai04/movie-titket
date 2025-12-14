import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import DateSelector from './DateSelector/DateSelector';
import MovieShow from './MovieShow/MovieShow';
import './MovieList.scss';
import axiosClient from '../../api/axiosClient';

function MovieList() {
  const today = '2025-11-17';
  const [selectedDate, setSelectedDate] = useState(today);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fectMovies = async () => {
      try {
        const res = await axiosClient.get(`/movies`);
        setMovies(res.data);
      } catch (error) {
        console.log('Lỗi lấy danh sách phim', error);
      }
    };
    fectMovies();
  }, []);

  return (
    <div className="container">
      <Header />
      <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <MovieShow movies={movies} selectedDate={selectedDate} />
    </div>
  );
}

export default MovieList;
