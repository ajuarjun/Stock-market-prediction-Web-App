import React from "react";
import Section from "./Section/Section";
import "./styles.css";

function Intro(){
  return(
    <div id="introduction">
      <img className="banner1" src="img/introstart.jpg" alt="pic"/>
      <img className="banner2" src="img/introend.jpg" alt="pic2"/>
      <Section />
    </div>
  )
}

export default Intro;
