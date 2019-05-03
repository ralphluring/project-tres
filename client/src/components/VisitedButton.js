import React from "react";

const VisitedButton = (props) => {
    
  const handleClick = (e) => {
    props.clickHandler(e, props.place_id);
  };

  return (
    
      <button className="visited-button" onClick={handleClick}>{props.children}</button>
  
  );
}

export default VisitedButton;
