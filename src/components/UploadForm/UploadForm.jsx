import Button from "../Button/Button";
import "./UploadForm.scss";
// Some styles come from "CommentForm.scss"

export default function UploadForm() {
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
      <div className="form__content">
        <textarea
          id="videoDescription"
          className="form__input form__input--area"
          placeholder="Add a description to your video"
        ></textarea>
        <div className="upload__buttons">
          <Button className="button button--upload">PUBLISH</Button>
          <Button className="button button--cancelUpload">CANCEL</Button>
        </div>
      </div>
    </form>
  );
}
