import Button from "../Button/Button";
import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <form className="form">
      <label htmlFor="comment" className="form__label">
        JOIN THE CONVERSATION
      </label>
      <div className="form__content">
        <textarea
          name="comment"
          id="comment"
          className="form__input"
          placeholder="Add a new comment"
        ></textarea>
        <Button className="button button--form">COMMENT</Button>
      </div>
    </form>
  );
}
