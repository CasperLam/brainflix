import { useState } from "react";
import videos from "../../data/video-details.json";
import "./Homepage.scss";
import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";

export default function Homepage() {
  const [selectedVideo, setSelectedvideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setSelectedvideo(video);
  };

  const list = videos.filter((video) => {
    return video !== selectedVideo;
  });
  return (
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
  );
}
