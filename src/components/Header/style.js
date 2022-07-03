import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 69px;
  background-color: var(--black);
  display: flex;
  justify-content: space-around;
  align-items: center;

  div{
    width: 63%;
    display: flex;
    justify-content: space-between;
  }

  h3{
    color: var(--grey);
  }

  span{
    color: var(--white)
  }

  button{
    background-color: var(--black);
    border: var(--black);
    color: var(--white-dark);
  }

  button:hover{
    color: var(--grey);
  }
`;