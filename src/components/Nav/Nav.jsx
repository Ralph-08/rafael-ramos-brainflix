import "./Nav.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="brainflix logo" />
      <section className="nav__right-container">
        <ul className="nav__list">
          <li className="nav__item">
            <div className="nav__container">
              <div className="nav__search-container">
                <img
                  className="nav__search-icon"
                  src={searchIcon}
                  alt="search icon"
                />
                <input
                  className="nav__input"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <button className="nav__btn nav__btn--tablet">
                <img
                  className="nav__btn-icon nav__btn-icon--tablet"
                  src={upload}
                  alt="upload icon"
                />
                UPLOAD
              </button>
              <div className="nav__user-pic--container">
                <img
                  className="nav__user-pic"
                  src={userPic}
                  alt="profile picture"
                />
              </div>
            </div>
          </li>
        </ul>
        <button className="nav__btn nav__btn--mobile">
          <img className="nav__btn-icon" src={upload} alt="upload icon" />
          UPLOAD
        </button>
      </section>
    </nav>
  );
};

export default Nav;
