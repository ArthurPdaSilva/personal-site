import React, { useState, useCallback } from 'react';
import { Container, ContainerSession, Form, ButtonSession } from './stylesLogin';
import { Link } from 'react-router-dom';
import PasswordContainer from '../../components/PasswordContainer';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        
    }, [])

    return (
        <Container>
            <ContainerSession>
                <Form onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                    <PasswordContainer password={password} setPassword={setPassword}/>
                    <ButtonSession type="submit">LOGAR</ButtonSession>
                </Form>
                <Link to="/register">Não possui uma conta?</Link>
            </ContainerSession>
        </Container>
    );
}