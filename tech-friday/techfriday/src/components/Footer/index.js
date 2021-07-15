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
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/allysson-fernando-guedes-de-almeida-515437bb/" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/allissuf" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Siga nossa loja no Instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/allyssonalmeida" target="_blank" rel="noreferrer">
              <img src={Github} alt="Fale Conosco no Whatsapp" />
            </a>
          </li>
        </ul>
      </nav>
    </FooterComponent>
  );
}