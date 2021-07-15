import React from "react";
import {Container, Products, Product} from "./styled";
import Button from "../../components/Button";
import Gamer from "../../assets/gamer.png";
import Musica from "../../assets/musica.png";
import Esporte from "../../assets/esporte.png";

export default function SaibaMais(){
  return(
    <Container id="SaberMais">
      <h2>OFERTAS <span>Imperdíveis</span></h2>
      <h3>Temos produtos para todos os gostos</h3>
      <Products>
        <Product href="#Gamer">
          <img src={Gamer} alt="Mundo Gamer" />
        </Product>
        <Product  href="#Musica">
          <img src={Musica} alt="Universo Musical" />
        </Product>
        <Product href="#Esporte">
          <img src={Esporte} alt="Conexão Esporte" />
        </Product>
      </Products>
      <Button name="#Newsletter" cta="Receber Promoções"/>
    </Container>
  );
}