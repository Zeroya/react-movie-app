import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const Dropdown = () => {
  const [isActive , setIsActive] = useState(false);
  return (
    <div className='dropdown'>
      <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>Choose One &#11167; </div>
      {isActive && (
        <div className='dropdown-content' onClick={e => setIsActive(false)}>
        <div className='dropdown-item'>
          <Link to='/popular'>Popular</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/top'>Top Rated</Link>
        </div>
        <div className='dropdown-item'>
          <Link to='/search' >Search</Link>
        </div>
      </div>
      )}
    </div>
  );
};

export default Dropdown;