import React from 'react';
import Visited from "./Visited";
import VisitedButton from "./VisitedButton";
import HuellMap from './HuellMap';

function Place (props) {
    return (
    <div className="place-container">
        <div className="place-info-container">
            <div className="place-info">
                <h1>{props.place.place_name}</h1>
                <div className="place-video">
                    <iframe title="video" src={props.place.place_img} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="place-summary">
                    <p>{props.place.summary}</p>
                </div>
                <div className="place-detail">
                    <p>Series: {props.place.series}</p>
                    <p>Episode # : {props.place.episode}</p>
                </div>
            </div>
        
            <div className="visited">
                <Visited visited={props.place.place_visited}/>
                <VisitedButton props={props.place} onClick={props.handleOnClick}/>
            </div>

            <div className="place-more-info">
                <button>See On Map</button>
                <button>Leave a comment</button>
            </div>
        </div>

        <div className="place-map">
            <HuellMap location={props.place.place_location}/>
        </div>
    </div>
    )
}

export default Place;