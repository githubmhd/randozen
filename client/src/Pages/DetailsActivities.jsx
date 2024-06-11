import { useEffect, useState } from "react";
import activitiesData from "../data/activities.json";
import { useParams } from "react-router-dom";
import "../Styles/DetailsActivities.css";

function DetailsActivities() {
  const { id } = useParams();
  const [youtubeData, setYoutubeData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const firstActivity = activitiesData[id];
    setYoutubeData(firstActivity);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h1 className="youtube-title">{youtubeData.title}</h1>
      <section className="video-section">
        <iframe
          className="video-player"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeData.youtubeID}?autoplay=0`}
        ></iframe>
      </section>
      <p className="youtube-desc">{youtubeData.desc}</p>
    </>
  );
}

export default DetailsActivities;
