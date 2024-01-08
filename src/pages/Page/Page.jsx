import "./Page.scss";
import Nav from "../../components/Nav/Nav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/utils";
import { useParams } from "react-router-dom";

const Page = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const { videoId } = useParams();

  const fetchCurrentVideo = async () => {
    try {
      const videosRes = await axios.get(
        `${API_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8${API_KEY}`
      );
      setCurrentVideo(videosRes.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const fetchVideos = async () => {
    try {
      const videosRes = await axios.get(`${API_URL}/videos${API_KEY}`);
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

export default Page;
