import { useState } from "react";

const TextInput = ({ required, label, value, double, isModal }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleClick = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`form__item ${double ? "form__item_double" : ""}`}>
      <label className="form__label">
        {required ? <span className="form__required">* </span> : ""}
        {label}
      </label>
      <input
        className="form__input"
        value={inputValue || ""}
        type="text"
        onChange={handleClick}
      ></input>
    </div>
  );
};

export default TextInput;
