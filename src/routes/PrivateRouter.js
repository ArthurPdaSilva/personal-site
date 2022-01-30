import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter(){
    const signed = false;

    return signed ? <Outlet/> : <Navigate to="/"/>
}