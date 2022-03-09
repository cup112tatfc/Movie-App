import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiKey } from '../../common/apis/MovieApiKey';
import movieApi from '../../common/apis/movieApi';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (textInput) => {
  
  const response = await movieApi.get(`?apiKey=${ApiKey}&s=${textInput}&type=movie`);

  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (textInput) => {
  const response = await movieApi.get(`?apiKey=${ApiKey}&s=${textInput}&type=series`);

  return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectMovieOrShowDetail:(state,action) =>{
        state.selectMovieOrShow={};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      return { ...state, shows: action.payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
      return { ...state, selectMovieOrShow: action.payload };
    },
  },
});
export const { removeSelectMovieOrShowDetail } = movieSlice.actions;
export default movieSlice;
