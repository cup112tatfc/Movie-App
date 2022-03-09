import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import './Header.scss';
const Header = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTextInput(e.target.value);
  };
  const submithandler = (e) =>{
     e.preventDefault();
     dispatch(fetchAsyncMovies(textInput));
     dispatch(fetchAsyncShows(textInput));
     console.log(textInput)
     setTextInput('')
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submithandler}>
          <input
            type="text"
            value={textInput}
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <button type='submit'>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
