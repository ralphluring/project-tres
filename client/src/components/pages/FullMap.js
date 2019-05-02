import React,{Component} from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

  class FullMap extends Component {
    constructor(props) {
        super(props);
        this.state = {places: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/data/')
            .then(response => {
                this.setState({ places: response.data });
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    markers() {
        return this.state.places.map(function(currentPlace, i){
            let lat = currentPlace.place_location.lat;
            let lng = currentPlace.place_location.lng;
            const pos = {lat,lng};
            return <Marker position = {pos} />;
        })
    }

      render(){
        return (
            <div className="mapContainer">
                <Map 
                google={this.props.google} 
                zoom={4} 
                initialCenter={{
                    lat:36.033852,
                    lng:-120.038702
                }} 
                >
                    {this.markers()}
                    <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                </Map>
            </div>
        )
      }
     
  }
  
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDg3IJWzp9l_bwRy83lkR2iH9CQGSFDMyA")
  })(FullMap)
  