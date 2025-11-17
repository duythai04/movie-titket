import React from "react";
import { CinemaData } from "./CinemaData";
import './CinemaSideBar.scss'


function CinemaSideBar(){
    return(
        <div className="cinema-sidebar">
            <input type="text" placeholder="Tìm rạp phim" className="search-box"/>

            <ul className = "cinema-list">
                {CinemaData.map((item, index) =>(
                    <li key = {index} className = {item.active ? "active" : ""}>
                        {item.name}
                    </li>
                ))}

            </ul>
        </div>
    )

}

export default CinemaSideBar;