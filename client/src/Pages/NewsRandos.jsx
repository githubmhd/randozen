import { Link } from "react-router-dom";
import RandoCard from "../Components/RandoCard";
import data from "/src/data/data.json";
import { useEffect, useState } from "react";
import "../Styles/Filter.css"

function NewsRandos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedDistance, setSelectedDistance] = useState("distance");
  const [selectedDuration, setSelectedDuration] = useState("duration");
  const [selectedDifficulty, setSelectedDifficulty] = useState("difficulty");

  const combinedData = Object.keys(data.Name).map((key) => ({
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

  const parseDuration = (duration) => {
    const regex = /(\d+)\s*(h|H|hours?)?\s*(\d+)?\s*(mn|minutes?|min)?/i;
    const match = duration.match(regex);
    if (!match) return 0;

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[3]) || 0;
    return hours + minutes / 60;
  };

  const filterHikes = () => {
    return combinedData.filter((hike) => {
      const duration = parseDuration(hike.time);

      let matchesDistance = true;
      let matchesDuration = true;
      let matchesDifficulty = true;

      if (selectedDistance === "short") {
        matchesDistance = parseFloat(hike.distance) < 5;
      } else if (selectedDistance === "medium") {
        matchesDistance =
          parseFloat(hike.distance) >= 5 && parseFloat(hike.distance) <= 10;
      } else if (selectedDistance === "long") {
        matchesDistance = parseFloat(hike.distance) > 10;
      }

      if (selectedDuration === "one-hour") {
        matchesDuration = duration <= 1;
      } else if (selectedDuration === "three-hour") {
        matchesDuration = duration > 1 && duration <= 3;
      } else if (selectedDuration === "four-hour") {
        matchesDuration = duration > 3;
      }

      if (selectedDifficulty === "very-easy") {
        matchesDifficulty = hike.difficulty.includes("Très facile");
      } else if (selectedDifficulty === "easy") {
        matchesDifficulty = hike.difficulty.includes("Facile");
      } else if (selectedDifficulty === "middle") {
        matchesDifficulty = hike.difficulty.includes("Moyenne");
      } else if (selectedDifficulty === "hard") {
        matchesDifficulty = hike.difficulty.includes("Difficile");
      }

      return matchesDistance && matchesDuration && matchesDifficulty;
    });
  };

  const filteredHikes = filterHikes();

  return (
    <>
      <h2 className="lastRandoTitle">Trouvez votre randonnée</h2>
      <section className="allFilters">
      <label>
        <select
          value={selectedDistance}
          onChange={(e) => setSelectedDistance(e.target.value)}
        >
          <option value="distance">Distance</option>
          <option value="short">Moins de 5 km</option>
          <option value="medium">Entre 5 à 10 km</option>
          <option value="long">Plus de 10 km</option>
        </select>
      </label>
      <hr />
      <label>
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
        >
          <option value="duration">Durée</option>
          <option value="one-hour">Moins de 1h</option>
          <option value="three-hour">Entre 1h et 3h</option>
          <option value="four-hour">Plus de 3h</option>
        </select>
      </label>
      <hr />
      <label>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="difficulty">Difficulté</option>
          <option value="very-easy">Très facile</option>
          <option value="easy">Facile</option>
          <option value="middle">Moyenne</option>
          <option value="hard">Difficile</option>
        </select>
      </label>
      <hr />
      </section>
      <section className="allCardsRando">
        {filteredHikes.map((item, index) => (
          <Link to={`/randos/${index}`} key={index}>
            <section className="cardsRando">
              <RandoCard
                titleRando={item.titre}
                difficultyRando={item.difficulty}
                img={item.image}
                distanceRando={item.distance}
              />
            </section>
          </Link>
        ))}
      </section>
    </>
  );
}

export default NewsRandos;
