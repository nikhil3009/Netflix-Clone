/** @format */

import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import lang from '../utils/langConstants';
import openai from '../utils/openAI';

const GptSearchBar = () => {
	const dispatch = useDispatch();
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);
	const searchMovieInTMDB = async (movie) => {
		const data = await fetch(
			'https://api.themoviedb.org/3/search/movie?query=' +
				movie +
				'&include_adult=false&language=en-US&page=1',
			API_OPTIONS
		);
		const json = await data.json();
		return json.results;
	};
	const handleGptSearchCLick = async () => {
		const gptQuery =
			'Act as a Movie Recommendation system and suggest some movies for the query :' +
			searchText.current.value +
			'.only give me names of 5 movies, with commma seperated like the example result given ahead. Example Result: RRR, 12thFail, Bahubali:The Beginning, KGF, Golmaal';
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-3.5-turbo',
		});
		console.log(gptResults.choices?.[0]?.message?.content);
		const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');
		const dataAsPromises = gptMovies.map((movie) => searchMovieInTMDB(movie));
		const tmdbResults = await Promise.all(dataAsPromises);
		dispatch(
			addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
		);
	};
	return (
		<div className='pt-[35%] md:pt-[8%] flex justify-center'>
			<form
				className='w-full md:w-1/2 bg-black grid grid-cols-12'
				onSubmit={(e) => e.preventDefault()}>
				<input
					ref={searchText}
					type='text'
					className='p-4 m-4 col-span-9'
					placeholder={lang[langKey].gptSearchPlaceHolder}
				/>
				<button
					className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg '
					onClick={handleGptSearchCLick}>
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
