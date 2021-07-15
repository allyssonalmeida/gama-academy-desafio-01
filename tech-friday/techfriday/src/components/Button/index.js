import React from "react";
import { CallToAction } from "./styled";
export default function Button(props){
  return (<CallToAction href={props.name}>{props.cta}</CallToAction>)
}