import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
const iconHome = "/Img/icons8-page-d-accueil-90.png";
const iconRando = "/Img/icons8-randonnée-90.png";
const iconActivities = "/Img/icons8-confettis-90.png";

function Navbar() {
	return (
		<nav>
			<Link to="/">
				<img src={iconHome} alt="" className="icon-navbar" />
				<p>Accueil</p>
			</Link>
			<Link to="/news-randos">
				<img src={iconRando} alt="" className="icon-navbar" />
				<p>Rando</p>
			</Link>
			<Link to="/activities">
				<img src={iconActivities} alt="" className="icon-navbar" />
				<p>Activités</p>
			</Link>
		</nav>
	);
}

export default Navbar;
