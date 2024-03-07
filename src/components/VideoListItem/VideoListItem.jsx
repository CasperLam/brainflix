import "./VideoListItem.scss";

export default function VideoListItem({ video, handleVideoClick }) {
  return (
    <li
      className="videoList__item"
      onClick={() => {
        handleVideoClick(video);
      }}
      key={video.id}
    >
      <img src={video.image} alt={video.title} className="videoList__image" />
      <section className="videoList__content">
        <p className="videoList__title">{video.title}</p>
        <p className="videoList__channel">{video.channel}</p>
      </section>
    </li>
  );
}
