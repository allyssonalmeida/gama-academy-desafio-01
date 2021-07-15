import styled from "styled-components";

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media(max-width: 800px){
    width: 90vw;
    gap: 5px;
  }
`;

export const CountItem = styled.div`
  display: block;
  background: #000;
  border-radius: 5px;
  min-width: 120px;
  padding: 10px;
  font-family: 'Rubik', sans-serif;
  font-size: 5rem;
  color: #fff;
  text-align: center;
  & span{
    display: block;
    font-size: 1rem;
  }

  @media(max-width: 1366px){
    font-size: 4rem;
  }

  @media(max-width: 800px){
    font-size: 2rem;
    min-width: initial;
    width: 80px;
    & span{
      font-size: .75rem;
    }
  }
}
`