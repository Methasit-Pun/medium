import React from "react";
import '../styles/Button.css';
;

const Button = ({ onClick, label, type = "button", className = "" }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
