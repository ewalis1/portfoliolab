import Home from './components/Home';
import './scss/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import LoggedIn from './components/LoggedIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/logowanie">
              <Login />
            </Route>
            <Route path="/rejestracja">
              <Register />
            </Route>
            <Route path="/wylogowano">
              <Logout />
            </Route>
            <Route path="/oddaj-rzeczy">
              <LoggedIn />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
