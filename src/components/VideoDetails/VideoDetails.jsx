import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({ title, channel, timestamp, views, likes, desc }) => {
  return (
    <section className="details">
      <section className="details__card">
        <h1 className="details__title">{title}</h1>
      </section>
      <section className="details__card">
        <ul className="details__list">
          <li className="details__item">
            <p className="details__info details__info--bold">By {channel}</p>
            <p className="details__info">
              {new Date(timestamp).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </li>
          <li className="details__item">
            <div className="item__container">
              <img src={viewsIcon} alt="views" />
              <p className="details__info">{views}</p>
            </div>
            <div className="item__container">
              <img src={likesIcon} alt="views" />
              <p className="details__info">{likes}</p>
            </div>
          </li>
        </ul>
      </section>
      <p className="details__desc">{desc}</p>
    </section>
  );
};

export default VideoDetails;
