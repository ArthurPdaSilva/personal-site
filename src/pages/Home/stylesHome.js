import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Title = styled.section`
    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 180vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4em;
        text-align: center;
        font-weight: 300;
    }
`;

export const MainTitle = styled.section`
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    text-align: center;
    padding: calc(var(--patternPadding) - 1em);
    background-color: white;

    h1{
        display: flex;
        flex-direction: column;
        font-size: 2.5em;

        span:nth-child(1){
            color: var(--secondColor);
        }

        span:nth-child(2){
            color: var(--mainColor);
        }
    }

    
`;

export const Content = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`;

export const ArticleContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: 90vh;
    width: 60vw;
    padding: var(--patternPadding);
    border-radius: var(--patternBorderRadius);
    gap: var(--patternGaps);

    h1{
        font-size: 2.5em;
        text-align: center;
        color: var(--mainColor);
    }

    p{
        text-align: justify;
        text-indent: 1em;
        font-weight: bold;
    }

    @media(max-width: 600px){
        width: 85vw;
        p{
            font-size: 2em;
        }
    }
`;