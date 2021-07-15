import React from "react";
import { FooterComponent, Logo } from "./styled";
import Brand from "../../assets/logo.png";

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