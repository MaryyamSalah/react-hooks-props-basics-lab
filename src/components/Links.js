import React from "react";


function Links(props) {
    return (
      <div id="about">
        <h3>Links</h3>
         {props.bio || props.bio ===" "? <p>{props.bio} </p>: null}
        <a href="{props.github}" alt="I made this" />
        
        <a href="{props.linkedin}" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
  
  export default Links;