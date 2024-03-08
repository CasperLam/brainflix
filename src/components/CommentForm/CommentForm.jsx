import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <>
      <form class="form">
        <div class="form__group">
          <label for="comment" class="form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            name="comment"
            id="comment"
            class="form__input form__input--area"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button class="form__btn">COMMENT</button>
      </form>
    </>
  );
}
