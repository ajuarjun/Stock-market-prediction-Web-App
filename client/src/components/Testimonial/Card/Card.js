import React from "react";
import "./styles.css";

function Card(props){
  return(
    <div className="card">
        <img className="card_image" src={props.pic} alt=""/>
        <div>
        <p>"{props.message}"</p>
        <h4>-{props.name}</h4>
        </div>
    </div>
  )
}

export default Card;
