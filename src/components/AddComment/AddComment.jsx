import "./AddComment.scss";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import userProfilePic from "../../assets/images/Mohan-muruge.jpg";

const AddComment = ({ commentCount }) => {
  const postComment = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className="add-comment">
      <p className="add-comment__cmnt-qty bold">
        {commentCount.length} Comments
      </p>
      <section className="add-comment__container">
        <section className="add-comment__user-pic--container">
          <img
            className="add-comment__user-pic"
            src={userProfilePic}
            alt="profile picture"
          />
        </section>
        <form onSubmit={postComment} className="add-comment__form">
          <label className="add-comment__label bold" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="add-comment__textarea"
            type="text"
            name="comment"
            id="commnet"
            placeholder="Add a new comment"
          />
          <section className="add-comment__btn-container">
            <img
              className="add-comment__btn-icon"
              src={addCommentIcon}
              alt="comment icon"
            />
            <button className="add-comment__btn">COMMENT</button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default AddComment;
