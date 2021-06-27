const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="jumbo">
        <div className="jumbo__image"></div>
        <div className="jumbo__text">
          <h1>
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <div className="decorate"></div>
          <div className="jumbo__buttons">
            <button className="btn btn-big btn-header1">oddaj rzeczy</button>
            <button className="btn btn-big btn-header">
              zorganizuj zbiórkę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
