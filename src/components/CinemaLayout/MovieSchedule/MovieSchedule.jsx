import React, { useState } from "react";
import DataMovie from "../../../data/DataMovie";  
import DateSelector from "../DateSelector/DateSelector";
import { getDatesByCinema } from "./utils/getDatesByCinema";
import './MovieSchedule.scss'

const MovieSchedule = () =>{
    const cinemaId = "cns_thanhxuan";

    const dates = getDatesByCinema(cinemaId, DataMovie);

    const [selectedDate, setSelectedDate] = useState(dates[0]);

    return(
        <div>
            <h2>Lịch chiếu</h2>
            <DateSelector dates = {dates} selectedDate = {selectedDate} onSelect = {setSelectedDate}/>
        </div>
    ) 
}
export default MovieSchedule