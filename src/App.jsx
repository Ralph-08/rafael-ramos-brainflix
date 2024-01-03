import "./App.scss";
import Nav from "./components/Nav/Nav";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import videoDetailsList from "./data/video-details.json";
import NextVideos from "./components/NextVideos/NextVideos";
import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "./utils/utils";
import axios from "axios";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsList[0]);

  const changeVideo = (id) => {
    const findVideo = videoDetailsList.find((video) =>
      video.id === id ? true : false
    );
    setCurrentVideo(findVideo);
  };

  const filteredVideos = videoDetailsList.filter((video) => {
    return video.id !== currentVideo.id;
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRes = await axios.get(`${API_URL}/videos${API_KEY}`);
        console.log(videosRes.data);
      } catch (err) {
        console.log('Error:', err)
      }
    }

    fetchVideos();
  }, [])

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
        <NextVideos videosList={filteredVideos} changeVideo={changeVideo} />
      </main>
    </>
  );
}

export default App;
