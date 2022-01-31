import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --mainColor: #011638;
        --secondColor: #1C7ADF;
        --thirdColor: #CED3DC;
        --fourthColor: #822E81;
        --fontMainColor: #141414;
        --patternFont: 1.4em;
        --patternBorderRadius: 1em;
        --patternPadding: 2em;
        --patternGaps: 2em;
        --shadow: .5em .5em .5em rgba(0, 0, 0, .5);
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a, button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
    
    textarea{
        font-size: 1em;
        resize: none;
        padding: var(--patternPadding);
        border: 1px solid black;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--fontMainColor);
        background-color: var(--thirdColor);
    }

    @media(max-width: 600px){
        input{
            font-size: calc(var(--patternFont) - .5em);
        }

        a{
            font-size: calc(var(--patternFont) + .1em);
        }
    }
`;