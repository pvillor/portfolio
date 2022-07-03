import styled from "styled-components";

export const CardProject = styled.div`
    width: 70%;
    height: 230px;
    justify-content: space-around;
    background-color: var(--grey-light);
    color: var(--black);
    border: var(--black) 5px solid;
    border-radius: 10px;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        text-align: center;
    }
    img{
        width: 200px;
        height: 30px;
    }
        

    @media(min-width: 600px){
        width: 270px;
    }
`

export const ProjectContent = styled.div`
    height: 190px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        text-align: center;
    }

    div{
        height: 140px;
        justify-content: space-around;
    }
`

export const Techs = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    li{
        font-weight: 700;
    }
`

export const StyledFooterProjects = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button{
        background-color: var(--grey);
        color: var(--grey-light);
        padding: 2px 15px;
        border: var(--black) 2px;
        border-radius: 3px
    }

    button:hover{
        background-color: var(--grey-dark);
        color: var(--grey);
    }
`