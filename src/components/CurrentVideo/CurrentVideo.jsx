import "./CurrentVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsList from "../CommentsList/CommentsList";
import AddComment from "../AddComment/AddComment";
import { useState, useEffect } from "react";
import { getVideo } from "../../utils/utils";
import axios from "axios";

const CurrentVideo = ({ selectedVideo }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const changeVideo = async (videoId) => {
    try {
      const videoRes = await axios.get(getVideo(videoId));
      setCurrentVideo(videoRes.data);
    } catch (err) {
      console.log("Error getting video: ", err);
    }
  };

  useEffect(() => {
    changeVideo(selectedVideo);
  }, [selectedVideo]);

  if (currentVideo === null) {
    return <h2 className="loading-header">Loading...</h2>;
  }

  return (
    <section className="video__info">
      <VideoDetails
        title={currentVideo.title}
        channel={currentVideo.channel}
        timestamp={currentVideo.timestamp}
        views={currentVideo.views}
        likes={currentVideo.likes}
        desc={currentVideo.description}
      />
      <AddComment commentCount={currentVideo.comments} />
      <CommentsList comments={currentVideo.comments} />
    </section>
  );
};

export default CurrentVideo;
