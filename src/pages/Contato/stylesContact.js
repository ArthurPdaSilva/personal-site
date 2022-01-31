import styled from 'styled-components';

export const ContainerContato = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3em;
    min-height: 100vh;
`;

export const Area = styled.section`
    display: flex;
    justify-content: center;
    box-shadow: var(--shadow);

    div{
        border-radius: 0;
    }

    input{
        font-size: 1em;
    }
`;

export const Carrosel = styled.div`
    display: flex;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 80vh;
    justify-content:space-around;
    align-items: center;
    transition: background-image .4s ease-in-out;
    border: .5em solid white;

    & > button{
        border: none;
        background-color: transparent;
        margin: 1em;
    }
`;

export const Text = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1, h2{
        text-shadow: var(--shadow);
        font-style: italic;
        text-align: center;
    }
`;