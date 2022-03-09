import { createSelector } from '@reduxjs/toolkit';

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const MovieRemainingSelector = createSelector(getAllMovies, (getMovies) => {
  return getMovies;
});
