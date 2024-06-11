import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
    updateMovie: (state, action) => {
      const {id, ...updatedMovie} = action.payload;
      const movieIndex = state.findIndex(movie => movie.id === id);
      if (movieIndex !== -1) {
        state[movieIndex] = {...state[movieIndex], ...updatedMovie};
      }
    },
  },
});

export const {addMovie, removeMovie, updateMovie} = moviesSlice.actions;

export default moviesSlice.reducer;
