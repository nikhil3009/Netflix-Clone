/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVedio } from '../utils/moviesSlice';

const useMovieTariler = (movieId) => {
	const dispatch = useDispatch();
	const getMovieVedios = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/' +
				movieId +
				'/videos?language=en-US',
			API_OPTIONS
		);
		const json = await data.json();
		const filterVedios = json.results.filter(
			(vedio) => vedio.type === 'Trailer'
		);
		const trailer = filterVedios.length ? filterVedios[0] : json.results[0];
		console.log(trailer);
		dispatch(addTrailerVedio(trailer));
	};
	useEffect(() => {
		getMovieVedios();
	}, []);
};
export default useMovieTariler;