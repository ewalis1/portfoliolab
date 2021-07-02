import {Link} from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1>Zaloguj się</h1>
      <div className="decorate"></div>
      <div className="login__container">
        <form onSubmit={handleSubmit} className="form-login">
          <div className="form-login__container">
            <label for="login">Email</label>
            <br />
            <input type="email" id="login"></input>
            <label for="password" className="password">
              Hasło
            </label>
            <br />
            <input type="password" id="password"></input>
          </div>
        </form>
      </div>
      <div className="login__links">
        <Link to="/rejestracja" className="btn-log">
          Załóż konto
        </Link>
        <Link to="/oddaj-rzeczy" className="btn btn-log">
          Zaloguj się
        </Link>
      </div>
    </div>
  );
};

export default Login;
