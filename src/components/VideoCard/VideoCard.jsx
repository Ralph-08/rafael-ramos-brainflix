import "./VideoCard.scss";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/utils";

const VideoCard = ({ id, title, channel, image, changeVideo }) => {
  return (
    <li className="video-card" onClick={() => changeVideo(id)}>
      <Link className="video-card__link" to={`/videos/${id}`}>
        <img
          className="video-card__thumbnail"
          src={`${API_URL}/thumbnails/${image}`}
          alt={image}
        />
        <section className="video-card__container">
          <p className="video-card__title bold">{title}</p>
          <p className="video-card__channel">{channel}</p>
        </section>
      </Link>
    </li>
  );
};

export default VideoCard;
