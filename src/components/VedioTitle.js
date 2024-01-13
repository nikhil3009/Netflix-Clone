/** @format */

import React from 'react';

const VedioTitle = ({ title, overview }) => {
	return (
		<div className='pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
			<h1 className=' text-2xl md:text-6xl font-bold'>{title}</h1>
			<p className='hidden md:inline-block py-6 text-lg w-1/4'>
				{overview.slice(0, 100).concat(overview.length > 100 ? '...' : '')}
			</p>
			<div className='my-4 md:m-0'>
				<button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-md'>
					▶️ Play
				</button>
				<button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md'>
					More info
				</button>
			</div>
		</div>
	);
};

export default VedioTitle;
