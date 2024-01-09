/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCcwaHytZ9J5mXwLrSSnIsn4NGcEdJEVsQ',
	authDomain: 'netflix-clone-4fd65.firebaseapp.com',
	projectId: 'netflix-clone-4fd65',
	storageBucket: 'netflix-clone-4fd65.appspot.com',
	messagingSenderId: '435458507888',
	appId: '1:435458507888:web:a8ad02d10303e722b960b5',
	measurementId: 'G-W03QEKMJ22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
