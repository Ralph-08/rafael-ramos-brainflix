import "./Nav.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

const Nav = () => {
  return (
    <nav className="nav">
        <img className="nav__logo" src={logo} alt="brainflix logo" />
        <ul className="nav__list">
            <li className="nav__item">
                <div className="nav__container">
                    <img className="nav__search-icon" src={searchIcon} alt="search icon" />
                    <input className="nav__input" type="text" placeholder="Search" />
                </div>
                <img className="nav__user-pic" src={userPic} alt="profile picture" />
            </li>
        </ul>
        <button className="nav__btn"><img src={upload} alt="upload icon" />UPLOAD</button>
    </nav>
  );
};

export default Nav;
