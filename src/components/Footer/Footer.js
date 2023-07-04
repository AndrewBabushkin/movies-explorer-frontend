import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__conteiner">
        <div className="footer__conteiner-links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/AndrewBabushkin"
            target="_blank"
          >
            Github
          </a>
        </div>

        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
