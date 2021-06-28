import {Link} from 'react-router-dom';

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
            <Link to="/logowanie" className="btn btn-big">
              oddaj rzeczy
            </Link>
            <Link to="/logowanie" className="btn btn-big">
              zorganizuj zbiórkę
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
