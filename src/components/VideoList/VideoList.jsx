import VideoListItem from "../VideoListItem/VideoListItem";
import "./VideoList.scss";

export default function VideoList({ videos, selectedVideo }) {
  return (
    <aside className="videoList">
      <h2 className="videoList__sectionTitle">NEXT VIDEOS</h2>
      <ul className="videoList__list">
        {videos &&
          videos
            .filter((video) => video.id !== selectedVideo.id)
            .map((video) => {
              return <VideoListItem video={video} key={video.id} />;
            })}
      </ul>
    </aside>
  );
}
