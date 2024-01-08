import "./UploadVideoForm.scss";
import "../../styles/partials/_globals.scss";
import thumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

const UploadVideoForm = () => {
  return (
    <section className="upload">
      <h2 className="upload__header">Upload Video</h2>
      <form action="" className="form">
        <div className="form__container">
          <div className="form__flex-container">
            <p className="form__subheader">VIDEO THUMBNAIL</p>
            <img
              className="form__thumbnail"
              src={thumbnailImg}
              alt="thumbnail image"
            />
          </div>
          <div className="form__fields form__flex-contnainer">
            <label className="form__label">
              TITLE YOUR VIDEO
              <input
                className="form__input input"
                type="text"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="form__label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="form__textarea textarea"
                type="text"
                placeholder="Add a description to your video"
              />
            </label>
          </div>
        </div>

        <div className="form__btns-container">
          <button className="form__btn form__btn--secondary">CANCEL</button>
          <div className="btn__container">
            <img
              className="form__btn-icon"
              src={publishIcon}
              alt="publish icon"
            />
            <button className="form__btn form__btn--primary">
              <img
                className="form__btn-icon--tablet"
                src={publishIcon}
                alt="publish icon"
              />
              PUBLISH
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UploadVideoForm;
