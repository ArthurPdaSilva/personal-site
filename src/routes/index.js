import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Contato from '../pages/Contato';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export default function Rotas(){
    return(
        <Routes>
            <Route path="/home" element={
                <PrivateRouter>
                    <Home/>
                </PrivateRouter>
            }/>
            <Route path="/contato" element={
                <PrivateRouter>
                    <Contato/>
                </PrivateRouter>
            }/>
            <Route path="/" element={
                <PublicRouter>
                    <SignIn/>
                </PublicRouter>
            }/>
            <Route path="/register" element={
                    <PublicRouter>
                        <SignUp/>
                    </PublicRouter>
                }/>
                
        </Routes>
    )
}