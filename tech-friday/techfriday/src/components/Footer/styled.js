import styled from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background: #2A2A2A;

  & nav{
    display: flex;
    flex-direction: row;

    & ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & li{
        display: block;
        margin: 0 10px;

        & a img{
          width: 30px;
        }
      }
    } 
  }

  @media(max-width: 800px){
    width: 100%;
    padding: 10px;
    & nav{
      & ul{
      }
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