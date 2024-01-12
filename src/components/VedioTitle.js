/** @format */

import React from 'react';

const VedioTitle = ({ title, overview }) => {
	return (
		<div className='pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
			<h1 className='text-6xl font-bold'>{title}</h1>
			<p className='py-6 text-lg w-1/4'>{overview}</p>
			<div className=''>
				<button className='bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-md'>
					▶️ Play
				</button>
				<button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md'>
					More info
				</button>
			</div>
		</div>
	);
};

export default VedioTitle;
