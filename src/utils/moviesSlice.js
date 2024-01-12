/** @format */

import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		nowPlayingMovies: null,
		trailerVedio: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTrailerVedio: (state, action) => {
			state.trailerVedio = action.payload;
		},
		addTopMovies: (state, action) => {
			state.topMovies = action.payload;
		},
		addUpcommingMovies: (state, action) => {
			state.upcommingMovies = action.payload;
		},
		addPopularTvSeries: (state, action) => {
			state.popularTvSeries = action.payload;
		},
		addTopRatedTvSeries: (state, action) => {
			state.topRatedTvSeries = action.payload;
		},
	},
});
export const {
	addNowPlayingMovies,
	addTrailerVedio,
	addPopularMovies,
	addTopMovies,
	addUpcommingMovies,
	addPopularTvSeries,
	addTopRatedTvSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;
