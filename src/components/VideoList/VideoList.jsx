import "./VideoList.scss";

export default function VideoList({ videos, handleVideoClick }) {
  return (
    <aside className="videoList">
      <h2 className="videoList__sectionTitle">NEXT VIDEOS</h2>
      <ul className="videoList__list">
        {videos.map((video) => {
          return (
            <li
              className="videoList__item"
              onClick={() => {
                handleVideoClick(video);
              }}
              key={video.id}
            >
              <img
                src={video.image}
                alt={video.title}
                className="videoList__image"
              />
              <section className="videoList__content">
                <p className="videoList__title">{video.title}</p>
                <p className="videoList__channel">{video.channel}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
