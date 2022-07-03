import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--black);
  color: var(--white=dark);
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .team {
    text-decoration: none;
    font-weight: bold;
  }

  div{
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  a{
    color: var(--grey);
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
  }

  button{
    color: var(--grey);
    background-color: var(--black);
    border: 2px solid var(--black);
    font-size: 20px;
  }

  button:hover{
    color: var(--white);
  }

  p{
    color: var(--grey);
    font-size: 10px;
    text-align: center;
  }

  @media (min-width: 600px){
    div{
      width: 40%;
    }
  }
`;