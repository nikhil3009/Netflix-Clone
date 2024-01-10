/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVedio } from '../utils/moviesSlice';

const VedioBackground = ({ movieId }) => {
	const trailerVedio = useSelector((store) => store.movies?.trailerVedio);
	const dispatch = useDispatch();
	const getMovieVedios = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/1029575/videos?language=en-US',
			API_OPTIONS
		);
		const json = await data.json();
		console.log(json);
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
	return (
		<div>
			<iframe
				src={'https://www.youtube.com/embed/' + trailerVedio?.key}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
		</div>
	);
};

export default VedioBackground;
