import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import "../Styles/HomePage.css";
import "../Styles/Header.css";
import "../Styles/NotFoundPage.css"

const img404 = "/Img/erreur-404-illustration-concept-paysage.jpg";

function NotFoundPage() {
	return (
		<>
		<header><Header /></header>
		<p>Vous avez rencontré un obstacle inattendu : la page 404. Mais comme toute bonne randonnée, c&apos;est une occasion de découvrir de nouveaux horizons ! Prêts pour la suite de l&apos;aventure ?</p>
		<Link to="/"><img src={img404} alt="" /></Link>
			<p>Cliquez sur l&apos;image ci-dessus ou sur <Link to="/" className="link-404">ce lien</Link> pour revenir à la page d&apos;accueil</p>
			<Navbar />
		</>
	);
}

export default NotFoundPage;
