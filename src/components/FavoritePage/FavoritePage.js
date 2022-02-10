import React from 'react';
import { useSelector} from "react-redux";
import { getAllFavorites } from "../../features/movies/movieSlice";

import MovieCard from "../MovieCard/MovieCard";
import "../MovieListing/MovieListing.scss";

const FavoritePage = () => {
  const favorite = useSelector(getAllFavorites);
  return (
    <div>
    <div className="movie-wrapper">
      <div className="toprated-list">
        <h2>Favorites</h2>
        <div  className="movie-container" >
          {favorite.length ? favorite.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          )) : <h1 style={{color:'white', width : '800px'}}>You didn't choose any movie</h1>}
        </div>
      </div>
    </div>
  </div>
  );
};

export default FavoritePage;