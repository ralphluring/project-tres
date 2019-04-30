import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/CreateTodo";
import PlaceList from "./components/PlaceList";
import logo from "./huell-logo.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="100" height="100" alt="TodoApp" />
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">All Places</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create New Place</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route path="/" exact component={PlaceList} />
          {/* <Route path="/place/:id" component={Place} /> */}
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;