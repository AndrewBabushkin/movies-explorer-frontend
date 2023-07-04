import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="page-unfound">
      <div className="page-unfound__container">
        <h2 className="page-unfound__title">404</h2>
        <p className="page-unfound__description">Страница не найдена</p>
      </div>

      <button className="page-unfound__btn" onClick={goBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
