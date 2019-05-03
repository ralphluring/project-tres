import React, { Component } from 'react';
import axios from 'axios';
import Place from "../Place";

export default class PlaceList extends Component {
    state = { places: [] }

    handleVisited = async(e, id) => {
        console.log(id)
        let value;
        this.setState({
            places: this.state.places.map( place => {
                if( place._id !== id ) {
                    return place
                }
                value = !place.place_visited
                return {
                    ...place,
                    place_visited: !place.place_visited
                }
            })
        })
        await axios.put(`http://localhost:5000/data/${id}`,{
            place_visited: value
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