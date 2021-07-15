import styled from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background: #2A2A2A;
  & a{
    text-decoration: none;
    color: #fff;
    padding: 5px 0;
    &:hover{
      color: #38C973;
    }
  }
  & div{
    display: flex;
    align-items: center;
    color: #fff;
    } 
  }

  @media(max-width: 800px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    & img{
      margin: 0 auto;
    }
    & div{
      flex-direction: column;
      text-align: center;
      font-size: .8rem;
      padding: 5px 10px;
    }

  } 
`;
export const Logo = styled.img`
  display: block;
  height: 60px;

  @media(max-width: 800px){
    height: 50px;
    width: 150px;
  }
`