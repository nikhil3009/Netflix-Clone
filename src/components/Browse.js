/** @format */
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import usePopularTvSeries from '../hooks/usePopularTvSeries';
import useTopRated from '../hooks/useTopRated';
import useTopRatedTvSeries from '../hooks/useTopRatedTvSeries';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	const showGptSearchBar = useSelector((store) => store.gpt.showGptSearch);
	useNowPlayingMovies();
	usePopularMovies();
	useTopRated();
	useUpcommingMovies();
	usePopularTvSeries();
	useTopRatedTvSeries();

	return (
		<div>
			<Header />
			{showGptSearchBar ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />{' '}
				</>
			)}
		</div>
	);
};

export default Browse;
