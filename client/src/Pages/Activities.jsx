import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Activities.css";
import activities from "../data/activities.json";

function Activities() {
  return (
    <>
      <h1 className="title-activities">En manque d&apos;inspiration pour votre randonnée ? Sélectionnez une activité :</h1>
      <section className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <Link to={activity.id}>
                <article className="slide-content">
                  <img
                    src={activity.src}
                    alt={activity.alt}
                    className="slide-img"
                  />
                  <p>{activity.text}</p>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Activities;
