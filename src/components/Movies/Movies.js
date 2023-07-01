import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './Movies.css';

function Movies() {
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default Movies;
