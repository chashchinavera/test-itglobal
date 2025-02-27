import { useState } from "react";

const TagsInput = ({ deletable, label, value, double }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleDeleteElement = (item) => {
    setInputValue(inputValue.filter((i) => i !== item));
  };

  const handleDeleteAll = () => {
    setInputValue([]);
  };

  return (
    <div className={`form__item ${double ? "form__item_double" : ""}`}>
      <label className="form__label">{label}</label>
      <div className="form__input_wrapper">
        <div className="form__input tags__area">
          {inputValue.length !== 0 ? (
            <button
              className="form__button form__button_delete"
              type="button"
              aria-label="Удалить"
              onClick={handleDeleteAll}
            ></button>
          ) : (
            ""
          )}
          {inputValue.map((item, id) =>
            deletable ? (
              <div key={id} className="tag tag_deletable">
                {item}

                <button
                  className="tag__button"
                  type="button"
                  aria-label="Удалить"
                  onClick={handleDeleteElement.bind(this, item)}
                ></button>
              </div>
            ) : (
              <div key={id} className="tag">
                {item}
              </div>
            )
          )}
        </div>
        <button
          className="form__button form__button_add"
          type="button"
          aria-label="Добавить"
        ></button>
        <button
          className="form__button form__button_search"
          type="button"
          aria-label="Поиск"
        ></button>
      </div>
    </div>
  );
};

export default TagsInput;
