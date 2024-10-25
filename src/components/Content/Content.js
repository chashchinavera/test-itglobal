const Content = () => {
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__title-wrapper">
          <h1 className="content__title">Подзадача</h1>
          <button className="content__button" type="button">
            Создать
          </button>
        </div>
        <div className="content__save-wrapper">
          <button className="content__button save" type="button">
            Сохранить
          </button>
          <button className="content__button exit" type="button">
            Сохранить и выйти
          </button>
        </div>
      </div>
      <h2 className="task">
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
        поля остаются редактируемыми для агента если он Caller
      </h2>
      <form className="content__form">
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
            <button className="button__search" />
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
            <button className="button__search button__add" />
            <button className="button__search" />
          </div>
        </div>

        <div className="input-wrapper">
          <label className="content__label">Группа</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button className="button__search button__add" />
            <button className="button__search" />
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
            <button className="button__search button__add" />
            <button className="button__search" />
          </div>
        </div>

        <div className="input-wrapper">
          <label className="content__label">Когда открыто</label>
          <div className="input__search-wrapper">
            <input type="date" className="content__input input__search" />
            <button className="button__search button__date" />
          </div>
        </div>

        <div className="input-wrapper">
          <label className="content__label">Когда создано</label>
          <div className="input__search-wrapper">
            <input type="date" className="content__input input__search" />
            <button className="button__search button__date" />
          </div>
        </div>

        <div className="input-wrapper">
          <label className="content__label">Кем открыто</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button className="button__search button__add" />
            <button className="button__search" />
          </div>
        </div>

        <div className="input-wrapper">
          <label className="content__label">Кем создано</label>
          <div className="input__search-wrapper">
            <input type="text" className="content__input input__search" />
            <button className="button__search button__add" />
            <button className="button__search" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content;
