/** @format */
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import usePopularTvSeries from '../hooks/usePopularTvSeries';
import useTopRated from '../hooks/useTopRated';
import useTopRatedTvSeries from '../hooks/useTopRatedTvSeries';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRated();
	useUpcommingMovies();
	usePopularTvSeries();
	useTopRatedTvSeries();

	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
