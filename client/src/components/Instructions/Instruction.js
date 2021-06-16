import React from "react";
import Step from "./Step/Step";
import "./styles.css";

function Instruction(){
  return(
    <div className="instruct">
      <div>
      <h1>How To Use</h1>
      <Step num="1" step="Goto Stocks and check out the stocks of different companies."/>
      <Step num="2" step="Choose stock whose predictions you want to see."/>
      <Step num="3" step="There's no step 3. That's it."/>
      </div>
      <img src="img/mobstock.jpg" alt=""/>
    </div>
  )
}

export default Instruction;
