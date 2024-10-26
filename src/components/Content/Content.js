import DatePicker from "react-datepicker";
import { useState } from "react";
import { team } from "../../utils/data";

export const CustomInput = ({ value, onClick }) => {
  return (
    <div className="input__date-wrapper">
      <input
        className="content__input input__search"
        type="text"
        value={value}
        onClick={onClick}
        readOnly
      />
      <div className="button__date">
        <img
          src="./images/button__date.svg"
          alt="Календарь"
          className="image__date"
        />
      </div>
    </div>
  );
};

const Content = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [createDate, setCreateDate] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [result, setResult] = useState([]);
  const [members, setMembers] = useState(team);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  document.addEventListener("scroll", () => {
    setScroll(true);
  });

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="content">
      <div className={`content__wrapper ${scroll ? "content__shadow" : ""}`}>
        <div className="content__title-wrapper">
          <h1 className="content__title">Подзадача</h1>
          <h1 className="content__title-small">подзадачи</h1>
          <button
            className={`content__button  button__none  ${
              isClick ? "content__button_active " : ""
            }`}
            type="button"
            area-label="Создать"
            onClick={props.onChange}
          >
            Создать
          </button>
        </div>
        <div className="content__save-wrapper">
          <button
            className={`content__button save  ${
              isClick ? "content__button_active" : ""
            }`}
            type="button"
            area-label="Сохранить"
          >
            Сохранить
          </button>
          <button
            className={`content__button exit  ${
              isClick ? "content__button_active" : ""
            }`}
            type="button"
            area-label="Сохранить и выйти"
          >
            Сохранить и выйти
          </button>
          <button
            className={`content__button button__create  ${isClick ? "create" : ""}`}
            type="button"
            area-label="Создать"
            onClick={props.onChange}
          >
            Создать
          </button>
          <button
            className="burger"
            type="button"
            area-label="Бургерное меню"
            onClick={handleClick}
          />
        </div>
      </div>
      <h2 className="task">
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
        поля остаются редактируемыми для агента если он Caller
      </h2>
      <form className="content__form">
        <div className="input_wrapper">
          <label className="content__label">
            <span className="red">*</span> Тема
          </label>
          <input type="text" className="content__input" required />
        </div>

        <div className="input_wrapper">
          <label className="content__label">Статус</label>
          <input type="text" className="content__input" />
        </div>

        <div className="input_wrapper">
          <label className="content__label">Описание</label>
          <input type="text" className="content__input" />
        </div>

        <div className="input_wrapper">
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

        <div className="input_wrapper">
          <label className="content__label">
            <span className="red">*</span> Рабочие заметки
          </label>
          <input type="text" className="content__input" required />
        </div>

        <div className="input_wrapper">
          <label className="content__label">Приоритет</label>
          <input type="text" className="content__input" />
        </div>

        <div className="input_wrapper">
          <label className="content__label">Ответственный</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button
              className="form__button button__add"
              type="button"
              area-label="Добавить"
            />
            <button className="form__button" type="button" area-label="Поиск" />
          </div>
        </div>

        <div className="input_wrapper">
          <label className="content__label">Группа</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button
              className="form__button button__add"
              type="button"
              area-label="Добавить"
            />
            <button className="form__button" type="button" area-label="Поиск" />
          </div>
        </div>

        <div className="input_wrapper double">
          <label className="content__label">Комментарии</label>
          <input type="text" className="content__input" />
        </div>

        <div className="input_wrapper double">
          <label className="content__label">Согласующие</label>
          <div className="input__search-wrapper">
            <div
              className="result"
              onClick={() => {
                document.getElementById("search").focus();
              }}
            >
              <button
                className="clean"
                type="button"
                area-label="Очистить"
                onClick={() => {
                  setMembers([...members, ...result]);
                  setResult([]);
                }}
              />
              {result.map((item, index) => (
                <div className="result__item" key={index}>
                  {item}
                  <button
                    type="button"
                    className="delete"
                    area-label="Удалить"
                    onClick={() => {
                      setMembers([...members, item]);
                      setResult(result.filter((i) => i !== item));
                    }}
                  />
                </div>
              ))}
              <input
                type="text"
                className="content__input input__search input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="search"
              />
            </div>

            <button
              className="form__button button__add"
              type="button"
              area-label="Добавить"
              onClick={() => {
                if (query) {
                  setResult([...result, query]);
                  setQuery("");
                }
              }}
            />
            <button
              className="form__button"
              type="button"
              area-label="Поиск"
              onClick={handleSearch}
            />
          </div>
          <div
            className={`search__result ${
              isSearch ? "search__result_active" : ""
            }`}
          >
            <ul className="search__list">
              {members.length <= 0
                ? !isSearch
                  ? ""
                  : setIsSearch(false)
                : members
                    .filter((item) => item.toLowerCase().includes(query))
                    .map((item) => (
                      <li key={item.id} className="search__item">
                        <button
                          type="button"
                          className="item__button"
                          area-label="Добавить"
                          onClick={() => {
                            if (!result.includes(item)) {
                              setResult([...result, item]);
                              setMembers(members.filter((i) => i !== item));
                            }
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
            </ul>
          </div>
        </div>

        <div className="input_wrapper">
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

        <div className="input_wrapper">
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

        <div className="input_wrapper">
          <label className="content__label">Кем открыто</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button
              className="form__button button__add"
              type="button"
              area-label="Добавить"
            />
            <button className="form__button" type="button" area-label="Поиск" />
          </div>
        </div>

        <div className="input_wrapper">
          <label className="content__label">Кем создано</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button
              className="form__button button__add"
              type="button"
              area-label="Добавить"
            />
            <button className="form__button" type="button" area-label="Поиск" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content;
