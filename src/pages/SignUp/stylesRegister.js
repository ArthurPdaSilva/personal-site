import styled from 'styled-components';

export const GroupGender = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    font-size: calc(var(--patternFont) - .2em);

`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: .2em;

    input{
        width: .8em;
        height: .8em;

        &:checked ~ label{
            color: #1C7ADF;
        }
    }

    label{
        color: #777;
        cursor: pointer;
    }
`;