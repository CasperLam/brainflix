import "./Video.scss";

export default function Video({ video }) {
  return <video src="" className="video" poster={video.image} controls></video>;
}
