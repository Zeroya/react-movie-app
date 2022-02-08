import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {
  APIKey
} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (page) => {
  const response = await movieApi.get(
    `movie/popular?api_key=${APIKey}&language=en-US&page=${page}###&append_to_response=${true}`);

  return response.data;
});

export const fetchAsyncTopRated = createAsyncThunk('movies/fetchAsyncTopRated', async (page) => {
  const response = await movieApi.get(
    `movie/top_rated?api_key=${APIKey}&language=en-US&page=${page}###&append_to_response=${true}`);

  return response.data;
});

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
  const response = await movieApi.get(
    `movie/${id}?api_key=${APIKey}&language=en-US`);

  return response.data;
});

export const fetchAsyncSearch = createAsyncThunk('movies/fetchAsyncSearch', async (term) => {
  const response = await movieApi.get(
    `search/movie?api_key=${APIKey}&query=${term}&language=en-US&page=1&include_adult=false`);

  return response.data;
});


const initialState = {
  popular: [],
  toprated: [],
  selectedMovie: [],
  searchMovie: [],
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies:(state, {payload}) => {
    //    state.movies = payload;
    //  },
    removeSelectedMovies: (state, action) => {
      state.selectedMovie = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        state.popular.push(...action.payload.results);
      })
      .addCase(fetchAsyncDetail.fulfilled, (state, action) => {
        state.selectedMovie = {...action.payload};
      })
      .addCase(fetchAsyncTopRated.fulfilled, (state, action) => {
        state.toprated.push(...action.payload.results);
      })
      .addCase(fetchAsyncSearch.fulfilled, (state, {payload}) => {
        return {...state, searchMovie:payload.results};
      })
  },
})

//export const {addMovies} = movieSlice.actions;
export const {
  removeSelectedMovies
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.popular;
export const getAllTopRated = (state) => state.movies.toprated;
export const getSelectedDetail = (state) => state.movies.selectedMovie;
export const getSearchMovie = (state) => state.movies.searchMovie;
export default movieSlice.reducer;