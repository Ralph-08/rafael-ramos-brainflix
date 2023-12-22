import "./CommentsList.scss";
import Comment from "../Comment/Comment";

const CommentsList = ({ comments }) => {
  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
            timestamp={new Date(comment.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
