// import React, {Component} from "react";
import './Button.css';

const Button = ({content, handleButton, className}) => {
 
    return (
      <button className={className} onClick={() => handleButton(content)}>{content} </button>
    )
}

export default Button