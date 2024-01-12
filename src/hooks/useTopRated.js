/** @format */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopMovies } from '../utils/moviesSlice';
const useTopRated = () => {
	const dispatch = useDispatch();
	const getTopRatedMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?page=1',
			API_OPTIONS
		);
		const json = await data.json();

		dispatch(addTopMovies(json.results));
	};
	useEffect(() => {
		getTopRatedMovies();
	}, []);
};
export default useTopRated;
