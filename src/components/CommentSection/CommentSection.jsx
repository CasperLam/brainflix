import "./CommentSection.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

export default function Comments({ video }) {
  return (
    <section className="commentSection">
      <p className="commentSection__counter">
        {video.comments.length} Comments
      </p>
      <div className="commentSection__form">
        <img
          src={avatar}
          alt="User's avatar"
          className="commentSection__avatar"
        />
        <CommentForm />
      </div>
      {video.comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </section>
  );
}
