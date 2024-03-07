import "./VideoListItem.scss";

export default function VideoListItem() {
  return (
    <li className="videoList__item">
      <img src="" alt="name" className="videoList__image" />
      <section className="videoList__content">
        <p className="videoList__title">title text</p>
        <p className="videoList__text">other text</p>
      </section>
    </li>
  );
}
