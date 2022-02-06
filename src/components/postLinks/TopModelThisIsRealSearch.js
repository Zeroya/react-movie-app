import React from 'react';
import { useSelector} from 'react-redux';
import { getSearchMovie } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import "../MovieListing/MovieListing.scss"

const TopModelThisIsRealSearch = () => {
  const search = useSelector(getSearchMovie);
  let renderSearch = "";
  let Response = "True";

  renderSearch = Response === "True" ? (
    search.results && search.results.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{TopModelThisIsRealSearch.Error}</h3>
      {renderSearch = "Loading..."}
    </div>
  );

  return (
    <div>
      <div className="movie-wrapper">
        <div className="toprated-list">
          <h2>Search</h2>
          <div className="movie-container">{renderSearch}</div>
        </div>
    </div>
    </div>
  )
}

export default TopModelThisIsRealSearch;