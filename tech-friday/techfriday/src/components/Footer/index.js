import React from "react";
import { FooterComponent, Logo } from "./styled";
import Brand from "../../assets/logo.png";
import Linkedin from "../../assets/ln.svg";
import Instagram from "../../assets/ig.svg";
import Github from "../../assets/gh.svg";

export default function Footer(){
  return(
    <FooterComponent>
      <Logo src={Brand} alt="TechStore Logo" />
      <div>
        &copy; Alguns direitos reservados
      </div>
    </FooterComponent>
  );
}