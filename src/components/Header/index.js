import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AuthContext } from '../../contexts/auth';
import { HeaderContainer, Menu } from './stylesHeader';

export default function Header() {
    const { logout } = useContext(AuthContext);
    const [toggleVisible, setToggleVisible] = useState(false);

    return (
        <HeaderContainer>
            <h1>Personal Site</h1>
            <Menu toggle={toggleVisible}>    
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><a href="https://github.com/ArthurPdaSilva?tab=repositories" rel="noreferrer" target="_blank">Portfólio</a></li>
                    <li><button onClick={logout}>Sair</button></li>
                </ul>
            </Menu>
            <button onClick={() => setToggleVisible(state => !state)}><FiMenu size={30} color="white"/></button>
        </HeaderContainer> 
    );
}