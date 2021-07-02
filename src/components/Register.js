import {Link} from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <h1>Załóż konto</h1>
      <div className="decorate"></div>
      <div className="register__container">
        <form onSubmit={handleSubmit} className="form-register">
          <div className="form-register__container">
            <label for="register">Email</label>
            <br />
            <input type="email" id="register"></input>
            <label for="password" className="password">
              Hasło
            </label>
            <br />
            <input type="password" id="password"></input>
            <label for="password-again" className="password">
              Powtórz hasło
            </label>
            <br />
            <input type="password-again" id="password"></input>
          </div>
        </form>
      </div>
      <div className="register__links">
        <Link to="/logowanie" className="btn-log">
          Zaloguj się
        </Link>
        <Link to="/oddaj-rzeczy" className="btn btn-log">
          Załóż konto
        </Link>
      </div>
    </div>
  );
};

export default Register;
