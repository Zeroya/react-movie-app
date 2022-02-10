import React from "react";
import { useSelector} from "react-redux";
import { getSearchMovie } from "../../features/movies/movieSlice";

import MovieCard from "../MovieCard/MovieCard";
import "../MovieListing/MovieListing.scss";

const TopModelThisIsRealSearch = () => {
  const search = useSelector(getSearchMovie);

  return (
    <div>
      <div className="movie-wrapper">
        <div className="toprated-list">
          <h2>Search</h2>
          <div  className="movie-container" >
            {search.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopModelThisIsRealSearch;
