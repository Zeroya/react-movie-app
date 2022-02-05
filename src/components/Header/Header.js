import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncSearch } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import  "./Header.scss";

const Header = () => {
  const [term,  setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(fetchAsyncSearch(term));
  }
  return (
    <div>
      <div className="header">
      
          <div className="logo">
          <Link to="/">Movie Vikto App</Link>
          </div>
          <div className='panel'>
            <ul>
              <li><a href='/popular'>Popular</a></li>
              <li><a href='/top'>Top Rated</a></li>
              <li><a href='/search'>Search</a></li>
            </ul>
          </div>
          <div className='search-bar'>
            <form onSubmit={submitHandler}>
              <input type='text' value={term} placeholder='Search Movies' onChange={(e) => setTerm(e.target.value)} />
              <button type='submit'><i className='fa fa-search'></i></button>
            </form>
          </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;