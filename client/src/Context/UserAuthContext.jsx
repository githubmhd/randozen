import { createContext, useEffect, useState, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../Firebase/Firebase.js";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
			{children}
		</userAuthContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserAuth() {
	return useContext(userAuthContext);
}
