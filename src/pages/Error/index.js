import React from 'react';
import { ErrorContainer, Conteudo } from './stylesError';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <ErrorContainer>
            <Conteudo>
                <h1>ERROR 404 ☹</h1>
                <p>
                    PÁGINA NÃO ENCONTRADA!
                </p>
                <Link to="/">VOLTAR PARA A HOME</Link>
            </Conteudo>
        </ErrorContainer>
    );
}