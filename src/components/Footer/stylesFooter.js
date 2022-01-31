import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: var(--mainColor);
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
    padding: var(--standardValue);
    flex-direction: column;
    gap: .5em;
    padding: .5em;

    a{
        color: white;
        font-size: 1.2em;
        transition: all .4s ease;

        &:hover{
            color: #888888;
            text-decoration: underline;
        }
    }

    @media(max-width: 900px){
        font-size: 1.4em;
        a{
            font-size: 1.4em;
        }
    }
`;

