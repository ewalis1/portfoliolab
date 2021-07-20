const {default: HomeContact} = require('./HomeContact');
const {default: LoggedInForm} = require('./LoggedInForm');
const {default: LoggedInHeader} = require('./LoggedInHeader');

const LoggedIn = () => {
  return (
    <>
      <LoggedInHeader />
      <LoggedInForm />
      <HomeContact />
    </>
  );
};

export default LoggedIn;
