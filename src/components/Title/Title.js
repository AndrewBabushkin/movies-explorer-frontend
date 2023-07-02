import './Title.css';

function Title({ title, attribute }) {
  return (
    <div className={`conteiner ${attribute}`}>
      <h2 className="conteiner__title">{title}</h2>
    </div>
  );
}

export default Title;
