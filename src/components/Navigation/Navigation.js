import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen, onClose, windowWidth }) {
  console.log(isOpen);
  console.log(onClose);
  return (
    <section className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      {windowWidth > 768 ? (
        ''
      ) : (
        <button className="navigation__btn-exit" onClick={onClose}></button>
      )}

      <nav className="navigation__list">
        {windowWidth > 768 ? (
          ''
        ) : (
          <NavLink to="/" className="navigation__link" onClick={onClose}>
            Главная
          </NavLink>
        )}

        <NavLink to="/movies" className="navigation__link" onClick={onClose}>
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link"
          onClick={onClose}
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <div className="navigation__container">
        <Link
          to="/profile"
          className="navigation__link navigation__link_type_profile"
        >
          Аккаунт
        </Link>
        <div className="navigation__icon"></div>
      </div>
    </section>
  );
}

export default Navigation;
