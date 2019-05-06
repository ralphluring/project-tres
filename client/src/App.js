import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import AllPlaces from "./components/pages/AllPlaces";
import HuellMap from "./components/pages/FullMap";
import logo from "./huell-logo.png";
import axios from "axios";

class App extends Component {
  state = {
    user: {},
    isLoggedIn: false
  };

  componentDidMount() {
    // gets data from the route that has the data fo
    axios
      .get("http://localhost:5000/whoami",
        {withCredentials: true}
      )
      .then(response => {
        console.log(response.data);
        this.setState({user:response.data,isLoggedIn:true});
        console.log(this.state)
      })
      .catch(function(error) {
        console.log(error);
      });
   
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar">
            <Link to="/">
              <img src={logo} width="100px" height="100px" alt="huell Logo" />
            </Link>
            {this.state.isLoggedIn && (
              <>
                <Link to="/allplaces" className="nav-link">
                  All Places
                </Link>
                <Link to="/map" className="nav-link">
                  See Map
                </Link>
              </>
            )}
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route 
            path="/allplaces" exact render={(props)=> <AllPlaces {...props} googleId={this.state.user.googleId} />} 
            />
            <Route
             path="/map" exact render={(props)=> <HuellMap {...props} googleId={this.state.user.googleId} />} 
             />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
