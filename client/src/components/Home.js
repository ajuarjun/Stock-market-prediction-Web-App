import React from "react";
import Intro from "./Introduction/Intro";
import Instruction from "./Instructions/Instruction";
import Testimonial from "./Testimonial/Testimonial";

function Home(){
  return(
    <div>
      <Intro />
      <Instruction />
      <Testimonial />
    </div>
  )
}

export default Home;
