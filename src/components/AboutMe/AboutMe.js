import './AboutMe.css';
import Title from '../Title/Title.js';
import avatarImg from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <Title title="Студент" attribute="conteiner_type_about-me" />
      <article className="about-me__profile">
        <img
          src={avatarImg}
          alt="Фотография студента"
          className="about-me__avatar"
        />
        <div className="about-me__container-profile">
          <h2 className="about-me__title">Виталий</h2>
          <p className="about-me__description about-me__description_type_bold">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__description ">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/AndrewBabushkin"
            className="about-me__link"
          >
            Github
          </a>
        </div>
      </article>

      <div className="about-me__container">
        <h3 className="about-me__portfolio">Портфолио</h3>
        <ul className="about-me__list">
          <li className="about-me__item">
            <a
              href="https://github.com/AndrewBabushkin/how-to-learn"
              className="about-me__link about-me__link_type_portfolio"
            >
              <p className="about-me__text">Статичный сайт</p>
              <div className="about-me__btn"></div>
            </a>
          </li>
          <li className="about-me__item">
            <a
              href="https://andrewbabushkin.github.io/russian-travel/"
              className="about-me__link about-me__link_type_portfolio"
            >
              <p className="about-me__text">Адаптивный сайт</p>
              <div className="about-me__btn"></div>
            </a>
          </li>
          <li className="about-me__item">
            <a
              href="https://andrew.babushkin.nomoredomains.monster"
              className="about-me__link about-me__link_type_portfolio"
            >
              <p className="about-me__text">Одностраничное приложение</p>
              <div className="about-me__btn"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
