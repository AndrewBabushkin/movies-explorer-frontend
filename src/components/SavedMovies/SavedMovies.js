import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
