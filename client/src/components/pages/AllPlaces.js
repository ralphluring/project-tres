import React, { Component } from "react";
import axios from "axios";
import Place from "../Place";

export default class PlaceList extends Component {
  state = {
    places: [],
    placesVisited: []
  };

  handleVisited = async (e, id) => {
    console.log(id);
    let value;
    this.setState({
      places: this.state.places.map(place => {
        if (place._id !== id) {
          return place;
        }
        value = !place.place_visited;
        return {
          ...place,
          place_visited: !place.place_visited
        };
      })
    });
    await axios.put(`http://localhost:5000/data/${id}`, {
      place_visited: value
    });
  };

  componentDidMount() {
    // gets the data at the route /data which returns
    // all the places from the database

    axios
      .get("http://localhost:5000/data/")
      .then(response => {
        // sets the state to be all of the places
        this.setState({ places: response.data });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      axios
      .get(`http://localhost:5000/user/placesvisited/${this.props.googleId}`)
      .then(response => {
          this.setState({placesVisited:response.data.placesvisited})
          console.log(response.data.placesvisited);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  placeList() {
    return this.state.places.map((currentPlace) => {
      return (
        <Place
          place={currentPlace}
          key={currentPlace._id}
          isVisited = {this.state.placesVisited.indexOf(currentPlace._id)!==-1}
          clickHandler={this.handleVisited}
        />
      );
    });
  }

  render() {
    console.log(this.state);
    return <div className="places">{this.placeList()}</div>;
  }
}
