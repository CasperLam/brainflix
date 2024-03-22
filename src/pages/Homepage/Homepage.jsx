import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.scss";
import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";

export default function Homepage() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedvideo] = useState(null);

  const getVideoList = async () => {
    const { data } = await axios.get(`http://localhost:8080/videos`);

    setVideos(data);
  };

  const getVideoDetails = async (videoId) => {
    const { data } = await axios.get(`http://localhost:8080/videos/${videoId}`);

    setSelectedvideo(data);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideoDetails(videoId);
    }
    if (!videoId && videos) {
      getVideoDetails(videos[0].id);
    }
  }, [videoId, videos]);

  if (!selectedVideo || !videos) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main">
      <Video video={selectedVideo} />
      <section className="main__content">
        <section className="main__comment-section">
          <Description video={selectedVideo} />
          <CommentSection video={selectedVideo} />
        </section>
        <VideoList videos={videos} selectedVideo={selectedVideo} />
      </section>
    </main>
  );
}
