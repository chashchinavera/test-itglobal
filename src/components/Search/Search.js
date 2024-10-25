const Search = () => {
  return (
    <div className="search">
      <div className="search__input-wrapper">
        <input
          type="text"
          placeholder="Поиск по меню"
          className="search__input"
        />
        <button className="search__button" type="button" />
      </div>
      <button className="search__unpin" type="button" />
    </div>
  );
};

export default Search;
