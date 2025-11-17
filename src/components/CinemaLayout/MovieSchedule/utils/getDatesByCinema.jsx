export const getDatesByCinema = (cinemaId, movies) => {
  const setDates = new Set();

  movies.forEach(movie => {
    movie.cinemas.forEach(c => {
      if (c.cinema_id === cinemaId) {
        Object.keys(c.showtimes).forEach(date => setDates.add(date));
      }
    });
  });

  return Array.from(setDates).sort();
};
