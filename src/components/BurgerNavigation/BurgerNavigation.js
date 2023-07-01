import './BurgerNavigation.css';

function BurgerNavigation({ handleShowNavBar }) {
  return (
    <div className="burger-navigation" onClick={handleShowNavBar}>
      <span className="burger-navigation__btn"></span>
      <span className="burger-navigation__btn"></span>
      <span className="burger-navigation__btn"></span>
    </div>
  );
}

export default BurgerNavigation;
