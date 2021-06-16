import React, {useState} from "react";
import axios from "axios";

import Line from "./Details/Linechart";
import Detail from "./Details/Detail";
import "./styles.css";

function Graph(props){
  const [stock, setStock] = useState([]);
  const { id } = props.match.params;

  function round(val){
    return Math.round(val*100)/100;
  }
  // console.log(props.match.params.id);

  if(stock.length===0){
    axios.get(process.env.API_URL+id).then(response =>{
      // console.log(response);
      setStock(response["data"])
    }).catch(err =>{
      console.log(err);
    });
  }
  // console.log(stock);
  const flag = (typeof(stock["open"])==="undefined");
  // console.log(typeof(stock["high"])==="undefined");

  const obj = {
    "IBM":"IBM",
    "WIT":"Wipro",
    "TTM": "Tata"
  }

  return(
    <div className="graph">
      <h1>{ obj[id] }</h1>
      <div>
      <div>
      {
        !flag && <Detail day="Today" open={round(stock["open"][0])} high={round(stock["high"][0])} low={round(stock["low"][0])} close={round(stock["close"][0])}/>
      }
      {
        flag ?<div className="loader"></div>:<Detail day="Tomorrow" open={round(stock["tomorrow"]["open"])} high={round(stock["tomorrow"]["high"])} low={round(stock["tomorrow"]["low"])} close={round(stock["tomorrow"]["close"])} />
      }
      </div>
      {
        !flag && <Line data={stock}/>
      }
      </div>
    </div>
  )
}

export default Graph;
