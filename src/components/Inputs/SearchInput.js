import { useState } from "react";

const SearchInput = ({ label, value, double, isModal }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleClick = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`form__item ${double ? "form__item_double" : ""}`}>
      <label className="form__label">{label}</label>
      <div className="form__input_wrapper">
        <input
          className="form__input"
          type="text"
          value={inputValue || ""}
          onChange={handleClick}
        />
        <button
          className="form__button form__button_search"
          type="button"
          area-label="Поиск"
        />
      </div>
    </div>
  );
};

export default SearchInput;
