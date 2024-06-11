import "../Styles/RandoCard.css";

function RandoCard({ titleRando, difficultyRando, distanceRando, img }) {
  return (
    <>
      <div className="cardRando">
        <div className="card-image">
          <img className="randoPicture" src={img} alt="" />
        </div>
        <div className="category">{titleRando}</div>
        <div className="heading">{difficultyRando}</div>
        <div className="distance">Distance : {distanceRando}</div>
      </div>
    </>
  );
}
export default RandoCard;
