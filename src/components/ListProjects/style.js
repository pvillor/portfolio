import styled from "styled-components";

export const StyledListProjects = styled.ul`
    height: 1000px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px){
        flex-direction: row;
        flex-wrap: wrap;
    }
}

    @media (min-width: 600px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 600px;
        height: 500px;
    }
`