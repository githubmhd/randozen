import { Link } from "react-router-dom";
import { useIntro } from "../Context/LoaderContext";
import LastRando from "../Components/LastRando";
import RandoCard from "../Components/RandoCard";
import data from "/src/data/data.json";
import "../Styles/HomePage.css";

function HomePage() {
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

  const { isVisible, isLogoVisible, isLoaderVisible, isFondVisible } =
    useIntro();

  return (
    <>
      <section className={isVisible}>
        <img
          className={`fondGreen ${isFondVisible}`}
          src="/Img/fondLoader.jpeg"
          alt=""
        />
        <section className={isVisible}>
          <img
            className={`pictureLoader ${isLogoVisible}`}
            src="/Img/loaderRando.svg"
            alt=""
          />
          <div class={`scene ${isLoaderVisible}`}>
            <div class="forest">
              <div class="tree tree1">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
              </div>

              <div class="tree tree2">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>

              <div class="tree tree3">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>

              <div class="tree tree4">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>

              <div class="tree tree5">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>

              <div class="tree tree6">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>

              <div class="tree tree7">
                <div class="branch branch-top"></div>
                <div class="branch branch-middle"></div>
                <div class="branch branch-bottom"></div>
              </div>
            </div>

            <div class="tent">
              <div class="roof"></div>
              <div class="roof-border-left">
                <div class="roof-border roof-border1"></div>
                <div class="roof-border roof-border2"></div>
                <div class="roof-border roof-border3"></div>
              </div>
              <div class="entrance">
                <div class="door left-door">
                  <div class="left-door-inner"></div>
                </div>
                <div class="door right-door">
                  <div class="right-door-inner"></div>
                </div>
              </div>
            </div>

            <div class="floor">
              <div class="ground ground1"></div>
              <div class="ground ground2"></div>
            </div>

            <div class="fireplace">
              <div class="support"></div>
              <div class="support"></div>
              <div class="bar"></div>
              <div class="hanger"></div>
              <div class="smoke"></div>
              <div class="pan"></div>
              <div class="fire">
                <div class="line line1">
                  <div class="particle particle1"></div>
                  <div class="particle particle2"></div>
                  <div class="particle particle3"></div>
                  <div class="particle particle4"></div>
                </div>
                <div class="line line2">
                  <div class="particle particle1"></div>
                  <div class="particle particle2"></div>
                  <div class="particle particle3"></div>
                  <div class="particle particle4"></div>
                </div>
                <div class="line line3">
                  <div class="particle particle1"></div>
                  <div class="particle particle2"></div>
                  <div class="particle particle3"></div>
                  <div class="particle particle4"></div>
                </div>
              </div>
            </div>

            <div class="time-wrapper">
              <div class="time">
                <div class="day"></div>
                <div class="night">
                  <div class="moon"></div>
                  <div class="star star1 star-big"></div>
                  <div class="star star2 star-big"></div>
                  <div class="star star3 star-big"></div>
                  <div class="star star4"></div>
                  <div class="star star5"></div>
                  <div class="star star6"></div>
                  <div class="star star7"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <h2 className="lastRandoTitle">Ma dernière randonnée</h2>
      <section className="allLastRando">
        <LastRando
          image="/Img/new.png"
          distance="Distance : 15km"
          durée="Durée : 2:31:56"
          départ="Heure de départ : 11h41"
          arrivée="Heure d'arrivée : 14h12"
          dateRando="Randonée du 16/05/2024"
        />
        <LastRando
          image="/Img/new1.png"
          distance="Distance : 21km"
          durée="Durée : 3:54:32"
          départ="Heure de départ : 17h28"
          arrivée="Heure d'arrivée : 19h19"
          dateRando="Randonée du 21/04/2024"
        />
        <LastRando
          image="/Img/new2.png"
          distance="Distance : 12km"
          durée="Durée : 2:10:34"
          départ="Heure de départ : 09h10"
          arrivée="Heure d'arrivée : 11h45"
          dateRando="Randonée du 22/04/2024"
        />
      </section>
      <h2 className="lastRandoTitle">Randonées pour vous</h2>
      <section className="allCardsRando">
        {combinedData.slice(0, 20).map((item, index) => (
          <Link to={`/randos/${index}`}>
            <section key={index} className="cardsRando">
              <RandoCard
                titleRando={item.titre}
                difficultyRando={item.difficulty}
                img={item.image}
                distanceRando={item.distance}
              />
            </section>
          </Link>
        ))}
        <Link to="/news-randos" className="link">
          <button class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>

            <div class="text">PLUS</div>
          </button>
        </Link>
      </section>
    </>
  );
}
export default HomePage;
