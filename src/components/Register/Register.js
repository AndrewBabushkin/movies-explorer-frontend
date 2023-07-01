import './Register.css';

import AuthPage from '../AuthPage/AuthPage.js';

function Register() {
  return (
    <AuthPage
      title="Добро пожаловать!"
      nameForm="registrationForm"
      textButton="Зарегистрироваться"
    >
      <div className="auth-page__input-container">
        <input className="auth-page__input " type="text"></input>
        <label className="auth-page__placeholder">Имя</label>
        <label className=" auth-page__placeholder-error ">
          Что-то пошло не так...
        </label>
      </div>
    </AuthPage>
  );
}

export default Register;
