import searchIcon from "../../assets/icons/search.svg";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <label htmlFor="search">
        <img src={searchIcon} alt="" className="search__icon" />
      </label>
      <input
        type="search"
        className="search__input"
        id="search"
        placeholder="Search"
      />
    </div>
  );
}
