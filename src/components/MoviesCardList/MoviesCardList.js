import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  const location = useLocation();
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {location.pathname === '/movies' ? (
        <button className="cards__additional">Ещё</button>
      ) : (
        <button className="cards__additional cards__additional_type_none"></button>
      )}
    </section>
  );
}

export default MoviesCardList;
