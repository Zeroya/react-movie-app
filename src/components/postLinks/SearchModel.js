import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTopRated } from "../../features/movies/movieSlice";
import { fetchAsyncTopRated } from "../../features/movies/movieSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieListing/MovieListing.scss";

const SearchModel = () => {
  const TopRated = useSelector(getAllTopRated);
  let renderTopRated = "";
  let Response = "True";
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncTopRated(page));
  }, [page]);

  const receiveFilms = () => {
    setTimeout(() => setPage(page + 1) , [1000])
  };

  renderTopRated =
    Response === "True" ? (
      TopRated.results &&
      TopRated.results.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{TopRated.Error}</h3>
        {(renderTopRated = "Loading...")}
      </div>
    );

  return (
    <div>
      <div className="movie-wrapper">
        <div className="toprated-list">
          <h2>Top Rated Movies</h2>
          <InfiniteScroll
            className="movie-container"
            dataLength={TopRated.length}
            next={receiveFilms}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {TopRated.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
