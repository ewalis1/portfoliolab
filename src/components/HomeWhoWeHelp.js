import {useEffect, useState} from 'react';

const HomeWhoWeHelp = () => {
  const [raises, setRaises] = useState([]);
  const [organisation, setOrganisation] = useState('Fundacja');
  const [page, setPage] = useState(1);
  const [raisesPerPage, setRaisesPerPage] = useState(3);

  // const indexOfLastRaise = page * raisesPerPage;
  // const indexOfFirstRaise = indexOfLastRaise - raisesPerPage;
  // const currentRaises = raises.slice(indexOfFirstRaise, indexOfLastRaise);

  useEffect(() => {
    fetch('http://localhost:3001/raises')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Komunikacja z serwerem się nie powiodła!');
      })
      .then((data) => {
        console.log(data);
        setRaises(data);
      });
  }, []);

  // const handlePageNumber = (e) => {
  //   setPage(Number(e.target.id));
  // };

  // let pages = [];
  // for (let i = 1; Math.ceil(raises.length / raisesPerPage); i++) {
  //   pages.push(i);
  // }

  // const renderPageNumbers = pages.map((number) => {
  //   return (
  //     <li key={number} id={number} onClick={handlePageNumber}>
  //       {number}
  //     </li>
  //   );
  // });

  return (
    <div className="who-we-help" id="who-we-help">
      <h1>Komu pomagamy?</h1>
      <div className="decorate"></div>
      <div className="who-we-help__organizations">
        <button className="btn" onClick={() => setOrganisation('Fundacja')}>
          Fundacjom
        </button>
        <button className="btn" onClick={() => setOrganisation('Organizacja')}>
          Organizacjom <br />
          pozarządowym
        </button>
        <button className="btn" onClick={() => setOrganisation('Zbiórka')}>
          Lokalnym <br />
          zbiórkom
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        <br />
        do eiusmod tempor incididunt ut labore et dolore magna <br />
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <div className="who-we-help__container">
        {raises
          .filter((r) => r.organisation === organisation)
          .map((rf) => {
            return (
              <>
                <div className="organisation__filtered">
                  <div className="organisation-main">
                    <p className="organisation-title">{`${rf.organisation} "${rf.name}"`}</p>
                    <p className="organisation-aim">{rf.aim}</p>
                  </div>
                  <p className="tags">{rf.tags}</p>
                </div>
              </>
            );
          })}
      </div>
      {/* <ul className="pageNumbers">{renderPageNumbers}</ul> */}
    </div>
  );
};

export default HomeWhoWeHelp;
