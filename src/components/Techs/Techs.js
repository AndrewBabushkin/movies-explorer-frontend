import Title from '../Title/Title.js';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <Title title="Технологии" attribute="conteiner_type_techs" />
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__text">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
