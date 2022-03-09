import React from 'react';
import Slider from "react-slick";
import './MovieListing.scss';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/selectors';
import MovieCard from '../MovieCard/MovieCard';
import { settings } from '../../common/settingSlide';
const MovieListing = () => {

  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  return (
    <div className="movie-wrapper">
      <div className="movie-list mg-bt">
        <h2>Harry</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {movies.Response === 'True' ? (
              movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
            ) : (
              <div className="movies-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="show-list mg-bt">
        <h2>Friends</h2>
        <div className="movie-container">
        <Slider {...settings}>
          {shows.Response === 'True' ? (
            shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
          ) : (
            <div className="movies-error">
              <h3>{shows.Error}</h3>
            </div>
          )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
