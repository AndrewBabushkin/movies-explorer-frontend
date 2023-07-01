import './AboutProject.css';
import Title from '../Title/Title.js';

function AboutProject() {
  return (
    <section className="about-project">
      <Title title="О проекте" />
      <div className="about-project__container">
        <h2 className="about-project__title">
          Дипломный проект включал 5 этапов
        </h2>
        <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className="about-project__title about-project__title_type_grid">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="about-project__description about-project__description_type_grid ">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <ul className="about-project__list">
        <li className="about-project__item">
          <p className="about-project__text">1 неделя</p>
        </li>
        <li className="about-project__item">
          <p className="about-project__text">4 недели</p>
        </li>
        <li className="about-project__item">
          <p className="about-project__text about-project__text_gray">
            Back-end
          </p>
        </li>
        <li className="about-project__item">
          <p className="about-project__text about-project__text_gray">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
