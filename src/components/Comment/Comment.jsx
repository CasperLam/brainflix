import "./Comment.scss";

export default function Comment({ comment }) {
  return (
    <article className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__wrapper">
        <header className="comment__header">
          <p className="comment__user-name">{comment.name}</p>
          <p className="comment__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </header>
        <p className="comment__content">{comment.comment}</p>
      </div>
    </article>
  );
}
