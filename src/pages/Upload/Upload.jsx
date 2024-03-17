import "./Upload.scss";
import img from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Upload() {
  const [message, setMessage] = useState(false);
  const nav = useNavigate();

  const successMessage = () => {
    setMessage(true);
    console.log(`test`);
    setTimeout(() => {
      nav("/");
    }, 3000);
  };

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
          <Button
            successMessage={successMessage}
            className="button button--publish"
          >
            PUBLISH
          </Button>
          {message && (
            <p className="upload__successMessage">
              Your video will be uploaded shortly
            </p>
          )}
          <Link to="/">
            <Button className="button button--cancelPublish">CANCEL</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
