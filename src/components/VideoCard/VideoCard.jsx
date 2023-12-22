import "./VideoCard.scss";


const VideoCard = ({ id, title, channel, image }) => {
    return (
        <li className="video-card">
            <img  className="video-card__thumbnail" src={image} alt="video thumbnail" />
            <section className="video-card__container">
                <p className="video-card__title bold">{title}</p>
                <p className="video-card__channel">{channel}</p>
            </section>
        </li>
    )
}

export default VideoCard;