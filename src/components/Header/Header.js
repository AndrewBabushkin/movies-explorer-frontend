import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation.js';
import AuthNavigation from '../AuthNavigation/AuthNavigation.js';
import Navigation from '../Navigation/Navigation';

function Header({ handleShowNavBar, windowWidth }) {
  const location = useLocation();

  return (
    <header
      className={location.pathname === '/' ? 'header' : 'header header_loggin'}
    >
      <Link className="header__logo" to="/"></Link>
      {location.pathname === '/' ? (
        <AuthNavigation />
      ) : windowWidth > 768 ? (
        <Navigation isOpen={true} windowWidth={windowWidth} />
      ) : (
        <BurgerNavigation handleShowNavBar={handleShowNavBar} />
      )}
    </header>
  );
}

export default Header;
