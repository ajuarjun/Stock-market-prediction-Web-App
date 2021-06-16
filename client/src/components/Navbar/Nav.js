import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navigation(){
  return(
  <nav className="mynav navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <p className="navbar-brand">
          <span>
            <img id="logo" src="img/logo.png" alt="logo"/><strong className="head">STONKS</strong>
          </span>
        </p>
      </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="" onClick={()=>{window.location.replace("/#introduction")}}>HOME</Link></li>
          <li><Link to="" onClick={()=>window.location.replace("/#instruct")}>HOW TO USE</Link></li>
          <li><Link to="" onClick={()=>window.location.replace("/#testimonial")}>TESTIMONIAL</Link></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><Link to="/stocks" >STOCKS</Link></li>
        </ul>
    </div>
  </nav>

  )
}

export default Navigation;
