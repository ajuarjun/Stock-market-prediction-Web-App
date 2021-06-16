import React from "react";
import "./styles.css";

function Detail(props){
  return(
    <div className="detail">
      <h2>{props.day}</h2>
      <div className="test">
      <div>Open:{props.open}</div>
      <div>High:{props.high}</div>
      <div>Low:{props.low}</div>
      <div>Close:{props.close}</div>
      </div>
    </div>
  )
}

export default Detail;
