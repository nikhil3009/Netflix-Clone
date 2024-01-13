/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopMovies } from '../utils/moviesSlice';
const useTopRated = () => {
	const dispatch = useDispatch();
	const topRated = useSelector((store) => store.movies.topMovies);
	const getTopRatedMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?page=1',
			API_OPTIONS
		);
		const json = await data.json();

		dispatch(addTopMovies(json.results));
	};
	useEffect(() => {
		if (!topRated) getTopRatedMovies();
	}, []);
};
export default useTopRated;
