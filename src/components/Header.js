/** @format */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const gptShowValue = useSelector((store) => store.gpt.showGptSearch);
	const handleSignout = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate('/error');
			});
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate('/browse');
			} else {
				dispatch(removeUser());
				navigate('/');
			}
		});
		return () => unsubscribe();
	}, []);
	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};
	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};
	return (
		<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
			<img
				className='w-44 mx-auto md:mx-0'
				src={LOGO}
				alt='logo'
			/>
			{user && (
				<div className='p-2 flex justify-between'>
					{gptShowValue && (
						<select
							className='p-2 bg-indigo-700 text-white m-2 rounded-lg'
							onChange={handleLanguageChange}>
							<option value='en'>English</option>
							<option value='hindi'>Hindi</option>
							<option value='telugu'>Telugu</option>
							<option value='spanish'>Spanish</option>
						</select>
					)}
					<button
						className='py-2 px-4 m-2 mx-4 my-2 bg-blue-800 text-white rounded-lg'
						onClick={handleGptSearchClick}>
						{gptShowValue ? 'Homepage' : ' GPT Search'}
					</button>
					<img
						className='hidden md:block w-12 h-12'
						alt='userIcon'
						src={USER_LOGO}
					/>
					<button
						onClick={handleSignout}
						className='text-white font-bold px-1'>
						(SignOut)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
