import "./VideoPlayer.scss";

const VideoPlayer = ({ image }) => {
  return (
    <section className="video__container">
      <video controls poster={image} className="video"></video>
    </section>
  );
};

export default VideoPlayer;
