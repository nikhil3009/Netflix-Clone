/** @format */

import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return;
	return (
		<div className='w-36 md:w-40 pr-4'>
			<img
				alt='movie banner url'
				src={IMG_CDN_URL + posterPath}
			/>
		</div>
	);
};

export default MovieCard;
