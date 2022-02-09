import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../Header/DropDown/Dropdown'
import { fetchAsyncSearch } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import  "./Header.scss";
import './DropDown/style.scss'

const Header = () => {
  const [isActive , setIsActive] = useState(false);
  const [isTrue , setItTrue] = useState(false);

  const [term,  setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(fetchAsyncSearch(term));
  }

  useEffect(() => {
    dispatch(fetchAsyncSearch("naruto"));
  }, [])

  return (
    <div>
      <div className="header">
        
          <div className="logo">
          <Link to="/">Movie Vikto App</Link>
          </div>
      
          <div className='panel' > 
          <div className='dropdown' style={{margin:'0px 20px 0px 75px'}}>
      <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>Choose One &#11167; </div>
      {isActive && (
        <div className='dropdown-content' onClick={e => setIsActive(false)}>
          <div className='dropdown-item'>
          <Link to='/search' onClick={e => setItTrue(true)} onChange={dispatch(fetchAsyncSearch("naruto"))}>Search</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/popular' onClick={e => setItTrue(false)}>Popular</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/top' onClick={e => setItTrue(false)}>Top Rated</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/series' onClick={e => setItTrue(false)}>Series</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/favorite' onClick={e => setItTrue(false)}>Favorite </Link>
        </div>
      </div>
      )}
    </div>
          </div>

          { isTrue === true && (
          <div className='search-bar'>
            <form onSubmit={submitHandler}>
              <input type='text' value={term} placeholder='Search Movies' onChange={(e) => setTerm(e.target.value)} />
              <button type='submit'><i className='fa fa-search'></i></button>
            </form>
          </div>
      )}
    
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;