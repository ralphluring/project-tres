import React, { Component } from 'react';
import axios from 'axios';
import Place from "../Place";

export default class PlaceList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {places: []};
    // }

    state = { places: [] }

    handleVisited = (e, id) => {
        
        console.log(id)
        this.setState({
            places: this.state.places.map( place => {
                if( place._id !== id )
                    return place

                return {
                    ...place,
                    place_visited: !place.place_visited
                }
            })
        })
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
        return this.state.places.map((currentPlace, i) => {
            return <Place place={currentPlace} key={currentPlace._id} clickHandler={this.handleVisited}/>;
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="places">
                { this.placeList() }
            </div>
        )
    }
}