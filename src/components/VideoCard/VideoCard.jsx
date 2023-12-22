import "./VideoCard.scss";

const VideoCard = ({ id, title, channel, image, changeVideo }) => {
  return (
    <li className="video-card" onClick={() => changeVideo(id)}>
      <img
        className="video-card__thumbnail"
        src={image}
        alt="video thumbnail"
      />
      <section className="video-card__container">
        <p className="video-card__title bold">{title}</p>
        <p className="video-card__channel">{channel}</p>
      </section>
    </li>
  );
};

export default VideoCard;
