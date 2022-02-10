import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSeries } from "../../features/movies/movieSlice";
import { fetchAsyncSeries } from "../../features/movies/movieSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCardSerials from "../MovieCard/MovieCardSerials";
import "../MovieListing/MovieListing.scss";

const SeriesModal = () => {
  const TopSeries = useSelector(getAllSeries);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncSeries(page));
  }, [page]);

  const receiveFilms = () => {
    setTimeout(() => setPage(page + 1), [1000]);
  };

  return (
    <div>
      <div className="movie-wrapper">
        <div className="toprated-list">
          <h2>Top Rated Series</h2>
          <InfiniteScroll
            className="movie-container"
            dataLength={TopSeries.length}
            next={receiveFilms}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {TopSeries.map((movie, index) => (
              <MovieCardSerials key={index} data={movie} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default SeriesModal;
