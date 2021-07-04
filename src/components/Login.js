import {useState} from 'react';
import {Link} from 'react-router-dom';
import LoginValidation from './LoginValidation';

const Login = () => {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleValue = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(loginValues));
  };
  return (
    <div className="login">
      <h1>Zaloguj się</h1>
      <div className="decorate"></div>

      <form onSubmit={handleSubmit} className="form-login">
        <div className="login__container">
          <div className="form-login__container">
            <label for="login">Email</label>
            <br />
            <input
              type="email"
              id="login"
              name="email"
              value={loginValues.email}
              onChange={handleValue}
              className={errors.email ? 'error-border' : 'border'}
            ></input>
            {errors.email && <p className="error">{errors.email}</p>}
            <label for="password" className="password">
              Hasło
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={loginValues.password}
              onChange={handleValue}
              className={errors.password ? 'error-border' : 'border'}
            ></input>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <div className="login__links">
          <Link to="/rejestracja" className="btn-log">
            Załóż konto
          </Link>
          <button className="btn btn-log" type="submit">
            <Link to="/" className="btn-link">
              Zaloguj się
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
