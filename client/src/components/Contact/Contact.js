import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

function Contact(){
  const {pathname} = useLocation();
  const flag = (pathname.split("/",2)[1]==="stocks")&&(pathname.split("/").length===2);
  const flag1 = (pathname.split("/").length===3);
  console.log(pathname.split("/").length);
  return(
    <footer className={`contact ${flag?'foot':''} ${flag1?'pulldown':''}`} id="contact">
      <h3><b>Contact Us</b></h3>
      <a href="https://www.facebook.com/" className="icon fab fa-facebook fa-2x"></a>
      <a href="https://in.linkedin.com/" className="icon fab fa-linkedin fa-2x"></a>
      <a href="https://www.instagram.com/" className="icon fab fa-instagram fa-2x"></a>
    </footer>
  )
}

export default Contact;
