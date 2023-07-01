import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <ul className="profile__list">
        <li className="profile__item">
          <p className="profile__hint">Имя</p>
          <p className="profile__data">Виталий</p>
        </li>
        <li className="profile__item">
          <p className="profile__hint">E-mail</p>
          <p className="profile__data">pochta@yandex.ru</p>
        </li>
      </ul>

      <button className="profile__btn">Редактировать</button>
      <button className="profile__btn profile__btn_type_exit">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
