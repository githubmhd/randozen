import "../Styles/LastRando.css";

function LastRando({ distance, durée, départ, arrivée, dateRando, image }) {
  return (
    <>
      <img
        className="blob"
        src="/Img/magicpattern-blob-1715857025168.png"
        alt=""
      />
      <img
        className="blob2"
        src="/Img/magicpattern-blob-1715857025168.png"
        alt=""
      />
      <section className="parentImage">
        <div className="card">
          <img className="lastRandoPicture" src={image} alt="" />
          <div className="textContainer">
            <h3 className="dateRando">{dateRando}</h3>
            <p>{distance}</p>
            <p>{durée}</p>
            <p>{départ}</p>
            <p>{arrivée}</p>
          </div>
          <div className="card-inner"></div>
        </div>
      </section>
    </>
  );
}
export default LastRando;
