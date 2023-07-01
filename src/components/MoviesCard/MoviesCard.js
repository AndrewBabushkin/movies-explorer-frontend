import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import CardAvatar from '../../images/pic__COLOR_pic-10.png';

function MoviesCard() {
  const isAddCard = false;
  const location = useLocation();
  return (
    <li className="movies-card__item">
      <div className="movies-card__container">
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <time className="movies-card__time">27 минут</time>
      </div>
      <img src={CardAvatar} alt="Обложка фильма" className="movies-card__img" />
      {location.pathname === '/saved-movies' ? (
        <button className="movies-card__btn movies-card__btn_type_delete"></button>
      ) : (
        <>
          {isAddCard ? (
            <button className="movies-card__btn movies-card__btn_type_add"></button>
          ) : (
            <button className="movies-card__btn">Сохранить</button>
          )}
        </>
      )}
    </li>
  );
}

export default MoviesCard;
