import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Conteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 4em;
    }

    p{
        font-size: 2.5em;
    }

    a{
        color: black;
    }
`;