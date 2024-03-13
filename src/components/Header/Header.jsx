import "./Header.scss";
import Search from "../SearchBar/Search";
import logoImg from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  const logo = logoImg;
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={logo} alt="BrainFlix logo" className="header__logo" />
      </Link>
      <section className="header__search">
        <Search />
        <img
          src={avatar}
          alt="User's avatar"
          className="header__avatar header__avatar--mobile"
        />
      </section>
      <Link to="/upload">
        <Button className="button button--header">UPLOAD</Button>
      </Link>
      <img
        src={avatar}
        alt="User's avatar"
        className="header__avatar header__avatar--tablet"
      />
    </header>
  );
}
