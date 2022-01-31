import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivateRouter({children}){
    const { signed } = useContext(AuthContext);
    return (
        <div>
            <Header/>
                {signed ? children : <Navigate to="/"/>}
            <Footer/>
        </div>
        
    )
}