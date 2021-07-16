import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import useStateWithLocalStorage from './LocalStorage';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError('Podany email jest nieprawidłowy');
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Podane hasła się różnią!');
    }

    if (passwordRef.current.value.length < 6) {
      return setError('Podane hasło musi miec co najmniej 6 znaków');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
      console.log(localStorage.getItem('myValueInLocalStorage'));
    } catch {
      setError('Nie udało się założyć konta');
    }
    setLoading(false);
  }

  return (
    <div className="register">
      <h1>Załóż konto</h1>
      <div className="decorate"></div>
      <form onSubmit={handleSubmit} className="form-register">
        <div className="register__container">
          <div className="form-register__container">
            <label for="register">Email</label>
            <br />
            <input
              type="email"
              id="email"
              ref={emailRef}
              value={value}
              onChange={() => setValue(emailRef.current.value)}
              className={error ? 'error-border' : 'border'}
              required
            ></input>
            <label for="password" className="password">
              Hasło
            </label>
            <br />
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className={error ? 'error-border' : 'border'}
              required
            ></input>
            {error && <p className="error">{error}</p>}
            <label for="password-again" className="password">
              Powtórz hasło
            </label>
            <br />
            <input
              type="password"
              id="password-again"
              ref={passwordConfirmRef}
              required
              className={error ? 'error-border' : 'border'}
            ></input>
          </div>
        </div>
        <div className="register__links">
          <Link to="/logowanie" className="btn-log">
            Zaloguj się
          </Link>
          <button disabled={loading} className="btn btn-log" type="submit">
            Załóż konto
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
