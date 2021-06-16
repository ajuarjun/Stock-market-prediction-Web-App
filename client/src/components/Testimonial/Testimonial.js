import React from "react";
import Card from "./Card/Card";
import "./styles.css";

function Testimonial(){
  return(
    <div id="testimonial">
    <h2>Testimonials</h2>
      <Card
        name="Warren Buffet"
        message="I was skeptical at first but when I used it, I am glad that I came across this site !."
        pic="img/warren_buffet.jpg"
        />
    </div>
  )
}

export default Testimonial;
