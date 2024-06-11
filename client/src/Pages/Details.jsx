import { useParams } from "react-router-dom";
import data from "/src/data/data.json";
import "../Styles/Details.css";
import BtnStripe from "../Components/BtnStripe";

function DetailsRandos() {
	const { id } = useParams();
	const soloData = Object.keys(data.Name).map((key) => ({
		name: data.Name[key],
		town: data.Town[key],
		type: data.Types[key],
		distance: data.Distance[key],
		time: data.Time[key],
		difficulty: data.Difficulty[key],
		image: data.Image[key],
		titre: data.Titre[key],
		prix: data.Prix[key],
		departement: data.Departement[key],
	}));
	return (
		<>
			<section className="detailsRando">
				<img className="pictureDetails" src={soloData[id].image} alt="" />
				<article className="articleDetails">
					<h2 className="titleDetails">{soloData[id].titre}</h2>
					<ul className="listDetails">
						<li className="nameDetails">- Nom : {soloData[id].name}</li>
						<li className="townDetails">- Ville : {soloData[id].town}</li>
						<li className="departementDetails">
							- Département : {soloData[id].departement}
						</li>
						<li className="difficultyDetails">- {soloData[id].difficulty}</li>
						<li className="typeDetails">- Type : {soloData[id].type}</li>
						<li className="distanceDetails">
							- Distance : {soloData[id].distance}
						</li>
						<li className="timeDetails">-{soloData[id].time}</li>
					</ul>
					<BtnStripe />
				</article>
			</section>
		</>
	);
}

export default DetailsRandos;
