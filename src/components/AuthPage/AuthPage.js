import { Link } from 'react-router-dom';

import './AuthPage.css';

function AuthPage({ children, nameForm, title, textButton }) {
  return (
    <section className="auth-page">
      <Link className="auth-page__logo" to="/"></Link>

      <h2 className="auth-page__title">{title}</h2>
      <form className="auth-page__form" name={nameForm}>
        <div className="auth-page__container">
          {children}
          <div className="auth-page__input-container">
            <input
              className="auth-page__input auth-page__input_type_valid"
              type="email"
              minLength="2"
              maxLength="50"
            ></input>
            <label className="auth-page__placeholder">E-mail</label>
            <label className="auth-page__placeholder-error ">
              Что-то пошло не так...
            </label>
          </div>
          <div className="auth-page__input-container">
            <input
              className="auth-page__input auth-page__input_type_invalid "
              type="password"
              minLength="6"
              maxLength="50"
            ></input>
            <label className="auth-page__placeholder">Пароль</label>
            <label className=" auth-page__placeholder-error auth-page__placeholder-error_type_active">
              Что-то пошло не так...
            </label>
          </div>
        </div>

        <button type="submit" className="auth-page__button">
          {textButton}
        </button>
      </form>
      {nameForm === 'registrationForm' ? (
        <div className="auth-page__link-container">
          <p className="auth-page__question">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth-form__link">
            Войти
          </Link>
        </div>
      ) : (
        <div className="auth-page__link-container">
          <p className="auth-page__question">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="auth-form__link">
            Регистрация
          </Link>
        </div>
      )}
    </section>
  );
}

export default AuthPage;
