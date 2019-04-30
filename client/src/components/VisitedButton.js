import React from 'react';

function VisitedButton (props) {
        return (
            <div className="visited-button">
                <button>I Been there!</button>
                <p>{props.props._id}</p>
            </div>
        )
    }


export default VisitedButton;