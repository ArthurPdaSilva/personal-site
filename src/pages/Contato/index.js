import React, { useState, useEffect, useCallback } from 'react';
import { ContainerContato, Area, Carrosel, Text } from './stylesContact';
import { ContainerSession, Form, ButtonSession } from '../SignIn/stylesLogin';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export default function Contato() {
    const [imageSelected, setImageSelected] = useState(1);
    const [image, setImage] = useState(require('../../assets/1.jpg'));

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
                    <Form>
                        <h1 id="title">Entrando em Contato</h1>
                        <input type="text" placeholder="Nome" name="name" pattern="[A-Za-z\s]+$" id="name" required/>
                        <input type="text" placeholder="(XX) XXXXX-XXXX" name="phone" pattern="[A-Za-z\s]+$" id="phone" required/>
                        <input type="email" placeholder="E-mail" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                        <textarea name="campo" placeholder="Escreva sua dúvida ou reclamação aqui" cols="20" rows="10"></textarea>
                        <ButtonSession type="submit">Enviar</ButtonSession>
                    </Form>
                </ContainerSession>
            </Area>
        </ContainerContato>
    );
}