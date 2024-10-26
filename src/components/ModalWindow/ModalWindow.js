import DatePicker from "react-datepicker";
import { useState } from "react";
import { CustomInput } from "../Content/Content";

const ModalWindow = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [createDate, setCreateDate] = useState(null);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      props.onClose();
    }
  });

  if (props.isOpen) {
    document.querySelector(".modal").addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        props.onClose();
      }
    });
  }

  return (
    <div className={`modal ${props.isOpen ? "modal_active" : ""}`}>
      <div className="modal__window">
        <div className="modal__title-wrapper">
          <h1 className="modal__title">Подзадача</h1>
          <h1 className="modal__title-small">подзадача</h1>
          <button
            className="modal__close"
            type="button"
            area-label="Закрыть"
            onClick={props.onClose}
          />
          <div className="modal__button-wrapper">
            <button
              className="modal__button modal__button_save"
              type="button"
              area-label="Сохранить"
            >
              Сохранить
            </button>
            <button
              className="modal__button"
              type="button"
              area-label="Отменить"
              onClick={props.onClose}
            >
              Отменить
            </button>
          </div>
        </div>
        <h2 className="modal__subtitle">Новая запись</h2>

        <form className="modal__form">
          <div className="input-wrapper">
            <label className="content__label">
              <span className="red">*</span> Тема
            </label>
            <input type="text" className="content__input" required />
          </div>

          <div className="input-wrapper">
            <label className="content__label">Статус</label>
            <input type="text" className="content__input" />
          </div>

          <div className="input-wrapper">
            <label className="content__label">Описание</label>
            <input type="text" className="content__input" />
          </div>

          <div className="input-wrapper">
            <label className="content__label">Продукт</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button"
                type="button"
                area-label="Добавить"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">
              <span className="red">*</span> Рабочие заметки
            </label>
            <input type="text" className="content__input" required />
          </div>

          <div className="input-wrapper">
            <label className="content__label">Приоритет</label>
            <input type="text" className="content__input" />
          </div>

          <div className="input-wrapper">
            <label className="content__label">Ответственный</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button button__add"
                type="button"
                area-label="Добавить"
              />
              <button
                className="form__button"
                type="button"
                area-label="Поиск"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">Группа</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button button__add"
                type="button"
                area-label="Добавить"
              />
              <button
                className="form__button"
                type="button"
                area-label="Поиск"
              />
            </div>
          </div>

          <div className="input-wrapper double">
            <label className="content__label">Комментарии</label>
            <input type="text" className="content__input" />
          </div>

          <div className="input-wrapper double">
            <label className="content__label">Согласующие</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button button__add"
                type="button"
                area-label="Добавить"
              />
              <button
                className="form__button"
                type="button"
                area-label="Поиск"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">Когда открыто</label>
            <div className="input__search-wrapper">
              <label style={{ width: "100%" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                  dateFormat="dd.MM.yyyy"
                />
              </label>
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">Когда создано</label>
            <div className="input__search-wrapper">
              <label style={{ width: "100%" }}>
                <DatePicker
                  selected={createDate}
                  onChange={(date) => setCreateDate(date)}
                  customInput={<CustomInput />}
                  dateFormat="dd.MM.yyyy"
                />
              </label>
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">Кем открыто</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button button__add"
                type="button"
                area-label="Добавить"
              />
              <button
                className="form__button"
                type="button"
                area-label="Поиск"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label className="content__label">Кем создано</label>
            <div className="input__search-wrapper">
              <input type="text" className="content__input input__search" />
              <button
                className="form__button button__add"
                type="button"
                area-label="Добавить"
              />
              <button
                className="form__button"
                type="button"
                area-label="Поиск"
              />
            </div>
          </div>
          <button
              className="modal__button modal__button_save none"
              type="button"
              area-label="Сохранить"
            >
              Сохранить
            </button>
            <button
              className="modal__button none"
              type="button"
              area-label="Отменить"
              onClick={props.onClose}
            >
              Отменить
            </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
