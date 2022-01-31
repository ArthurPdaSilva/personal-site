import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function PublicRouter(){
    const { signed } = useContext(AuthContext); 
    return !signed ? <Outlet/> : <Navigate to="/home"/>
}