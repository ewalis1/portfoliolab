import {Link} from 'react-router-dom';

const HomeFourSteps = () => {
  const isLoggedIn = window.localStorage.getItem('myValueInLocalStorage')
    ? true
    : false;
  return (
    <div className="fourSteps" id="four-steps">
      <div className="fourSteps__header">
        <h1>Wystarczą 4 proste kroki</h1>
        <div className="decorate"></div>
      </div>
      <div className="fourSteps__main">
        <div className="fourSteps__container">
          <div className="step">
            <div className="icon icon1"></div>
            <p>Wybierz rzeczy</p>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="step">
            <div className="icon icon2"></div>
            <p>Spakuj je</p>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div className="step">
            <div className="icon icon3"></div>
            <p>
              Zdecyduj komu <br />
              chcesz oddać
            </p>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div className="step">
            <div className="icon icon4"></div>
            <p>Zamów kuriera</p>
            <p>
              kurier przyjedzie <br />w dogodnym terminie
            </p>
          </div>
        </div>
      </div>
      <div className="fourSteps__footer">
        {isLoggedIn ? (
          <Link to="/oddaj-rzeczy" className="btn btn-big">
            oddaj rzeczy
          </Link>
        ) : (
          <Link to="/logowanie" className="btn btn-big">
            oddaj rzeczy
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeFourSteps;
