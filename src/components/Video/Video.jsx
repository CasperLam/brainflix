import "./Video.scss";

export default function Video({ video }) {
  return (
    <div className="video">
      <video
        src=""
        className="video__content"
        poster={video.image}
        controls
      ></video>
    </div>
  );
}
