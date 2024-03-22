import "./Upload.scss";
import img from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

export default function Upload() {
  return (
    <>
      <main className="upload">
        <div className="upload__title-spacer">
          <h2 className="upload__title">Upload Video</h2>
        </div>
        <div className="upload__spacer">
          <div className="upload__container">
            <div className="upload__thumbnail-container">
              <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
              <img
                src={img}
                alt="A male runner in starting blocks"
                className="upload__img"
              />
            </div>
            <UploadForm />
          </div>
        </div>
      </main>
    </>
  );
}
