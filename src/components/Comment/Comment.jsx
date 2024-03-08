import "./Comment.scss";

export default function Comment({ comment }) {
  return (
    <article className="comment" key={comment.id}>
      <img src="#" alt="User's avatar" className="comment__avatar" />
      <wrapper className="comment__wrapper">
        <header className="comment__header">
          <p className="comment__userName">{comment.name}</p>
          <p className="comment__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </header>
        <p className="comment__content">{comment.comment}</p>
      </wrapper>
    </article>
  );
}
