import "./VideoPlayer.scss";
import { API_URL } from "../../utils/utils";

const VideoPlayer = ({ image }) => {
  return (
    <section className="video__container">
      <video
        controls
        poster={`${API_URL}/thumbnails/${image}`}
        className="video"
      ></video>
    </section>
  );
};

export default VideoPlayer;
