import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllTopRated } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const TopRated = useSelector(getAllTopRated);
  let renderMovies, renderTopRated = "";
  let Response = "True";
  
  renderMovies = Response === "True" ? (
    movies.results && movies.results.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
      {renderMovies = "Loading..."}
    </div>
  );

  renderTopRated = Response === "True" ? (
    TopRated.results && TopRated.results.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
      {renderTopRated = "Loading..."}
    </div>
  );

    return (
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Popular Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="toprated-list">
          <h2>Top Rated Movies</h2>
          <div className="movie-container">{renderTopRated}</div>
        </div>
    </div>
  )
}

export default MovieListing;

