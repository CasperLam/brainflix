import "./App.scss";
import videoList from "./data/videos.json";
import Header from "./components/Header/Header.jsx";
import Video from "./components/Video/Video.jsx";
import { useState } from "react";
import VideoList from "./components/VideoList/VideoList.jsx";

export default function App() {
  const [video, setvideo] = useState(videoList[0]);
  console.log(video);

  return (
    <>
      <Header />
      <Video video={video} />
      <VideoList />
    </>
  );
}
