import VideoListItem from "../VideoListItem/VideoListItem";
import "./VideoList.scss";

export default function VideoList() {
  return (
    <aside className="videoList">
      <h2 className="videoList__title">NEXT VIDEOS</h2>
      <ul className="videoList__list">
        <VideoListItem />
        <VideoListItem />
        <VideoListItem />
      </ul>
    </aside>
  );
}
