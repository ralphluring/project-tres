import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";
import "../huell.css";

class FullMap extends Component {
  state = {
    windowData: "", 
    places: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    console.log("marker is clicked", props);

    const tempData = this.state.places.filter((place)=>{
        console.log(place._id)
        return place._id === props.id
    })
    console.log(tempData)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      windowData:tempData[0]
    });
  };

  onMapClicked = props => {
    console.log("map is clicked");
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/data/")
      .then(response => {
        this.setState({ places: response.data });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  markers = () => {
    return this.state.places.map((currentPlace, i) => {
       
        let lat = currentPlace.place_location.lat;
        let lng = currentPlace.place_location.lng;
        const pos = { lat, lng };

        return (
            <Marker position={pos} id={currentPlace._id} onClick={this.onMarkerClick}/>
        );
      
    });
  };


  render() {
    const style = {
      position: "relative",
      width: "200%",
      height: "400px"
    };

    return (
      <div className="mapContainer">
        <Map
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={4}
          style={style}
          initialCenter={{
            lat: 36.033852,
            lng: -120.038702
          }}
        >
          {this.markers()}
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <p>{this.state.windowData.place_name}</p>
              <p>{this.state.windowData.summary}</p>
              <p>{this.state.windowData.series}</p>
              <p>{this.state.windowData.episode}</p>
             <p> {this.state.windowData.place_visited ? "you been here": "you have not been here"}</p>
            </InfoWindow>
        

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDg3IJWzp9l_bwRy83lkR2iH9CQGSFDMyA"
})(FullMap);
