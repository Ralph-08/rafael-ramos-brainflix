import "./UploadVideoForm.scss";
import "../../styles/partials/_globals.scss";
import thumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import axios from "axios";
import thumbnailPic from "../../assets/images/Upload-video-preview.jpg";
import { API_URL } from "../../utils/utils";

const UploadVideoForm = () => {
  const postComment = async (obj) => {
    try {
      const res = await axios.post(`${API_URL}/upload`, obj);
    } catch (err) {
      console.log("Error posting video: ", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title: e.target.title.value,
      description: e.target.desc.value,
      timestamp: Date.now(),
      image: thumbnailPic,
    };

    postComment(obj);

    e.target.title.value = "";
    e.target.desc.value = "";
  };

  const validateForm = () => {
    const input = document.querySelector(".form__input");
    const textarea = document.querySelector(".form__textarea");

    if (!input.value && !textarea.value) {
      input.classList.add("err");
      textarea.classList.add("err");
    } else if (!input.value) {
      input.classList.add("err");
    } else if (!textarea.value) {
      textarea.classList.add("err");
    } else {
      input.classList.remove("err");
      textarea.classList.remove("err");
    }
  };

  const cancelUpload = () => {
    const input = document.querySelector(".form__input");
    const textarea = document.querySelector(".form__textarea");

    input.value = "";
    textarea.value = "";
  };

  return (
    <section className="upload">
      <h2 className="upload__header">Upload Video</h2>
      <form onSubmit={handleSubmit} className="form">
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
                name="title"
                required
              />
            </label>
            <label className="form__label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="form__textarea textarea"
                type="text"
                placeholder="Add a description to your video"
                name="desc"
                required
              />
            </label>
          </div>
        </div>

        <div className="form__btns-container">
          <button
            onClick={cancelUpload}
            className="form__btn form__btn--secondary"
          >
            CANCEL
          </button>
          <div className="btn__container">
            <img
              className="form__btn-icon"
              src={publishIcon}
              alt="publish icon"
            />
            <button
              onClick={validateForm}
              className="form__btn form__btn--primary"
            >
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
