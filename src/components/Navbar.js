// import {useState} from 'react';
import {Link} from 'react-router-dom';
import NavbarScroll from './NavbarScroll';

const Navbar = () => {
  const isLoggedIn = window.localStorage.getItem('myValueInLocalStorage')
    ? true
    : false;
  if (isLoggedIn) {
    return (
      <nav className="navbar">
        <div className="nav-log nav-logged">
          <p className="nav-email">
            {localStorage.getItem('myValueInLocalStorage')}
          </p>
          <Link to="/oddaj-rzeczy" className="nav-link">
            Oddaj rzeczy
          </Link>
          <Link to="/wylogowano" className="nav-link">
            Wyloguj
          </Link>
        </div>
        <div className="nav-menu">
          <Link to="/" className="menu-link">
            Start
          </Link>
          <NavbarScroll />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="nav-log">
          <Link to="/logowanie" className="nav-link">
            Zaloguj
          </Link>
          <Link to="/rejestracja" className="nav-link">
            Załóż konto
          </Link>
        </div>
        <div className="nav-menu">
          <Link to="/" className="menu-link">
            Start
          </Link>
          <NavbarScroll />
        </div>
      </nav>
    );
  }
};

export default Navbar;
