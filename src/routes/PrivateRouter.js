import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivateRouter(){
    const { signed } = useContext(AuthContext);
    
    return (
        <div>
            <Header/>
            {signed ? <Outlet/> : <Navigate to="/"/>}
            <Footer/>
        </div>
        
    )
}