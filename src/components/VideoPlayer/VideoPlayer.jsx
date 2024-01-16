import "./VideoPlayer.scss";

const VideoPlayer = ({ image }) => {
  return (
    <section className="video__container">
      <video
        controls
        poster={`http://localhost:8080/thumbnails/${image}`}
        className="video"
      ></video>
    </section>
  );
};

export default VideoPlayer;
