import React from "react";

const VisitedButton = (props) => {
    
  const handleClick = (e) => {
    props.clickHandler(e, props.place_id);
  };

  return (
    <div className="visited-button">
      <button onClick={handleClick}>{props.children}</button>
    </div>
  );
}

export default VisitedButton;
