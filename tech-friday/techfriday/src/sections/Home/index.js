import React from "react";
import {HomeContainer} from "./styled";
import Contador from "../../components/Contador";
import Button from "../../components/Button";

function Home(){

  return(
    <HomeContainer>
        <h1>TECH</h1>
        <h2>FRIDAY</h2>
        <h3>As melhores ofertas em: </h3>
        <Contador timeTillDate="07 30 2021, 0:00" timeFormat="MM DD YYYY, h:mm" />
        <Button name="#SaberMais" cta="Quero Saber Mais" />
    </HomeContainer>
  );
}

export default Home;