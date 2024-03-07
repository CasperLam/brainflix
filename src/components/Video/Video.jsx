import "./Video.scss";

export default function Video({ video }) {
  return (
    <section className="video">
      <video
        src=""
        className="video__poster"
        poster={video.image}
        controls
      ></video>
    </section>
  );
}
