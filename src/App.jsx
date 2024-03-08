import { useState } from "react";
import "./App.scss";
import videos from "./data/video-details.json";
import Header from "./components/Header/Header.jsx";
import Video from "./components/Video/Video.jsx";
import VideoList from "./components/VideoList/VideoList.jsx";

export default function App() {
  const [selectedVideo, setSelectedvideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setSelectedvideo(video);
  };

  const list = videos.filter((video) => {
    return video !== selectedVideo;
  });
  return (
    <>
      <Header />
      <main className="main">
        <Video video={selectedVideo} />
        <VideoList videos={list} handleVideoClick={handleVideoClick} />
      </main>
    </>
  );
}
