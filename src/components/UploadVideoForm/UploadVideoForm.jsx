import "./UploadVideoForm.scss";
import "../../styles/partials/_globals.scss";
import thumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

const UploadVideoForm = () => {
  return (
    <section className="upload">
      <h2 className="upload__header">Upload Video</h2>
      <p className="upload__subheader">VIDEO THUMBNAIL</p>
      <img className="upload__thumbnail" src={thumbnailImg} alt="thumbnail image" />
      <form action="" className="form">
        <label className="form__label">TITLE YOUR VIDEO</label>
        <input
          className="form__input input"
          type="text"
          placeholder="Add a title to your video"
        />
        <label className="form__label">ADD A VIDEO DESCRIPTION</label>
        <textarea
          className="form__textarea textarea"
          type="text"
          placeholder="Add a description to your video"
        />
        <div className="form__btns-container">
          <button className="form__btn form__btn--secondary">CANCEL</button>
          <div className="btn__container">
            <img className="form__btn-icon" src={publishIcon} alt="publish icon" />
            <button className="form__btn form__btn--primary">
            <img className="form__btn-icon--tablet" src={publishIcon} alt="publish icon" />
                PUBLISH
                </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UploadVideoForm;
