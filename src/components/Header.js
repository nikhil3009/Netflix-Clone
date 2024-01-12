/** @format */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_LOGO } from '../utils/constants';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
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
	return (
		<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
			<img
				className='w-44'
				src={LOGO}
				alt='logo'
			/>
			{user && (
				<div className='p-2 flex'>
					<img
						className='w-12 h-12'
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
