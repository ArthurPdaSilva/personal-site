import React, { useState, useEffect, useCallback, useContext } from 'react';
import { ContainerContato, Area, Carrosel, Text } from './stylesContact';
import { ContainerSession, Form, ButtonSession } from '../SignIn/stylesLogin';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { AuthContext } from '../../contexts/auth';
import { db } from '../../services/firebaseConnection';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Contato() {
    const [imageSelected, setImageSelected] = useState(1);
    const [image, setImage] = useState(require('../../assets/1.jpg'));
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setImage(require(`../../assets/${imageSelected}.jpg`));
    }, [imageSelected])

    const handleNextRight = useCallback(() => {
        if(imageSelected === 5){
            setImageSelected(1);
        }else{
            setImageSelected(imageSelected + 1);
        }
    }, [imageSelected])

    const handleNextLeft = useCallback(() => {
        if(imageSelected === 1){
            setImageSelected(5);
        }else{
            setImageSelected(imageSelected - 1);
        }
    }, [imageSelected])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        async function submit(e){
            await setDoc(doc(db, `mensagem/${user.uid}`), {
                userUid: user.uid,
                name,
                phone,
                email,
                mensagem
            }).then(() => {
                toast.success('Mensagem enviada com sucesso!');
            }).catch((error) => {
                toast.error(error);
            }).finally(() => {
                setName('');
                setPhone('')
                setEmail('');
                setMensagem('');
            })
        }

        submit();
    }, [email, mensagem, name, phone, user.uid])

    return (
        <ContainerContato>
            <Area>
                <Carrosel image={image}>
                    <button onClick={handleNextLeft}>
                        <FiChevronsLeft size={30} color="white"/>
                    </button>
                    <Text>
                        <h1>Entrando em Contato com o Suporte</h1>
                        <h2>Preencha os campos abaixo</h2>
                    </Text>
                    <button onClick={handleNextRight}>
                        <FiChevronsRight size={30} color="white"/>
                    </button>
                </Carrosel>
                <ContainerSession>
                    <Form onSubmit={handleSubmit}>
                        <h1 id="title">Entrando em Contato</h1>
                        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} pattern="[A-Za-z\s]+$" required/>
                        <input type="text" placeholder="(XX) XXXXX-XXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                        <textarea placeholder="Escreva sua dúvida ou reclamação aqui" value={mensagem} onChange={(e) => setMensagem(e.target.value)} cols="20" rows="10"></textarea>
                        <ButtonSession type="submit">Enviar</ButtonSession>
                    </Form>
                </ContainerSession>
            </Area>
        </ContainerContato>
    );
}