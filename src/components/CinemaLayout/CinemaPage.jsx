import React from "react";
import CinemaSideBar from "./SideBar/CinemaSideBar";
import MovieSchedule from "./MovieSchedule/MovieSchedule";
import './CinemaPage.scss'

const CinemaPage = () => {
  return (
    <div className="cinema-page">
      <CinemaSideBar/>
      <MovieSchedule />
    </div>
  );
};

export default CinemaPage;
