import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --mainColor: #011638;
        --secondColor: #1C7ADF;
        --thirdColor: #CED3DC;
        --fourthColor: #822E81;
        --fontMainColor: #141414;
        --standardValue: 1.2em;
        --shadow: .5em .5em .5em rgba(0, 0, 0, .5);
    }

    *{
        margin: 0;
        padding: 0;
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

    h1{
        text-transform: uppercase;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        min-height: 100vh;
        color: var(--fontMainColor);
        background-color: var(--thirdColor);
    }
`;