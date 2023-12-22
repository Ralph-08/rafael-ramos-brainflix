import "./CurrentVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsList from "../CommentsList/CommentsList";

const CurrentVideo = ({
  image,
  title,
  channel,
  timestamp,
  views,
  likes,
  desc,
  comments,
}) => {
  return (
    <>
      <section className="video__container">
        <video controls poster={image} className="video"></video>
      </section>
      <VideoDetails
        title={title}
        channel={channel}
        timestamp={timestamp}
        views={views}
        likes={likes}
        desc={desc}
      />
      <CommentsList comments={comments} />
    </>
  );
};

export default CurrentVideo;
