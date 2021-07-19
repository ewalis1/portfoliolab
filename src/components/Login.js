import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import useStateWithLocalStorage from './LocalStorage';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError('Podany email jest nieprawidłowy');
    }
    if (passwordRef.current.value.length < 6) {
      return setError('Podane hasło musi miec co najmniej 6 znaków');
    }

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
      console.log(localStorage.getItem('myValueInLocalStorage'));
    } catch {
      setError('Podane hasło musi miec co najmniej 6 znaków');
    }
    setLoading(false);
  }
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
              id="email"
              ref={emailRef}
              value={value}
              onChange={() => setValue(emailRef.current.value)}
              required
              className={error ? 'error-border' : 'border'}
            ></input>
            <label for="password" className="password">
              Hasło
            </label>
            <br />
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
              className={error ? 'error-border' : 'border'}
            ></input>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
        <div className="login__links">
          <Link to="/rejestracja" className="btn-log">
            Załóż konto
          </Link>
          <button disabled={loading} className="btn btn-log" type="submit">
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
