import "./Upload.scss";
import img from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

export default function Upload() {
  return (
    <>
      <main className="upload">
        <div className="upload__container">
          <h2 className="upload__title">Upload Video</h2>
          <p className="upload__thumbnailTitle">VIDEO THUMBNAIL</p>
          <img
            src={img}
            alt="A male runner in starting blocks"
            className="upload__img"
          />
          <UploadForm />
        </div>
      </main>
    </>
  );
}
