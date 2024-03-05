import Search from "../SearchBar/Search";
import logoImg from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

export default function Header() {
  const logo = logoImg;
  return (
    <header className="header">
      <img src={logo} alt="BrainFlix logo" className="header__logo" />
      <section className="header__search">
        <Search />
        <img
          src={avatar}
          alt="User's avatar"
          className="header__avatar header__avatar--mobile"
        />
      </section>
      <button className="header__button">UPLOAD</button>
      <img
        src={avatar}
        alt="User's avatar"
        className="header__avatar header__avatar--tablet"
      />
    </header>
  );
}
