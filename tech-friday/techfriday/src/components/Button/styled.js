import styled from "styled-components";

export const CallToAction = styled.a`
  display: block;
  padding: 15px 20px;
  border-radius: 14px;
  background: #38C973;
  font-size: 1.5rem;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-decoration: none;
  max-width: 350px;
  margin: 10px auto;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .16);
  transition: background .3s ease-in-out;

  &:hover{
    background: #000;
  }

  @media(max-width: 800px){
    padding: 10px 15px;
    border-radius: 14px;
    font-size: 1.2rem;
    max-width: 220px;
  }
`;