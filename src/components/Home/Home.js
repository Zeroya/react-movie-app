import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncTopRated, fetchAsyncSearch } from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncTopRated());
    dispatch(fetchAsyncSearch());
  }, [dispatch]);
  
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;