import { useState } from "react";
import "./App.scss";
import videos from "./data/video-details.json";
import Header from "./components/Header/Header.jsx";
import Video from "./components/Video/Video.jsx";
import VideoList from "./components/VideoList/VideoList.jsx";
import Description from "./components/Description/Description.jsx";
import CommentSection from "./components/CommentSection/CommentSection.jsx";

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
        <section className="main__content">
          <section className="main__commentSection">
            <Description video={selectedVideo} />
            <CommentSection video={selectedVideo} />
          </section>
          <VideoList videos={list} handleVideoClick={handleVideoClick} />
        </section>
      </main>
    </>
  );
}
