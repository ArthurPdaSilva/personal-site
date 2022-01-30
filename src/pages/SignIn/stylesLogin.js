import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

`;

export const ContainerSession = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--patternGaps);
    padding: var(--patternPadding);
    box-shadow: var(--shadow);
    border-radius: var(--patternBorderRadius);
    background-color: white;
    align-items: center;
    justify-content: center;

    a{
        color: var(--secondColor);
    }

    @media(max-width: 600px){
        width: 100%;
        border-radius: 0;
        box-shadow: 0 0 0 0;

        h1{
            text-align: center;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--patternGaps);
    box-sizing: border-box;

    input{
        border: none;
        padding: .5em;
        border-bottom: 1px solid #777;
        font-size: var(--patternFont);

        &::placeholder{
            color: #777;
        }

        &:focus, &:valid{
            border-bottom: 1px solid #1C7ADF;
        }
    }

`;

export const ButtonSession = styled.button`
    background-color: var(--secondColor);
    border: none;
    color: white;
    border-radius: calc(var(--patternBorderRadius) - .5em);
    padding: .5em;
    font-size: var(--patternFont);

`;