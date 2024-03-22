import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import "./UploadForm.scss";
import axios from "axios";

export default function UploadForm() {
  const [message, setMessage] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const nav = useNavigate();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const successMessage = () => {
    setMessage(true);
    setTimeout(() => {
      nav("/");
    }, 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors({});

    let formIsValid = true;
    const errors = {};

    if (!title) {
      formIsValid = false;
      errors["title"] = "You must enter a title for your video";
    }

    if (!description) {
      formIsValid = false;
      errors["description"] =
        "You must enter a video description for your video";
    }

    if (!formIsValid) {
      setFormErrors(errors);
      return;
    }

    axios.post("http://localhost:8080/videos", {
      title: title,
      description: description,
    });
    successMessage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="videoTitle" className="form__label">
        TITLE YOUR VIDEO
      </label>
      <input
        type="text"
        className="form__input"
        id="videoTitle"
        placeholder="Add a title to your video"
        onChange={handleChangeTitle}
        value={title}
      />
      <label htmlFor="videoDescription" className="form__label">
        ADD A VIDEO DESCRIPTION
      </label>
      <div className="form__description">
        <textarea
          id="videoDescription"
          className="form__input form__input--area"
          placeholder="Add a description to your video"
          onChange={handleChangeDescription}
          value={description}
        ></textarea>
      </div>
      {formErrors.title && <p className="form__error">{formErrors.title}</p>}
      {formErrors.description && (
        <p className="form__error">{formErrors.description}</p>
      )}
      <div className="upload__buttons">
        <Button className="button button--publish">PUBLISH</Button>
        {message && (
          <p className="upload__success-message">
            Your video will be uploaded shortly
          </p>
        )}
        <Link to="/">
          <Button className="button button--cancel-publish">CANCEL</Button>
        </Link>
      </div>
    </form>
  );
}
