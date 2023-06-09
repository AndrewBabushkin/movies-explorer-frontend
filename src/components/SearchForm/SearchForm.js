import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form" name="form-search">
      <div className="search-form__conteiner">
        <input
          className="search-form__input"
          type="search"
          name="search-input"
          placeholder="Фильм"
          required
        />
        <button className="search-form__bnt">Найти</button>
      </div>

      <label className="search-form__label">
        <input
          type="checkbox"
          name="checkbox"
          className="search-form__checkbox"
        />
        <span className="search-form__inner">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
