import {useState, useEffect} from 'react';
import HomeFooter from './HomeFooter';
import ContactValidation from './ContactValidation';

const HomeContact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ContactValidation(formValues));
  };
  return (
    <div className="contact" id="contact">
      <div className="image"></div>
      <div className="contact__all">
        <div className="container">
          <h1>Skontaktuj się z nami</h1>
          <div className="decorate"></div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-data">
                <div className="data1">
                  <label for="name">Wpisz swoje imię</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Krzysztof"
                    value={formValues.name}
                    onChange={handleValue}
                    className={errors.name ? 'error-border' : 'border'}
                  ></input>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="data2">
                  <label for="email">Wpisz swój email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="abc@xyz.pl"
                    value={formValues.email}
                    onChange={handleValue}
                    className={errors.email ? 'error-border' : 'border'}
                  ></input>
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="contact-textarea">
                <label for="message">Wpisz swoją wiadomość</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  value={formValues.message}
                  onChange={handleValue}
                  className={errors.message ? 'error-border' : 'null'}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button className="btn btn-form" type="submit" id="validate">
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default HomeContact;
