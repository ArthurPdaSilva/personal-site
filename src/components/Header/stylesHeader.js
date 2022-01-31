import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    background-color: var(--mainColor);
    width: 100%;
    color: white;
    box-sizing: border-box;
    font-size: var(--standardValue);
    position: fixed;
    border-bottom: 2px solid black;
    z-index: 2;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 3em;
        font-style: italic;
        font-weight: 300;
    }
    

    & > button{
        display: none;
        background: transparent;
        border: none;
    }

    @media (max-width: 900px){
        & > button{
            display: block;
        }
    }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;

    ul{
        display: flex;
        align-items: center;
        gap: 2em;
        flex-flow: row wrap;
        box-sizing: border-box;
    }

    a, button{
        color: white;
        font-size: 1.2em;
        transition: all .4s ease;

        &:hover{
            color: #888888;
            transform: scale(1.2);
            text-decoration: underline;
        }
    }

    a{
        display: block;
    }

    button{
        background-color: transparent;
        border: none;
    }

    @media (max-width: 900px){
        position: absolute;
        justify-content: space-around;
        align-items: center;
        top: 3.7em;
        transition: all .3s ease;  
        visibility: ${({toggle}) => toggle ? 'visible': 'hidden'};
        transform: ${({toggle}) => toggle ? 'translateX(0)': 'translateX(100%)'};;

        ul{
            position: relative;
            flex-direction: column;
            gap: .5em;
            min-width: 100vw;
            background-color: var(--mainColor);
            justify-content: center;
            align-items: center;    
        
        }
    }
`;