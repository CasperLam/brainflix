import VideoListItem from "../VideoListItem/VideoListItem";
import "./VideoList.scss";

export default function VideoList({ videos, handleVideoClick }) {
  return (
    <aside className="videoList">
      <h2 className="videoList__sectionTitle">NEXT VIDEOS</h2>
      <ul className="videoList__list">
        {videos.map((video) => {
          return (
            <VideoListItem
              video={video}
              handleVideoClick={handleVideoClick}
              key={video.id}
            />
          );
        })}
      </ul>
    </aside>
  );
}
