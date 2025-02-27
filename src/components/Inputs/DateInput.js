import { useState } from "react";
import DatePicker from "react-datepicker";

const DateInput = ({ label, value, isModal }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (date) => setInputValue(date);

  const CustomInput = ({ value, onClick }) => {
    return (
      <div className="form__input_wrapper">
        <input
          className="form__input"
          type="text"
          value={value}
          onClick={onClick}
          readOnly
        />
        <div className="form__button">
          <img
            src="./images/button__date.svg"
            alt="Календарь"
            className="form__button_date"
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`block__item ${isModal ? "modal__item" : "form__item"}`}>
      <label
        className={`block__label ${isModal ? "modal__label" : "form__label"}`}
      >
        {label}
      </label>
      <label>
        <DatePicker
          selected={inputValue}
          onChange={handleInputChange}
          customInput={<CustomInput />}
          dateFormat="dd.MM.yyyy"
        />
      </label>
    </div>
  );
};

export default DateInput;
