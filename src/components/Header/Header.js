import { useLocation } from 'react-router-dom';
import './Header.css';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation.js';
import AuthNavigation from '../AuthNavigation/AuthNavigation.js';
import Navigation from '../Navigation/Navigation';

function Header({ handleShowNavBar, windowWidth }) {
  const location = useLocation();
  console.log(windowWidth);
  return (
    <header
      className={
        location.pathname === '/' ? 'header' : 'header header__type_loggin'
      }
    >
      <div className="header__logo"></div>
      {location.pathname === '/' ? (
        <AuthNavigation />
      ) : windowWidth >= 1280 ? (
        <Navigation isOpen={true} windowWidth={windowWidth} />
      ) : (
        <BurgerNavigation handleShowNavBar={handleShowNavBar} />
      )}
    </header>
  );
}

export default Header;
