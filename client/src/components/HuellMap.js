import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class HuellMap extends Component {
    render() {
        console.log();
        let lat = this.props.location.lat;
        let lng = this.props.location.lng;
        const pos = {lat,lng};

        const style = {
            // width:'350px',
            // height:'300px'
        }
        return (
            <div className="mapContainer">
                <Map 
                google={this.props.google} 
                zoom={15} 
                style={style} 
                initialCenter={{
                    lat:lat,
                    lng:lng
                }} 
                >
                    <Marker position = {pos} />
                    <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                </Map>
            </div>
        )


    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDg3IJWzp9l_bwRy83lkR2iH9CQGSFDMyA")
  })(HuellMap)
  