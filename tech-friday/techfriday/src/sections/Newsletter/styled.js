import styled from "styled-components";

export const Container = styled.section`
  min-height: 90vh;
  padding: 150px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50px 2fr 1fr 50px;
  grid-column-gap: 80px;

  @media(max-width: 1366px){
    grid-column-gap: 100px;
  }
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`
export const SectionOne = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 800px){
    grid-column: 1;
    padding: 0px 40px;
  }
`;

export const SectionTwo = styled.div`
  grid-column: 3;
  display: flex;
  & img{
    object-fit: contain;
    object-position: top center;
    height: 400px;
    margin-top: 50px;
  }
  @media(max-width: 800px){
    display: none;
  }
`;

export const Chamada = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 1.55rem;
  font-weight: 500;
  color: #fff;
  padding-bottom: 20px;
  line-height: 2.1rem;
  text-align: justify;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;

  & label{
    display: block;
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  & input[type=text], input[type=email]{
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    font-size: 1rem;

    &:focus{
      outline: none;
    }
  }

  & span{
    font-size: .8rem;
    padding-left: 10px;
    display: inline-block;
  }

  & button{
    display: block;
    background: #38C973;
    width: 200px;
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 14px;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 auto;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.14);
    transition: background .2s ease-in-out;
    &:hover{
      background: #000;
      cursor: pointer;
    }
    & img{
      display: block;
      height: 20px;
      width: auto;
      margin: 0 auto;
    }
  }
`;

export const Alert = styled.div`
  display: block;
  padding: 10px 20px;
  margin-top: 25px;
  background: #38C973;
  background: #F8F8F8;
  font-size: 1.1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
  text-align: center;
  & img{
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`