import "./CommentSection.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

export default function Comments({ video }) {
  return (
    <section className="comments">
      <p className="comments__counter">{video.comments.length} Comments</p>
      <div class="comments__form">
        <img src={avatar} alt="User's avatar" class="comments__avatar" />
        <CommentForm />
      </div>
      {video.comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </section>
  );
}
