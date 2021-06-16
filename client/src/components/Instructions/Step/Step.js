import React from "react";
import "./styles.css";

function Step(props){
  return(
    <div className="step">
      <div>
        {props.num}
      </div>
      <p>{props.step}</p>
    </div>
  )
}

export default Step;
