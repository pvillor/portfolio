import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: var(--grey-dark);
    color: var(--grey-light);

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        text-align: center;
    }
    img{
        width: 200px;
    height: 200px;
    border: 2px var(--black) solid;
    border-radius: 50%
    }

    @media (min-width: 600px){
        flex-direction: row;
    }

    @media (min-width: 680px){
        justify-content: space-around;
    }

    @media (min-width: 900px){
        width: 70%
    }
`

export const Ore = styled.img`
    width: 200px;
    height: 200px;
    border: 2px var(--black) solid;
    border-radius: 50%
`

export const Topics = styled.h3`
    margin: 20px 0;
    color: var(--grey);
`

export const TextsAboutMe = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 90%;
    p{
        text-align: center;
        margin-top: 20px;
    }

    @media (min-width: 680px){
        width: 60%;
    }
`