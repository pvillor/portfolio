import styled from "styled-components"


export const StyledListTechs = styled.ul`
    height: 450px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px){
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 800px){
        height: 250px;
        align-items: flex-start;
        width: 780px
    }
}
`

export const CardTech = styled.li`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-light);
    color: var(--black);
    border: var(--black) 5px solid;
    border-radius: 10px;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);

    h4{
        font-weight: 900;
    }

    @media (min-width: 600px){
        width: 300px;
    }

    @media (min-width: 800px){
        width: 230px
    }
`