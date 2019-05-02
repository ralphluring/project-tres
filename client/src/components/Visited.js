import React, { Component } from 'react';
import visited from "../visited.png";
import notVisited from "../not-visited.png";

function Visited (props) {
    const hasVisited = props.visited;
    if (hasVisited) {
      return(
        <div className="visited-true"> 
            <img src={visited} height="40px" width="40px" alt="you have visited"/> 
           
        </div>
      
      )
    }
    return (
        <div className="visited-false">
            <img src={notVisited} height="40px" width="40px"  alt="you have not visited"/>
         
        </div>
    )
  }

  export default Visited;