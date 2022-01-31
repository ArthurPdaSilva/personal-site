import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordContainer from '../../components/PasswordContainer';
import { AuthContext } from '../../contexts/auth';
import { ButtonSession, Container, ContainerSession, Form } from '../SignIn/stylesLogin';
import { GroupGender, RadioGroup } from './stylesRegister';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Masculino');
    const dados = ["Masculino", 'Feminino', 'Outro'];

    const { signUp } = useContext(AuthContext); 

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        signUp(name, email, password, gender);
    }, [email, gender, name, password, signUp])

    return (
        <Container>
            <ContainerSession>
                <Form onSubmit={handleSubmit}>
                    <h1>CADASTRAR</h1>
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} pattern="[A-Za-z\s]+$" required/>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                    <PasswordContainer password={password} setPassword={setPassword}/>
                    {gender !== "Masculino" && gender !== "Feminino"  && (
                        <input type="text" placeholder="Qual é o seu gênero?" onChange={(e) => setGender(e.target.value)} required/>
                    )}
                    <GroupGender>
                        {dados.map(value => (
                            <RadioGroup key={value}>
                                <input type='radio' name='group' id={value} value={value} onChange={(e) => setGender(e.target.value)}/>
                                <label htmlFor={value}>{value}</label>
                            </RadioGroup>
                        ))}
                    </GroupGender>
                    <ButtonSession type="submit">CADASTRAR</ButtonSession>
                </Form>
                <Link to="/">Já possui uma conta?</Link>
            </ContainerSession>
        </Container>
    );
}