import { Link } from 'react-router-dom';
import './AuthNavigation.css';

function AuthNavigation() {
  return (
    <nav className="auth-navigation">
      <ul className="auth-navigation__list">
        <li className="auth-navigation__item">
          <Link className="auth-navigation__link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="auth-navigation__item">
          <Link className="auth-navigation__link auth-navigation__link_type_signin" to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;
