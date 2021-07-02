import {Link} from 'react-router-dom';

const Logout = () => {
  return (
    <div className="logout">
      <h1>Wylogowanie nastąpiło <br/>pomyślnie!</h1>
      <div className="decorate"></div>
      <Link
        to="/
      "
        className="btn btn-log"
      >
        Strona główna
      </Link>
    </div>
  );
};

export default Logout;
