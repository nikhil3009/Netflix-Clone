/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedTvSeries } from '../utils/moviesSlice';
const useTopRatedTvSeries = () => {
	const dispatch = useDispatch();
	const topRatedTvSeries = useSelector(
		(store) => store.movies.topRatedTvSeries
	);
	const getTopRatedTvSeries = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/tv/top_rated?page=1',
			API_OPTIONS
		);
		const json = await data.json();

		dispatch(addTopRatedTvSeries(json.results));
	};
	useEffect(() => {
		if (!topRatedTvSeries) getTopRatedTvSeries();
	}, []);
};
export default useTopRatedTvSeries;
