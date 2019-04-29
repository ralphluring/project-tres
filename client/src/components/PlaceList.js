import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Place = props => (
    <tr>
        <td>{props.place.place_name}</td>
        <td>
        <iframe  src={props.place.place_img} frameborder="0" allowfullscreen></iframe>
        </td>
        <td>{props.place.series}</td>    
        <td>{props.place.episode}</td>  
        <td>{props.place.place_location}</td>  
        <td>{props.place.place_visited}</td>    
    </tr>
)


export default class PlaceList extends Component {
    constructor(props) {
        super(props);
        this.state = {places: []};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/places/')
            .then(response => {
                this.setState({ places: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    PlaceList() {
        return this.state.places.map(function(currentPlace, i){
            return <Place place={currentPlace} key={i} />;
        })
    }


    render() {
        return (
            <div>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Video</th>
                            <th>Series</th>
                            <th>Episode</th>
                            <th>Location(lat,long)</th>
                            <th>Visited</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.PlaceList() }
                    </tbody>
                </table>
            </div>
        )
    }
}