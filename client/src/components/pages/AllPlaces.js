import React, { Component } from 'react';
import axios from 'axios';
import Place from "../Place";

export default class PlaceList extends Component {

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
    

    placeList() {
        return this.state.places.map(function(currentPlace, i){
            return <Place place={currentPlace}  key={i} />;
        })
    }

    render() {
        return (
            <div className="places">
                { this.placeList() }
            </div>
        )
    }
}