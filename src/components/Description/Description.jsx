import "./Description.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

export default function Description({ video }) {
  return (
    <section className="description">
      <h2 className="description__title">{video.title}</h2>
      <section className="description__statWrapper">
        <wrapper className="description__left">
          <p className="description__channel">By {video.channel}</p>
          <p className="description__date">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </wrapper>
        <wrapper className="description__right">
          <div className="description__views">
            <img
              src={viewsIcon}
              alt="Views icon"
              className="description__icon"
            />
            <p className="description__viewsNumber">{video.views}</p>
          </div>
          <div className="description__likes">
            <img
              src={likesIcon}
              alt="Likes icon"
              className="description__icon"
            />
            <p className="description__likesNumber">{video.likes}</p>
          </div>
        </wrapper>
      </section>
      <p className="description__text">{video.description}</p>
    </section>
  );
}
