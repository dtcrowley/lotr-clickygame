import React from "react";
import "./Image.css";

const Image = props => (
  <div>
    <div className="container">
    <div>
      <img alt={props.name} src={props.image} 
      onClick={() => props.handleImageChange(props.id)} alt="clicky game" />
    </div>
    </div>
  </div>
        
);

export default Image;