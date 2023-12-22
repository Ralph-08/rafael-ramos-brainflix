import "./App.scss";
import Nav from "./components/Nav/Nav";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import videoDetailsList from "./data/video-details.json";
import videos from "./data/videos.json";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsList[0]);
  return (
    <>
      <Nav />
      <header className="header">
        <VideoPlayer image={currentVideo.image} />
      </header>
      <main className="main">
        <CurrentVideo
          image={currentVideo.image}
          title={currentVideo.title}
          channel={currentVideo.channel}
          timestamp={currentVideo.timestamp}
          views={currentVideo.views}
          likes={currentVideo.likes}
          desc={currentVideo.description}
          comments={currentVideo.comments}
        />
        <NextVideos videosList={videos} />
      </main>
    </>
  );
}

export default App;
