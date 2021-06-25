import {Link} from 'react-router-dom';
import NavbarScroll from './NavbarScroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-log">
        <Link to="/logowanie" className="nav-link link-style">
          Zaloguj
        </Link>
        <Link to="/rejestracja" className="nav-link link-style">
          Załóż konto
        </Link>
      </div>
      <div className="nav-menu link-style">
        <Link to="/" className="menu-link">
          Start
        </Link>
        <NavbarScroll />
      </div>
    </nav>
  );
};

export default Navbar;
