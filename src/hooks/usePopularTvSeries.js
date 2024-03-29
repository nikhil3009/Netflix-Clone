/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularTvSeries } from '../utils/moviesSlice';
const usePopularTvSeries = () => {
	const dispatch = useDispatch();
	const popularTvSeries = useSelector((store) => store.movies.popularTvSeries);
	const getPopularTvSeries = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/tv/popular?page=1',
			API_OPTIONS
		);
		const json = await data.json();

		dispatch(addPopularTvSeries(json.results));
	};
	useEffect(() => {
		if (!popularTvSeries) getPopularTvSeries();
	}, []);
};
export default usePopularTvSeries;
