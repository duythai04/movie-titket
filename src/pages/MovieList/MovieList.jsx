import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import DateSelector from './DateSelector/DateSelector';
import MovieShow from './MovieShow/MovieShow';
import DataMovie from '../../data/DataMovie';
import './MovieList.scss'

function MovieList() {
  const today = "2025-11-17"; 
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <div className="container">
      <Header />
      <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <MovieShow movies={DataMovie} selectedDate={selectedDate} />
    </div>
  );
}

export default MovieList;