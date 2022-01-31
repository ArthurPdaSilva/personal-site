import React from 'react';
import { Container } from '../SignIn/stylesLogin';
import { Title, MainTitle, Content, ArticleContainer } from './stylesHome';

export default function Home() {

    return (
        <Container>
            <Title>
                <h1>PÁGINA INICIAL</h1>
            </Title>
            <MainTitle>
                <h1>
                    <span>BEM VINDO AO</span>
                    <span>MEU SITE</span>
                </h1>
            </MainTitle>
            <Content>
                <ArticleContainer>
                    <h1>INTRODUÇÃO</h1>
                    <p>
                        Recriando o site que eu fiz no começo dos meus estudos, 
                        só que com react, styled components e firebase.
                    </p>
                    <p>
                        Quem sou eu? Me chamo Arthur, e tenho 5 anos como programador Web, com ênfase em HTML/CSS, Javascript, React JS. 
                        Formado na Escola Cidadã Integral Técnica Inácio Antonino, e cursando, atualmente, o
                        Instituto Federal de Educação, Ciência e Tecnologia da Paraíba – IFPB. 
                    </p>
                    <p>
                        Estagiei na Empresa de Comercialização de Eletrônicos. Lojas Icarlos, em Serra Branca - Paraíba,
                        dentre as inúmeras tarefas atribuidas a mim, no setor de gestão do E-commerce da loja,
                        eu tive esse contato com a web utilizando o framework Wix.
                    </p>
                    <p>Ensino Estadual de Ensino Fundamental Vasconcelos Brandão – (Concluído em 2018)</p>
                    <p>Escola Cidadã Integral Técnica Inácio Antonino - (Concluído em 2020)</p>
                    <p>Instituto Federal de Educação, Ciência e Tecnologia da Paraíba – IFPB – (Cursando)</p>
                </ArticleContainer>
            </Content>
        </Container>
    );
}