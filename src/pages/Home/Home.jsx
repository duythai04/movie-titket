import React from "react";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";
import Introduction from "../../components/Introduction/Introduction";


function Home(){
    return(
        <div className = "home">
            <Introduction/>
             <MovieDisplay/>
        </div>
    )
}
export default Home;