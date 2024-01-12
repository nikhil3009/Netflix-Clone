/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		movies.nowPlayingMovies && (
			<div className='bg-black'>
				<div className='-mt-80 relative z-20 pl-12'>
					<MovieList
						title={'Now Playing'}
						movies={movies.nowPlayingMovies}
					/>
					<MovieList
						title={'Top Rated Movies'}
						movies={movies.topMovies}
					/>
					<MovieList
						title={'Popular Movies'}
						movies={movies.popularMovies}
					/>
					<MovieList
						title={'Comedy Movies'}
						movies={movies.upcommingMovies}
					/>
					<MovieList
						title={'Popular TV Series'}
						movies={movies.popularTvSeries}
					/>
					<MovieList
						title={'Top Rated TV Series'}
						movies={movies.topRatedTvSeries}
					/>
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
