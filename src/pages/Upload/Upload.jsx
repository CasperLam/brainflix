import "./Upload.scss";
import img from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <main className="upload">
        <div className="upload__titleSpacer">
          <h2 className="upload__title">Upload Video</h2>
        </div>
        <div className="upload__spacer">
          <div className="upload__container">
            <div className="upload__thumbnailContainer">
              <p className="upload__thumbnailTitle">VIDEO THUMBNAIL</p>
              <img
                src={img}
                alt="A male runner in starting blocks"
                className="upload__img"
              />
            </div>
            <UploadForm />
          </div>
        </div>
        <div className="upload__buttons">
          <Link to="/">
            <Button className="button button--publish">PUBLISH</Button>
          </Link>
          <Button className="button button--cancelPublish">CANCEL</Button>
        </div>
      </main>
    </>
  );
}
