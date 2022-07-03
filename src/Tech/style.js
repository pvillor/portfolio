import styled from "styled-components";

export const TechsList = styled.ul`
    margin-top: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px){
        flex-direction: column;
        min-height: 100px
    }
`