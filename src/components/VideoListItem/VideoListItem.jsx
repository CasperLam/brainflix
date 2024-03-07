import "./VideoListItem.scss";

export default function VideoListItem() {
  return (
    <li className="videoList__item">
      <div className="videoList__imageContainer">
        <img src="" alt="name" className="videoList__image" />
      </div>
      <section className="videoList__content">
        <p className="videoList__name">title text to take up even more space</p>
        <p className="videoList__text">other text</p>
      </section>
    </li>
  );
}
