import { name } from "../../utils/data.js";

const Header = () => {
  return (
    <div className="header">
      <img
        src="./images/header__logo.svg"
        alt="Логотип"
        className="header__logo"
      />
      <img
        src="./images/header__other.svg"
        alt="Другoе"
        className="header__other"
      />
      <div className="header__options">
        <div className="header__search">
          <input type="text" placeholder="Поиск" className="header__input" />
          <button className="header__button" type="button" />
        </div>
        <div className="header__person">
          <img
            src="./images/header__avatar.png"
            alt="Аватар"
            className="header__avatar"
          />
          <p className="header__name">{name}</p>
        </div>
        <button className="header__settings" type="button" />
      </div>
    </div>
  );
};

export default Header;
