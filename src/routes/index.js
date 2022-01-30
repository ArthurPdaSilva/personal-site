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
            <Route element={<PrivateRouter/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Route>
            <Route element={<PublicRouter/>}>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/register" element={<SignUp/>}/>
            </Route>
        </Routes>
    )
}