import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import AllPlaces from "./components/pages/AllPlaces";
import HuellMap from "./components/pages/FullMap";
import logo from "./huell-logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar">
            <Link to="/">
              <img src={logo} width="100px" height="100px" alt="huell Logo" />
            </Link>
            <Link to="/allplaces" className="nav-link">All Places</Link>
            <Link to="/map" className="nav-link">See Map</Link>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/allplaces" exact component={AllPlaces} />
            <Route path="/map" component={HuellMap} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
