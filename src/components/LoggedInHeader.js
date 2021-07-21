const LoggedInHeader = () => {
  return (
    <div className="loggedIn-header">
      <div className="jumbo-logged">
        <div className="jumbo-logged__image"></div>
        <div className="jumbo-logged__text">
          <h1>
            Oddaj rzeczy, których już nie chcesz <br />
            POTRZEBUJĄCYM
          </h1>
          <div className="decorate"></div>
          <div className="jumbo-steps">
            <h2 className="jumbo-steps__title">Wystarczą 4 proste kroki:</h2>
            <section className="jumbo-steps__fourSteps">
              <div className="sqr">
                <p>
                  <span>1</span>
                  <br />
                  Wybierz <br />
                  rzeczy
                </p>
              </div>
              <div className="sqr">
                <p>
                  <span>2</span>
                  <br />
                  Spakuj je <br />w worki
                </p>
              </div>
              <div className="sqr">
                <p>
                  <span>3</span>
                  <br />
                  Wybierz <br />
                  fundację
                </p>
              </div>
              <div className="sqr">
                <p>
                  <span>4</span>
                  <br />
                  Zamów <br />
                  kuriera
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInHeader;
