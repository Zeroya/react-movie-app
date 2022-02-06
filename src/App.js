import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import SearchModel from './components/postLinks/SearchModel';
import TopModelThisIsRealSearch from './components/postLinks/TopModelThisIsRealSearch';
import { useDispatch } from 'react-redux';
import {fetchAsyncTopRated, fetchAsyncSearch } from '../src/features/movies/movieSlice'
import './App.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTopRated());
    dispatch(fetchAsyncSearch());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/popular" element={<Home />} />
          <Route path="/top" element={<SearchModel />} />
          <Route path="/search" element={<TopModelThisIsRealSearch />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
