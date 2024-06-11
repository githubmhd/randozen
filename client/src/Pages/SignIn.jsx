import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
import BtnAdrien from "../Components/BtnAdrien";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { logIn } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await logIn(email, password);
			navigate("/profil");
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main className="mt-16">
				<h1 className="text-center text-2xl my-4 font-medium">Se connecter</h1>
				<form onSubmit={handleSubmit} className="mx-6">
					<section className="flex flex-col">
						<label htmlFor="email-address" className="text-md font-medium">
							Email
						</label>
						<input
							type="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Email..."
							className="border my-2 p-2 rounded-xl"
						/>
					</section>
					<section className="flex flex-col">
						<label htmlFor="password" className="text-md font-medium">
							Mot de passe
						</label>
						<input
							type="password"
							label="Create password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Mot de passe..."
							className="border my-2 p-2 rounded-xl"
							autoComplete="current-password"
						/>
					</section>
					<article className="flex justify-center py-5">
						<BtnAdrien
							label="Connexion"
							color="black"
							text="white"
							onClick={handleSubmit}
							type="submit"
						/>
					</article>
				</form>
				<section className="flex justify-around items-center mx-6 text-center pb-10">
					<div className="w-16 h-[0.5px] bg-black"></div>
					<small className="flex flex-col text-xs">
						J'ai pas encore de compte
						<NavLink className="text-sm font-medium underline" to="/signup">
							Se créer un compte
						</NavLink>
					</small>
					<div className="w-16 h-[0.5px] bg-black"></div>
					<span></span>
				</section>
			</main>
		</>
	);
};

export default SignIn;
