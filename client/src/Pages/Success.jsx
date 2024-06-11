import { Link } from "react-router-dom";
import "../Styles/Success.css";

function Success() {
  return (
    <>     
	<img
        className="blob3"
        src="/Img/magicpattern-blob-1715857025168.png"
        alt=""
      />
      <img
        className="blob4"
        src="/Img/magicpattern-blob-1715857025168.png"
        alt=""
      />
      <section className="allSuccess">
        <div className="divContainer">
          <div
            class="loader border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700 w-14"
          >
            €
          </div>
        </div>
        <p className="detailSuccess">
          Merci pour votre don plein d'amour ❤️, maintenant posez votre tel et
          allez découvrir le monde !!! 🌏
        </p>
        <Link to="/" className="linkSuccess">Découvrir</Link>
      </section>
    </>
  );
}

export default Success;
