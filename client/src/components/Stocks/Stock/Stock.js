import React from "react";
import { Link } from "react-router-dom";

function Stock(props){
  return (
    <tr className="stock">
      <td>{props.abb}</td>
      <td>{props.name}</td>
      <td><Link to={"/stocks/"+props.abb} className="btn  btn-success">Check stock</Link></td>
    </tr>
  )
}

export default Stock;
