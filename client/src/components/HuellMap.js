import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class HuellMap extends Component {
    render() {
        const pos = {lat: 33.383728, lng: -117.374731}
        const pos2= {lat: 33.196500, lng: -117.380300}
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="Huell">Huell Howser stuff</h1>
                </header>


                <Map google={this.props.google} zoom={14}>

                <Marker position = {pos} />
                <Marker position = {pos2} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>
        )


    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDg3IJWzp9l_bwRy83lkR2iH9CQGSFDMyA")
  })(HuellMap)
  