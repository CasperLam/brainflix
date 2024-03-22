import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import "./UploadForm.scss";

export default function UploadForm() {
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
    <form className="form">
      <label htmlFor="videoTitle" className="form__label">
        TITLE YOUR VIDEO
      </label>
      <input
        type="text"
        className="form__input"
        id="videoTitle"
        placeholder="Add a title to your video"
      />
      <label htmlFor="videoDescription" className="form__label">
        ADD A VIDEO DESCRIPTION
      </label>
      <div className="form__description">
        <textarea
          id="videoDescription"
          className="form__input form__input--area"
          placeholder="Add a description to your video"
        ></textarea>
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
    </form>
  );
}
