import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import Navigation from '../Navigation/Navigation.js';

import './App.css';

function App() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleShowNavBar = () => {
    setIsOpenNavBar(true);
  };

  const closeAllPopups = () => {
    setIsOpenNavBar(false);
  };

  // Рендер меню навигации

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSize);
  }, []);

  return (
    <div className="App">
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ||
      location.pathname === '/profile' ? (
        <Header handleShowNavBar={handleShowNavBar} windowWidth={windowWidth} />
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      {location.pathname === '/' ||
      location.pathname === '/movies' ||
      location.pathname === '/saved-movies' ? (
        <Footer />
      ) : (
        ''
      )}
      {windowWidth >= 1280 ? (
        ''
      ) : (
        <Navigation isOpen={isOpenNavBar} onClose={closeAllPopups} />
      )}
    </div>
  );
}

export default App;
