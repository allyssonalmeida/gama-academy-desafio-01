import styled from 'styled-components';

export const HomeContainer = styled.section`
  height: 100vh;
  & h1, h2{
    font-size: 8rem;
    font-family: 'Mistral', serif;
    text-align: center;
    color: #3CEC83;
    text-shadow: 3px 3px 5px rgba(255, 255, 255, .42);
  }
  & h2{
    font-family: 'Fredoka One', sans-serif;;
    color: #fff;
    margin-top: -60px;
    text-shadow: 3px 3px 5px #3CEC83;
  }

  & h3{
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    font-family: 'Rubik', sans-serif;
  }
  
  @media(max-width: 1366px){
    & h1, h2{
      font-size: 6rem;
    }
    & h2{
      margin-top: -40px;
    }
    & h3 {
      font-size: 2.25rem;
    }
  }
  
  @media(max-width: 800px){
    margin-top: 70px;
    & h1, h2{
      font-size: 5rem;
    }
    & h2{
      margin-top: -30px;
    }
    & h3 {
      font-size: 1.75rem;
    }
  }
`