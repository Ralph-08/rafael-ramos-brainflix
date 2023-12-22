import "./CurrentVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentsList from "../CommentsList/CommentsList";
import AddComment from "../AddComment/AddComment";

const CurrentVideo = ({
  title,
  channel,
  timestamp,
  views,
  likes,
  desc,
  comments,
}) => {
  return (
    <section className="video__info">
      <VideoDetails
        title={title}
        channel={channel}
        timestamp={timestamp}
        views={views}
        likes={likes}
        desc={desc}
      />
      <AddComment commentCount={comments} />
      <CommentsList comments={comments} />
    </section>
  );
};

export default CurrentVideo;
