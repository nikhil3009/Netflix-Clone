/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcommingMovies } from '../utils/moviesSlice';
const useUpcommingMovies = () => {
	const dispatch = useDispatch();
	const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);
	const getUpcommingMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/upcoming?page=1',
			API_OPTIONS
		);
		const json = await data.json();

		dispatch(addUpcommingMovies(json.results));
	};
	useEffect(() => {
		if (!upcommingMovies) getUpcommingMovies();
	}, []);
};
export default useUpcommingMovies;
