import React, { useState } from "react";
import { Container, SectionOne, SectionTwo, Chamada, Form, Alert } from "./styled";
import Discount from "../../assets/discount.png";
import Check from "../../assets/check.png";

export default function Newsletter(){
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [cadastro, setCadastro] = useState(false);
  const [botao, setBotao] = useState('Confirmar');
  function handleForm(e) {
    setBotao("Confirmando...");
    e.preventDefault();
    let dados = {
      nome: usuario,
      email: email,
    }
    localStorage.setItem('usuarios', JSON.stringify(dados));
    setTimeout(()=>{
      setUsuario('');
      setEmail('');
      setCadastro(true);
      setBotao('Confirmar');
    }, 1000);
    setTimeout(()=>{
      setCadastro(false);
    }, 6000);

  };

  return(
    <Container id="Newsletter">
      <SectionOne>
        <Chamada>
          Assine nossa newsletter e fique por dentro de todas as promoções da nossa Tech Friday 2021
        </Chamada>
        
        <Form onSubmit={handleForm}>
          <div>
            <label>Seu nome: </label>
            <input type="text" name="nome" id="nome" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Joaquim dos Santos" required/>
          </div>
          <div>
            <label>E-mail: </label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}placeholder="joaquim@email.com" required/>
          </div>
          <div>
            <span>Ao clicar em confirmar, aceito receber notificações de promoção via e-mail</span>
          </div>
          <div>
            <button type="submit"> {botao} </button>
          </div>
        </Form>
        {cadastro ? <Alert> <img src={Check} alt="Sucesso" /> Tudo certo! Você receberá todas as nossas novidades no seu e-mail.</Alert>: ''}
      </SectionOne>
      <SectionTwo>
        <img src={Discount} alt="Cadastre-se seu e-mail e receba nossas ofertas" />
      </SectionTwo>
    </Container>
  );
}