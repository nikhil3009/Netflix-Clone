/** @format */

import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	const handleButtonClick = () => {
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (message) return;
		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					updateProfile(user, {
						displayName: name.current.value,
						photoURL:
							'https://cdn.dribbble.com/userupload/11553799/file/original-72cb6d7026c79a481f2e6403592e48a2.png?resize=400x0',
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate('/browse');
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
					// ..
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					navigate('/browse');
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	};
	return (
		<div>
			<Header />
			<div className='absolute'>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eab6047a-a101-4a14-8515-c67563fa2205/US-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt='logo'
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
				<h1 className='font-bold text-3xl py-4 '>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type='text'
						placeholder='Full Name'
						className='p-4 my-4 w-full bg-gray-700 rounded-lg'
					/>
				)}
				<input
					ref={email}
					type='text'
					placeholder='Email Address'
					className='p-4 my-4 w-full bg-gray-700 rounded-lg'
				/>
				<input
					ref={password}
					type='password'
					placeholder='Password '
					className='p-4 my-4 w-full bg-gray-700 rounded-lg'
				/>
				<p className='text-red-500 '>{errorMessage}</p>
				<button
					onClick={handleButtonClick}
					className='p-4 my-6 bg-red-700 w-full rounded-lg'>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p
					className='py-4 cursor-pointer'
					onClick={toggleSignInForm}>
					{isSignInForm
						? ' New to Netflix, Sign Up Now!'
						: 'Already Registered, Sign In now!!!'}
				</p>
			</form>
		</div>
	);
};

export default Login;
