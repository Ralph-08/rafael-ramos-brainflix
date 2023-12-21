import { json } from "../VideoPlay/VideoPlay";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

const VideoDetails = () => {
  return (
    <section className="details">
      <section className="details__card">
        <h1 className="details__title">{json.title}</h1>
      </section>
      <section className="details__card">
        <ul className="details__list">
          <li className="details__item">
            <p className="details__info details__info--bold">
              By {json.channel}
            </p>
            <p className="details__info">07/11/2021</p>
          </li>
          <li className="details__item">
            <div className="item__container">
              <img src={viewsIcon} alt="views" />
              <p className="details__info">{json.views}</p>
            </div>
            <div className="item__container">
              <img src={likesIcon} alt="views" />
              <p className="details__info">{json.likes}</p>
            </div>
          </li>
        </ul>
      </section>
      <p className="details__desc">{json.description}</p>
    </section>
  );
};

export default VideoDetails;
