import React from "react";
import Stock from "./Stock/Stock";
import "./styles.css";

function Stocks(){
  return(
    <table>
      <tr>
        <th>
          Ticker
        </th>
        <th>
          Company
        </th>
        <th>
        </th>
      </tr>
      <Stock abb="IBM" name="IBM"/>
      <Stock abb="WIT" name="Wipro" />
      <Stock abb="TTM" name="Tata" />
    </table>
  )
}

export default Stocks;
