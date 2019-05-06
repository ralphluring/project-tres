import React from 'react';
import Visited from "./Visited";
import VisitedButton from "./VisitedButton";
import HuellMap from './HuellMap';

function Place (props) {
    console.log("Place component: isVisited: ", props.isVisited);
    return (
    <div className="place-container">
        <div className="place-info-container">
            <div className="place-info">
                <div className="title-container">
                    <h1>{props.place.place_name}</h1>
                    <Visited visited={props.isVisited}/>
                </div>
                <div className="place-detail">
                        <p>Series: {props.place.series ? props.place.series :"California's Gold"}</p>
                        <p>Episode # {props.place.episode}</p>
                </div>
                <div className="place-video">
                    <iframe title="video" src={props.place.place_img} frameBorder="0" allowFullScreen width="70%" height="280px"></iframe>
                </div>
                <div className="place-summary">
                    <p>{props.place.summary}</p>
                </div>
            </div>
        
            <div className="visited">
              
               <VisitedButton props={props.place} place_id={props.place._id} clickHandler={props.clickHandler}>{"Mark Visited"}</VisitedButton>
            </div>


          
        </div>
        <HuellMap location={props.place.place_location}/>
        
    </div>
    )
}

export default Place;