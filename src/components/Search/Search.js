const Search = () => {
  return (
    <div className="search">
      <div className="search__input_wrapper">
        <input
          type="text"
          placeholder="Поиск по меню"
          className="search__input"
        />
        <button
          className="search__button search__button_filter"
          type="button"
        />
      </div>
      <button className="search__button search__button_unpin" type="button" />
    </div>
  );
};

export default Search;
