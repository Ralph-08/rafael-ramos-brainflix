import "./Comment.scss";

const Comment = ({ id, name, comment, timestamp }) => {
  return (
    <li className="comment__card">
      <div className="comment__profile-pic"></div>
      <section className="comment__container">
        <div className="comment__info">
          <p className="comment__user bold">{name}</p>
          <p className="comment__date">{timestamp}</p>
        </div>
        <p className="comment__text">{comment}</p>
      </section>
    </li>
  );
};

export default Comment;
