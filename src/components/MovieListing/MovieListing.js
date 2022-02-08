import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { getAllMovies } from "../../features/movies/movieSlice";
import {
  getAllTopRated,
  getSearchMovie,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const search = useSelector(getSearchMovie);
  const TopRated = useSelector(getAllTopRated);
  let renderMovies,
    renderTopRated,
    renderSearch = "";
  let Response = "True";
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncMovies(page));
  }, [page]);

  const receiveFilms = () => {
    setPage(page + 1);
  };

  {
    renderMovies =
      Response === "True" ? (
        movies.results &&
        movies.results.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
          {(renderMovies = "Loading...")}
        </div>
      );
  }

  renderTopRated =
    Response === "True" ? (
      TopRated.results &&
      TopRated.results.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
        {(renderTopRated = "Loading...")}
      </div>
    );

  renderSearch =
    Response === "True" ? (
      search.results &&
      search.results.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
        {(renderSearch = "Loading...")}
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Popular Movies</h2>

        <InfiniteScroll
          className="movie-container"
          dataLength={movies.length}
          next={receiveFilms}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </InfiniteScroll>
      </div>
      {/*  <div className="toprated-list">
          <h2>Top Rated Movies</h2>
          <div className="movie-container">{renderTopRated}</div>
        </div>
        <div className="toprated-list">
          <h2>Search</h2>
          <div className="movie-container">{renderSearch}</div>
        </div> */}
    </div>
  );
};

export default MovieListing;
