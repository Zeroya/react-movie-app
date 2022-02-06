import React from 'react';
import { useSelector} from 'react-redux';
import {  getAllTopRated } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import "../MovieListing/MovieListing.scss"

const SearchModel = () => {

  const TopRated = useSelector(getAllTopRated);
  let renderTopRated = "";
  let Response = "True";

  renderTopRated = Response === "True" ? (
    TopRated.results && TopRated.results.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{TopRated.Error}</h3>
      {renderTopRated = "Loading..."}
    </div>
  );

  return (
    <div>
      <div className="movie-wrapper">
        <div className="toprated-list">
          <h2>Top Rated Movies</h2>
          <div className="movie-container">{renderTopRated}</div>
        </div>
    </div>
    </div>
  )
}

export default SearchModel;