import "./HomePage.scss";
import Nav from "../../components/Nav/Nav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/utils";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);
  const { videoId } = useParams();

  const fetchCurrentVideo = async () => {
    try {
      const videosRes = await axios.get(API_URL);
      setCurrentVideo(videosRes.data[0]);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const fetchVideos = async () => {
    try {
      const videosRes = await axios.get(`${API_URL}/videos`);
      setVideoList(videosRes.data);
    } catch (err) {
      console.log("Error getting list: ", err);
    }
  };

  useEffect(() => {
    fetchCurrentVideo();
    fetchVideos();
  }, []);

  if (currentVideo === null) {
    return <h2 className="loading-header">Loading...</h2>;
  }

  if (videoList === null) {
    return <h2 className="loading-header">Loading...</h2>;
  }

  const changeVideo = (id) => {
    const findVideo = videoList.find((video) =>
      video.id === id ? true : false
    );
    setCurrentVideo(findVideo);
  };

  const selectedVideo = videoId || videoList[0].id;

  const filteredVideos = videoList.filter((video) => {
    return video.id !== currentVideo.id;
  });

  return (
    <>
      <Nav />
      <header className="header">
        <VideoPlayer image={currentVideo.image} />
      </header>
      <main className="main">
        <CurrentVideo selectedVideo={selectedVideo} />
        <NextVideos videosList={filteredVideos} changeVideo={changeVideo} />
      </main>
    </>
  );
};

export default HomePage;
