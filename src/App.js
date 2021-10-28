import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Characters from './pages/Characters';
import Navbar from './layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/characters">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
