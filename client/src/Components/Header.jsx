import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
	return (
		<>
		<div className="containerLogo">
			<Link to="/">
				<img className="logo" src="/Img/logo_RandoZen.svg" alt="" />
			</Link>
			<h2 className="nameEnt">RandoZen</h2>
			</div>
			<Link to="/profil">
				<img className="profilPicture" src="/Img/avatar.png" alt="" />
			</Link>
		</>
	);
}
export default Header;
