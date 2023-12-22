import "./App.scss";
import Nav from "./components/Nav/Nav";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import videoDetailsList from "./data/video-details.json";
import { useState } from "react";

console.log(videoDetailsList);

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsList[1]);
  return (
    <>
      <Nav />
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
    </>
  );
}

export default App;
