import { menu } from "../../utils/data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <button className="menu__button" key={index} type="button">
          <img src="./images/bracket.svg" alt="<" className="menu__bracket" />
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
