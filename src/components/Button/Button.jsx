import React from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  const buttonColor = props.color === "blue" ? style.blueButton : style.whiteButton; // Set buttonColor based on props.color
  return (
    // <button className={buttonColor} type="submit">
    //   <Link to={props.linksto}>{props.name}</Link>
    // </button>
    <Link to={props.linksto} className={buttonColor}>
    <button type="button">
    {typeof props.name === "string" ? props.name : "Add Employee"}
    </button>
  </Link>
  );
}


