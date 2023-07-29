import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* conditionally renders a <p> element containing props.bio if props.bio is truthy, if falsey, nothing is rendered */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* passes the links from About to Links */}
      <Links 
      github={props.github}
      linkedin={props.linkedin}      
      />
    </div>
  );
}

export default About;
