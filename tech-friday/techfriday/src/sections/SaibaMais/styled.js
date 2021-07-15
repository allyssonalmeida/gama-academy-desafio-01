import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  padding: 30px 0;
  font-family: 'Rubik', sans-serif;
  & h2{
    color: #fff;
    font-size: 4rem;
    text-align: center;
    text-shadow: 3px 3px 5px #3CEC83;
    & span{
      color: #3CEC83;
      font-family: 'Mistral', monospace;
      font-weight: normal;
      text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.42);
      font-size: 4.5rem;
    }
  }

  & h3{
    color: #fff;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 400;
    margin-top: 20px;
    padding: 10px 30px;
  }

  @media(max-width: 800px){
      & h2{
        font-size: 3rem;
    
        & span{
          font-size: 3.5rem;
        }
      }
    
      & h3{
        font-size: 1.3rem;
      }
  }
`;

export const Products = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  @media(max-width: 800px){
    flex-direction: column;
  }
`;

export const Product = styled.a`
  display: block;
  width: 400px;
  height: 300px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .3);
  transition: all .3s ease-in-out;

  & img{
    object-fit: contain;
    object-position: bottom center;
    height: 100%;
    width: 100%;
  }

  &:hover{
    transform: scale(1.1);
  }

  @media(max-width: 1366px){
    width: 350px;
    height: 262.5px;
  }
`