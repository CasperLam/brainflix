import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <>
      <form className="form">
        <div className="form__group">
          <label htmlFor="comment" className="form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            name="comment"
            id="comment"
            className="form__input form__input--area"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button className="form__btn">COMMENT</button>
      </form>
    </>
  );
}
