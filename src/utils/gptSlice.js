import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView : (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addResultMovies: (state, action) => {
      const { moviesNames, movieResults } = action.payload;
      state.moviesNames = moviesNames;
      state.movieResults = movieResults;
    },
  }
});

export const {toggleGptSearchView, addResultMovies} = gptSlice.actions;

export default gptSlice.reducer;