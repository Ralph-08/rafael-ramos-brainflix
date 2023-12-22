import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";

const NextVideos = ({ videosList }) => {
  return (
    <section className="next-videos">
      <h2 className="next-videos__subheader">NEXT VIDEOS</h2>
      <ul className="next-videos__list">
        {videosList.map((video) => {
          return (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default NextVideos;
