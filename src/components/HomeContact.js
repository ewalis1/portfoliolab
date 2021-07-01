import {useState, useEffect} from 'react';
const HomeContact = () => {
  const [contactForm, setContactForm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    required
                    placeholder="Krzysztof"
                  ></input>
                </div>
                <div className="data2">
                  <label for="email">Wpisz swój email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="abc@xyz.pl"
                  ></input>
                </div>
              </div>
              <div className="contact-textarea">
                <label for="message">Wpisz swoją wiadomość</label>
                <br />
                <textarea
                  id="message"
                  required
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ></textarea>
              </div>
              <button className="btn btn-form" type="submit">
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
