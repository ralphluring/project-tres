import React, { Component } from 'react';
import visited from "../visited.png";
import notVisited from "../not-visited.png";

function Visited (props) {
    const hasVisited = props.visited;
    if (hasVisited) {
      return(
        <div className="visited-true"> 
            <img src={visited} height="40px" width="40px" alt="you have visited"/> 
            <p>You have Been to this location!</p>
        </div>
      
      )
    }
    return (
        <div className="visited-false">
            <img src={notVisited} height="40px" width="40px"  alt="you have not visited"/>
            <p>You have Not Been to this location!</p>
        </div>
    )
  }

  export default Visited;